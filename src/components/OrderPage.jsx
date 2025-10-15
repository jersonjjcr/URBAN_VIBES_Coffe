import { useState } from 'react'

const OrderPage = ({ onClose }) => {
  const [cart, setCart] = useState([])
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  })

  const menuData = {
    'Cafés Calientes': [
      { 
        id: 'esp',
        name: 'Espresso', 
        description: 'Café intenso, molido fino.',
        prices: { small: 4000, medium: 4500, large: 5000 }
      },
      { 
        id: 'ame',
        name: 'Americano', 
        description: 'Espresso con agua caliente.',
        prices: { small: 5000, medium: 5500, large: 6000 }
      },
      { 
        id: 'cap',
        name: 'Cappuccino', 
        description: 'Espresso + espuma cremosa.',
        prices: { small: 6000, medium: 6500, large: 7000 }
      },
      { 
        id: 'lat',
        name: 'Latte', 
        description: 'Espresso con leche vaporizada.',
        prices: { small: 6500, medium: 7000, large: 7500 }
      },
      { 
        id: 'moc',
        name: 'Mocaccino', 
        description: 'Café + leche + chocolate.',
        prices: { small: 7000, medium: 7500, large: 8000 }
      }
    ],
    'Fríos / Frappés': [
      { 
        id: 'col',
        name: 'Cold Brew', 
        description: 'Café infusionado en frío.',
        prices: { small: 7000, medium: 7500, large: 8000 }
      },
      { 
        id: 'ice',
        name: 'Iced Latte', 
        description: 'Café frío con leche.',
        prices: { small: 7500, medium: 8000, large: 8500 }
      },
      { 
        id: 'fra',
        name: 'Frappé Clásico', 
        description: 'Café batido con hielo.',
        prices: { small: 8000, medium: 8500, large: 9000 }
      },
      { 
        id: 'frc',
        name: 'Frappé de Caramelo', 
        description: 'Café frío con jarabe de caramelo.',
        prices: { small: 8500, medium: 9000, large: 9500 }
      }
    ],
    'Acompañamientos': [
      { 
        id: 'bro',
        name: 'Brownie Artesanal', 
        description: 'Chocolate intenso.',
        prices: { small: 5000 }
      },
      { 
        id: 'gal',
        name: 'Galletas de Avena', 
        description: 'Suaves y dulces.',
        prices: { small: 4000 }
      },
      { 
        id: 'pan',
        name: 'Pan de Queso', 
        description: 'Caliente, recién horneado.',
        prices: { small: 3000 }
      }
    ]
  }

  const addToCart = (item, size, category) => {
    const price = item.prices[size]
    const sizeText = category === 'Acompañamientos' ? '' : 
                    size === 'small' ? 'Pequeño' : 
                    size === 'medium' ? 'Mediano' : 'Grande'
    
    const cartItem = {
      id: `${item.id}_${size}_${Date.now()}`,
      name: item.name,
      size: sizeText,
      price: price,
      quantity: 1,
      category: category
    }

    setCart(prevCart => [...prevCart, cartItem])
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id)
      return
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendWhatsAppOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor completa tu nombre y teléfono')
      return
    }

    if (cart.length === 0) {
      alert('Tu carrito está vacío')
      return
    }

    const orderDetails = cart.map(item => 
      `• ${item.name}${item.size ? ` (${item.size})` : ''} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`
    ).join('\n')

    const total = getTotalPrice()
    const deliveryFee = total >= 15000 ? 0 : 2000
    const finalTotal = total + deliveryFee

    const message = `🍕 *NUEVO PEDIDO - URBAN VIBES COFFEE*

👤 *Cliente:* ${customerInfo.name}
📱 *Teléfono:* ${customerInfo.phone}
📍 *Dirección:* ${customerInfo.address || 'No especificada'}

☕ *PEDIDO:*
${orderDetails}

💰 *RESUMEN:*
Subtotal: $${total.toLocaleString()}
Domicilio: $${deliveryFee.toLocaleString()} ${deliveryFee === 0 ? '(GRATIS)' : ''}
*TOTAL: $${finalTotal.toLocaleString()}*

${customerInfo.notes ? `📝 *Notas:* ${customerInfo.notes}` : ''}

¡Gracias por elegir Urban Vibes Coffee! ☕✨`

    const phoneNumber = "573027532474"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="order-page-overlay">
      <div className="order-page">
        <div className="order-header">
          <h2>🛒 Hacer Pedido</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="order-content">
          <div className="menu-selection">
            <h3>Selecciona tus productos</h3>
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category} className="category-section">
                <h4>{category}</h4>
                <div className="items-grid">
                  {items.map((item, index) => (
                    <div key={index} className="item-card">
                      <div className="item-info">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                      <div className="item-actions">
                        {category !== 'Acompañamientos' ? (
                          <div className="size-options">
                            <button 
                              className="size-btn"
                              onClick={() => addToCart(item, 'small', category)}
                            >
                              P - ${item.prices.small.toLocaleString()}
                            </button>
                            <button 
                              className="size-btn"
                              onClick={() => addToCart(item, 'medium', category)}
                            >
                              M - ${item.prices.medium.toLocaleString()}
                            </button>
                            <button 
                              className="size-btn"
                              onClick={() => addToCart(item, 'large', category)}
                            >
                              G - ${item.prices.large.toLocaleString()}
                            </button>
                          </div>
                        ) : (
                          <button 
                            className="add-btn"
                            onClick={() => addToCart(item, 'small', category)}
                          >
                            Agregar - ${item.prices.small.toLocaleString()}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-section">
            <h3>Tu Pedido ({cart.length} productos)</h3>
            
            {cart.length === 0 ? (
              <p className="empty-cart">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h5>{item.name} {item.size && `(${item.size})`}</h5>
                        <p>${item.price.toLocaleString()} c/u</p>
                      </div>
                      <div className="cart-item-controls">
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <div className="total-line">
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="total-line">
                    <span>Domicilio:</span>
                    <span>
                      {getTotalPrice() >= 15000 ? 'GRATIS' : '$2,000'}
                    </span>
                  </div>
                  <div className="total-line final">
                    <span>TOTAL:</span>
                    <span>${(getTotalPrice() + (getTotalPrice() >= 15000 ? 0 : 2000)).toLocaleString()}</span>
                  </div>
                  {getTotalPrice() < 15000 && (
                    <p className="delivery-note">
                      Agrega ${(15000 - getTotalPrice()).toLocaleString()} más para domicilio gratis
                    </p>
                  )}
                </div>

                <div className="customer-info">
                  <h4>Información de entrega</h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Tu número de teléfono"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Dirección de entrega"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="notes"
                    placeholder="Notas especiales (opcional)"
                    value={customerInfo.notes}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>

                <button className="order-btn" onClick={sendWhatsAppOrder}>
                  📱 Enviar Pedido por WhatsApp
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage