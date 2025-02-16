import React, { useState } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import "./Merchandise.css";

const Merchandise = () => {
    const [sortBy, setSortBy] = useState('price');
    const [filters, setFilters] = useState({
        category: [],
        inStock: false,
    });

    const products = [
        { id: 1, name: 'T-shirt', price: 18, category: 'Clothing', stock: 50, imageUrl: "/tshirt_img.jpg" },
        { id: 2, name: 'Gym Shorts', price: 25, category: 'Clothing', stock: 30, imageUrl: "/gym_shorts_img.jpg" },
        { id: 3, name: 'Vest', price: 20, category: 'Clothing', stock: 0, imageUrl: "/tank_top_img.jpg" },
        { id: 4, name: 'Leggings', price: 35, category: 'Clothing', stock: 20, imageUrl: "/compression_leggings_img.jpg" },
        { id: 5, name: 'Hoodie', price: 30, category: 'Clothing', stock: 25, imageUrl: "/sweatshirt_img.jpg" },
        { id: 6, name: 'Sports Bra', price: 22, category: 'Clothing', stock: 60, imageUrl: "/sports_bra_img.jpg" },
        { id: 7, name: 'Joggers', price: 28, category: 'Clothing', stock: 15, imageUrl: "/joggers_img.jpg" },
        { id: 8, name: 'Yoga Mat', price: 18, category: 'Accessories', stock: 50, imageUrl: "/yoga_mat_img.jpg" },
        { id: 9, name: 'Resistance Bands', price: 12, category: 'Accessories', stock: 30, imageUrl: "/resistance_bands_img.jpg" },
        { id: 10, name: 'Dumbbells', price: 25, category: 'Accessories', stock: 40, imageUrl: "/dumbbells_img.jpg" },
        { id: 11, name: 'Water Bottle', price: 15, category: 'Accessories', stock: 60, imageUrl: "/water_bottle_img.jpg" },
        { id: 12, name: 'Gym Towel', price: 8, category: 'Accessories', stock: 20, imageUrl: "/gym_towel_img.jpg" },
        { id: 13, name: 'Protein Bottle', price: 5, category: 'Accessories', stock: 12, imageUrl: "/protein_bottle_img.jpg" },
        { id: 14, name: 'Protein Bar', price: 3, category: 'Snacks', stock: 100, imageUrl: "/protein_bar_img.jpg" },
        { id: 15, name: 'Energy Drink', price: 2.5, category: 'Snacks', stock: 75, imageUrl: "/energy_drink_img.jpg" },
        { id: 16, name: 'Trail Mix', price: 5, category: 'Snacks', stock: 50, imageUrl: "/trail_mix_img.jpg" },
        { id: 17, name: 'Granola Bar', price: 2.5, category: 'Snacks', stock: 80, imageUrl: "/granola_bar_img.jpg" },
        { id: 18, name: 'Fruit Chips', price: 3, category: 'Snacks', stock: 60, imageUrl: "/fruit_chips_img.jpg" },
        { id: 19, name: 'Protein Cookies', price: 4, category: 'Snacks', stock: 40, imageUrl: "/protein_cookies_img.jpg" },
        { id: 20, name: 'Protein Shake', price: 2, category: 'Snacks', stock: 100, imageUrl: "/protein_shake_img.jpg" },

      
      
        // More products...
    ];

    const filteredProducts = products.filter(product => {
        // Filter by category
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
            return false;
        }

        // Filter by stock
        if (filters.inStock && product.stock === 0) {
            return false;
        }

        return true;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return (
        <section className="merchandise">
          <HeaderContainer imageSrc="/merchandise_header_img.jpg" title="Merchandise"/>
          <hr />
        <div className="merch-content"> 
              <div className="filters">
                <label>FILTER & SORT</label>
                <hr />
                <label>SORT BY:</label>
                  <select onChange={(e) => setSortBy(e.target.value)}>
                      <option value="price">Price</option>
                      <option value="name">Name</option>
                  </select>
                  <hr />
                  <div>
                      <label>
                          <input
                              type="checkbox"
                              checked={filters.inStock}
                              onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                          />
                          In Stock
                      </label>
                  </div>
                  <hr />
                  <div>
                      <label>CATEGORY:</label>
                      <select
                          multiple
                          onChange={(e) => {
                              const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
                              setFilters({ ...filters, category: selectedCategories });
                          }}
                      >
                          <option value="Clothing">Clothing</option>
                          <option value="Accessories">Accessories</option>
                          <option value="Snacks">Snacks</option>
                      </select>
                  </div>
              </div>

              <div className="product-list">
                  {sortedProducts.map(product => (
                      <div key={product.id} className="product-card">
                          <img src={product.imageUrl} alt={product.name} />
                          <h3>{product.name}</h3>
                          <p>Price: £{product.price}</p>
                          <p>Category: {product.category}</p>
                          <p>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
                      </div>
                  ))}
              </div>
            </div>  
        </section>
    );
};

export default Merchandise;

