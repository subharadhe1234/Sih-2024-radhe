// ShadCN import
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
// Component import
import Logo from "@/components/logo";
// Asset import
import UniversityImage from "@/assets/University_of_Calcutta.jpg"
// Library import
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen justify-between min-w-screen overflow-hidden">
      <div className="flex justify-center align-middle shrink md:grow">
        <div className="flex flex-col justify-center w-full max-w-md p-8 space-y-6 bg-white">
          <div className="flex items-center space-x-2">
          <Logo color="text-blue-500" />
          </div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="text-muted-foreground">Enter your Credentials to access your account</p>
          <div className="space-y-6">
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Enter your password" />
            <Button className="w-full bg-green-700">Login</Button>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Button variant="outline" className="flex-1">
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </Button>
            <Button variant="outline" className="flex-1">
              <FaApple className="w-5 h-5 mr-2" />
              Sign in with Apple
            </Button>
          </div>
          <p className="text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <img src={UniversityImage} alt="University" className="w-1/2 object-cover rounded-l-2xl hidden md:block" />
    </div>
  )
}