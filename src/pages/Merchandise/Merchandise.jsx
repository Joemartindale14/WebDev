import React, { useState, useContext } from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Merchandise.css";

const Merchandise = () => {
    const [sortBy, setSortBy] = useState('price');
    const [filters, setFilters] = useState({
        category: "all",
        inStock: false,
        priceRange: "all",
    });

    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: 'T-shirt', price: 18, category: 'Clothing', stock: 50, imageUrl: "/tshirt_img.webp" },
        { id: 2, name: 'Leggings', price: 25, category: 'Clothing', stock: 30, imageUrl: "/leggings_img.webp" },
        { id: 3, name: 'Vest', price: 12, category: 'Clothing', stock: 0, imageUrl: "/vest_img.webp" },
        { id: 4, name: 'Long Sleeve', price: 30, category: 'Clothing', stock: 20, imageUrl: "/long_sleeve_img.webp" },
        { id: 5, name: 'Hoodie', price: 40, category: 'Clothing', stock: 25, imageUrl: "/hoodie_img.webp" },
        { id: 6, name: 'Sports Bra', price: 25, category: 'Clothing', stock: 60, imageUrl: "/sports_bra_img.webp" },
        { id: 7, name: 'Joggers', price: 25, category: 'Clothing', stock: 15, imageUrl: "/joggers_img.webp" },
        { id: 8, name: 'Yoga Mat', price: 12, category: 'Accessories', stock: 50, imageUrl: "/yoga_mat_img.webp" },
        { id: 9, name: 'Resistance Bands', price: 12, category: 'Accessories', stock: 30, imageUrl: "/resistance_band_img.webp" },
        { id: 10, name: 'Dumbbells', price: 25, category: 'Accessories', stock: 0, imageUrl: "/dumbbells_img.webp" },
        { id: 11, name: 'Water Bottle', price: 15, category: 'Accessories', stock: 60, imageUrl: "/water_bottle_img.webp" },
        { id: 12, name: 'Gym Towel', price: 8, category: 'Accessories', stock: 20, imageUrl: "/towel_img.webp" },
        { id: 13, name: 'Shaker Bottle', price: 5, category: 'Accessories', stock: 12, imageUrl: "/shaker_bottle_img.webp" },
        { id: 14, name: 'Protein Bar', price: 3, category: 'Snacks', stock: 100, imageUrl: "/protein_bar_img.webp" },
        { id: 15, name: 'Energy Drink', price: 2, category: 'Snacks', stock: 75, imageUrl: "/energy_drink_img.webp" },
        { id: 16, name: 'Pre-Workout Scoop', price: 2, category: 'Snacks', stock: 50, imageUrl: "/preworkout_img.webp" },
        { id: 17, name: 'Granola Bar', price: 2, category: 'Snacks', stock: 80, imageUrl: "/granola_bar_img.webp" },
        { id: 18, name: 'Coffee', price: 3, category: 'Snacks', stock: 60, imageUrl: "/coffee_img.webp" },
        { id: 19, name: 'Protein Cookies', price: 4, category: 'Snacks', stock: 0, imageUrl: "/cookie_img.webp" },
        { id: 20, name: 'Protein Shake', price: 2, category: 'Snacks', stock: 100, imageUrl: "/protein_shake_img.webp" },
    ];

    const filteredProducts = products.filter(product => {
        //filter by category
        if (filters.category != "all" && filters.category.length > 0) {
           if (!filters.category.includes(product.category)) {
            return false;
            }
        }

        //filter by stock
        if (filters.inStock && product.stock === 0) {
            return false;
        }

        //filter by price range
        if (filters.priceRange !== "all") {
            const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
            if (product.price < minPrice || product.price > maxPrice) {
                return false;
            }
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

    const clearFilters = () => {
        setFilters({
            category: "all",
            inStock: false,
            priceRange: "all",
        });
        setSortBy('price');
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <section className="merchandise">
          <HeaderContainer imageSrc="/merchandise_header_img.webp" title="MERCHANDISE"/>
          <hr />
        <div className="merch-content"> 
              <div className="filters">
                <label>FILTER & SORT</label>
                <hr />
                <label>SORT BY:</label>
                  <select onChange={(e) => setSortBy(e.target.value)}>
                      <option value="price">Price (low to high)</option>
                      <option value="name">Name</option>
                  </select>
                  <hr />
                  <div>
                      <label>CATEGORY:</label>
                      <select
                          value={filters.category}
                          onChange={(e) => {
                              const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
                              setFilters({ ...filters, category: selectedCategories });
                          }}
                      >
                          <option value="all">All</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Accessories">Accessories</option>
                          <option value="Snacks">Snacks</option>
                      </select>
                  </div>
                  <hr />
                  <div>
                      <label>PRICE RANGE:</label>
                      <select
                          value={filters.priceRange}
                          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                      >
                          <option value="all">All</option>
                          <option value="0-10">£0 - £10</option>
                          <option value="10-20">£10 - £20</option>
                          <option value="20-30">£20 - £30</option>
                          <option value="30-40">£30 - £40</option>
                      </select>
                  </div>
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
                  <button onClick={clearFilters}>Clear Filters</button> 
              </div>
              <div className="product-list">
                  {sortedProducts.map(product => (
                      <div key={product.id} className="product-card">
                                <img src={product.imageUrl} alt={product.name} loading="lazy"/>
                                <h3>{product.name}</h3>
                                <p>{product.category}</p>
                                <p className="stock-status">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
                                <p className="price">Price: £{product.price}</p>
                            <div className="product-card-buttons">
                                <button className="add" onClick={() => handleAddToCart(product)}>Add to cart</button>
                            </div>
                      </div>
                  ))}
              </div>
            </div>  
            <ToastContainer />
        </section>
    );
};

export default Merchandise;