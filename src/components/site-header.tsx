import Link from "next/link";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/wordmark";
import { restaurant } from "@/content/restaurant";

export const siteNavigation = [
  { label: "Sobre", href: "#a-casa" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Visite", href: "#visite" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-30 border-b border-white/15 text-white">
      <div className="shell flex h-[86px] items-center justify-between gap-7">
        <Link href="/" aria-label="Ir para o início">
          <Wordmark compact light />
        </Link>

        <nav className="hidden items-center gap-7 text-[0.66rem] font-bold tracking-[0.18em] uppercase lg:flex">
          {siteNavigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="button button--light header-reserve"
          href={restaurant.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Fale conosco
          <Icon name="arrow-down-right" size={17} />
        </a>

        <details className="mobile-menu lg:hidden">
          <summary aria-label="Abrir menu">
            <Icon name="menu" size={24} />
          </summary>
          <nav>
            {siteNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={restaurant.whatsapp} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
