import React from 'react'
import { Link } from 'gatsby'

function Nav(){
	return(
	  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Stuff</Link>
          </li>
        </ul>
      </nav>
	)
}

export default Nav