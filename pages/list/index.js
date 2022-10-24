import { useEffect } from "react"
import AddCard from "../../components/list/AddCard"

export default function List({ url }) {
  useEffect(() => {}, [])

  return (
    <div className="h-screen w-screen bg-background opacity-90">
      <div className="h-full w-full p-10">
        <div className="h-full w-1/4 grid grid-rows-2 gap-5">
          <AddCard />
          <AddCard />
        </div>
        <div className="w-3/4"></div>
      </div>
    </div>
  )
}
