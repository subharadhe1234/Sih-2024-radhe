// Library import
import { Outlet } from "react-router-dom"
//component import
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Outlet/>
      </ThemeProvider>
    </>
  )
}

export default App
