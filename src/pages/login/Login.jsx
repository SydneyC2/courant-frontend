import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import './Login.scss'

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Hisdfhksggafgdshsdh asdgfgjdsdf ukfgrufwae uafwefgwaf uafeefgweaf werwegvsaddf ityiusycf,
            easffgjaeaf ajffgvdjgs uwegfywakegfh visdhvadospaewf wea sdjafjgajkf, afjcfdc.
          </p>
          <span>Don't have an account?</span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
       </div>
        <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button onClick={handleLogin}>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
