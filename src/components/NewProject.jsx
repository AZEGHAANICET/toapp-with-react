import InputField from "./Input.jsx";
import Button from "./Button.jsx";
import {useState} from "react";
import {data} from "autoprefixer";
import ProjectProcessing from "./ProjectProcessing.jsx";

export default function NewProject({onSaveProject, ...project}){
  const [dataInput, setData] = useState({
    title:'',
    dueToDate:'',
    description:''
  });

  function handleData(inputName, data){


    setData(prevState => {

      return {
        ...prevState, [inputName]:data
      }
    })

  }
function save(){

    onSaveProject(dataInput)
  }



  return <div className="w-1/3 mt-10 bg-slate-200 p-10 h-1/2 rounded-2xl">
    <ul className="flex justify-between">
      <li><Button color="bg-orange-400" onClick={save}
      >Save</Button></li>
      <li><Button>Annuler</Button></li>
    </ul>
    <div>
      <InputField  label="Title" value = {project.title} onChange={(e)=>handleData('title', e.target.value)}/>
      <InputField  label="Due Date" value = {project.dueToDate} type="date" onChange={(e)=>handleData('dueToDate', e.target.value)}/>
      <InputField  label="Description" value ={project.description} textarea onChange={(e)=>handleData('description', e.target.value)}/>
    </div>
   <ProjectProcessing {...dataInput}/>
  </div>

}
