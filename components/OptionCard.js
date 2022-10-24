import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons"

export default function OptionCard({ title }) {
  return (
    <div className="h-full w-full p-6 space-y-3 rounded-2xl bg-input">
      <div className="flex justify-between items-center">
        <p className="text-lg capitalize">{title}</p>
        <button className="group">
          <p className="text-sm text-gray-400 group-hover:text-white">
            View all
          </p>
        </button>
      </div>
      <div className="h-5/6 grid grid-rows-3 gap-3 items-center">
        {[...Array(3)].map((x, i) => (
          <div className="flex justify-between" key={i}>
            <div className="flex space-x-3 items-center">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="text-xl"
                flip={title == "expense" ? "vertical" : ""}
              />
              <div className="space-y-1">
                <p className="text-sm capitalize">
                  {title} {i}
                </p>
                <p className="text-xs text-gray-400">From wallet {i}</p>
              </div>
            </div>
            <p>฿ {(100000000).toLocaleString({ maximumFractionDigits: 2 })}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
