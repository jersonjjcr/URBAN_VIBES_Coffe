const Menu = ({ onOpenOrder }) => {
  const menuData = {
    'Cafés Calientes': [
      { 
        name: 'Espresso', 
        description: 'Café intenso, molido fino.',
        prices: { small: '$4,000', medium: '$4,500', large: '$5,000' }
      },
      { 
        name: 'Americano', 
        description: 'Espresso con agua caliente.',
        prices: { small: '$5,000', medium: '$5,500', large: '$6,000' }
      },
      { 
        name: 'Cappuccino', 
        description: 'Espresso + espuma cremosa.',
        prices: { small: '$6,000', medium: '$6,500', large: '$7,000' }
      },
      { 
        name: 'Latte', 
        description: 'Espresso con leche vaporizada.',
        prices: { small: '$6,500', medium: '$7,000', large: '$7,500' }
      },
      { 
        name: 'Mocaccino', 
        description: 'Café + leche + chocolate.',
        prices: { small: '$7,000', medium: '$7,500', large: '$8,000' }
      }
    ],
    'Fríos / Frappés': [
      { 
        name: 'Cold Brew', 
        description: 'Café infusionado en frío.',
        prices: { small: '$7,000', medium: '$7,500', large: '$8,000' }
      },
      { 
        name: 'Iced Latte', 
        description: 'Café frío con leche.',
        prices: { small: '$7,500', medium: '$8,000', large: '$8,500' }
      },
      { 
        name: 'Frappé Clásico', 
        description: 'Café batido con hielo.',
        prices: { small: '$8,000', medium: '$8,500', large: '$9,000' }
      },
      { 
        name: 'Frappé de Caramelo', 
        description: 'Café frío con jarabe de caramelo.',
        prices: { small: '$8,500', medium: '$9,000', large: '$9,500' }
      }
    ],
    'Acompañamientos': [
      { 
        name: 'Brownie Artesanal', 
        description: 'Chocolate intenso.',
        prices: { small: '$5,000', medium: '', large: '' }
      },
      { 
        name: 'Galletas de Avena', 
        description: 'Suaves y dulces.',
        prices: { small: '$4,000', medium: '', large: '' }
      },
      { 
        name: 'Pan de Queso', 
        description: 'Caliente, recién horneado.',
        prices: { small: '$3,000', medium: '', large: '' }
      }
    ]
  }

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Nuestro Café, Tu Energía Diaria</h2>
        <p className="menu-intro">
          Cada bebida está preparada con granos colombianos seleccionados y amor artesanal. 
          Desde la primera taza hasta la última gota, garantizamos sabor premium en cada pedido.
        </p>
        <div className="menu-grid">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="menu-category">
              <h3>{category}</h3>
              <div className="menu-items">
                {items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-description">{item.description}</span>
                    </div>
                    <div className="item-prices">
                      {category !== 'Acompañamientos' ? (
                        <>
                          {item.prices.small && (
                            <div className="price-option">
                              <span className="size">P</span>
                              <span className="price">{item.prices.small}</span>
                            </div>
                          )}
                          {item.prices.medium && (
                            <div className="price-option">
                              <span className="size">M</span>
                              <span className="price">{item.prices.medium}</span>
                            </div>
                          )}
                          {item.prices.large && (
                            <div className="price-option">
                              <span className="size">G</span>
                              <span className="price">{item.prices.large}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="price-option">
                          <span className="price">{item.prices.small}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <p className="menu-note">✨ Todos nuestros productos se preparan al momento y llegan frescos a tu puerta</p>
          <button className="btn-primary large" onClick={onOpenOrder}>
            🛒 Hacer Pedido Ahora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu