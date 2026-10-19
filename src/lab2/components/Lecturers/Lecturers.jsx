import { useMemo, useState } from 'react';
import LecturerCard from '../LecturerCard/LecturerCard';
import './Lecturers.css';

function Lecturers({ lecturers }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return lecturers.filter((lecturer) => {
      const byGender = filter === 'all' || lecturer.gender === filter;
      const haystack = [
        lecturer.fullName,
        lecturer.education,
        ...lecturer.disciplines.map((item) => item.title),
      ]
        .join(' ')
        .toLowerCase();

      const byQuery = !normalized || haystack.includes(normalized);
      return byGender && byQuery;
    });
  }, [filter, lecturers, query]);

  return (
    <section className="lab2-lecturers" id="lecturers">
      <h2 className="lab2-section-title">Лекторы</h2>

      <div className="lab2-lecturers__toolbar">
        <div className="lab2-lecturers__filters">
          {[
            { id: 'all', label: 'Все' },
            { id: 'male', label: 'Мужчины' },
            { id: 'female', label: 'Женщины' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                filter === item.id
                  ? 'lab2-lecturers__filter lab2-lecturers__filter--active'
                  : 'lab2-lecturers__filter'
              }
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className="lab2-lecturers__search">
          <span>Поиск лектора</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ФИО или дисциплина"
          />
        </label>
      </div>

      <div className="lab2-lecturers__list">
        {filtered.map((lecturer) => (
          <LecturerCard
            key={lecturer.id}
            fullName={lecturer.fullName}
            photo={lecturer.photo}
            education={lecturer.education}
            experience={lecturer.experience}
            degree={lecturer.degree}
            disciplines={lecturer.disciplines}
            tariffs={lecturer.tariffs}
          />
        ))}

        {filtered.length === 0 && (
          <p className="lab2-lecturers__empty">Лекторы по запросу не найдены.</p>
        )}
      </div>
    </section>
  );
}

export default Lecturers;
