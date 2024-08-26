export default  function InputField({textarea, label, ...props}){
  return <p className="flex flex-col gap-1">
    <label>{label}</label>
    {textarea?<textarea cols="4" rows="4" className="outline-none w-full" { ...props} />:<input type="text" { ...props} className="outline-none w-full" />}
  </p>
}
