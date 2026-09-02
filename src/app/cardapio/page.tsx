import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { menuCategories, menuSections } from "@/content/menu";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Conheça o cardápio completo do Divina Salsa Restaurante.",
};

export default function CardapioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Divina Salsa Restaurante"
        title="Nosso cardápio."
        description="Da primeira entrada ao último brinde, sabores preparados para todos os momentos."
        image="/images/camarao-tropical.jpg"
        imageAlt="Camarão Tropical do Divina Salsa"
      />

      <section id="cardapio-completo" className="section-pad bg-[var(--paper)]">
        <div className="shell">
          <div className="menu-intro">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--forest)]">Cardápio completo</p>
              <h2 className="section-title mt-5">Escolha o seu momento à mesa.</h2>
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
                  <h3 id={`menu-section-${sectionIndex}`}>{section.title}</h3>
                </div>

                <div className="menu-category-grid">
                  {section.categories.map((category) => (
                    <article className="menu-category" id={category.id} key={category.id}>
                      <header>
                        <h4>{category.title}</h4>
                        {category.note && <p>{category.note}</p>}
                      </header>

                      <div className="menu-category__items">
                        {category.items.map((item) => (
                          <div className="menu-item" key={`${category.id}-${item.name}`}>
                            <div className="menu-item__line">
                              <h5>{item.name}</h5>
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

    </main>
  );
}
