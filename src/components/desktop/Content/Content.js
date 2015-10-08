import React, { Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Content.css';

@withStyles(styles)
class Content extends Component {
  state = {
    viewport: 0
  }
  componentDidMount() {
    this.setState({
      viewport: window.innerWidth
    });
  }
  render(){
    console.log(this.state.viewport);
    return(
      <div></div>
    )
  }
}

export default Content;
