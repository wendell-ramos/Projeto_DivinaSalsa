import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { restaurant } from "@/content/restaurant";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Celebrações, encontros e momentos especiais no Divina Salsa Restaurante, em Palhoça.",
};

const occasions = [
  {
    number: "01",
    title: "Celebrações",
    text: "Aniversários e datas que merecem uma mesa especial.",
    image: "/images/cardapio/dadinho-de-tapioca.jpg",
    imageAlt: "Dadinho de tapioca servido para compartilhar",
    className: "events-gallery__card--large",
  },
  {
    number: "02",
    title: "Encontros",
    text: "Família, amigos ou equipe reunidos com boa gastronomia.",
    image: "/images/cardapio/massa-mignon-funghi.png",
    imageAlt: "Massa com mignon e funghi servida pelo Divina Salsa",
    className: "",
  },
  {
    number: "03",
    title: "Brindes",
    text: "Momentos leves para conversar, brindar e aproveitar sem pressa.",
    image: "/images/cardapio/stella-pure-gold.jpg",
    imageAlt: "Cerveja gelada para um brinde",
    className: "",
  },
] as const;

const planningSteps = [
  {
    number: "01",
    title: "Conte a ocasião",
    text: "Fale com a equipe e compartilhe a data e o tipo de encontro que está imaginando.",
  },
  {
    number: "02",
    title: "Alinhe os detalhes",
    text: "A casa confirma disponibilidade e orienta sobre as possibilidades para o momento.",
  },
  {
    number: "03",
    title: "Aproveite a experiência",
    text: "Com tudo combinado, é só reunir as pessoas e aproveitar a mesa.",
  },
] as const;

export default function EventosPage() {
  return (
    <main className="events-page">
      <PageHero
        eyebrow="Celebre no Divina"
        title="Momentos à mesa."
        description="Uma casa para reunir pessoas, celebrar histórias e aproveitar cada encontro."
        image="/images/cardapio/destilado.jpg"
        imageAlt="Copos preparados para um brinde"
        imagePosition="object-center"
      />

      <section className="events-intro bg-[var(--cream)]">
        <div className="shell events-intro__layout">
          <div>
            <p className="eyebrow text-[var(--forest)]">Encontros com sabor</p>
            <h2 className="section-title mt-5">Cada ocasião ganha um novo significado.</h2>
          </div>
          <div className="events-intro__copy">
            <p>
              Seja para comemorar uma data, reunir quem importa ou simplesmente viver uma noite
              diferente, o Divina Salsa recebe cada encontro com boa comida e acolhimento.
            </p>
            <a
              className="text-link"
              href={restaurant.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Conversar com a equipe <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="events-occasions text-white">
        <div className="shell">
          <div className="events-occasions__heading">
            <div>
              <p className="eyebrow text-[var(--olive-300)]">Para diferentes histórias</p>
              <h2 className="serif mt-4">Um lugar, muitos motivos para celebrar.</h2>
            </div>
            <p>
              As condições de cada encontro são confirmadas diretamente com a equipe do
              restaurante.
            </p>
          </div>

          <div className="events-gallery">
            {occasions.map((occasion) => (
              <article
                className={`events-gallery__card ${occasion.className}`.trim()}
                key={occasion.title}
              >
                <Image
                  src={`${basePath}${occasion.image}`}
                  alt={occasion.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="events-gallery__overlay" />
                <div className="events-gallery__content">
                  <span>{occasion.number}</span>
                  <div>
                    <h3>{occasion.title}</h3>
                    <p>{occasion.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events-process bg-[var(--paper)]">
        <div className="shell events-process__layout">
          <div className="events-process__intro">
            <div>
              <p className="eyebrow text-[var(--forest)]">Como organizar</p>
              <h2 className="section-title mt-5">Comece com uma conversa.</h2>
            </div>
            <p>
              Ainda não é necessário ter tudo definido. A equipe ajuda a entender as
              possibilidades disponíveis para a sua ocasião.
            </p>
          </div>

          <div className="events-process__steps">
            {planningSteps.map((step) => (
              <article className="events-process__step" key={step.title}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events-contact bg-[var(--cream)]">
        <div className="shell events-contact__layout">
          <div className="events-contact__image">
            <Image
              src={`${basePath}/images/cardapio/iscas-de-peixe.jpg`}
              alt="Petisco e bebida sobre a mesa do Divina Salsa"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="events-contact__content">
            <p className="eyebrow text-[var(--forest)]">Seu momento no Divina</p>
            <h2 className="section-title mt-5">Vamos conversar sobre a sua ideia?</h2>
            <p>
              Entre em contato para consultar disponibilidade e alinhar os detalhes diretamente
              com o restaurante.
            </p>
            <a
              className="button button--dark"
              href={restaurant.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={17} />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
