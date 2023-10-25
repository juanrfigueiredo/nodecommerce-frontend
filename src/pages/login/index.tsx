import { useAuth } from '../../contexts/auth.context';
import styles from '../../styles/login.module.css';

const LoginPage = () => {
  const { signIn } = useAuth();
  async function submitForm() {
    
    const loginElement = document.getElementById('login') as HTMLInputElement;
    const passwordElement = document.getElementById('password') as HTMLInputElement;
    await signIn(loginElement.innerText, passwordElement.innerText, '/page2');
  }

  return(
    <>
    <div className={styles.container}>
    <form className={styles.form}>
    <div><label htmlFor="login">Login</label></div>
    <input id="login" type="text" className={styles.input}/>
    <br/>
    <div><label htmlFor="password">Password</label></div>
    <input id="password" type="password" className={styles.input}/>
    <br/>
    <div><input id="entrar" type="button" className={styles.entrar} value="Entrar" onClick={submitForm}/></div>
    </form>
    </div>
    </>
  )
}

export default LoginPage;