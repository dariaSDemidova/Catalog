import logo from "/assets/icons/logo.svg";
import arrow from "/assets/icons/arrow.svg";
import cross from "/assets/icons/cross.svg";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__info">
          <a href="#" className="header__logo">
            <img className="header__logo-img" src={logo} alt="logo" />
            <p className="header__logo-text">Логотип</p>
          </a>
          <div className="header__section">Каталог</div>
        </div>
        <input
          className="header__search"
          type="text"
          name="search"
          placeholder="Поиск по 100 000 товаров "
        />
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Информация о компании
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Контакты
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Полезные ссылки
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <header className="header-mobile">
        <div className="header-mobile__search">
          <img className="header-mobile__arrow" src={arrow} alt="arrow" />
          <div className="header-mobile__wrapper">
            <input
              className="header-mobile__input"
              type="text"
              name="search"
              placeholder="Запрос"
            />
            <img className="header-mobile__cross" src={cross} alt="cross" />
            <button className="header-mobile__button">Найти</button>
          </div>
        </div>
        <h1 className="header-mobile__title">Название категории</h1>
      </header>
    </>
  );
};

export default Header;
