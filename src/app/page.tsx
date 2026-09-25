import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DeliveryCard, ReservationCard } from "@/components/delivery-card";
import { Icon } from "@/components/icon";
import { menuHighlights, restaurant } from "@/content/restaurant";
import { absoluteUrl, createPageMetadata } from "@/lib/site";
import styles from "./home.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = createPageMetadata({
  title: "Divina Salsa Restaurante | Pedra Branca",
  description:
    "Almoço, jantar e bons momentos no Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça. Conheça o cardápio, o espaço e os horários.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.description,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/optimized/camarao-tropical.webp"),
    menu: absoluteUrl("/cardapio/"),
    servesCuisine: ["Brasileira", "Frutos do mar", "Massas", "Contemporânea"],
    telephone: "+55 48 3283-0019",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua da Universidade, Av. Pedra Branca, 346",
      addressLocality: "Palhoça",
      addressRegion: "SC",
      postalCode: "88137-074",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.6226382,
      longitude: -48.6779509,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday"],
        opens: "11:30",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:30",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "18:00",
        closes: "20:30",
      },
    ],
    sameAs: [restaurant.instagram, restaurant.ifood],
  };

  return (
    <main id="conteudo" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section id="inicio" className={styles.hero} aria-label="Divina Salsa Restaurante">
        <Image
          src={`${basePath}/images/optimized/camarao-tropical.webp`}
          alt="Camarão Tropical servido pelo Divina Salsa"
          fill
          priority
          sizes="(max-width: 767px) 660px, 100vw"
          className="object-cover object-center"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className="hero__botanical" aria-hidden="true" />
        <div className={`shell ${styles.heroContent}`}>
          <div className={styles.brandGroup}>
              <h1>
                <Image
                  src={`${basePath}/images/logo-divina-salsa.png`}
                  unoptimized
                  alt="Divina Salsa Restaurante"
                  width={1239}
                  height={689}
                  className={styles.logo}
                  preload
                />
              </h1>
              <div className={styles.actions}>
                <Link className="button button--cream" href="/cardapio">
                  Conheça o cardápio
                  <Icon name="arrow-right" size={17} />
                </Link>
                <a
                  className="button button--ghost"
                  href={restaurant.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar
                  <Icon name="map-pin" size={17} />
                </a>
              </div>
          </div>
          <aside className={styles.hours} aria-label="Horários do restaurante">
            <span className={styles.hoursIcon} aria-hidden="true">
              <Icon name="clock" size={19} />
            </span>
            <p className={styles.hoursTitle}>Hoje no Divina</p>
            <p className={styles.hoursDescription}>
              Almoço, jantar e bons momentos no coração da Pedra Branca.
            </p>
            <a className={styles.hoursLink} href="#visite">
              Ver horários <Icon name="arrow-right" size={15} />
            </a>
          </aside>
        </div>
      </section>

      <section id="a-casa" className={styles.about} aria-labelledby="sobre-titulo">
        <div className={`shell ${styles.aboutLayout}`}>
          <div className={styles.copy}>
            <p className="eyebrow text-[var(--forest)]">Sobre o Divina Salsa</p>
            <h2 id="sobre-titulo" className={styles.aboutTitle}>
              Gastronomia especializada em frutos do mar, na Pedra Branca.
            </h2>
            <p className={styles.paragraph}>
              No coração do Passeio Pedra Branca, o Divina se consolida há 10 anos como um
              espaço acolhedor para você ter a melhor experiência no seu almoço e jantar.
            </p>
            <p className={styles.paragraph}>
              Com ingredientes selecionados, oferecemos pratos contemporâneos, com carnes,
              massas, risotos e, claro, a nossa especialidade: os frutos do mar.
            </p>
              <Link className={`text-link ${styles.aboutLink}`} href="/cardapio">
                Explorar sabores <Icon name="arrow-right" size={16} />
              </Link>
          </div>
          <Image
            src={`${basePath}/images/optimized/bacalhau-gomes.webp`}
            alt="Bacalhau Gomes de Sá do Divina Salsa, com ovos, azeitonas e pimentões"
            width={1440}
            height={960}
            sizes="(max-width: 767px) 100vw, 50vw"
            className={styles.aboutPhoto}
          />
        </div>
      </section>

      <section id="cardapio" className={`section-pad bg-[var(--paper)] ${styles.menuSection}`}>
        <div className="shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--forest)]">Destaques da casa</p>
              <h2 className={styles.blockTitle}>Confira os mais pedidos.</h2>
            </div>
          </div>

          <div className={styles.highlights}>
            {menuHighlights.map((item, index) => (
              <article className={`menu-card group ${styles.highlightCard}`} key={item.name}>
                <div className={styles.highlightPhoto}>
                  <Image
                    src={`${basePath}${item.image}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="menu-card__number">0{index + 1}</span>
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] text-[var(--sage-dark)] uppercase">
                    {item.category}
                  </p>
                  <h3 className="serif mt-3 text-[1.7rem] text-[var(--ink)]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.menuAction}>
            <Link className="button button--dark" href="/cardapio">
              Ver cardápio completo
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="experiencias" className={styles.experience} aria-labelledby="experiencia-titulo">
        <div className={`shell ${styles.experienceLayout}`}>
          <div className={styles.experiencePhoto}>
            <Image
              src={`${basePath}/images/optimized/ambiente-noturno-home.webp`}
              alt="Ambiente interno do Divina Salsa à noite, com mesas preparadas e iluminação acolhedora"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className={styles.experienceCopy}>
            <h2 id="experiencia-titulo">
              Do dia a dia aos momentos mais especiais, o Divina é o lugar certo para você.
            </h2>
          </div>
        </div>
      </section>

      <section id="visite" className="section-pad bg-[var(--cream)]">
        <div className="shell">
          <div className="grid overflow-hidden border border-black/10 bg-[var(--paper)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="visit-copy p-7 sm:p-10 lg:p-14">
              <h2 className={styles.visitTitle}>Sua mesa está esperando.</h2>

              <div className="visit-details mt-10 grid gap-9 sm:grid-cols-2">
                <div>
                  <Icon name="clock" className="text-[var(--sage-dark)]" size={22} />
                  <h3 className="mt-4 text-xs font-bold tracking-[0.18em] uppercase">Horários</h3>
                  <div className="mt-4 space-y-4">
                    {restaurant.hours.map((item) => (
                      <p className="text-sm leading-6 text-[var(--muted)]" key={item.days}>
                        <strong className="block text-[var(--ink)]">{item.days}</strong>
                        {item.time}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <Icon name="map-pin" className="text-[var(--sage-dark)]" size={22} />
                  <h3 className="mt-4 text-xs font-bold tracking-[0.18em] uppercase">Endereço</h3>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">
                    {restaurant.address}
                  </p>
                  <a
                    className="map-link mt-5"
                    href={restaurant.maps}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir no mapa <Icon name="external" size={15} />
                  </a>
                </div>
              </div>

              <div className="channel-actions mt-10">
                <ReservationCard />
                <DeliveryCard />
              </div>
            </div>

            <div className="visit-photo relative min-h-[340px] sm:min-h-[400px]">
              <Image
                src={`${basePath}/images/optimized/fachada-diurna-home.webp`}
                alt="Fachada do Divina Salsa Restaurante no Passeio Pedra Branca"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="visit-caption absolute inset-x-6 bottom-6 bg-[var(--cream)] p-6 sm:inset-x-8 sm:bottom-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={`${basePath}/images/logo-divina-salsa.png`}
                    unoptimized
                    alt="Marca oficial Divina Salsa Restaurante"
                    width={1239}
                    height={689}
                    className="visit-brandmark"
                  />
                  <div>
                    <p className="serif text-xl text-[var(--ink)]">Passeio Pedra Branca</p>
                    <p className="mt-1 text-xs tracking-wider text-[var(--muted)] uppercase">Palhoça · Santa Catarina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
