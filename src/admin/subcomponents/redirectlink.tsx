import { Link } from "react-router-dom";

interface Redirect {
    to : string,
    question : string
}


const Redirectlink : React.FC<Redirect> = ({to, question}) => {
  return (
    <>
        <Link className='auth_redirect_link' to={to}>{question}</Link>
    </>
  )
}

export default Redirectlink;