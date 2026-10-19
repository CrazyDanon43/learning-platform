import './Hero.css';

function Hero({ imageSrc, imageAlt, title, onFindLecturer }) {
  return (
    <section className="lab2-hero" id="home">
      <div className="lab2-hero__media">
        <img src={imageSrc} alt={imageAlt} className="lab2-hero__image" />
      </div>

      <div className="lab2-hero__content">
        <h1 className="lab2-hero__title">{title}</h1>

        <div className="lab2-hero__extras">
          <ul className="lab2-hero__stats">
            <li>
              <strong>10</strong>
              <span>лекторов-экспертов</span>
            </li>
            <li>
              <strong>30+</strong>
              <span>дисциплин</span>
            </li>
            <li>
              <strong>онлайн / офлайн</strong>
              <span>формат занятий</span>
            </li>
          </ul>

          <p className="lab2-hero__note">
            Подберём специалиста под задачу компании, вуза или НКО — от разовой
            лекции до учебного курса.
          </p>
        </div>

        <button type="button" className="lab2-hero__cta" onClick={onFindLecturer}>
          Найти лектора
        </button>
      </div>
    </section>
  );
}

export default Hero;
