import Link from "next/link";
import Section from "./Section";
import { Instagram, Linkedin, Whatsapp, X } from "iconoir-react";

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
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "text-text-muted hover:text-accent-foreground transition-colors";

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const shortcuts = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  const legal = [
    { href: "#", label: "Política de Privacidade" },
    { href: "/", label: "Termos de Serviço" },
  ];

  const socials = [
    { href: "https://whatsapp.com", label: <Whatsapp/> },
    { href: "https://instagram.com", label: <Instagram /> },
    { href: "https://linkedin.com", label: <Linkedin /> },
    { href: "https://x.com", label: <X /> },
  ];

  return (
    <>
      <Section
        id="footer"
        contentClassName="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] text-accent-foreground"
        className="bg-accent"
      >
        <div className="flex flex-col gap-6 py-4 px-7">
          <h1 className="font-brand font-bold text-4xl">E Advocacia</h1>
          <p className="text-text-muted">33.333.333/0000-00</p>
          <p className="text-text-muted">
            Avenida Principal, 77
            <br />
            Jacarecica
            <br />
            Maceió - AL
            <br />
            57032-001
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            {socials.map((s) => (
              <FooterLink key={s.href} href={s.href} external>
                {s.label}
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
          <FooterLink href="/">
            (82) 99999-9999
          </FooterLink>
          <FooterLink href="/">
            contato@eadvocacia.com.br
          </FooterLink>
        </FooterCol>
      </Section>

      <div className="flex px-8 py-3 bg-background justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-7xl justify-center md:justify-between items-center">
          <span>Copyright © 2026 E Advocacia</span>
          <span className="opacity-60">
            Desenvolvido por{" "}
            <a
              className="underline underline-offset-4 hover:opacity-100"
              href="https://marcosc.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Marcos Costa
            </a>
          </span>
        </div>
      </div>
    </>
  );
}