/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import ModalVideo from 'react-modal-video';
import './youtubeStyle.css';
import '../../layout.scss';
class YoutubeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <Fragment>
        <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId={this.props.videoId} onClose={() => this.setState({ isOpen: false })} />
        <div className="openModal" onClick={this.openModal}>Watch the video</div>
      </Fragment>
    );
  }
}

export default YoutubeComponent;
