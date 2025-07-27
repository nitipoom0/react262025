import { useState } from 'react';
import './shop.css';
export default function Shop() {
    const books = [
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];
    const [query, setQuery] = useState("");
    const [cart, setCart] = useState([]);
    const filterlist = books.filter(book =>
        book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        book.author.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    const bookList = filterlist.map(book =>
        <div className="book-Item" key={book.id} >
            <img className="book-thumbnail" src={book.image_url} alt={book.title} title={book.title} />
            <div className="book-title">{book.title}</div>
            <div className="book_author">{book.author}</div>
            <div className="book-price">{book.price}$</div>
            <button className="add-cart-bth" onClick={() => setCart([...cart, {
                "title": book.title,
                "price": book.price
            }])}
            > Add to Cart</button>
        </div>
    )
    let total = 0;
    //cart.forEach(b => total += b.price);
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return (<>
        <header>
           
<div className="header-cart">
    <span className="cart-icon">🛒</span>
    <span className="cart-count">{cart.length}</span>
    <div className="cart-dropdown">
        {cart.length === 0 ? (
            <div style={{textAlign: 'center', color: '#b8c5d1', padding: '20px'}}>
                ตะกร้าว่างเปล่า
            </div>
        ) : (
            <>
                {cart.map((book, index) => (
                    <div key={index} className="dropdown-item">
                        <div className="dropdown-title">{book.title}</div>
                        <div className="dropdown-price">${book.price}</div>
                    </div>
                ))}
                <div className="dropdown-total">
                    Total: ${total.toFixed(2)}
                </div>
                <button className="dropdown-clear" onClick={() => setCart([])}>
                    Clear Cart
                </button>
            </>
        )}
    </div>
</div>
            <h1>Book Store</h1>
            <p>Find your next great read!</p>
            <nav>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </nav>
        </header>
        <div className="page-container ">
            <div className="searchbox">search: <input onChange={e => setQuery
                (e.target.value)} /></div>
            <div className="book-container">
                {bookList}
            </div>
            {/* ลบหรือคอมเมนต์ส่วน cart ด้านล่างนี้ออก */}
{/* 
<div className="cart-title">Cart</div>
<div className="cart-container">
    <ol>
        {cart.map((book, index) => <li className="cart-item "key={index}>
            <div className="book-title-cart">{book.title}</div>
            <div className="book-price-cart">{book.price}$</div>
        </li>)}
    </ol>
    <div className="Cart-total"> Total : {total.toFixed(2)}$</div>
    <button onClick={() => setCart([])}>Clear Cart</button>
</div>
*/}
        </div>
        </>);
}