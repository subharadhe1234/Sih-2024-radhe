// library import
import { useOutletContext } from "react-router-dom";
import {useEffect} from 'react'

export default function FacultyEvents(){
   const [setNavElements, setHeaderMessage]: any = useOutletContext();
   useEffect(()=>{
      setNavElements((prev: any)=> prev.map((e: any)=> ({...e, active: e.displayName === "Events" ? true: false})))
      setHeaderMessage("Mark your events and explore more")
   }, [])
   return (
      <>
         <h1>This is faculty events</h1>
      </>
   )
}