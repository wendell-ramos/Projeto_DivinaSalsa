import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";
import { createPageMetadata } from "@/lib/site";
import styles from "./events.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const eventContact = `${restaurant.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um evento no Divina Salsa. Posso enviar a data, o horário e a estimativa de convidados?")}`;

export const metadata: Metadata = createPageMetadata({
  title: "Eventos",
  description: "Eventos corporativos e sociais no Divina Salsa. Conheça registros de encontros na casa e converse com a equipe para planejar sua ocasião.",
  path: "/eventos/",
  image: "/images/optimized/eventos-confraternizacao.webp",
  imageAlt: "Convidados reunidos em uma confraternização no Divina Salsa",
});

const photos = [
  { image: "eventos-celebracao", alt: "Mesa decorada com bolo, doces, flores e balões para uma celebração no restaurante", position: "center 72%" },
  { image: "eventos-mesa", alt: "Convidados reunidos em torno de uma mesa de buffet decorada com flores", position: "center 52%" },
  { image: "galeria-eventos-032", alt: "Mesa com taças e toalha clara preparada para um encontro no Divina Salsa", position: "center 72%" },
];

export default function EventosPage() {
  return (
    <main id="conteudo" tabIndex={-1} className={styles.page}>
      <div className={styles.headerBackdrop} aria-hidden="true" />
      <div className={`shell ${styles.content}`}>
        <section className={styles.intro} aria-labelledby="eventos-titulo">
          <div className={styles.title}>
            <h1 id="eventos-titulo">Eventos com mais sabor</h1>
          </div>
          <div className={styles.copy}>
            <p>O Divina Salsa também está preparado para receber eventos corporativos e sociais, como aniversários, confraternizações, encontros empresariais, celebrações em família e outras ocasiões especiais.</p>
            <p>Cada evento pode ser organizado de acordo com a proposta e as necessidades do grupo, combinando a estrutura do nosso espaço, atendimento próximo e um cardápio pensado para proporcionar uma boa experiência aos convidados.</p>
            <p>Da escolha dos pratos aos detalhes do atendimento, nossa equipe acompanha a organização para que cada ocasião tenha o cuidado que merece. Entre em contato para conhecer as possibilidades e planejar seu próximo evento no Divina.</p>
          </div>
        </section>

        <section className={styles.gallery} aria-label="Fotos de eventos realizados no Divina Salsa">
          {photos.map((photo, index) => (
            <figure key={photo.image}>
              <div className={styles.photo}>
                <Image
                  src={`${basePath}/images/optimized/${photo.image}.webp`}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 599px) 94vw, (max-width: 900px) 46vw, 350px"
                  style={{ objectPosition: photo.position }}
                />
              </div>
            </figure>
          ))}
        </section>
      </div>

      <section className={styles.contact} aria-labelledby="eventos-contato">
        <div className={`shell ${styles.contactGrid}`}>
          <h2 id="eventos-contato">Conte a sua ideia.<br /><em>Vamos conversar.</em></h2>
          <div className={styles.contactActions}>
            <a href={eventContact} target="_blank" rel="noopener noreferrer" className="button button--dark">
              <Icon name="message" size={17} /> Consultar pelo WhatsApp
            </a>
            <p>Disponibilidade e condições sob consulta.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
