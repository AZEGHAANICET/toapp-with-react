export default function ProjectProcessing({...project}){
  return <div className="mt-4 bg-orange-100 p-5 rounded-2xl h-">
  <div>
    <h1>{project.title}</h1>
    <h2>{project.dueToDate}</h2>
  </div>
    <p className="overflow-auto max-h-[200px]">{project.description}</p>

  </div>
}
