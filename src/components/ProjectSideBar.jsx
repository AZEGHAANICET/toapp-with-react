import Button from "./Button.jsx";

export default function ProjectSideBar({onStartAddProject, projects}){
  return <div className="flex flex-col items-center bg-black w-1/3 rounded-tr-3xl rounded-br-3xl">
<h1 className="text-white py-20 text-center font-bold text-3xl text-chivo">YOUR PROJECTS</h1>
  <div>
    <Button onClick={onStartAddProject}>+ Add Project</Button>
  </div>
    <ul className="w-full">
      {projects.map((item, i)=>
        <li className="text-white font-chivo" key={item.id}>
            <button className="w-full rounded-xl px-2 py-1 my-1 text-white hover:bg-stone-800">{item.title}</button>
        </li>
      )}
    </ul>
    </div>



}
