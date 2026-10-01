import Link from "next/link";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/wordmark";
import { siteNavigation } from "@/content/navigation";
import { restaurant } from "@/content/restaurant";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer py-8 text-white">
        <div className="site-footer__content shell flex flex-col gap-6">
          <div className="site-footer__main relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link href="/" prefetch={false} aria-label="Voltar à página inicial">
              <Wordmark compact light />
            </Link>
            <nav
              className="site-footer__nav flex flex-wrap gap-x-6 gap-y-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-white/65"
              aria-label="Navegação do rodapé"
            >
              {siteNavigation.map((item) => (
                <Link className="hover:text-white" href={item.href} key={item.href} prefetch={false}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              className="absolute right-0 top-0 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/10 md:static"
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Divina Salsa (abre em nova aba)"
              title="@divinasalsa"
            >
              <Icon name="instagram" size={20} />
            </a>
          </div>
          <div className="site-footer__bottom border-t border-white/10 pt-5 text-[0.68rem] text-white/60">
            <p>© {new Date().getFullYear()} Divina Salsa Restaurante.</p>
            <p className="site-footer__credit">
              Desenvolvido por{" "}
              <a href="https://wendell-ramos.github.io/portfolio-wendell-ramos/" target="_blank" rel="noopener noreferrer">
                Wendell Ramos
                <Icon name="arrow-down-right" size={13} />
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={restaurant.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Divina Salsa pelo WhatsApp"
      >
        <Icon name="whatsapp" size={22} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
