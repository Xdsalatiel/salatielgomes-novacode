import Link from 'next/link'
export default function ProjectCard({p}){
  return (
    <Link href={`/portfolio/${p.id}`} className="block card hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="w-full md:w-48 h-36 bg-gradient-to-br from-gray-700 to-gray-800 rounded-md flex items-center justify-center">Imagem</div>
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{p.short}</p>
          <div className="mt-3 text-xs text-gray-400">{p.category}</div>
        </div>
      </div>
    </Link>
  )
}
