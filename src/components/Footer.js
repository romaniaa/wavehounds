import * as React from 'react'

class Footer extends React.Component {
	render() {
		const { logo } = this.props
		return (
			<footer className='footer'>
				 { logo.image ? logo.image : ''}
				<ul>
					<li><a href={'https://www.instagram.com/wavehounds/'} target={'_blank'} rel="noreferrer">Instagram</a></li>
					<li><a href={'mailto:roman@romanhermens.com'} target={'_blank'} rel="noreferrer">Email</a></li>
				</ul>
			</footer>
			
		)
	}
}

export default Footer