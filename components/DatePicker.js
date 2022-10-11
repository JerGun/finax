import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const moment = require("moment")
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function DatePicker() {
  const [currentWeek, setCurrentWeek] = useState({
    selectedDate: "",
    dayInWeek: [],
  })
  const [isHover, setIsHover] = useState({
    state: false,
    index: 3,
  })

  useEffect(() => {
    let tempWeek = []
    for (let i = 0; i < 7; i++) {
      let today = moment()
      tempWeek.push(today.add(-3 + i, "days").format())
    }
    setCurrentWeek({
      ...currentWeek,
      selectedDate: moment(),
      dayInWeek: tempWeek,
    })
  }, [])

  const onDateChange = (date) => {
    let tempWeek = []
    for (let i = 0; i < 7; i++) {
      let selectedDate = moment(date)
      tempWeek.push(selectedDate.add(-3 + i, "days"))
    }
    setCurrentWeek({
      ...currentWeek,
      selectedDate: date,
      dayInWeek: tempWeek,
    })
    setIsHover({ ...isHover, state: false })
  }

  const onPrevNext = (isPrev) => {
    let tempWeek = []
    for (let i = 0; i < 7; i++) {
      let selectedDate = moment(currentWeek.selectedDate)
      isPrev
        ? tempWeek.push(selectedDate.add(-10 + i, "days"))
        : tempWeek.push(selectedDate.add(4 + i, "days"))
    }
    setCurrentWeek({
      ...currentWeek,
      selectedDate: tempWeek[3],
      dayInWeek: tempWeek,
    })
  }

  return (
    <div className="h-full w-full grid grid-cols-9 rounded-2xl bg-input">
      <div className="flex items-center">
        <button
          className="h-1/2 w-1/3 flex items-center justify-center rounded-r-full bg-secondary"
          onClick={() => onPrevNext(true)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      {currentWeek.selectedDate &&
        currentWeek.dayInWeek &&
        [...Array(7)].map((x, i) => (
          <button
            className="h-full px-3"
            onClick={() => onDateChange(currentWeek.dayInWeek[i])}
            onMouseEnter={() =>
              setIsHover({ ...isHover, state: true, index: i })
            }
            onMouseLeave={() =>
              setIsHover({ ...isHover, state: false, index: i })
            }
            key={i}
          >
            <div
              className={`${
                (moment(currentWeek.selectedDate).date() ==
                  moment(currentWeek.dayInWeek[i]).date() &&
                  !isHover.state) ||
                (isHover.state && isHover.index == i)
                  ? "rounded-xl bg-primary transition duration-500"
                  : ""
              } h-full flex flex-col items-center justify-center`}
            >
              <p
                className={`${
                  (moment(currentWeek.selectedDate).date() !=
                    moment(currentWeek.dayInWeek[i]).date() &&
                    !isHover.state) ||
                  (isHover.state && isHover.index != i)
                    ? "text-gray-400"
                    : ""
                } text-xs `}
              >
                {weekdays[moment(currentWeek.dayInWeek[i]).day()]?.substring(
                  0,
                  3
                )}
              </p>
              <p className="font-bold">
                {moment(currentWeek.dayInWeek[i]).date()}
              </p>
              <p
                className={`${
                  (moment(currentWeek.selectedDate).date() !=
                    moment(currentWeek.dayInWeek[i]).date() &&
                    !isHover.state) ||
                  (isHover.state && isHover.index != i)
                    ? "text-gray-400"
                    : ""
                } text-xs `}
              >
                {months[moment(currentWeek.dayInWeek[i]).month()].substring(
                  0,
                  3
                )}
              </p>
            </div>
          </button>
        ))}
      <div className="flex items-center justify-end">
        <button
          className="h-1/2 w-1/3 flex items-center justify-center rounded-l-full bg-secondary"
          onClick={() => onPrevNext(false)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  )
}
