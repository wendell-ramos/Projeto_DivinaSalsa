import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Espaço",
  description:
    "Conheça o ambiente do Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça.",
};

const spaceMoments = [
  {
    title: "À mesa",
    text: "Um ambiente pensado para almoços, jantares e encontros que merecem ser lembrados.",
  },
  {
    title: "No coração da Pedra Branca",
    text: "Uma localização especial para reunir pessoas e aproveitar cada momento com calma.",
  },
  {
    title: "Para diferentes ocasiões",
    text: "Do encontro cotidiano às comemorações, uma casa aberta para receber você.",
  },
] as const;

export default function EspacoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Divina Salsa Restaurante"
        title="Nosso espaço."
        description="Uma casa feita para receber, celebrar e transformar encontros em boas lembranças."
        image="/images/mignon-germanica.jpg"
        imageAlt="Prato servido pelo Divina Salsa Restaurante"
      />

      <section className="section-pad bg-[var(--cream)]">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--forest)]">A casa</p>
            <h2 className="section-title mt-5">Um lugar para estar e aproveitar.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
              O Divina Salsa está no Passeio Pedra Branca e reúne gastronomia, acolhimento e uma
              atmosfera preparada para diferentes momentos do dia.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              As imagens oficiais do ambiente serão adicionadas assim que o novo material
              fotográfico for disponibilizado pelo restaurante.
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[440px]">
            <Image
              src={`${basePath}/images/soda-italiana.jpg`}
              alt="Bebida preparada pelo Divina Salsa"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-5 border border-white/45" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--paper)]">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow text-[var(--forest)]">Experiência Divina</p>
            <h2 className="section-title mt-5">Cada encontro encontra seu lugar.</h2>
          </div>

          <div className="mt-10 grid gap-px bg-black/10 md:grid-cols-3">
            {spaceMoments.map((item, index) => (
              <article className="bg-[var(--paper)] p-7 sm:p-8" key={item.title}>
                <span className="text-[0.62rem] font-bold tracking-[0.18em] text-[var(--sage-dark)]">
                  0{index + 1}
                </span>
                <h3 className="serif mt-5 text-2xl text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="button button--dark" href="/contato">
              Planejar uma visita <Icon name="arrow-right" size={16} />
            </Link>
            <Link className="button button--outline" href="/eventos">
              Conhecer eventos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
