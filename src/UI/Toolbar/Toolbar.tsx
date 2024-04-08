import React, {useState} from 'react';
import './Toolbar.module.scss';
import {useSelector} from "react-redux";
import {selectUI} from "../../slices/ui.slice";
import {selectUser} from "../../slices/user.slice";
import {selectUnreadMessages} from "../../slices/messages.slice";
import {Link} from "react-router-dom";
import DropdownService from "../../components/dropdownService";
import DropdownCountry from "../../components/dropdownCountry";
import SERVER_PATH from "../../constants/SERVER_PATH";
import DropdownSetout from "../../components/dropdownSetout";
import Menu from "../../components/Menu/Menu";
import {List} from "rsuite";
import ListItem from "../../components/ListItem/ListItem";

const Toolbar = () => {
  const [visibleCountry, setVisibleCountry] = useState<boolean>(false);
  const [visibleSetout, setVisibleSetout] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const ui = useSelector(selectUI);
  const user = useSelector(selectUser);
  const messages = useSelector(selectUnreadMessages);

  return (
    <header>
      <div className="container">
        <Link to="/" className='a-logo'>
          <img className='logo' src="/img/new-logo.svg" alt="Logo"/>
        </Link>
        <ul className="header__list">
          <li className="bldropdown">
            <DropdownService>
              <div onClick={() => {
                setVisibleCountry(false)
                setVisibleSetout(false)
              }}>
                <span className="header__link">Услуги</span>
                <img src="/img/afdsfads.png" alt=""/>
              </div>
            </DropdownService>
          </li>
          <li className="dropdown">
            <div onClick={() => {
              setVisibleCountry(!visibleCountry)
              setVisibleSetout(false)
            }}>
              <span className="header__link">Город</span>
              <img src="/img/afdsfads.png" alt=""/>
            </div>
            <DropdownCountry/>
          </li>
          <ListItem link="/articles" className="header__link" name="Статьи" />
          <ListItem link="/reviews" className="header__link" name="Отзывы" />
          <ListItem link="/contact" className="header__link" name="Контакты" />
        </ul>
        <div className="header__profile">
          {ui.isAuthorized ? (
            <div className="header__profile">
              <Link to={"/client/requests/create/title"} className="header__button">Дать задание</Link>
              <a href="tel:+79697148750" style={{height: "26px", width: "26px", marginRight: "12px"}}>
                <img className="" src="/img/ellipsewqrew.png" alt=""/>
              </a>
              <Link to={ui.isMaster ? "/master/chat" : "/client/chat"}
                    className='header__chat-link'
                    style={{display: 'flex'}}
                    onClick={() => {
                      setVisibleCountry(false)
                      setVisibleSetout(false)
                    }}
              >
                <img className="" src="/img/hfjsa.png" alt=""/>
                {messages.count > 0 && <div className='chat-message-counter'>{messages.count}</div>}
              </Link>
              <div
                className='yosetout'
                style={{cursor: 'pointer'}}
                onClick={() => {
                  setVisibleSetout(!visibleSetout)
                  setVisibleCountry(false)
                }}
              >
                <img
                  src={SERVER_PATH + user.avatar}
                  width="40px"
                  height="40px"
                  alt=""
                  style={{borderRadius: "20px", objectFit: "cover"}}
                />
                <img src="/img/dropdownuser.png" alt=""/>
                {/* {visibleSetout ? <DropdownSetout /> : null} */}
                <div className="bldropdown">
                  <DropdownSetout/>
                </div>
                {/* </Link> */}
              </div>
              {ui.isMaster && user.master[0] && (
                <>
                  <p className='master__moneys'>
                    {parseFloat(user.master[0].balance).toFixed(2)}₽
                  </p>
                  <div className='master__moneys__full'>
                    <Link to="/master/wallet">Пополнить баланс</Link>
                  </div>
                </>
              )}

            </div>
          ) : (
            <div className='header__profile'>
              <Link to="/login" className='login__link__pourhoie'>
                Вход
              </Link>
              <Link to="/register" className='regis__link__pourhoie'>
                Регистрация
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span/>
      </div>
      <Menu active={menuActive} setActive={setMenuActive}/>
    </header>
  );
};

export default Toolbar;