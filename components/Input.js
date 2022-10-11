import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Input({ placeholder, onChange }) {
  return (
    <div className="h-12 flex items-center p-2 px-5 rounded-xl bg-input">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none"
        onChange={onChange}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}
