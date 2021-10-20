import * as React from 'react'
import Nav from '../components/Nav'
import '../styles/styles.scss';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Nav/>
      <title>{pageTitle}</title>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout