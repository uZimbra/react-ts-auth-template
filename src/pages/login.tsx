import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../services/api';
import { userLogin } from '../services/authentication';
import styles from '../styles/Login.module.css'

function Login() {
  const routes = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      const apiData = await api.post('/v1/authenticate', {
        email,
        password
      })

      userLogin(apiData.data.jwt)

      routes.push('/user')

    } catch {}
  }

  return (
    <div className={styles.container}>
      <form noValidate>
        <div>
          <p>email</p>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>password</p>
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button 
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login