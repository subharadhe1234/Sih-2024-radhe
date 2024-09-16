// ShadCN import
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// Icon import
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
// Component import
import Logo from "@/components/logo";
// Asset import
import UniversityImage from "@/assets/University_of_Calcutta.jpg"
// Library import
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex min-h-screen justify-between min-w-screen overflow-hidden">
      <div className="flex justify-center align-middle shrink md:grow">
        <div className="flex flex-col justify-center w-full max-w-md p-8 space-y-6 bg-white">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold">Welcome to Appraise</h1>
          <p className="text-muted-foreground">Create a new Account</p>
          <div className="space-y-4">
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher">Faculty</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Create a strong password" />
            <Button className="w-full bg-green-700">Signup</Button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Button variant="outline" className="flex-1">
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="flex-1">
              <FaApple className="w-5 h-5 mr-2" />
              Sign up with Apple
            </Button>
          </div>
          <p className="text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
      <img src={UniversityImage} alt="University" className="w-1/2 object-cover rounded-l-2xl hidden md:block" />
    </div>
  )
}