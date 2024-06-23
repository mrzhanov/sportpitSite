import React, { useState } from 'react';
const Cart = ({ cart, onClose }) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppMessage()
    
    
};
const sendWhatsAppMessage = () => {
    const recipientPhoneNumber = '+996553555814'; // Replace with recipient's phone number
  
    const itemsList = cart.map(item => `${item.name} - ${item.price}`).join('\n');
    const messageText = `New order from ${phone}
    Адресс:${address}
    .\nТовары:\n${itemsList}`;
  
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `whatsapp://send?phone=${recipientPhoneNumber}&text=${encodedMessage}`;
  
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="tel"
                  value={phone}
                  placeholder='Введите номер телефона'
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  value={address}
                  placeholder='Адресс проживание'

                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit Order</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
