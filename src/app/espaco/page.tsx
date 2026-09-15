import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import styles from "./space.module.css";
import { restaurant } from "@/content/restaurant";
const basePath = process.env.PAGES_BASE_PATH ?? "";
export const metadata: Metadata = { title: "Espaço", description: "Conheça os ambientes do Divina Salsa Restaurante, no Passeio Pedra Branca, em Palhoça." };
const photos = [
  { file: "espaco-ombrelones", alt: "Mesas de madeira sob ombrelones na área externa", label: "01 / Ao ar livre", title: "Uma pausa na varanda.", text: "Mesas externas para acompanhar o movimento do Passeio Pedra Branca." },
  { file: "espaco-passeio", alt: "Fachada do restaurante junto ao passeio arborizado", label: "02 / Pedra Branca", title: "A casa se abre para o passeio.", text: "Um endereço para o almoço, o jantar e os encontros que fazem parte do dia." },
];
export default function EspacoPage() {
  return <main className={styles.page}>
    <section className={styles.opening}><div className={`shell ${styles.intro}`}>
      <div className={styles.copy}><p className="eyebrow">Nosso espaço · Pedra Branca</p><h1>Um convite<br />para ficar.</h1><p>À mesa, na varanda ou em boa companhia. Conheça o lugar onde os encontros ganham o sabor do Divina Salsa.</p><Link href="/contato" className="button button--cream">Venha conhecer <Icon name="arrow-right" size={16} /></Link><span className={styles.location}>Passeio Pedra Branca · Palhoça</span></div>
      <figure className={styles.cover}><Image src={`${basePath}/images/espaco-entardecer.webp`} alt="Varanda do Divina Salsa iluminada ao entardecer" fill sizes="(max-width: 640px) 100vw, 50vw" priority className="object-cover" /><figcaption>A casa, em outra luz.</figcaption></figure>
    </div></section>
    <section className={`shell ${styles.salon}`} aria-labelledby="salao-title">
      <div className={styles.salonPhoto}>
        <Image src={`${basePath}/images/espaco-salao.jpg`} alt="Mesas de madeira e iluminação do salão do Divina Salsa" fill sizes="(max-width: 640px) 92vw, 50vw" className="object-cover" />
      </div>
      <div className={styles.salonCopy}>
        <p className="eyebrow">Por dentro da casa</p>
        <h2 id="salao-title">Acolhimento em cada detalhe.</h2>
        <p>A madeira, a iluminação e as mesas compõem o ambiente do Divina Salsa. Um espaço para sentar com calma, escolher seu prato e aproveitar a companhia.</p>
        <p>Do almoço em família ao jantar a dois, o salão é parte da experiência de estar na casa.</p>
        <Link href="/cardapio" className={styles.textLink}>Explore o cardápio <Icon name="arrow-right" size={15} /></Link>
      </div>
    </section>
    <section className={`shell ${styles.environments}`} aria-labelledby="ambientes-title">
      <div className={styles.heading}><div><p className="eyebrow">De perto</p><h2 id="ambientes-title">O seu lugar à mesa.</h2></div><p>Entre a vida do passeio e o acolhimento da casa, escolha como aproveitar seu momento.</p></div>
      <div className={styles.gallery}>{photos.map(photo => <figure key={photo.file}><div className={styles.photo}><Image src={`${basePath}/images/${photo.file}.webp`} alt={photo.alt} fill sizes="(max-width: 640px) 92vw, 48vw" className="object-cover" /></div><figcaption><span>{photo.label}</span><h3>{photo.title}</h3><p>{photo.text}</p></figcaption></figure>)}</div>
    </section>
    <section className={styles.details} aria-labelledby="visita-title">
      <div className="shell">
        <div className={styles.heading}><div><p className="eyebrow">Antes de vir</p><h2 id="visita-title">Sua visita, do seu jeito.</h2></div><p>Escolha o horário e combine seu encontro com a gente.</p></div>
        <div className={styles.detailsGrid}>
          <article><h3>Quando visitar</h3><dl>{restaurant.hours.map(hour => <div key={hour.days}><dt>{hour.days}</dt><dd>{hour.time}</dd></div>)}</dl></article>
          <article><h3>Onde estamos</h3><p>{restaurant.address}</p><p>Encontre o caminho até a casa e venha conhecer nossos ambientes.</p><a href={restaurant.maps} target="_blank" rel="noopener noreferrer" className={styles.textLink}>Abrir no mapa <Icon name="arrow-right" size={15} /></a></article>
          <article><h3>Vamos combinar?</h3><p>Para reservar uma mesa ou conversar sobre um encontro em grupo, fale com nossa equipe pelo WhatsApp.</p><a href={restaurant.reservation} target="_blank" rel="noopener noreferrer" className={styles.textLink}>Consultar uma reserva <Icon name="arrow-right" size={15} /></a></article>
        </div>
      </div>
    </section>
    <section className={styles.visit}><div className={`shell ${styles.visitInner}`}><div><p className="eyebrow">Esperamos você</p><h2>Seu próximo encontro pode ser aqui.</h2></div><div className={styles.actions}><Link className="button button--cream" href="/contato">Planejar uma visita <Icon name="arrow-right" size={16} /></Link><Link className={styles.eventLink} href="/eventos">Conheça também nossos eventos <Icon name="arrow-right" size={14} /></Link></div></div></section>
  </main>;
}
