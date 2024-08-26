import Button from "./Button.jsx";

export default function ProjectSideBar(){
  return <div className="flex flex-col items-center bg-black w-1/3 rounded-tr-3xl rounded-br-3xl">
<h1 className="text-white py-20 text-center font-bold text-3xl text-chivo">YOUR PROJECTS</h1>
  <div>
    <Button>+ Add Project</Button>
  </div>
    <ul>
      <li className="text-white font-chivo">Leaning react</li>
    </ul>
    </div>



}
