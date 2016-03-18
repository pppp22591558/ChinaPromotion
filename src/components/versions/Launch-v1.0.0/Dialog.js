import React, { Component } from 'react'
import cx from 'classnames'
import t from './translation'

class Dialog extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const dialogClass = cx({
      'dialog': true,
      [`dialog-${this.props.id}`]: true,
      'active': this.props.active
    })
    return(
      <div className={dialogClass} style={{ background: `url(${require('./images/0_1.svg')})` }}>
        <h3>{t(`dialog.slide_${this.props.id}`)}</h3>
      </div>
    )
  }
}

export default Dialog
