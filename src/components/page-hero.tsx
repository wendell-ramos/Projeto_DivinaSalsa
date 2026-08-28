import Image from "next/image";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="inner-page-hero text-white">
      <Image
        src={`${basePath}${image}`}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${imagePosition}`}
      />
      <div className="inner-page-hero__overlay" />
      <div className="shell relative z-10 flex min-h-[420px] items-end pb-12 pt-32 md:pb-14">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--olive-100)]">{eyebrow}</p>
          <h1 className="display-title mt-5">{title}</h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
