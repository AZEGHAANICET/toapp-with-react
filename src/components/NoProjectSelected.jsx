import noProjectSelected from '../assets/no-projects.png'
import Button from "./Button.jsx";
export default  function NoProjectSelected({onStartAddProject}){

  return <div className="flex flex-col mt-24 text-center w-2/3 items-center">
    <img src={noProjectSelected} className="w-16 h-16"/>
    <h2 className="text-xl font-bold text-stone-500 mt-4">No project Selected</h2>
    <p className="mb-4 text-stone-400">Select a projet or get started with a new one</p>
    <Button onClick={onStartAddProject}>Create a new Project</Button>

  </div>
}
