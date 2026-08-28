import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { restaurant } from "@/content/restaurant";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Celebrações, encontros e momentos especiais no Divina Salsa Restaurante, em Palhoça.",
};

const eventPossibilities = [
  {
    title: "Celebrações",
    text: "Aniversários e datas especiais vividos ao redor da mesa.",
  },
  {
    title: "Encontros",
    text: "Momentos entre amigos, famílias e equipes em uma atmosfera acolhedora.",
  },
  {
    title: "Experiências da casa",
    text: "Novidades e ocasiões especiais divulgadas pelos canais oficiais do restaurante.",
  },
] as const;

export default function EventosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Momentos especiais"
        title="Eventos."
        description="Boa comida, boas conversas e uma casa preparada para receber diferentes histórias."
        image="/images/soda-italiana.jpg"
        imageAlt="Bebida do Divina Salsa em um momento especial"
      />

      <section className="section-pad bg-[var(--cream)]">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow text-[var(--forest)]">Celebre no Divina</p>
              <h2 className="section-title mt-5">Encontros que continuam na memória.</h2>
            </div>
            <div className="max-w-2xl lg:pt-10">
              <p className="text-base leading-7 text-[var(--muted)]">
                Esta página está preparada para apresentar eventos promovidos pela casa e também
                orientar quem deseja celebrar um momento no restaurante.
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Detalhes como formatos, capacidade e condições serão incluídos após a confirmação
                das informações oficiais pela equipe do Divina Salsa.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {eventPossibilities.map((item, index) => (
              <article className="event-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--forest)] py-12 text-white sm:py-14">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-[var(--olive-300)]">Converse com a casa</p>
            <h2 className="serif mt-4 text-3xl leading-tight sm:text-4xl">
              Conte como você imagina esse momento.
            </h2>
          </div>
          <a
            className="button button--light"
            href={restaurant.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="message" size={17} />
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-8">
        <div className="shell">
          <Link className="text-link" href="/espaco">
            Conhecer o espaço <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
