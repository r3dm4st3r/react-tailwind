import {Link} from "react-router-dom";

const Header = () => {
  return(
      <header className="shadow-lg drop-shadow-2xl py-1">
          <div className="container">
              <div className="flex items-center justify-between">
                  <div className="text-3xl uppercase tracking-widest">React Kit</div>
                  <div className="menu py-1">
                      <ul className="flex items-center justify-end">
                          <li><Link className="flex px-2 py-3" to="/">Home</Link></li>
                          <li><Link className="flex px-2 py-3" to="/about">About</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
  )
}
export default Header;