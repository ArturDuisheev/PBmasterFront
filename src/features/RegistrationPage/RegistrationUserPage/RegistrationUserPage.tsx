import React, {useEffect, useState} from 'react';
import styles from './RegistrationUserPage.module.scss';
import {useNavigate} from "react-router-dom";
import {registerAsClient} from "../../../services/auth.service";
import SERVER_PATH from "../../../constants/SERVER_PATH";

const RegistrationUserPage = () => {
  useEffect(() => {
    document.title = 'Регистрация';
  }, []);

  const navigate = useNavigate();

  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [accept, setAccept] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!accept) {
      // @ts-ignore
      return setError("Чтобы продолжить необходимо принять политику конфиденциальности.");
    }

    return registerAsClient({
      name,
      lastname,
      email,
      phone,
      password1: password,
      password2: passwordVerification,
    })
      .then(() => navigate("/login"))
      .catch((err) => setError(err.message))
  };

  return (
    <div className={`${styles.registrationUserPage} appContainer`}>
      <h1 className={styles.registrationUserPage_title}>Регистрация</h1>
      <form className={styles.registrationUserPage_form} onSubmit={onSubmit}>
        {error && (
          // В старом коде className="auth-err"
          <div className={styles.registrationUserPage_form_error}>
            {error}
          </div>
        )}
        <input
          className={styles.registrationUserPage_form_input}
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={styles.registrationUserPage_form_input}
          type="text"
          name="lastname"
          placeholder="Фамилия"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          className={styles.registrationUserPage_form_input}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.registrationUserPage_form_input}
          type="text"
          name="phone"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          className={styles.registrationUserPage_form_input}
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className={styles.registrationUserPage_form_input}
          type="password"
          placeholder="Подтвердите пароль"
          value={passwordVerification}
          onChange={(e) => setPasswordVerification(e.target.value)}
          required
        />

        {/*В старом коде className="rel"*/}
        <div className={styles.registrationUserPage_form_confirm}> {/* pihui */}
          <input
            type="checkbox"
            id="really"
            checked={accept}
            onChange={(e) => setAccept(e.target.checked)}
          />

          <label htmlFor="really">
            Ознакомлен и согласен с условиями
            <a
              style={{
                textDecoration: "underline",
                marginLeft: "5px",
                color: "#000"
              }}
              target="_blank"
              href={SERVER_PATH + "files/privacy-policy.pdf"}
            >
              Политики конфиденциальности
            </a>
          </label>
        </div>

        <button className={styles.registrationUserPage_form_button} type="submit">Регистрация</button>
      </form>
    </div>
  );
};

export default RegistrationUserPage;