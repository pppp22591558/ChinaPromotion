import React, {Component} from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './LoadingPage.css';
import { get as getContent } from '../../constants/ABTest';
import { flattenDeep, compact } from 'lodash';

@withStyles(styles)
class LoadingPage extends Component {
  render(){
    const { version } = this.props
    const content = compact(flattenDeep(Object.entries(getContent(version)).map(c => {
      return ['header', 'header_1', 'header_2', 'subtitle'].map(t => {
        if (typeof c[1] === 'object') {
          return c[1][t]
        }
      })
    })))

    return(
      <div>
        <h1>Loading</h1>
        <div className="site-content">
          { content.map((c, i) => <h1 key={i}>{c}</h1>) }
        </div>
      </div>
    )
  }
}

export default LoadingPage;
