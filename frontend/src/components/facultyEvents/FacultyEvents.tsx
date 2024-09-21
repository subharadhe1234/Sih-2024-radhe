// library import
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
// Interface import
import { FacultyDashboardPageMethod } from "@/lib";

export default function FacultyEvents() {
  const setHeaderMessage: FacultyDashboardPageMethod = useOutletContext();
  useEffect(() => {
    setHeaderMessage("Mark your events and explore more");
  }, []);
  return (
    <>
      <h1>This is faculty events</h1>
    </>
  );
}
