import React, { Component } from 'react'
import t from './translation'
import styles from './Ads.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
class AdFive extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    screenHeight: 0
  }
  componentDidMount() {
    this.setState({ screenHeight: window.innerHeight })
  }
  render(){
    return(
      <div className="ad-five">
        <div className="view" style={{ height: this.state.screenHeight }}>
          <img className="ranking-panel"
            src={require('./images/5_1.png')}/>
          <img className="my-rank"
            src={require('./images/5_2.svg')}/>
        </div>
      </div>
    )
  }
}

export default AdFive
