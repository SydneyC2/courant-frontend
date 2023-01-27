import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Courant</h1>
          <p>
            Hisdfhksggafgdshsdh asdgfgjdsdf ukfgrufwae uafwefgwaf uafeefgweaf werwegvsaddf ityiusycf,
            easffgjaeaf ajffgvdjgs uwegfywakegfh visdhvadospaewf wea sdjafjgajkf, afjcfdc.
          </p>
          <span>Already have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="text" placeholder='Name' />
          <button>Register</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register
