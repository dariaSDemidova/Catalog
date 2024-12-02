import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__category">
        <ul className="filter__category-list">
          <li className="filter__category-item">
            <a className="filter__category-link" href="#">
              Название категории
              <span className="filter__category-amount">3</span>
            </a>
          </li>
          <li className="filter__category-item">
            <a className="filter__category-link" href="#">
              Название категории
              <span className="filter__category-amount">3</span>
            </a>
          </li>
          <li className="filter__category-item">
            <a className="filter__category-link" href="#">
              Название категории
              <span className="filter__category-amount">3</span>
            </a>
          </li>
          <li className="filter__category-item active">
            <a className="filter__category-link" href="#">
              Название категории
              <span className="filter__category-amount">3</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="filter__price">
        <h2 className="filter__price-title">Цена</h2>
        <div className="filter__price-inputs">
          <div className="filter__price-input-wrapper">
            <span className="filter__price-placeholder">от</span>
            <input
              type="number"
              name="price"
              className="filter__price-input"
              placeholder="5 500 ₽"
            />
          </div>
          <div className="filter__price-divider"></div>
          <div className="filter__price-input-wrapper">
            <span className="filter__price-placeholder">до</span>
            <input
              type="number"
              name="price"
              className="filter__price-input"
              placeholder="5 500 ₽"
            />
          </div>
        </div>
      </div>

      <div className="filter__brand">
        <div className="filter__brand-wrapper">
          <h2 className="filter__brand-title">Бренд</h2>
          <button className="filter__brand-button">Очистить</button>
        </div>
        <input
          type="text"
          name="search"
          className="filter__brand-search"
          placeholder="Поиск"
        />
        <ul className="filter__brand-list">
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
                checked={true}
                readOnly
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
        </ul>
      </div>

      <div className="filter__size">
        <h2 className="filter__size-title">Размер</h2>
        <ul className="filter__brand-list">
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
          <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="filter__brand-input"
              />
              <span className="filter__brand-checkmark"></span>
              <span className="filter__brand-name">Атрибут</span>
            </label>
            <span className="filter__brand-amount">3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
