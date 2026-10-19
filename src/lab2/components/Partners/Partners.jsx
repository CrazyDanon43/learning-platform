import PartnerCard from '../PartnerCard/PartnerCard';
import './Partners.css';

function Partners({ partners }) {
  return (
    <section className="lab2-partners" id="partners">
      <h2 className="lab2-section-title">Партнеры</h2>
      <div className="lab2-partners__panel">
        <div className="lab2-partners__grid">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              logoLabel={partner.logoLabel}
              logoColor={partner.logoColor}
              description={partner.description}
              url={partner.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
