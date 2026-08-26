import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { menuCategories, menuSections } from "@/content/menu";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Conheça o cardápio completo do Divina Salsa Restaurante.",
};

export default function CardapioPage() {
  return (
    <main className="menu-page">
      <SiteHeader />

      <section className="menu-page-hero text-white">
        <Image
          src={`${basePath}/images/camarao-tropical.jpg`}
          alt="Camarão Tropical do Divina Salsa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="menu-page-hero__overlay" />
        <div className="shell relative z-10 flex min-h-[440px] items-end pb-12 pt-32 md:pb-14">
          <div className="max-w-4xl">
            <p className="eyebrow text-[var(--olive-100)]">Divina Salsa Restaurante</p>
            <h1 className="display-title mt-6">Nosso cardápio.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75">
              Da primeira entrada ao último brinde, sabores preparados para todos os momentos.
            </p>
          </div>
        </div>
      </section>

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

      <SiteFooter />
    </main>
  );
}
