import { useState, useRef } from 'react';
import './Menu.css';
import { MENU_DATA } from '../../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');
  const categoriesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element && contentRef.current) {
      const offsetTop = element.offsetTop;
      contentRef.current.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (!contentRef.current) return;

    const scrollTop = contentRef.current.scrollTop;
    const categories = MENU_DATA;

    for (let i = categories.length - 1; i >= 0; i--) {
      const element = document.getElementById(`category-${categories[i].id}`);
      if (element && element.offsetTop <= scrollTop + 120) {
        setSelectedCategory(categories[i].id);
        break;
      }
    }
  };

  return (
    <div className="menu-container">
      {/* Заголовок и категории */}
      <div className="menu-header">
        <h1 className="menu-title">🍽️ Меню Botanica</h1>
        
        <div className="categories-container">
          <div className="categories-scroll" ref={categoriesRef}>
            {MENU_DATA.map((category) => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => scrollToCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Контент меню */}
      <div className="menu-content" ref={contentRef} onScroll={handleScroll}>
        {MENU_DATA.map((category) => (
          <div key={category.id} id={`category-${category.id}`} className="category-section">
            <div className="section-header">
              <h2 className="section-title">{category.title}</h2>
            </div>

            <div className="menu-items">
              {category.data.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  
                  <div className="item-content">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <span className="item-price">{item.price} ₽</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bottom-space"></div>
      </div>
    </div>
  );
};

export default Menu;