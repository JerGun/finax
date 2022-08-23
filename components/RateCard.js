import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
  faAngleDown,
  faAngleUp,
  faMinus,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function RateCard({ type }) {
  useEffect(() => {
    formatNumber()
  }, [])

  const [data, setData] = useState({
    total: 10000000,
    rate: 50,
  })

  const formatNumber = () => {}

  return (
    <div className="h-fit w-full flex items-center space-x-5 p-5 rounded-xl bg-subInput">
      {data.rate < 25 ? (
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className={`${
            type == "income" ? "text-red-500" : "text-green-500"
          } animate-bounce`}
        />
      ) : data.rate < 50 ? (
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${
            type == "income" ? "text-red-500" : "text-green-500"
          } animate-bounce`}
        />
      ) : data.rate > 90 && data.rate < 110 ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : data.rate < 125 ? (
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`${
            type == "expense" ? "text-red-500" : "text-green-500"
          } animate-bounce`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          className={`${
            type == "expense" ? "text-red-500" : "text-green-500"
          } animate-bounce`}
        />
      )}

      <div>
        <p className="text-xl font-bold">
          ฿ {data.total.toLocaleString({ maximumFractionDigits: 2 })}
        </p>
        <div className="flex space-x-1 text-xs text-gray-400">
          <p className="capitalize">{type}</p>
          <p>in this month</p>
        </div>
      </div>
    </div>
  )
}
