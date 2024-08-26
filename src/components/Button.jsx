export default function Button({children, color, ...props}){

  return <button {...props} className={` text-white bg-slate-950 px-8 py-2 rounded-2xl hover:bg-slate-900 outline-none font-chivo ${color}`}>{children}</button>

}
