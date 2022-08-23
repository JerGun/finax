import Input from "../components/Input"
import SideBar from "../components/Sidebar"
import OptionCard from "../components/OptionCard"
import RateCard from "../components/RateCard"

export default function Home() {
  return (
    <div className="bg-white">
      <div className="h-screen w-full flex bg-background opacity-90">
        <SideBar />
        <div className="h-full w-0.5 bg-black"></div>
        <div className="w-full px-10 pt-10 space-y-5">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Overview</p>
            <Input placeholder={"Search"} />
          </div>
          <div className="h-5/6 w-full flex space-x-5">
            <div className="h-full w-3/4 grid gap-5">
              <div className="h-1/12 w-full row-span-1 rounded-3xl bg-input"></div>
              <div className="h-full w-full flex row-span-6 rounded-3xl bg-input">
                <div className="h-full w-8/12"></div>
                <div className="h-ful w-4/12 flex flex-col items-center p-10 space-y-5">
                  <RateCard type={"income"}/>
                  <RateCard type={"expense"}/>
                </div>
              </div>
            </div>
            <div className="h-full w-1/3 grid grid-rows-2 gap-5">
              <OptionCard title={"income"} />
              <OptionCard title={"expense"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
