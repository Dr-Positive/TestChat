import styles from "./LoginPage.module.css";
import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useContext } from "react";
import { Link } from "react-router-dom";

// export const mainPage = () => {
// const [form , setForm] = useState ({
//   email: "", password: ''
// })

function LoginPage({}) {
  const { loading, request, error, clearError, query } = useHttp();
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  }; 

  const api = async () => {    
    loginHandler()
    registerHandler()
  }
  // const headers = new Headers()
  // headers.append('Access-Control-Allow-Headers', 'Content-Type,Authorization',
  // 'Access-Control-Allow-Credentials', 'true');
  

  const registerHandler = async () => {
    try {
      const data = await query("http://91.191.236.14:1600/api/profile",
       "GET", {...values,}
       );       
       console.log("Data", data);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("http://91.191.236.14:1600/api/auth/login",
        "Post", { ...values }
      ); 
           
      console.log("Data", data);
    } catch (e) {}
  };

  // const ws = new WebSocket('ws://91.191.236.14:1600/')
  // useEffect(( ) => {
  //   ws.addEventListener('message', (e) => {
  //     console.log(e)
  //   })
  // })

  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["form"]}>
          <h1>Авторизация</h1>
          <div className={styles["form-container"]}>
            <div>
              <input
                className={styles["reglogForm-input"]}type="login" id="login" name="login" placeholder="Имя пользователя" onChange={handleFieldChange} />
              <input
                className={styles["reglogForm-input"]} type="password" id="password" name="password" placeholder="Пароль" onChange={handleFieldChange} />
                <Link to={"/main"}>
                <button className={styles["logButton"]} onClick={api}>
                Войти
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
