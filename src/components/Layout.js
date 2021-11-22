import  React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Nav from './Navigation'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../styles/styles.scss'
import { SidebarImage, FooterLogo } from "../staticContent"
import { CSSTransition } from "react-transition-group";

function Layout({ pageTitle, children }) {
  
  useEffect(() => {
    setIsVisible(true)
  },[]);
  
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <CSSTransition in={isVisible} timeout={500} className="page">
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
    </CSSTransition>
  )
}

export default Layout