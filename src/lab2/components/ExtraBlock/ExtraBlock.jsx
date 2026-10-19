import { useState } from 'react';
import './ExtraBlock.css';

function ExtraBlock({ lecturers }) {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    lecturerId: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.organization || !form.lecturerId || !form.message) {
      return;
    }
    setSent(true);
    setForm({ name: '', organization: '', lecturerId: '', message: '' });
  };

  return (
    <section className="lab2-extra" id="booking">
      <h2 className="lab2-section-title">Как это работает</h2>

      <div className="lab2-extra__panel">
        <div className="lab2-extra__steps">
          <article>
            <strong>01</strong>
            <h3>Выберите эксперта</h3>
            <p>Отфильтруйте лекторов по направлению и изучите программы дисциплин.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Оставьте заявку</h3>
            <p>Укажите организацию, формат и желаемые даты — мы свяжемся с вами.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Проведите занятие</h3>
            <p>Онлайн или офлайн: разовые лекции, пакеты занятий и корпоративные тренинги.</p>
          </article>
        </div>

        <form className="lab2-extra__form" onSubmit={handleSubmit}>
          <h3>Заявка на подбор лектора</h3>

          <label>
            <span>Ваше имя</span>
            <input name="name" value={form.name} onChange={handleChange} />
          </label>

          <label>
            <span>Организация</span>
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Лектор</span>
            <select name="lecturerId" value={form.lecturerId} onChange={handleChange}>
              <option value="">Выберите лектора</option>
              {lecturers.map((lecturer) => (
                <option key={lecturer.id} value={lecturer.id}>
                  {lecturer.fullName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Комментарий</span>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Тема, формат, даты..."
            />
          </label>

          <button type="submit">Отправить заявку</button>

          {sent && (
            <p className="lab2-extra__success">
              Заявка принята. Мы свяжемся с вами для уточнения деталей.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ExtraBlock;
