// Components import
import AccessibilityTools from "./AccessibilityTools";

// Library imports
import { IoSearch } from "react-icons/io5";

const DashboardHeader = ({ username, message, profileImage }: any) => {
   return (
     <div className="p-4 flex items-start justify-between">
       <div className="flex gap-4 items-end">
        <img src={profileImage} alt="Profile" className="w-20 h-20 object-cover rounded-full border-4 border-white"/>
        <div>
         <h1 className="text-2xl font-semibold">Hello, {username}</h1>
         <p>{message}</p>
        </div>
       </div>
       <div className="text-right flex">
         <AccessibilityTools/>
         <input
           type="text"
           placeholder="Search"
           className="border border-slate-900 p-2 ml-4 rounded-lg"
         />
         <button className="px-4 ml-2 rounded-lg bg-slate-900 text-white text-lg hover:bg-slate-600">
          <IoSearch />
         </button>
       </div>
     </div>
   );
 };
 
 export default DashboardHeader;
 