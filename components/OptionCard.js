export default function OptionCard({ title }) {
  return (
    <div className="h-full w-full p-6 space-y-3 rounded-3xl bg-input">
      <div className="flex justify-between items-center">
        <p className="text-lg">{title}</p>
        <button className="group">
          <p className="text-sm text-gray-400 group-hover:text-primary">View all</p>
        </button>
      </div>
      <div className="h-5/6 grid grid-rows-3 gap-3 items-center">
        {[...Array(3)].map((x, i) => (
          <div className="flex space-x-3 items-center" key={i}>
            <div className="h-10 w-10 rounded-lg animate-pulse bg-gray-400"></div>
            <div className="space-y-1">
              <p className="text-sm">Expense {i}</p>
              <p className="text-xs text-gray-400">From wallet {i}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
