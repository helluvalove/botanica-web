import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Герой секция */}
      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в BOTANICA</h1>
          <p>Уютная кальянная с атмосферой комфорта и качественного отдыха</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/menu')}>
              🍽️ Посмотреть меню
            </button>
            <button className="btn-secondary" onClick={() => navigate('/booking')}>
              📅 Забронировать стол
            </button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="features">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💨</div>
              <h3>Премиум кальяны</h3>
              <p>Широкий выбор табаков и свежих фруктовых чаш от лучших мастеров</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍹</div>
              <h3>Барная карта</h3>
              <p>Авторские коктейли, премиальные напитки и вкусные закуски</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Атмосфера</h3>
              <p>Уютная обстановка, приятная музыка и комфортные зоны отдыха</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕒</div>
              <h3>До поздней ночи</h3>
              <p>Работаем до 03:00 в выходные дни для вашего комфортного отдыха</p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="cta-section">
        <div className="container">
          <h2>Готовы к отдыху?</h2>
          <p>
            Приходите в Botanica и окунитесь в атмосферу настоящего релакса. 
            Мы создали идеальное место для встреч с друзьями и приятного времяпровождения.
          </p>
          <button 
            className="btn-primary" 
            onClick={() => navigate('/booking')}
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
          >
            🍃 Забронировать стол онлайн
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;