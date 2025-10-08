import { useRouter } from 'next/router'
import { projects } from '../../data/projects'

export default function Project(){
  const router = useRouter()
  const { id } = router.query
  const p = projects.find(x => x.id === id) || projects[0]

  return (
    <div>
      <div className="card p-6">
        <h1 className="text-2xl font-bold">{p.title}</h1>
        <p className="mt-2 text-gray-300">{p.short}</p>
        <ul className="mt-4 list-disc ml-6 text-gray-300">
          {p.bullets.map((b,i)=> <li key={i}>{b}</li>)}
        </ul>
        <div className="mt-6">Imagem do projeto (placeholder)</div>
      </div>
    </div>
  )
}
