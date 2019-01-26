import Gallery from 'react-image-show';
import React from 'react';

class Sample extends React.Component {
   
    render() {
        const events = this.props.work.map(event =>event.img);

        return (
            <Gallery images={events}
            width="920px"
            imagesWidth="800px"
            imagesHeight="450px"
            imagesHeightMobile="56vw"
            thumbnailsWidth="920px"
            thumbnailsHeight="12vw"
            indicators thumbnails imagesWidth fixedImagesHeight />
        );
    }
};

export default Sample;