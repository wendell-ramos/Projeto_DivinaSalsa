import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { restaurant } from "@/content/restaurant";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Endereço, horários e informações de contato do Divina Salsa Restaurante, em Palhoça.",
};

export default function ContatoPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <section className="contact-hero text-white">
        <Image
          src={`${basePath}/images/risoto-camarao.jpg`}
          alt="Risoto de camarão servido pelo Divina Salsa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="contact-hero__overlay" />
        <div className="shell relative z-10 flex min-h-[380px] items-end pb-12 pt-32 md:pb-14">
          <div>
            <p className="eyebrow text-[var(--olive-100)]">Visite o Divina Salsa</p>
            <h1 className="display-title mt-5">Contato.</h1>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--cream)]">
        <div className="shell">
          <div className="grid overflow-hidden border border-black/10 bg-[var(--paper)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="eyebrow text-[var(--forest)]">Planeje sua visita</p>
              <h2 className="section-title mt-5 max-w-xl">Sua mesa está esperando.</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
                Consulte os horários e encontre o Divina Salsa no coração do Passeio Pedra Branca.
              </p>

              <div className="mt-9 grid gap-8 sm:grid-cols-2">
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
                    className="text-link mt-5"
                    href={restaurant.maps}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir no mapa <Icon name="external" size={15} />
                  </a>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  className="button button--dark"
                  href={restaurant.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="message" size={17} />
                  Falar pelo WhatsApp
                </a>
                <a className="button button--outline" href="tel:+554832830019">
                  {restaurant.phone}
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]">
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
                    <p className="mt-1 text-xs tracking-wider text-[var(--muted)] uppercase">
                      Palhoça · Santa Catarina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sage)] py-10 text-white">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-white/70">Acompanhe o Divina</p>
            <h2 className="serif mt-3 text-3xl sm:text-4xl">Novidades, pratos e bons momentos.</h2>
          </div>
          <a
            className="button button--light"
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" size={18} />
            @divinasalsa
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
