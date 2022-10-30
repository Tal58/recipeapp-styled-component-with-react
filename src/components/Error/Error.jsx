import { useNavigate } from 'react-router-dom'
import { ErrorButton, ErrorDiv } from './Error.styled'

function Error() {
  const navigate = useNavigate()
  return (
    <ErrorDiv>

<p>You made a mistake!!! Something went wrong!!! There's nothing here: 404!</p>
        <img alt="" src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"/>
        <ErrorButton onClick={() => navigate("/")}>Back to home</ErrorButton>
    </ErrorDiv>

  
  )
}

export default Error