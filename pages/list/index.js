import { useRouter } from "next/router"
import { useEffect } from "react"

export default function List({ url }) {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query.type)
  }, [])

  return <div className="h-screen w-screen bg-background opacity-90">{}</div>
}
