
export default function Footer() {
  return (
    <footer className="text-white p-3" style={{ backgroundColor: "#084887" }} data-bs-theme="dark">
        <div className="d-flex flex-wrap align-items-center py-2 border-top border-white">
            <p className="col-8 col-sm-4 mb-0">© {new Date().getFullYear()} Faris Hasan</p>
            <div className="col-4 col-sm-4 mb-0 text-end text-sm-center">
                <img src="/favicon.svg" alt="FH Logo" width={40} height={40} />
            </div>
            <p className="col-sm-4 text-end mb-0">Made with React & Bootstrap</p>
        </div>
    </footer>
  )
}
