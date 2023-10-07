import React from 'react'
import { Link , Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
          <header>
              <nav>
                  <ul>
                      <li>
                          <Link to = '/form'>Form</Link>
                      </li>
                      <li><Link to = '/slider'>Slider</Link></li>
                      <li><Link to = '/todo'>Todo</Link></li>
                  </ul>
            </nav>    
          </header>

          <Outlet />
          
          <footer></footer>
    </div>
  )
}

export default Layout
