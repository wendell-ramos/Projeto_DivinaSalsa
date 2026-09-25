"""Gera variantes WebP estáticas sem modificar as fotos de origem.

Requer Pillow. Execute na raiz: python scripts/optimize_images.py
"""
import json
import re
import shutil
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/images/optimized"
OUTPUT = SOURCE / "responsive"
WIDTHS = (480, 800, 1200, 1920, 2560)


def main():
    names = set()
    for path in (ROOT / "src").rglob("*.tsx"):
        source = path.read_text(encoding="utf-8")
        names.update(re.findall(r'/images/optimized/([\w-]+)\.webp', source))
        names.update(re.findall(r'(?:file|image): "([\w-]+)"', source))
    content = (ROOT / "src/content/restaurant.ts").read_text(encoding="utf-8")
    names.update(re.findall(r'/images/optimized/([\w-]+)\.webp', content))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    report = []
    for name in sorted(names):
        original = SOURCE / f"{name}.webp"
        with Image.open(original) as opened:
            image = ImageOps.exif_transpose(opened).convert("RGB")
            variants = []
            sizes = {}
            for width in sorted(set(min(w, image.width) for w in WIDTHS)):
                height = round(image.height * width / image.width)
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                target = OUTPUT / f"{name}-{width}.webp"
                resized.save(target, "WEBP", quality=85, method=6)
                if width == image.width and target.stat().st_size >= original.stat().st_size:
                    shutil.copyfile(original, target)
                variants.append(width)
                sizes[width] = target.stat().st_size
            manifest[name] = variants
            report.append({"image": name, "originalBytes": original.stat().st_size,
                           "variantsBytes": sizes})
    (ROOT / "src/lib/image-variants.json").write_text(
        json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
