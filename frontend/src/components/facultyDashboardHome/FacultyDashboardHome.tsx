// Components import
import StatCard from "@/components/facultyDashboardHome/StatCard";

// library import
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

// Interface import
import { FacultyDashboardPageMethod } from "@/lib";

export default function FacultyDashboardHome() {
  const setHeaderMessage: FacultyDashboardPageMethod = useOutletContext();

  useEffect(() => {
    setHeaderMessage("Welcome to Faculty dashboard");
  }, []);

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
  );
}
