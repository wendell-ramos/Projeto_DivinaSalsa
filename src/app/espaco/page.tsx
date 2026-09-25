import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";
import { createPageMetadata } from "@/lib/site";
import styles from "./space.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";
export const metadata: Metadata = createPageMetadata({
  title: "Espaço",
  description: "Conheça o salão, a varanda e os ambientes do Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça.",
  path: "/espaco/",
  image: "/images/optimized/galeria-espaco-049.webp",
  imageAlt: "Área externa do Divina Salsa junto ao Passeio Pedra Branca",
});
const photos = [
  { file: "galeria-eventos-018", alt: "Salão do Divina Salsa com mesas preparadas e luz natural", position: "center 62%" },
  { file: "galeria-espaco-049", alt: "Mesas externas acompanhando o Passeio Pedra Branca", position: "center 58%" },
  { file: "galeria-espaco-052", alt: "Vista do passeio a partir de uma mesa sob o ombrelone", position: "center 60%" },
  { file: "galeria-espaco-047", alt: "Entrada e mesas do restaurante iluminadas ao entardecer", position: "center 62%" },
  { file: "galeria-espaco-061", alt: "Varanda do Divina Salsa durante o dia, com ombrelones e plantas", position: "center 65%" },
  { file: "galeria-espaco-058", alt: "Área externa com mesas e iluminação acolhedora ao anoitecer", position: "center 60%" },
];

export default function EspacoPage() {
  return (
    <main id="conteudo" tabIndex={-1} className={styles.page}>
      <div className={styles.headerBackdrop} aria-hidden="true" />
      <div className={`shell ${styles.content}`}>
        <section className={styles.intro} aria-labelledby="espaco-titulo">
          <h1 id="espaco-titulo">Nosso espaço</h1>
          <div className={styles.copy}>
            <p>O Divina Salsa está localizado próximo à praça do Passeio Pedra Branca, em um dos pontos mais agradáveis e movimentados do bairro. Um espaço preparado para receber você em diferentes momentos, seja para um almoço durante a semana, um jantar especial ou para aproveitar algumas horas à mesa.</p>
            <p>Na área interna, você pode aproveitar um ambiente climatizado. Já na área externa, as mesas permitem aproveitar o clima, o movimento e toda a atmosfera do Passeio Pedra Branca.</p>
            <p>Com uma localização privilegiada e ambientes que se adaptam a diferentes ocasiões, o Divina reúne conforto, gastronomia e uma experiência completa para quem escolhe ficar por aqui.</p>

          </div>
        </section>
        <section className={styles.hours} aria-labelledby="espaco-horarios">
          <h2 id="espaco-horarios"><Icon name="clock" size={18} /> Horários da casa</h2>
          <dl>
            {restaurant.hours.map((hour) => (
              <div key={hour.days}>
                <dt>{hour.days}</dt>
                <dd>{hour.time}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className={styles.gallery} aria-label="Fotos dos ambientes do Divina Salsa">
          {photos.map((photo, index) => (
            <div className={styles.photo} key={photo.file}>
              <Image src={`${basePath}/images/optimized/${photo.file}.webp`} alt={photo.alt}
                fill sizes="(max-width: 599px) 94vw, (max-width: 900px) 46vw, 350px"
                loading={index < 3 ? "eager" : "lazy"} style={{ objectPosition: photo.position }} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
