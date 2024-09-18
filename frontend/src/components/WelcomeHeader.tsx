//componenet import
import AccessibilityTools from "./AccessibilityTools"
import Logo from './logo';
//shadCN import
import { Button } from "./ui/button";
// Library import
import { Link } from "react-router-dom";

export default function WelcomeHeader(){
    return(
        <div className="max-w-screen" >
        <div className="py-4 flex items-center justify-between bg-background">
            <div className="ml-4"><Logo /></div>
            <div className="flex gap-10 items-start justify-between">
                <p className="px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-50 hover:text-blue-600">Explore</p>
                <p className="px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-50 hover:text-blue-600">About</p>
                <p className="px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-50 hover:text-blue-600">Contact Us</p>
            </div>
            <div className="flex gap-2 mr-4 items-center">
                <AccessibilityTools/>
                <Link to="/login">  
                    <Button className="bg-blue-600 dark:text-white">
                        Signin
                    </Button>
                </Link>
            </div>
        </div>
        </div>
    )  

}