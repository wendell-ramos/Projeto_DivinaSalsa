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
          <div className="site-footer__main flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Wordmark compact light />
            <nav
              className="site-footer__nav flex flex-wrap gap-x-6 gap-y-3 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-white/65"
              aria-label="Navegação do rodapé"
            >
              {siteNavigation.map((item) => (
                <Link className="hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[0.68rem] text-white/45 sm:flex-row sm:items-center sm:pr-40">
            <p>© {new Date().getFullYear()} Divina Salsa Restaurante.</p>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={restaurant.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o Divina Salsa pelo WhatsApp"
      >
        <Icon name="message" size={22} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
