import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  // Функции для обработки кликов
  const openPhone = () => {
    window.open('tel:+79128267200');
  };

  const openVK = () => {
    window.open('https://vk.com/hp_botanica', '_blank');
  };

  const openMap = () => {
    const address = 'Кировская обл., г.Киров, улица Всесвятская 72, этаж 2';
    const url = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Основное изображение */}
        <div className="image-container">
          <img 
            src="https://avatars.mds.yandex.net/get-altay/13299246/2a0000018e60570e0f370fa0382d858dc5a3/XXXL" 
            alt="Botanica кальянная"
            className="main-image"
          />
        </div>

        {/* Приветственный текст */}
        <div className="section">
          <h2 className="section-title">Добро пожаловать в Botanica!</h2>
          <p className="section-text">
            Уютная кальянная в самом сердце Кирова, где современный комфорт 
            встречается с атмосферой расслабления и качественного отдыха.
          </p>
        </div>

        {/* Секция скидок */}
        <div className="section">
          <h2 className="section-title">🎁 Наши скидки</h2>
          
          {/* Дневная скидка */}
          <div className="discount-item">
            <div className="discount-icon">
              <span className="icon">🌞</span>
            </div>
            <div className="discount-info">
              <h3 className="discount-title">Дневная скидка 25% на бар и кальян</h3>
              <p className="discount-description">
                В будни, с 11:00 до 17:00
              </p>
            </div>
          </div>

          {/* Скидка в день рождения */}
          <div className="discount-item">
            <div className="discount-icon">
              <span className="icon">🎂</span>
            </div>
            <div className="discount-info">
              <h3 className="discount-title">Скидка в день рождения 10%</h3>
              <p className="discount-note">
                *Скидка дня рождения применяется только при предъявлении документа, удостоверяющего личность
              </p>
            </div>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="section">
          <h2 className="section-title">📞 Контакты</h2>
          
          {/* Телефон */}
          <div className="contact-item" onClick={openPhone}>
            <div className="contact-icon">
              <span className="icon">📞</span>
            </div>
            <div className="contact-info">
              <div className="contact-label">Телефон администратора</div>
              <div className="contact-value">+7 (912) 826-72-00</div>
              <div className="contact-hint">Нажмите для звонка</div>
            </div>
          </div>

          {/* Адрес */}
          <div className="contact-item" onClick={openMap}>
            <div className="contact-icon">
              <span className="icon">📍</span>
            </div>
            <div className="contact-info">
              <div className="contact-label">Наш адрес</div>
              <div className="contact-value">
                г. Киров, ул. Всесвятская 72, 2 этаж
              </div>
              <div className="contact-hint">Нажмите для открытия карты</div>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="contact-item" onClick={openVK}>
            <div className="contact-icon">
              <span className="icon">👥</span>
            </div>
            <div className="contact-info">
              <div className="contact-label">Мы ВКонтакте</div>
              <div className="contact-value">vk.com/hp_botanica</div>
              <div className="contact-hint">Нажмите для перехода</div>
            </div>
          </div>
        </div>

        {/* Галерея изображений */}
        <div className="section">
          <h2 className="section-title">🍃 Наша атмосфера</h2>
          <div className="gallery">
            <img 
              src="https://avatars.mds.yandex.net/get-altay/7179902/2a00000183d8472e516bf9e59696257889b7/XXXL" 
              alt="Интерьер 1"
              className="gallery-image"
            />
            <img 
              src="https://avatars.mds.yandex.net/get-altay/5473371/2a0000017f28a6bb99aa7591c16e83d47050/XXXL" 
              alt="Интерьер 2"
              className="gallery-image"
            />
            <img 
              src="https://avatars.mds.yandex.net/get-altay/10636707/2a0000018b0615bf1b948c772946e9edd001/XXXL" 
              alt="Интерьер 3"
              className="gallery-image"
            />
            <img 
              src="https://i.pinimg.com/736x/63/7f/10/637f106bb34579117e5a344ffdd8a5a7.jpg" 
              alt="Интерьер 4"
              className="gallery-image"
            />
          </div>
        </div>

        {/* Услуги */}
        <div className="section">
          <h2 className="section-title">✨ Наши услуги</h2>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">💨</div>
              <h3 className="service-title">Кальяны</h3>
              <p className="service-description">
                Широкий выбор табаков и вкусов
              </p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🍹</div>
              <h3 className="service-title">Напитки</h3>
              <p className="service-description">
                Освежающие коктейли и чаи
              </p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🎵</div>
              <h3 className="service-title">Музыка</h3>
              <p className="service-description">
                Приятная атмосферная музыка
              </p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">🎮</div>
              <h3 className="service-title">Развлечения</h3>
              <p className="service-description">
                Настольные игры и приставка
              </p>
            </div>
          </div>
        </div>

        {/* Время работы */}
        <div className="section">
          <h2 className="section-title">🕒 Время работы</h2>
          <div className="schedule">
            <div className="schedule-item">
              <div className="schedule-day">Пн - Чт</div>
              <div className="schedule-time">11:00 - 01:00</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-day">Пятница</div>
              <div className="schedule-time">11:00 - 03:00</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-day">Сб - Вс</div>
              <div className="schedule-time">12:00 - 03:00</div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="cta-section">
          <h2 className="cta-title">Ждём в гости! 🍃</h2>
          <p className="cta-text">
            Бронируйте столики заранее по телефону или через администратора
          </p>
          
          <button className="cta-button" onClick={openPhone}>
            📞 Забронировать стол
          </button>
        </div>

        <div className="bottom-space"></div>
      </div>
    </div>
  );
};

export default AboutUs;