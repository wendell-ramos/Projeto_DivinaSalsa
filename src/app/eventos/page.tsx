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
    text: "Datas especiais compartilhadas com quem faz parte da sua história.",
  },
  {
    number: "02",
    title: "Encontros",
    text: "Família, amigos ou equipe reunidos ao redor da mesma mesa.",
  },
  {
    number: "03",
    title: "Bons momentos",
    text: "Uma ocasião simples também pode se transformar em uma boa lembrança.",
  },
] as const;

const planningSteps = [
  {
    number: "01",
    title: "Conte a ocasião",
    text: "Compartilhe a data, o número de pessoas e o encontro que está imaginando.",
  },
  {
    number: "02",
    title: "Consulte a casa",
    text: "A equipe confirma a disponibilidade e apresenta as possibilidades para o momento.",
  },
  {
    number: "03",
    title: "Combine os detalhes",
    text: "Com as informações alinhadas, é só reunir as pessoas e aproveitar.",
  },
] as const;

export default function EventosPage() {
  return (
    <main className="events-page">
      <PageHero
        eyebrow="Celebre no Divina"
        title="Encontros que ficam na memória."
        description="Boa comida, uma casa acolhedora e motivos para reunir quem importa."
        image="/images/evento-detalhes.jpg"
        imageAlt="Mesas preparadas para receber uma celebração no Divina Salsa"
        imagePosition="object-center"
      />

      <section className="events-intro bg-[var(--cream)]">
        <div className="shell events-intro__layout">
          <div>
            <p className="eyebrow text-[var(--forest)]">Encontros com sabor</p>
            <h2 className="section-title mt-5">A mesa é o começo de toda celebração.</h2>
          </div>
          <div className="events-intro__copy">
            <p>
              O Divina Salsa recebe encontros de diferentes tamanhos e histórias. Para entender
              o que é possível preparar para a sua ocasião, converse diretamente com a equipe.
            </p>
            <a className="text-link" href="#como-organizar">
              Como organizar <Icon name="arrow-down-right" size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="events-experience text-white">
        <div className="shell events-experience__layout">
          <div className="events-experience__visuals">
            <figure className="events-experience__image events-experience__image--main">
              <Image
                src={`${basePath}/images/evento-encontro.jpg`}
                alt="Preparação da casa para receber um encontro"
                fill
                sizes="(max-width: 767px) 65vw, 38vw"
                className="object-cover"
              />
            </figure>
            <figure className="events-experience__image events-experience__image--detail">
              <Image
                src={`${basePath}/images/evento-detalhes.jpg`}
                alt="Mesas organizadas para uma celebração"
                fill
                sizes="(max-width: 767px) 44vw, 22vw"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="events-experience__content">
            <p className="eyebrow text-[var(--olive-300)]">Para diferentes histórias</p>
            <h2 className="serif">Um lugar, muitos motivos para estar junto.</h2>
            <div className="events-experience__list">
              {occasions.map((occasion) => (
                <article key={occasion.title}>
                  <span>{occasion.number}</span>
                  <div>
                    <h3>{occasion.title}</h3>
                    <p>{occasion.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="events-process bg-[var(--paper)]" id="como-organizar">
        <div className="shell">
          <div className="events-process__intro">
            <div>
              <p className="eyebrow text-[var(--forest)]">Como organizar</p>
              <h2 className="section-title mt-5">Comece com uma conversa.</h2>
            </div>
            <p>
              Não precisa ter tudo definido. Envie as informações iniciais pelo WhatsApp e a
              equipe orienta os próximos passos.
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

          <div className="events-process__cta">
            <div>
              <p className="eyebrow">Seu momento no Divina</p>
              <h2 className="serif">Vamos conversar sobre a sua ideia?</h2>
            </div>
            <a
              className="button button--light"
              href={restaurant.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={17} />
              Consultar disponibilidade
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
