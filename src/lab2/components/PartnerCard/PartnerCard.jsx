import './PartnerCard.css';

function PartnerCard({ name, logoLabel, logoColor, description, url }) {
  return (
    <article className="lab2-partner-card">
      <div className="lab2-partner-card__head">
        <a
          className="lab2-partner-card__logo-link"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Сайт партнёра ${name}`}
        >
          <span className="lab2-partner-card__logo" style={{ color: logoColor }}>
            {logoLabel}
          </span>
          <span className="lab2-partner-card__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
      <p className="lab2-partner-card__description">{description}</p>
    </article>
  );
}

export default PartnerCard;
