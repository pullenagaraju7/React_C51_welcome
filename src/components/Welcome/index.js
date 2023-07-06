import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  onSub = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  subscribeButton = () => {
    const {subscribe} = this.state
    if (subscribe === true) {
      return (
        <button type="button" className="button" onClick={this.onSub}>
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="button" onClick={this.onSub}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy learning</p>
        {this.subscribeButton()}
      </div>
    )
  }
}

export default Welcome
