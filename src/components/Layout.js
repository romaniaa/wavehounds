import  React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Nav from './Navigation'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../styles/styles.scss'
import { FooterLogo } from "../staticContent"
import { CSSTransition } from "react-transition-group"

function Layout({ pageTitle, sideImage, children }) {

  // Darkmode and toggle
  const storedTheme =	typeof window !== 'undefined' && window.localStorage.getItem('theme')
	const [theme, setTheme] = useState(storedTheme || 'light')
  const [checked, setChecked] = useState(storedTheme === 'light' ? true : false)
  
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
    setChecked((checked) => {
      return checked === true ? false : true
    })
  }
  
  //Darkmode
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  // CSS transitions
  useEffect(() => {
    setIsVisible(true)
  },[])

  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div className={theme}>
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
        <label className="toggle-switch toggle-inner">
          <input defaultChecked={checked} type="checkbox" onChange={toggleTheme}/>
          <span className="switch" />
        </label>
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
    </div>
  )
}

export default Layout