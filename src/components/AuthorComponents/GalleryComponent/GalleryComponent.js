import React from 'react'

let Gallery
export default class Sample extends React.Component {
  componentDidMount() {
    Gallery = require('react-image-show').default
    this.forceUpdate()
  }
  render() {
    const events = this.props.work.map(event => event.img)
    if (Gallery) {
      return (
        <Gallery
          images={events}
          width="920px"
          imagesWidth="800px"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="920px"
          thumbnailsHeight="12vw"
          indicators
          thumbnails
          imagesWidth
          fixedImagesHeight
        />
      )
    } else return null
  }
}
