import React, { Component } from 'react'
import t from './translation'
import styles from './Ads.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)

class AdOne extends Component {
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
    const styles = {
      land: {
        width: '100%'
      },
      mark: {
        width: '15%',
        zIndex: 1,
        position: 'absolute',
        display: 'block',
        top: '40%',
        left: '45%'
      }
    }
    return(
      <div className="ad-container ad-one" style={{ height: this.state.screenHeight }}>
        <div className="ad-header ad-one-header">
          <img className="palm palm-left" src={require('./images/palm-left.png')}></img>
          <img className="palm palm-right" src={require('./images/palm-right.png')}></img>
          <h2>{t('ad_one.header_1')}<br/>{t('ad_one.header_2')}<br/></h2>
        </div>
        <div className="view">
          <img ref="land" src={require('./images/1_5.svg')} style={styles.land}></img>
          <div className="download">
            <a href="https://appsto.re/cn/ixbvab.i" data-download="ios" data-link="true">
              <img ref="icon1" src={require('./images/1_4.svg')} data-download="ios" data-link="true"></img>
            </a>
            <a href="/download" data-download="android" data-link="true">
              <img ref="icon2" src={require('./images/1_3.svg')} data-download="android" data-link="true"></img>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default AdOne
