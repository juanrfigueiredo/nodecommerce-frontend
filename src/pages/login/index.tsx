import styles from '../../styles/login.module.css';

function LoginForm() {
  function submitForm() {
    const loginElement = document.getElementById('login') as HTMLInputElement;
    const passwordElement = document.getElementById('password') as HTMLInputElement;

    fetch('http://localhost:3333/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginElement.value,
        password: passwordElement.value,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }
    }).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
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

export default function LoginPage() {
  return (
    <LoginForm/>
  )
}