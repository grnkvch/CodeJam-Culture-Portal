import Gallery from 'react-photo-gallery';
import React from 'react';

export default class Sample extends React.Component {
   
    render() {
        const events = this.props.work.map(event => {
           return { src: event.img,
                    width: 1,
                    height: 1
                  }
        });
        return (
            <Gallery photos={events} />
        );
    }
}
const PHOTO_SET = [
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];