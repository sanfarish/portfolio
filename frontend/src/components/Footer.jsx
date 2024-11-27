import { useEffect, useState } from "react"
import visitorAPI from "../apis/visitorAPI"

export default function Footer() {
  const [visitors, setVisitors] = useState(0)
  
  function setNewKey() {
    const newKey = crypto.randomUUID()
    localStorage.setItem("farishasan_visit", newKey)
    visitorAPI({
      method:"post",
      url: "/visitors",
      body: { visitor: newKey },
      config: { headers: { Authorization: `Bearer ${import.meta.env.VITE_SECRET_TOKEN}` } }
    }).finally(() => {
      visitorAPI({ method:"get", url: "/visitors/monthly" })
      .then(data => setVisitors(data))
    })
  }

  useEffect(() => {
    
    function visitCheck() {
      const visitKey = localStorage.getItem("farishasan_visit")
      if (!visitKey) {
        setNewKey()
        visitorAPI({ method:"get", url: "/visitors/monthly" })
        .then(data => setVisitors(data))
      } else {
        visitorAPI({ method:"get", url: `/visitors/${visitKey}` })
        .catch(() => {
          console.clear()
          setNewKey()
        })
        .finally(() => {
          visitorAPI({ method:"get", url: "/visitors/monthly" })
          .then(data => setVisitors(data))
        })
      }
    }


    visitCheck()
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
