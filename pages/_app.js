import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
import SideBar from "../components/Sidebar"
import Loading from "../components/Loading"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex bg-white">
      <SideBar />
      <span className="h-screen w-0.5 bg-black"></span>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
