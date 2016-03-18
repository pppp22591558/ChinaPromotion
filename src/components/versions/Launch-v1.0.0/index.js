import React, { Component } from 'react'
import SwipeView from './SwipeView'
import withContext from '../../../decorators/withContext';
import withStyles from '../../../decorators/withStyles'
import styles from './App.css'

@withContext
@withStyles(styles)
class FistLaunch extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    viewport: 0
  }
  componentDidMount() {
    this.setState({
      viewport: window.innerWidth,
    })
    window.addEventListener('resize', ()=>{
      this.setState({
        viewport: window.innerWidth,
      })
    })
  }
  render(){
    return (
      <div className="App-bg">
        <SwipeView/>
      </div>
    )
  }
}

export default FistLaunch
