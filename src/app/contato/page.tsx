import type { Metadata } from "next";
import Image from "next/image";
import { DeliveryCard, ReservationCard } from "@/components/delivery-card";
import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";
import styles from "./contact.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Endereço, horários e informações de contato do Divina Salsa Restaurante, em Palhoça.",
};

export default function ContatoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Visite o Divina Salsa</p>
            <h1>Vamos nos encontrar.</h1>
            <p>O próximo bom momento começa com uma visita.</p>
          </div>
          <div className={styles.heroPhoto}>
            <Image src={`${basePath}/images/espaco-salao.jpg`} alt="Mesas de madeira e iluminação acolhedora do Divina Salsa" fill priority sizes="(max-width: 640px) 94vw, (max-width: 1100px) 50vw, 530px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className={`${styles.visit} bg-[var(--cream)]`}>
        <div className="shell">
          <div className="grid overflow-hidden border border-black/10 bg-[var(--paper)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="eyebrow text-[var(--forest)]">Planeje sua visita</p>
              <h2 className="section-title mt-5 max-w-xl">Sua mesa está esperando.</h2>

              <div className="mt-10 grid gap-9 sm:grid-cols-2">
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

            <div className="relative min-h-[340px] sm:min-h-[400px]">
              <Image
                src={`${basePath}/images/espaco-fachada.jpg`}
                alt="Fachada do Divina Salsa Restaurante no Passeio Pedra Branca"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 bg-[var(--cream)] p-6 sm:inset-x-8 sm:bottom-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={`${basePath}/images/logo-divina-salsa.png`}
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

      <section className={styles.channels} aria-label="Instagram do restaurante">
        <div className={`shell ${styles.channelGrid}`}>
          <h2>Um pouco da casa, todos os dias.</h2>
          <a className={styles.social} href={restaurant.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={18} /> @divinasalsa <Icon name="arrow-right" size={16} /></a>
        </div>
      </section>

    </main>
  );
}
