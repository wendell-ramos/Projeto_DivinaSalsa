import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";
import styles from "./events.module.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const eventContact = `${restaurant.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um evento no Divina Salsa. Posso enviar a data, o horário e a estimativa de convidados?")}`;
export const metadata: Metadata = {
  title: "Eventos",
  description: "Reúna família, amigos ou sua equipe no Divina Salsa. Conheça registros de encontros na casa e consulte possibilidades pelo WhatsApp.",
};
const occasions = [
  { number: "01", title: "Família & amigos", text: "Aniversários, reencontros e motivos para reunir quem faz parte da sua história." },
  { number: "02", title: "Encontros de equipe", text: "Um almoço para sair da rotina, celebrar uma conquista ou encerrar mais um ciclo juntos." },
  { number: "03", title: "Datas para celebrar", text: "Conte o que está imaginando. A equipe ajuda a entender as possibilidades para a sua ocasião." },
];
const questions = [
  { title: "Como consultar uma data?", answer: "Envie pelo WhatsApp a data desejada, o horário e uma estimativa de convidados. A equipe verifica a disponibilidade e conversa com você sobre o encontro." },
  { title: "Posso escolher o ambiente?", answer: "Converse com a equipe sobre sua preferência pelo salão ou pela área externa. A possibilidade depende da data, do tamanho do grupo e da organização da casa." },
  { title: "Como funcionam cardápio, valores e decoração?", answer: "Esses detalhes precisam ser alinhados diretamente com o restaurante. Informe suas preferências e necessidades para consultar as opções e condições, sem presumir serviços incluídos." },
  { title: "A mensagem já confirma a reserva?", answer: "Não. O contato pelo WhatsApp inicia uma consulta. A reserva só fica confirmada após o alinhamento dos detalhes e a confirmação da equipe." },
];

export default function EventosPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Eventos · Divina Salsa</p>
            <h1>Boas histórias<br />começam <em>à mesa.</em></h1>
            <p>Uma ocasião especial, pessoas queridas e o sabor da casa. Há muitos motivos para se encontrar no Divina Salsa.</p>
            <a href={eventContact} target="_blank" rel="noopener noreferrer" className="button button--cream"><Icon name="message" size={17} /> Converse sobre seu evento</a>
            <a href="#encontros" className={styles.heroLink}>Conheça as possibilidades <Icon name="arrow-right" size={15} /></a>
          </div>
          <figure className={styles.heroPhoto}>
            <Image src={`${basePath}/images/eventos-confraternizacao.webp`} alt="Convidados reunidos em uma confraternização no Divina Salsa" fill priority sizes="(max-width: 640px) 92vw, 50vw" className="object-cover" />
            <figcaption>Encontros reais. Memórias da casa.</figcaption>
          </figure>
        </div>
      </section>

      <section id="encontros" className={`shell ${styles.occasions}`}>
        <div className={styles.heading}><div><p className="eyebrow">Para estar junto</p><h2>Cada encontro tem seu motivo.</h2></div><p>Do almoço em grupo à comemoração especial, comece contando sua ideia para a nossa equipe.</p></div>
        <div className={styles.occasionGrid}>{occasions.map(item => <article key={item.number}><span className={styles.number}>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className={styles.experience}>
        <div className={`shell ${styles.experienceGrid}`}>
          <div className={styles.photoPair}>
            <figure><div className={styles.foodPhoto}><Image src={`${basePath}/images/eventos-mesa.webp`} alt="Mesa de alimentos durante um encontro de convidados no restaurante" fill sizes="(max-width: 640px) 54vw, 30vw" className="object-cover" /></div><figcaption>Sabores para compartilhar</figcaption></figure>
            <figure><div className={styles.detailPhoto}><Image src={`${basePath}/images/eventos-celebracao.webp`} alt="Mesa decorada com bolo e doces em uma celebração realizada na casa" fill sizes="(max-width: 640px) 36vw, 20vw" className="object-cover" /></div><figcaption>Detalhes de uma celebração</figcaption></figure>
          </div>
          <div className={styles.experienceCopy}><p className="eyebrow">O encontro ganha vida</p><h2>O cenário é a casa.<br />A história é de vocês.</h2><p>Mesas ocupadas, conversas que se estendem e pratos que acompanham o momento. São os encontros que dão vida aos nossos ambientes.</p><p>Salão ou área externa: compartilhe suas preferências e consulte qual formato faz sentido para o seu grupo.</p><Link href="/espaco" className={styles.textLink}>Conheça nossos ambientes <Icon name="arrow-right" size={16} /></Link></div>
        </div>
        <p className={`shell ${styles.caption}`}>Registros de eventos já realizados. Montagens e itens das fotos não representam serviços ou pacotes incluídos.</p>
      </section>

      <section id="como-organizar" className={`shell ${styles.planning}`}>
        <div className={styles.heading}><div><p className="eyebrow">Da ideia ao encontro</p><h2>Vamos combinar os detalhes?</h2></div><p>Não precisa chegar com tudo definido. Estas informações ajudam a começar.</p></div>
        <ol className={styles.steps}>
          <li><span className={styles.number}>01</span><div><h3>Data & convidados</h3><p>Envie a ocasião, a data, o horário e uma estimativa do número de pessoas.</p></div></li>
          <li><span className={styles.number}>02</span><div><h3>Preferências & possibilidades</h3><p>Converse sobre ambiente, alimentação e necessidades do grupo. Consulte disponibilidade e condições.</p></div></li>
          <li><span className={styles.number}>03</span><div><h3>Alinhamento & confirmação</h3><p>Revise os detalhes com a equipe e aguarde a confirmação da reserva.</p></div></li>
        </ol>
      </section>

      <section className={styles.faq}><div className={`shell ${styles.faqGrid}`}><div><p className="eyebrow">Antes de planejar</p><h2>Algumas dúvidas,<br />uma boa conversa.</h2><p>As condições de cada encontro são combinadas com a equipe do restaurante.</p></div><div>{questions.map(question => <details key={question.title}><summary>{question.title}<span aria-hidden="true">+</span></summary><p>{question.answer}</p></details>)}</div></div></section>

      <section className={styles.contact}><div className={`shell ${styles.contactGrid}`}><div><p className="eyebrow">Seu momento no Divina</p><h2>Conte a sua ideia. <em>Vamos conversar.</em></h2></div><div className={styles.contactActions}><a href={eventContact} target="_blank" rel="noopener noreferrer" className="button button--cream"><Icon name="message" size={17} /> Consultar pelo WhatsApp</a><span>Disponibilidade e condições sob consulta.</span></div></div></section>
    </main>
  );
}
