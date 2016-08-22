import React, {Component} from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './LoadingPage.css';
import { get as getContent } from '../../constants/ABTest';
import { flattenDeep, compact } from 'lodash';

@withStyles(styles)
class LoadingPage extends Component {
  // state = {
  //   position: 0,
  // }
  // componentDidMount() {
  //   this.posAnimation = setInterval(() => {
  //     const { position } = this.state
  //     if (position >= 750) {
  //       this.setState({ position: 0 })
  //     } else {
  //       this.setState({ position: position + 150 })
  //     }
  //   }, 200)
  // }
  // componentWillUnmount() {
  //   clearInterval(this.posAnimation)
  // }
  render(){
    const { version } = this.props
    // const { position } = this.state
    const content = compact(flattenDeep(Object.entries(getContent(version)).map(c => {
      return ['header', 'header_1', 'header_2', 'subtitle'].map(t => {
        if (typeof c[1] === 'object') {
          return c[1][t]
        }
      })
    })))

    return (
      <div>
        <div className="loading-img">
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
        </div>
        <div className="site-content">
          { content.map((c, i) => <h1 key={i}>{c}</h1>) }
        </div>
      </div>
    )
  }
}

export default LoadingPage;
