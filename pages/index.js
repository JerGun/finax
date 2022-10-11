import Head from "next/head"
import DatePicker from "../components/DatePicker"
import Input from "../components/Input"
import OptionCard from "../components/OptionCard"
import RateCard from "../components/RateCard"

const assetPrefix = "/JerGun"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background opacity-90">
      <Head>
        <title>Finax</title>
        <meta name="description" content="Finance Management" />
      </Head>
      <div className="h-5/6 w-full px-10 pt-10 space-y-5">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Overview</p>
          {/* <Input placeholder={"Search"} /> */}
        </div>
        <div className="h-full w-full flex space-x-5">
          <div className="h-full w-3/4 grid gap-5">
            <DatePicker />
            <div className="h-full w-full flex row-span-6 rounded-2xl bg-input">
              <div className="h-full w-8/12 p-5">Line Chart ...</div>
              <div className="h-full w-4/12 flex flex-col items-center p-10 space-y-5">
                <div className="h-fit w-full p-5 space-y-5 rounded-xl bg-secondary">
                  <p>Wallet Name</p>
                  <p className="text-2xl font-bold">
                    ฿ {(100000000).toLocaleString({ maximumFractionDigits: 2 })}
                  </p>
                </div>
                <RateCard type={"income"} />
                <RateCard type={"expense"} />
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
  )
}
