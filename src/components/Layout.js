import  React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Nav from './Navigation'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import ToggleSwitch from '../components/ToggleSwitch'
import '../styles/styles.scss'
import { FooterLogo } from "../staticContent"
import { CSSTransition } from "react-transition-group";

function Layout({ pageTitle, sideImage, children }) {
  
  useEffect(() => {
    setIsVisible(true)
  },[]);
  
  const [isVisible, setIsVisible] = useState(false)
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  
  return (
    <CSSTransition in={isVisible} timeout={500} className="page">
      <div>
        <Sidebar
          image={sideImage}
        />
        <h1 className="pagetitle">
            <Link to="/">
              WaveHounds
            </Link>
        </h1>
        {/* <ToggleSwitch/> */}
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