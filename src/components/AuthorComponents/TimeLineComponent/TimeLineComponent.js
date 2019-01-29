/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import idGenerator from 'react-id-generator'

class TimeLineComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    const TimeLineItems = this.props.timelineData.map(info => (
      <TimelineItem
        key={idGenerator()}
        dateText={info.date}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3 style={{ color: '#61b8ff' }}>{info.date}</h3>
        <p>{info.text}</p>
      </TimelineItem>
    ))
    return <Timeline lineColor="#ddd">{TimeLineItems}</Timeline>
  }
}

export default TimeLineComponent
