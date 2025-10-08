import Link from 'next/link'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  return (
    <div>
      <section className="py-12">
        <div className="card p-8">
          <h1 className="text-3xl font-bold">Construo sites, apps e softwares sob medida.</h1>
          <p className="mt-3 text-gray-300">Sou <strong>Salatiel Gomes</strong> — desenvolvedor web na <em>NovaCode Studio</em>. Transformo ideias em produtos digitais prontos para o mercado.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/5548998284253?text=Ol%C3%A1%2C%20vim%20pelo%20site%20de%20Salatiel%20Gomes%20e%20gostaria%20de%20saber%20mais%20sobre%20desenvolvimento%20de%20sites%20e%20aplicativos." className="px-4 py-2 rounded-md bg-[--accent]">Peça um orçamento</a>
            <a href="#portfolio" className="px-4 py-2 rounded-md border border-white/10">Ver portfólio</a>
          </div>
        </div>
      </section>

      <section id="services" className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold">Desenvolvimento de Sites</h3>
            <p className="text-sm text-gray-300 mt-2">Landing pages, sites institucionais e e-commerces.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Aplicativos</h3>
            <p className="text-sm text-gray-300 mt-2">Protótipos e apps híbridos para Android/iOS.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Sistemas Web</h3>
            <p className="text-sm text-gray-300 mt-2">Dashboards, ERPs e integrações sob medida.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Portfólio</h2>
        <div className="grid gap-4">
          {projects.map(p=> <ProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      <section id="contact" className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <p className="text-gray-300">Quer transformar sua ideia em produto? Envie uma mensagem no WhatsApp ou preencha o formulário.</p>
            <a href="https://wa.me/5548998284253?text=Ol%C3%A1%2C%20vim%20pelo%20site%20de%20Salatiel%20Gomes%20e%20gostaria%20de%20saber%20mais%20sobre%20desenvolvimento%20de%20sites%20e%20aplicativos." target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 rounded-md bg-[--accent]">Abrir WhatsApp</a>
          </div>
          <form id="contact-form" className="card">
            <label className="block">Nome</label>
            <input id="name" name="name" className="w-full mt-1 p-2 rounded bg-transparent border border-white/10" />
            <label className="block mt-3">Email</label>
            <input id="email" name="email" className="w-full mt-1 p-2 rounded bg-transparent border border-white/10" />
            <label className="block mt-3">Mensagem</label>
            <textarea id="message" name="message" className="w-full mt-1 p-2 rounded bg-transparent border border-white/10" rows="4" />
            <button type="button" id="send-btn" className="mt-4 px-4 py-2 bg-[--accent] rounded">Enviar</button>
            <p id="status" className="text-sm text-gray-400 mt-2"></p>
          </form>
        </div>
      </section>
    </div>
  )
}
