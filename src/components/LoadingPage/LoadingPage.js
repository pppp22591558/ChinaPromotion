import React, {Component} from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './LoadingPage.css';

@withStyles(styles)
class LoadingPage extends Component {
  render(){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
}

export default LoadingPage;
