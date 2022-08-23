import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Input({ placeholder }) {
  return (
    <div className="h-12 flex items-center p-2 px-5 rounded-xl bg-input">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}
