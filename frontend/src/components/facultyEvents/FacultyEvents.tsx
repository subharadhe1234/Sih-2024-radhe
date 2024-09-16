// library import
import { useOutletContext } from "react-router-dom";
import {useEffect} from 'react'
// Interface import
import { NavElements, FacultyDashboardPageMethods } from "@/lib";

export default function FacultyEvents(){
   const [setNavElements, setHeaderMessage]: FacultyDashboardPageMethods = useOutletContext();
   useEffect(()=>{
      setNavElements((prev: NavElements[])=> prev.map((e: NavElements)=> ({...e, active: e.displayName === "Events" ? true: false})))
      setHeaderMessage("Mark your events and explore more")
   }, [])
   return (
      <>
         <h1>This is faculty events</h1>
      </>
   )
}