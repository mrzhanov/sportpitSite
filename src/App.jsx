import React, { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import Cart from './Cart';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function getAlldata() {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const todosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(todosData);
    }
    getAlldata();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const truncateTitle = (title, maxWords) => {
    const words = title.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : title;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Product Gallery</h1>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
        shop
        </div>

      </header>
      <div className="gallery">
        {data &&
          data.map(item => (
            <div className="card" key={item.id}>
              <div className="image-container">
                <img className="card-img-top" src={item.imageurl} alt={item.name} />
              </div>
              <div className="card-body">
                <h2 className="card-title">{truncateTitle(item.name, 10)}</h2>
                <p className="card-price">{item.price}</p>
                <div className="card-actions">
                  <button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {
        isCartOpen && (
          <Cart cart={cart} />
        )
      }
    </div>
  );
}

export default App;
