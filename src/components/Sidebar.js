import * as React from 'react'

class Sidebar extends React.Component {
  render(){
    const { image } = this.props
    return (
      <div className="sidebar">
         { image.image ? image.image : ''}
      </div>
    )
  }
}

export default Sidebar