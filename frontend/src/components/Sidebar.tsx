// Library imports
import { FaProjectDiagram, FaUserCircle, FaClipboardCheck } from 'react-icons/fa';
import { RiHome2Line } from "react-icons/ri";
import { BsBroadcast, BsFillCollectionPlayFill } from "react-icons/bs";
import { FaBookBookmark, FaClipboardQuestion } from "react-icons/fa6";

// Components import
import Logo from './logo';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg rounded-r-xl flex flex-col dark:bg-slate-900">
      <div className='mb-6 p-4'><Logo color="text-blue-500 dark:text-white" /></div>
      <ul className="">
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><RiHome2Line /> Dashboard</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><BsBroadcast /> Events</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><FaClipboardCheck /> Appraisal Form</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><BsFillCollectionPlayFill /> Lectures</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><FaProjectDiagram /> Projects</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><FaBookBookmark /> Research</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><FaUserCircle /> View Profile</li>
        <li className='flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 dark:hover:text-white'><FaClipboardQuestion /> Status</li>
      </ul>
      <div className='flex mt-auto mb-6'>
        <button className='px-6 py-2 w-5/6 mx-auto bg-red-100 text-red-500 font-semibold rounded hover:bg-red-200'>Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;
