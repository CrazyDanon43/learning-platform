import './Header.css';

function Header({ items, activeSection, onNavigate }) {
  return (
    <header className="lab2-header">
      <nav className="lab2-header__nav" aria-label="Навигация платформы">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={
              activeSection === item.id
                ? 'lab2-header__link lab2-header__link--active'
                : 'lab2-header__link'
            }
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
