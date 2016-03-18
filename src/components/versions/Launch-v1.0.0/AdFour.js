import React, { Component } from 'react'
import t from './translation'
import styles from './Ads.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
class AdFour extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    screenHeight: 0
  }
  componentDidMount() {
    this.setState({ screenHeight: Math.min(window.innerHeight, 736) })
  }
  render(){
    return(
      <div className="ad-four">
        <div className="view" style={{ height: this.state.screenHeight }}>
          <img className="question-panel" src={require('./images/3_1.png')}/>
          <img className="question-panel-bottom" src={require('./images/3_1_1.png')}/>
          <img className="answer-1"
            src={require('./images/3_2.svg')}/>
          <img className="answer-2"
            src={require('./images/3_3.svg')}/>
        </div>
      </div>
    )
  }
}

export default AdFour
