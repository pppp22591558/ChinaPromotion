import React, { Component } from 'react'
import cx from 'classnames'
import t from './translation'

class Dialog extends Component {
  constructor(props) {
    super(props)
  }
  clickDialog(id){
    if (id === 1) {
      window.open('http://www.sojump.hk/jq/7294861.aspx')
    }
  }
  render(){
    const dialogClass = cx({
      'dialog': true,
      [`dialog-${this.props.id}`]: true,
      'active': this.props.active
    })
    return(
      <div
        className={dialogClass}
        style={{ background: `url(${require('./images/0_1.svg')})` }}
        data-link="true">
        <h3 onClick={this.clickDialog.bind(this, this.props.id)} data-link="true">{t(`dialog.slide_${this.props.id}`)}</h3>
      </div>
    )
  }
}

export default Dialog
