import type { Metadata } from "next";
import Image from "next/image";
import { DeliveryCard, ReservationCard } from "@/components/delivery-card";
import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";
import { createPageMetadata } from "@/lib/site";
import styles from "./contact.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Veja o endereço, os horários de funcionamento e os canais de contato do Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça.",
  path: "/contato/",
  image: "/images/optimized/contato-varanda-diurna.webp",
  imageAlt: "Varanda do Divina Salsa durante o dia, com mesas e ombrelones",
});

export default function ContatoPage() {
  return (
    <main id="conteudo" tabIndex={-1} className={styles.page}>
      <div className={styles.hero}>
        <Image src={`${basePath}/images/optimized/contato-varanda-diurna.webp`} alt="Varanda do Divina Salsa durante o dia, com mesas e ombrelones" fill priority sizes="100vw" />
      </div>

      <section className={`${styles.visit} bg-[var(--cream)]`}>
        <div className="shell">
          <div className="grid overflow-hidden border border-black/10 bg-[var(--paper)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className={`visit-copy ${styles.details}`}>
              <h1 className={styles.title}>Sua mesa está esperando.</h1>

              <div className="visit-details mt-8 grid gap-7 sm:grid-cols-2">
                <div>
                  <Icon name="clock" className="text-[var(--sage-dark)]" size={22} />
                  <h2 className="mt-4 text-xs font-bold tracking-[0.18em] uppercase">Horários</h2>
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
                  <h2 className="mt-4 text-xs font-bold tracking-[0.18em] uppercase">Endereço</h2>
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

              <div className="channel-actions mt-8">
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

    </main>
  );
}
