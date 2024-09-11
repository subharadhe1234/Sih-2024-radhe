import { useEffect, useState } from "react";

export default function AccessibilityTools(){
   const [fontSize, setFontSize] = useState(16);
   useEffect(()=>{
      document.getElementsByTagName('html')[0].style.fontSize = `${fontSize}px`;
   }, [fontSize])
   return(
      <div className="flex bg-slate-200 rounded border border-gray-300 text-sm">
         <button className="px-3 border-r rounded-l border-gray-300 hover:bg-muted" onClick={()=>setFontSize((prev)=> fontSize>14 ? prev-1 : prev)}>-A</button>
         <button className="px-3 border-r border-gray-300 hover:bg-muted" onClick={()=>setFontSize(16)}>A</button>
         <button className="px-3 border-r border-gray-300 hover:bg-muted" onClick={()=>setFontSize((prev)=> fontSize<18 ? prev+1 : prev)}>A+</button>
         <button className="px-3 border-r border-gray-300 bg-white hover:bg-muted">A</button>
         <button className="px-3 rounded-r bg-black text-white hover:bg-gray-700">A</button>
      </div>
   )
}