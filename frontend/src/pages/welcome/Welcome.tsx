//component import
import WelcomeHeader from "@/components/WelcomeHeader"
import { Button } from "@/components/ui/button"
//icon import
import { TiStarburst } from "react-icons/ti";
//library import

//Assets import

export default function Welcome(){
   return(
      <div>
         <div className="  sticky top-0 z-20">
            <WelcomeHeader/>
         </div>
         <div className="bg-muted">
            <div className="min-h-screen flex flex-col items-center justify-center ">
              <TiStarburst  className="text-slate-300 dark:text-slate-900 absolute animate-spin-slow" size={400}/>
               <h1 className="text-6xl font-bold space-y-4 z-10">
                  <p>A NEW</p>
                  <p>WAY TO</p>
                  <p>
                     <span className="text-blue-500">APPRAISE </span>    
                     YOURSELF
                  </p>
                  <Button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg">Start Now</Button>
                </h1>
            </div>
            <main className="flex flex-col items-center justify-center text-center p-6">
                <div className="h-96 w-5/12 relative flex items-center justify-end bg-welcome-page-bg bg-cover rounded-2xl opacity-85">
                  <div className="absolute w-3/5 -right-24 flex flex-col space-y-4 justify-end">
                    <div className="px-6 py-4 ml-12 bg-red-500 rounded-full text-white border-4 border-muted">Self Appraisal Form</div>
                    <div className="px-6 py-4 bg-purple-500 rounded-full text-white border-4 border-muted">Manage Events and Projects</div>
                    <div className="px-6 py-4 ml-12 bg-gray-500 rounded-full text-white border-4 border-muted">Automatic Activity Tracking</div>
                  </div>
                </div>
              <section className="w-full max-w-md mt-10">
                <h2 className="text-2xl mb-4">Contact our Team</h2>
                <form className="space-y-4">
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg text-black"
                    type="email"
                    placeholder="Your Email"
                  />
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg text-black"
                    placeholder="Your Message"
                    rows={4}
                  />
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Send</button>
                </form>
              </section>
            </main>
          </div>
        </div>
   )
}