import Link from "next/link";
import Section from "./Section";
import { Instagram, Linkedin, Whatsapp } from "iconoir-react";
import Image from 'next/image';

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 py-4 px-7">
      <h4 className="font-bold">{title}</h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label?: string;
}) {
  const className =
    "text-text-muted hover:text-accent-foreground transition-colors underline-offset-4 hover:underline";

  // Rotas internas e âncoras da própria página
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link className={className} href={href} aria-label={label}>
        {children}
      </Link>
    );
  }

  // Links externos (redes sociais) abrem em nova aba
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  // tel: e mailto:
  return (
    <a href={href} className={className} aria-label={label}>
      {children}
    </a>
  );
}

export default function Footer() {
  const shortcuts = [
    { href: "#", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  const legal = [
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
  ];

  // Dados fictícios, para fins de portfólio
  const socials = [
    { href: "https://wa.me/", label: "WhatsApp", icon: <Whatsapp /> },
    { href: "https://www.instagram.com/", label: "Instagram", icon: <Instagram /> },
    { href: "https://www.linkedin.com/", label: "LinkedIn", icon: <Linkedin /> },
  ];

  return (
    <>
      <Section
        id="footer"
        contentClassName="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] text-accent-foreground"
        className="bg-accent"
      >
        <div className="flex flex-col gap-6 py-4 px-7">
          <p className="font-brand font-bold text-4xl">E Advocacia</p>
          <p className="text-text-muted">CNPJ 27.914.536/0001-08</p>
          <address className="text-text-muted not-italic">
            Av. Fernandes Lima, 1250, sala 504
            <br />
            Farol
            <br />
            Maceió - AL
            <br />
            57051-000
          </address>

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            {socials.map((s) => (
              <FooterLink key={s.href} href={s.href} label={s.label}>
                {s.icon}
              </FooterLink>
            ))}
          </div>
        </div>

        <FooterCol title="Atalhos">
          {shortcuts.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Informações Legais">
          {legal.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Contato">
          <FooterLink href="/">(82) 3322-4455</FooterLink>
          <FooterLink href="/">
            contato@eadvocacia.adv.br
          </FooterLink>
          <p className="text-text-muted">Seg a sex, 8h às 18h</p>
        </FooterCol>
      </Section>

      <div className="flex px-8 py-3 bg-background justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-7xl justify-center md:justify-between items-center">
          <span>Copyright © {new Date().getFullYear()} E Advocacia</span>
          <span className="opacity-60">
            <a
              className="underline underline-offset-4 hover:opacity-100"
              href="https://marcosc.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/marcosc.svg" height={70} width={120} alt="Made by Marcos Costa. Click to visit" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
