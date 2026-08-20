import Link from "next/link";
import { Icon } from "@/components/icon";
import { siteNavigation } from "@/components/site-header";
import { Wordmark } from "@/components/wordmark";
import { restaurant } from "@/content/restaurant";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer py-12 text-white">
        <div className="shell flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <Wordmark light />
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold tracking-[0.16em] uppercase text-white/65">
              {siteNavigation.map((item) => (
                <Link className="hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Divina Salsa Restaurante.</p>
            <p>Protótipo inicial · Informações sujeitas à confirmação.</p>
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
        <span>Fale conosco</span>
      </a>
    </>
  );
}
