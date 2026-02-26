import Link from "next/link";

export default function Header() {
    return (
        <header className="flex w-full justify-center items-center p-8">
            <div className="flex justify-between w-full max-w-7xl">
                <span className="font-brand text-3xl font-medium">E Advocacia</span>
                <nav className="flex items-center gap-16">
                    <Link href={'#'}>Início</Link>
                    <Link href={'#sobre'}>Sobre</Link>
                    <Link href={'#servicos'}>Serviços</Link>
                    <Link href={'#contato'}>Contato</Link>
                </nav>
            </div>
        </header>
    )
}