import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export const SidebarImage = {
	image: (<StaticImage className='sidebar__image-wrapper' src='./images/wavesBKG.jpg' alt='A wave' objectFit="cover"/>),
}

export const FooterLogo = {
	image: (<StaticImage className='footer__logo-wrapper' src='./images/WaveHoundLogo.jpg' alt='A wave' objectFit="cover"/>),
}