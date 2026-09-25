import type { Metadata } from "next";
import Image from "next/image";
import { menuCategories, menuSections } from "@/content/menu";
import { menuHighlights } from "@/content/restaurant";
import { createPageMetadata } from "@/lib/site";
import styles from "./menu.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = createPageMetadata({
  title: "Cardápio",
  description:
    "Conheça o cardápio do Divina Salsa Restaurante: entradas, saladas, carnes, pescados, massas, risotos, opções infantis, sobremesas e bebidas.",
  path: "/cardapio/",
  image: "/images/optimized/risoto-camarao.webp",
  imageAlt: "Risoto de camarão servido pelo Divina Salsa Restaurante",
});

export default function CardapioPage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <div className={styles.banner}>
        <Image
          src={`${basePath}/images/optimized/risoto-camarao.webp`}
          alt="Risoto de camarão do Divina Salsa servido à mesa"
          fill preload sizes="100vw" className={styles.bannerPhoto}
        />
      </div>

      <section id="cardapio-completo" className={styles.menuContent}>
        <div className="shell">
          <div className={styles.intro}>
            <div className="max-w-2xl">
              <h1 className={styles.title}>Nosso cardápio</h1>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-7 text-[var(--muted)]">
                Receitas contemporâneas, ingredientes selecionados e a tradição do sabor em opções
                para compartilhar, saborear sozinho ou aproveitar no almoço executivo.
              </p>
              <p className="menu-intro__detail">
                Valores e informações conforme o cardápio vigente fornecido pelo restaurante.
              </p>
            </div>
          </div>

          <nav className="menu-index" aria-label="Categorias do cardápio">
            {menuCategories.map((category) => (
              <a href={`#${category.id}`} key={category.id}>
                {category.navLabel ?? category.title}
              </a>
            ))}
          </nav>

          <div className="menu-sections">
            {menuSections.map((section, sectionIndex) => (
              <section className="menu-section" key={section.title} aria-labelledby={`menu-section-${sectionIndex}`}>
                <div className="menu-section__heading">
                  <span>0{sectionIndex + 1}</span>
                  <h2 id={`menu-section-${sectionIndex}`} className={styles.sectionTitle}>{section.title}</h2>
                </div>

                <div className="menu-category-grid">
                  {section.categories.map((category) => (
                    <article className="menu-category" id={category.id} key={category.id}>
                      <header>
                        <h3>{category.title}</h3>
                        {category.note && <p>{category.note}</p>}
                      </header>

                      <div className="menu-category__items">
                        {category.items.map((item) => (
                          <div className="menu-item" key={`${category.id}-${item.name}`}>
                            <div className="menu-item__line">
                              <h4>{item.name}</h4>
                              <span aria-hidden="true" />
                              <strong>{item.price}</strong>
                            </div>
                            {item.description && <p>{item.description}</p>}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.suggestions} aria-labelledby="sugestoes-titulo">
        <div className="shell">
          <p className="eyebrow text-[var(--sage-dark)]">Destaques da casa</p>
          <h2 id="sugestoes-titulo" className={styles.suggestionsTitle}>Sugestões do chef</h2>
          <div className={styles.cards}>
            {menuHighlights.map(item => (
              <article className={styles.card} key={item.name}>
                <div className={styles.photo}>
                  <Image src={`${basePath}${item.image}`} alt={item.name} fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1120px) 33vw, 340px" />
                </div>
                <div className={styles.cardCopy}>
                  <p className={styles.category}>{item.category}</p>
                  <h3>{item.name}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
