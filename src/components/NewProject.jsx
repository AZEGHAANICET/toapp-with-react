import InputField from "./Input.jsx";
import Button from "./Button.jsx";

export default function NewProject(){
  return <div className="w-1/3 mt-10">
    <ul className="flex justify-between">
      <li><button onClick={()=>{
        console.log("Save button clicked")
      }}>Save</button></li>
      <li><Button>Annuler</Button></li>
    </ul>
    <div>
      <InputField  label="Title"/>
      <InputField  label="Due Date" textarea/>
    </div>
  </div>

}
