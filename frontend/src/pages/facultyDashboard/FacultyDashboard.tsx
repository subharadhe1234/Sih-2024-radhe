// Components import
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
// Icon import
import {
  FaProjectDiagram,
  FaUserCircle,
  FaClipboardCheck,
} from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { BsBroadcast, BsFillCollectionPlayFill } from "react-icons/bs";
import { FaBookBookmark, FaClipboardQuestion } from "react-icons/fa6";
// Library import
import { Outlet } from "react-router-dom";
import { useState } from "react";
// Interface import
import { NavElements } from "@/lib";

const FacultyDashboard = () => {
  const [headerMessage, setHeaderMessage] = useState<string>(
    "Welcome to Faculty dashboard"
  );
  const navElements: NavElements[] = [
    {
      displayName: "Home",
      linkTo: "/facultydashboard/",
      logo: <RiHome2Line />,
    },
    {
      displayName: "Events",
      linkTo: "/facultydashboard/events",
      logo: <BsBroadcast />,
    },
    {
      displayName: "Appraisal Form",
      linkTo: "/facultydashboard/appraisalform",
      logo: <FaClipboardCheck />,
    },
    {
      displayName: "Lectures",
      linkTo: "/facultydashboard/lectures",
      logo: <BsFillCollectionPlayFill />,
    },
    {
      displayName: "Projects",
      linkTo: "/facultydashboard/projects",
      logo: <FaProjectDiagram />,
    },
    {
      displayName: "Research",
      linkTo: "/facultydashboard/research",
      logo: <FaBookBookmark />,
    },
    {
      displayName: "View Profile",
      linkTo: "/facultydashboard/viewprofile",
      logo: <FaUserCircle />,
    },
    {
      displayName: "Status",
      linkTo: "/facultydashboard/status",
      logo: <FaClipboardQuestion />,
    },
  ];

  return (
    <div className="flex bg-muted min-h-screen">
      <Sidebar navElements={navElements} />
      <div className="flex-1 p-4">
        <DashboardHeader
          username="Subhadip"
          message={headerMessage}
          profileImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div>
          <Outlet context={setHeaderMessage} />
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
