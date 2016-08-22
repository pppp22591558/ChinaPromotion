import React, { Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Content.css';
import SwipeView from '../mobile/SwipeView';
import LoadingPage from '../LoadingPage';

@withStyles(styles)
class Content extends Component {

  state = {
    viewWidth: 0,
    viewHeight: 0,
    isActive: false,
  }

  componentWillUnmount() {
    this.setState({
      isActive: false
    });
  }

  componentDidMount() {
    //get the current window's width and height to switch mobile/ desktop view
    this.setState({
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight,
      isActive: true
    });
  }

  render(){
    const { version } = this.props
    return(
      this.state.isActive?
      <div className="Content">
        <SwipeView version = {version}/>
      </div>
      :
      <LoadingPage version = {version}/>
    )
  }
}

export default Content;
