// Write your code here
import './index.css'

const Message = props => {
  const {isClicked} = props
  return (
    <h1 className="message">{isClicked ? 'Please Login' : 'Welcome User'}</h1>
  )
}

export default Message
