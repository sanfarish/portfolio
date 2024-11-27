import { useEffect, useState } from "react"
import visitorsAPI from "../apis/visitorsAPI"

export default function Footer() {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {

    async function postVisitor() {
      const newKey = crypto.randomUUID()
      const res = await visitorsAPI({ method: "post", url: "/visitors", body: { visitor: newKey },
        config: { headers: { Authorization: `Bearer ${import.meta.env.VITE_SECRET_TOKEN}` } }
      })
      if (res.status === 201) {
        localStorage.setItem("farishasan_visit", res.data)
      }
    }

    async function getVisitors() {
      const data = await visitorsAPI({ method: "get", url: "/visitors/monthly" })
      if (data.status === 200) {
        setVisitors(data.data)
      }
    }

    async function visitCount() {
      const storedKey = localStorage.getItem("farishasan_visit")
      if (!storedKey) {
        postVisitor()
        getVisitors()
      } else {
        const res = await visitorsAPI({ method: "get", url: `/visitors/${storedKey}` })
        if (res.status !== 200) {
          postVisitor()
          getVisitors()
        } else {
          getVisitors()
        }
      }
    }
    
    visitCount()
  }, [])
  
  return (
    <footer className="text-white p-3" style={{ backgroundColor: "#084887" }} data-bs-theme="dark">
        <div className="d-flex flex-wrap align-items-center py-2 border-top border-white">
            <p className="col-12 col-sm-5 mb-0">© {new Date().getFullYear()} Faris Hasan</p>
            <div className="d-none d-sm-block col-sm-2 mb-0 text-end text-sm-center">
                <img src="/favicon.svg" alt="FH Logo" width={40} height={40} />
            </div>
            <div className="col-12 col-sm-5 text-sm-end mb-0">
              <p className="mb-0">Made with React & Bootstrap</p>
              <p className="mb-0">Monthly visitors: <button className="btn btn-dark" style={{ padding: "0 8px" }}>
                {visitors}
              </button></p>
            </div>
        </div>
    </footer>
  )
}
