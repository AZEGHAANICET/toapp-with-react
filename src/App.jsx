import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectProcessing from "./components/ProjectProcessing.jsx";

function App() {
const [project, setProject] = useState(
  {
    selectedProjectId:undefined,
    projects:[]
  }
);

function handleStartAddProject(){
  setProject(prevState=>{
    return {
      ...prevState,   selectedProjectId:null
    }
  })
}

function handleAddProject(projectData){
  setProject(prevState =>
  {
    const newProduct = {
      ...projectData, id:project.projects.length+1
    }
    return {

      ...prevState,  selectedProjectId: undefined, projects: [...prevState.projects, newProduct]
    }
  })


}

const val = {
  title:'',
  dueToDate:'',
  description:''
}
  function resetForm(){

  }
let content;

  if(project.selectedProjectId===null){
    content = <NewProject onSaveProject={handleAddProject}/>
  }else if(project.selectedProjectId===undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
console.log(project.projects)

  return (
    <div className="min-h-screen flex gap-10">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={project.projects}/>
      {content}
    </div>
  );
}

export default App;
