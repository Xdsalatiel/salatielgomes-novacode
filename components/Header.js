import Link from 'next/link'
export default function Header(){
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">Salatiel Gomes <span className="text-sm text-gray-400">| NovaCode Studio</span></Link>
        <nav className="space-x-6 text-sm text-gray-300 hidden md:block">
          <Link href="#services">Serviços</Link>
          <Link href="/#portfolio">Portfólio</Link>
          <Link href="/about">Sobre</Link>
          <a href="https://wa.me/5548998284253?text=Ol%C3%A1%2C%20vim%20pelo%20site%20de%20Salatiel%20Gomes%20e%20gostaria%20de%20saber%20mais%20sobre%20desenvolvimento%20de%20sites%20e%20aplicativos." target="_blank" rel="noreferrer" className="ml-4 inline-block px-4 py-2 rounded-md border border-transparent hover:bg-white/5">Contato</a>
        </nav>
      </div>
    </header>
  )
}
