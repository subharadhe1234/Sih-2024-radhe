// Components import
import StatCard from '@/components/facultyDashboardHome/StatCard';

// library import
import { useOutletContext } from "react-router-dom";
import {useEffect} from 'react'

export default function FacultyDashboardHome(){
   const [setNavElements, setHeaderMessage]: any = useOutletContext();

   useEffect(()=>{
      setNavElements((prev: any)=> prev.map((e: any)=> ({...e, active: e.displayName === "Home" ? true: false})))
      setHeaderMessage("Welcome to Faculty dashboard")
   }, [])

   const statsData = {
      journals: 126,
      events: 26,
      projects: 15,
      workingHours: {
        thisWeek: [3, 7, 4, 6, 8, 9, 5],
        lastWeek: [4, 6, 3, 7, 8, 6, 4],
      },
    };
   return (
      <>
         <div className="grid grid-cols-3 gap-4 mt-6">
            <StatCard title="Journals" value={statsData.journals}></StatCard>
            <StatCard title="Events" value={statsData.events}></StatCard>
            <StatCard title="Projects" value={statsData.projects}></StatCard>
         </div>
      </>
   )
}