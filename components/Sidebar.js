import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFireFlameCurved,
  faFolder,
  faListUl,
  faWallet,
} from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function SideBar() {
  const router = useRouter()

  const onMenuClick = (e, path) => {
    e.preventDefault()
    router.push(`/${path ? path : ""}`)
  }

  return (
    <div className="w-1/12 flex flex-col items-center space-y-12 py-5 bg-background opacity-90">
      <a
        href={"/"}
        className="h-12 w-12 flex items-center justify-center text-2xl bg-primary rounded-lg"
      >
        <FontAwesomeIcon icon={faFireFlameCurved} className="text-2xl" />
      </a>
      <div>
        <button
          className={`${
            router.pathname.substring(1).length == 0 && "text-primary"
          } h-20 w-full hover:text-primary`}
          onClick={(e) => onMenuClick(e)}
        >
          <FontAwesomeIcon icon={faFolder} className="text-xl" />
        </button>
        <button
          className="h-20 w-full hover:text-primary"
          onClick={(e) => onMenuClick(e, "list")}
        >
          <FontAwesomeIcon icon={faListUl} className="text-xl" />
        </button>
        <button className="h-20 w-full hover:text-primary" onClick={() => {}}>
          <FontAwesomeIcon icon={faWallet} className="text-xl" />
        </button>
      </div>
    </div>
  )
}
