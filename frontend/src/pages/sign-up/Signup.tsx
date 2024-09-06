/**
 * v0 by Vercel.
 * @see https://v0.dev/t/auASp7BuPAz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center w-full max-w-md p-8 space-y-6 bg-white">
        <div className="flex items-center space-x-2">
          <GraduationCapIcon className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold text-blue-500">APPRAISE</span>
        </div>
        <h1 className="text-2xl font-bold">Welcome to Appraise</h1>
        <p className="text-muted-foreground">Create a new Account</p>
        <div className="space-y-4">
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Create a strong password" />
          <Button className="w-full bg-green-700">Signup</Button>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Button variant="outline" className="flex-1">
            <ChromeIcon className="w-4 h-4 mr-2" />
            Sign up with Google
          </Button>
          <Button variant="outline" className="flex-1">
            <AppleIcon className="w-4 h-4 mr-2" />
            Sign up with Apple
          </Button>
        </div>
        <p className="text-center text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
      <div className="hidden w-full bg-cover lg:block" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }} />
    </div>
  )
}

function AppleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}