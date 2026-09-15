import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Espaço",
  description:
    "Conheça o salão e a área externa do Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça.",
};

const spaceMoments = [
  {
    number: "01",
    title: "Almoço",
    text: "Uma pausa à mesa no coração do Passeio Pedra Branca.",
  },
  {
    number: "02",
    title: "Jantar",
    text: "Um ambiente acolhedor para aproveitar a noite com calma.",
  },
  {
    number: "03",
    title: "Encontros",
    text: "Salão e área externa para reunir pessoas e celebrar momentos.",
  },
] as const;

export default function EspacoPage() {
  return (
    <main className="space-page">
      <PageHero
        eyebrow="Divina Salsa · Pedra Branca"
        title="Nosso espaço."
        description="Salão e área externa para almoços, jantares e bons encontros."
        image="/images/espaco-fachada.jpg"
        imageAlt="Fachada do Divina Salsa Restaurante no Passeio Pedra Branca"
        imagePosition="object-center"
      />

      <section className="space-intro bg-[var(--cream)]">
        <div className="space-intro__layout shell">
          <div className="space-intro__copy">
            <p className="eyebrow text-[var(--forest)]">A casa</p>
            <h2 className="section-title mt-4">Um lugar para estar e aproveitar.</h2>
            <p>
              O Divina Salsa faz parte da rotina do Passeio Pedra Branca, com um ambiente que
              acompanha diferentes momentos do dia — do almoço aos encontros à noite.
            </p>

            <dl className="space-facts">
              <div>
                <dt>Ambientes</dt>
                <dd>Salão e área externa</dd>
              </div>
              <div>
                <dt>Localização</dt>
                <dd>Passeio Pedra Branca · Palhoça</dd>
              </div>
            </dl>
          </div>

          <div className="space-gallery" aria-label="Galeria do espaço Divina Salsa">
            <figure className="space-gallery__salon">
              <Image
                src={`${basePath}/images/espaco-salao.jpg`}
                alt="Salão e mesas do Divina Salsa Restaurante"
                fill
                sizes="(max-width: 700px) 62vw, 34vw"
                className="object-cover"
              />
              <figcaption>Salão</figcaption>
            </figure>
            <figure className="space-gallery__outside">
              <Image
                src={`${basePath}/images/espaco-varanda.jpg`}
                alt="Mesa na área externa do Divina Salsa com o cardápio da casa"
                fill
                sizes="(max-width: 700px) 38vw, 20vw"
                className="object-cover"
              />
              <figcaption>Área externa</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="space-moments bg-[var(--forest)] text-white">
        <div className="shell">
          <div className="space-moments__heading">
            <div>
              <p className="eyebrow text-[var(--olive-300)]">Experiência Divina</p>
              <h2 className="serif mt-3">Cada encontro encontra seu lugar.</h2>
            </div>
            <p>Uma casa preparada para receber você em diferentes momentos.</p>
          </div>

          <div className="space-moments__grid">
            {spaceMoments.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="space-moments__actions">
            <Link className="button button--cream" href="/contato">
              Planejar uma visita <Icon name="arrow-right" size={16} />
            </Link>
            <Link className="button button--ghost" href="/eventos">
              Conhecer eventos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
