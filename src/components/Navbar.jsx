import { Link } from "react-router-dom"
function Navbar() {
  return (
    <header>
        <ul>
            <Link className="link" to='/'>Client</Link>
            <Link className="link" to ='/Data'>Data Clinet</Link>
        </ul>
    </header>
  )
}

export default Navbar
