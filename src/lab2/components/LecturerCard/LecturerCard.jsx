import { useEffect, useRef, useState } from 'react';
import './LecturerCard.css';

function LecturerCard({
  fullName,
  photo,
  education,
  experience,
  degree,
  disciplines,
  tariffs,
}) {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const photoRef = useRef(null);
  const current = disciplines[activeDiscipline];

  useEffect(() => {
    const element = photoRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <article className="lab2-lecturer-card">
      <div className="lab2-lecturer-card__top">
        <div className="lab2-lecturer-card__photo-wrap">
          <div className="lab2-lecturer-card__photo-box" ref={photoRef}>
            {(!isVisible || !isLoaded) && (
              <div
                className="lab2-lecturer-card__photo-placeholder"
                aria-hidden="true"
              >
                Загрузка фото...
              </div>
            )}
            {isVisible && (
              <img
                src={photo}
                alt={fullName}
                className={
                  isLoaded
                    ? 'lab2-lecturer-card__photo lab2-lecturer-card__photo--loaded'
                    : 'lab2-lecturer-card__photo'
                }
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
              />
            )}
          </div>
          <div className="lab2-lecturer-card__photo-line" />
        </div>

        <div className="lab2-lecturer-card__info">
          <h3 className="lab2-lecturer-card__name">{fullName}</h3>
          <ul className="lab2-lecturer-card__meta">
            <li>
              <span>Образование</span>
              <strong>{education}</strong>
            </li>
            <li>
              <span>Стаж</span>
              <strong>{experience}</strong>
            </li>
            <li>
              <span>Учёная степень</span>
              <strong>{degree}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="lab2-lecturer-card__body">
        <div className="lab2-lecturer-card__disciplines">
          <p className="lab2-lecturer-card__label">Преподаваемые дисциплины</p>
          <div className="lab2-lecturer-card__tabs">
            {disciplines.map((discipline, index) => (
              <button
                key={discipline.title}
                type="button"
                className={
                  activeDiscipline === index
                    ? 'lab2-lecturer-card__tab lab2-lecturer-card__tab--active'
                    : 'lab2-lecturer-card__tab'
                }
                onClick={() => setActiveDiscipline(index)}
              >
                {discipline.title}
              </button>
            ))}
          </div>

          <p className="lab2-lecturer-card__summary">{current.summary}</p>
          <ul className="lab2-lecturer-card__topics">
            {current.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="lab2-lecturer-card__tariffs">
          <p className="lab2-lecturer-card__label">Тарифы</p>
          <ul className="lab2-lecturer-card__tariff-list">
            {tariffs.map((tariff) => (
              <li key={tariff.name}>
                <span>{tariff.name}</span>
                <strong>{tariff.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default LecturerCard;
