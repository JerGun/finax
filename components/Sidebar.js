import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SideBar() {
  return (
    <div className="w-1/12 flex flex-col items-center space-y-5 py-5">
      <p>Sidebar</p>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}
