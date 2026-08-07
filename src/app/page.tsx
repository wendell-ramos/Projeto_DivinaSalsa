import Image from "next/image";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/wordmark";
import { experiences, menuHighlights, restaurant } from "@/content/restaurant";

const navigation = [
  { label: "A casa", href: "#a-casa" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Visite", href: "#visite" },
];

const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    servesCuisine: ["Brasileira", "Frutos do mar", "Massas", "Contemporânea"],
    telephone: restaurant.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua da Universidade, 346 - Passeio Pedra Branca",
      addressLocality: "Palhoça",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    sameAs: [restaurant.instagram],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 text-white">
        <div className="shell flex h-24 items-center justify-between gap-8">
          <a href="#inicio" aria-label="Ir para o início">
            <Wordmark compact light />
          </a>

          <nav className="hidden items-center gap-8 text-[0.72rem] font-bold tracking-[0.18em] uppercase lg:flex">
            {navigation.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button className="button button--light header-reserve" type="button" aria-disabled="true">
            Reservar mesa
            <Icon name="arrow-down-right" size={17} />
          </button>

          <details className="mobile-menu lg:hidden">
            <summary aria-label="Abrir menu">
              <Icon name="menu" size={24} />
            </summary>
            <nav>
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <span>
                Reservar mesa
              </span>
            </nav>
          </details>
        </div>
      </header>

      <section id="inicio" className="hero min-h-[760px] text-white">
        <Image
          src={`${basePath}/images/camarao-tropical.jpg`}
          alt="Camarão Tropical servido pelo Divina Salsa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero__overlay" />
        <div className="hero__botanical" aria-hidden="true" />

        <div className="shell relative z-10 flex min-h-[760px] items-end pb-16 pt-40 md:pb-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_290px] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow text-[#d8e0cb]">Passeio Pedra Branca · Palhoça</p>
              <h1 className="display-title mt-6 max-w-4xl">
                Sabores que transformam encontros em celebrações.
              </h1>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button button--cream" href="#cardapio">
                  Conheça o cardápio
                  <Icon name="arrow-right" size={17} />
                </a>
                <button className="button button--ghost" type="button" aria-disabled="true">
                  Como chegar
                  <Icon name="map-pin" size={17} />
                </button>
              </div>
            </div>

            <aside className="hero__info">
              <span className="hero__info-icon">
                <Icon name="clock" size={19} />
              </span>
              <p className="text-xs font-bold tracking-[0.18em] uppercase">Hoje no Divina</p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Almoço, jantar e bons momentos no coração da Pedra Branca.
              </p>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold" href="#visite">
                Ver horários <Icon name="arrow-right" size={15} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="a-casa" className="section-pad overflow-hidden bg-[var(--cream)]">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 h-[88%] w-[78%] overflow-hidden rounded-[2px]">
              <Image
                src={`${basePath}/images/mignon-germanica.jpg`}
                alt="Prato de mignon do Divina Salsa"
                fill
                sizes="(max-width: 1024px) 78vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%] bg-[var(--sage)] p-7 text-white shadow-2xl sm:p-9">
              <p className="serif text-5xl leading-none">Desde</p>
              <p className="serif mt-1 text-7xl leading-none">2016</p>
              <p className="mt-5 text-xs font-bold tracking-[0.18em] uppercase text-white/75">
                Na Pedra Branca
              </p>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="eyebrow text-[var(--forest)]">A experiência Divina Salsa</p>
            <h2 className="section-title mt-5 text-[var(--ink)]">
              Tradição e inovação servidas à mesma mesa.
            </h2>
            <div className="mt-8 grid gap-6 text-[1.03rem] leading-8 text-[var(--muted)] sm:grid-cols-2">
              <p>
                Ingredientes selecionados, receitas cuidadosas e pratos contemporâneos com a
                tradição do sabor.
              </p>
              <p>
                Um ambiente acolhedor para almoços, jantares, encontros e celebrações que merecem
                ser lembradas.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-black/10 pt-8">
              <div>
                <strong className="serif block text-3xl text-[var(--forest)]">Da terra ao mar</strong>
                <span className="text-sm text-[var(--muted)]">Carnes, pescados, massas e risotos</span>
              </div>
              <a className="text-link" href="#cardapio">
                Explorar sabores <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cardapio" className="section-pad bg-[var(--paper)]">
        <div className="shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--forest)]">Destaques da casa</p>
              <h2 className="section-title mt-5">Um cardápio para cada momento.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Dos clássicos do mar às carnes, massas e opções executivas — encontre o prato certo
              para compartilhar ou apreciar sozinho.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {menuHighlights.map((item, index) => (
              <article className={`menu-card group ${index === 1 ? "md:translate-y-8" : ""}`} key={item.name}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${basePath}${item.image}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="menu-card__number">0{index + 1}</span>
                </div>
                <div className="p-7">
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] text-[var(--sage-dark)] uppercase">
                    {item.category}
                  </p>
                  <h3 className="serif mt-3 text-3xl text-[var(--ink)]">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-[var(--muted)]">
              Entradas · Saladas · Carnes · Pescados · Massas · Risotos · Kids · Sobremesas
            </p>
            <button className="button button--dark" type="button" aria-disabled="true">
              Pedir pelo iFood
              <Icon name="external" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section id="experiencias" className="bg-[var(--forest)] text-white">
        <div className="shell grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">
            <Image
              src={`${basePath}/images/soda-italiana.jpg`}
              alt="Soda italiana do Divina Salsa"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102a1c]/80 via-transparent to-transparent" />
            <p className="absolute bottom-10 left-8 right-8 serif text-4xl leading-tight sm:left-12 sm:text-5xl">
              Boa comida.<br />Boas conversas.<br />O lugar certo.
            </p>
          </div>

          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pl-20">
            <p className="eyebrow text-[#bccaab]">Mais que uma refeição</p>
            <h2 className="section-title mt-5 max-w-xl text-white">
              Uma casa aberta para receber você.
            </h2>
            <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
              {experiences.map((item) => (
                <article className="experience-row" key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3 className="serif text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/65">{item.text}</p>
                  </div>
                  <Icon name="arrow-down-right" className="ml-auto shrink-0 text-[#bccaab]" size={22} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visite" className="section-pad bg-[var(--cream)]">
        <div className="shell">
          <div className="grid overflow-hidden border border-black/10 bg-[var(--paper)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-[var(--forest)]">Planeje sua visita</p>
              <h2 className="section-title mt-5 max-w-xl">Sua mesa está esperando.</h2>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
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
                  <span className="text-link mt-5">
                    Abrir no mapa <Icon name="external" size={15} />
                  </span>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <button className="button button--dark" type="button" aria-disabled="true">
                  <Icon name="message" size={17} />
                  Reservar pelo WhatsApp
                </button>
                <span className="button button--outline">
                  {restaurant.phone}
                </span>
              </div>
            </div>

            <div className="relative min-h-[480px]">
              <Image
                src={`${basePath}/images/risoto-camarao.jpg`}
                alt="Risoto de camarão do Divina Salsa"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 bg-[var(--cream)] p-6 sm:inset-x-8 sm:bottom-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[var(--forest)] text-white">
                    <Icon name="utensils" size={18} />
                  </span>
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

      <section className="bg-[var(--sage)] py-16 text-white">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-white/70">Acompanhe o Divina</p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">Novidades, pratos e bons momentos.</h2>
          </div>
          <button className="button button--light" type="button" aria-disabled="true">
            <Icon name="instagram" size={18} />
            @divinasalsa
          </button>
        </div>
      </section>

      <footer className="bg-[#102a1c] py-12 text-white">
        <div className="shell flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <Wordmark light />
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold tracking-[0.16em] uppercase text-white/65">
              {navigation.map((item) => (
                <a className="hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Divina Salsa Restaurante.</p>
            <p>Protótipo inicial · Informações sujeitas à confirmação.</p>
          </div>
        </div>
      </footer>

      <button
        className="whatsapp-float"
        type="button"
        aria-disabled="true"
        aria-label="Reservar pelo WhatsApp"
      >
        <Icon name="message" size={22} />
        <span>Reservar</span>
      </button>
    </main>
  );
}
