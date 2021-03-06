import { useState, useEffect } from 'react';
import './App.css';
// const products = [
//   {
//     id: '0',
//     name: 'Anello',
//     image: 'https://images-na.ssl-images-amazon.com/images/I/51l6dUTv0PL._AC_UY500_.jpg',
//   },
//   {
//     id: '1',
//     name: 'Palla da calcio',
//     image: 'https://www.staff3000.it/images/detailed/9/CQ7321-100.jpg',
//   },
//   {
//     id: '2',
//     name: 'Spumante',
//     image: 'https://www.vinicitra.it/wp-content/uploads/2018/01/rina-passerina-spumante-brut-citra-2.jpg',
//   },
//   {
//     id: '3',
//     name: 'Libro',
//     image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606172634i/55886884._SR1200,630_.jpg',
//   },
//   {
//     id: '4',
//     name: 'Maglietta',
//     image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606172634i/55886884._SR1200,630_.jpg',
//   },
//   {
//     id: '5',
//     name: 'Scarpe',
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61SrYuYUBYL._AC_UY500_.jpg',
//   }
// ]

function App() {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://api.mocki.io/v1/db81a628/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  function search(evt) {
    const target = evt.target.value;
    setInput(target);
  }
  return (
    <div>
      <label for='search'>Search</label>
      <input onChange={search} id='search' type='text'></input>

      <div className='productWrapper'>
        {products.filter((product) => {
          console.log(product)
          return product.name.toUpperCase().includes(input.toUpperCase())
        })
          .map((product) => {
            return <div className="product" key={product.id}>
              <h3>{product.name}</h3>
              <img src={product.image} alt='fake product'></img>
            </div>
          })}
      </div>
    </div>
  );
}

export default App;
