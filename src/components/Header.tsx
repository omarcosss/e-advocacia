"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative flex w-full justify-center items-center p-8">
            <div className="flex justify-between items-center w-full max-w-7xl">
                <Link href={"/"}>
                    <span className="font-brand text-3xl font-medium">E Advocacia</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-16">
                    <Link href="/#">Início</Link>
                    <Link href="/#sobre">Sobre</Link>
                    <Link href="/#servicos">Serviços</Link>
                    <Link href="/#contato">Contato</Link>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-md flex flex-col items-center gap-6 py-8 z-50">
                    <Link href="/#" onClick={() => setMenuOpen(false)}>Início</Link>
                    <Link href="/#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
                    <Link href="/#servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
                    <Link href="/#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
                </nav>
            )}
        </header>
    );
}