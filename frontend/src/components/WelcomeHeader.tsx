//componenet import
import AccessibilityTools from "./AccessibilityTools"
import Logo from './logo';
//shadCn import
import { Button } from "./ui/button";
// Library import
import { Link } from "react-router-dom";

export default function WelcomeHeader(){
    return(
        <>
        <div className="p-4  flex items-start justify-between">
            <div className='mb-6 p-4'><Logo color="text-blue-500" /></div>
            <div className="flex gap-4 items-end justify-between">
             <p className="flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600">Explore</p>
             <p className="flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600">About</p>
             <p className="flex gap-2 items-center p-4 mr-6 cursor-pointer rounded-r-lg hover:bg-blue-50 hover:text-blue-600">Contact Us</p>
            </div>
            <div className="flex">
                <div className="mr-5 flex">
                    <AccessibilityTools/>
                </div>   
                <Button className="bg-blue-700">
                    <Link to="/login" className="text-white-500">
                         signin
                    </Link>
                </Button>
             </div>
        </div>
        </>
    )  

}