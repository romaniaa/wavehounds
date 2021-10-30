import * as React from 'react'
import { Link } from 'gatsby'
import Nav from './Navigation'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../styles/styles.scss'
import { SidebarImage, FooterLogo } from "../staticContent"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Sidebar
        image={SidebarImage}
      />
      <h1 className="pagetitle">
          <Link to="/">
            WaveHounds
          </Link>
      </h1>
      <div className="content">
        <Nav/>
        <title>{pageTitle}</title>
        <main>
          {children}
        </main>
       </div>
       <Footer 
        logo={FooterLogo}
       />
    </div>
  )
}

export default Layout