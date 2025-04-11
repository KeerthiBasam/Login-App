// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isClicked: true}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="container">
        <Message isClicked={isClicked} />
        {isClicked ? (
          <Login login={this.onClickButton} />
        ) : (
          <Logout logout={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
