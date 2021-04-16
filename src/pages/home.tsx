import { useHistory } from 'react-router';
import styles from '../styles/Home.module.css';

function Home() {
  const routes = useHistory();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Home page
      </h1>
      <button 
        className={styles.button}
        onClick={() => routes.push('/login')}
      >
        Login
      </button>
    </div>
  )
}

export default Home;