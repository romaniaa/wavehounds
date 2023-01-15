import * as React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
	render() {
		const { logo } = this.props
		return (
			<footer className='footer'>
				 { logo.image ? logo.image : ''}
				<ul>
					<li><Link to="">Instagram</Link></li>
					<li><Link to="">Email</Link></li>
				</ul>
			</footer>
			
		)
	}
}

export default Footer