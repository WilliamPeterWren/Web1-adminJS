import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [category, setCategory] = useState('products');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cat = category;
    switch (cat) {   

      case 'brands':
          navigate(`/search/products-by-brands/${query}`);
          break;

      default:
        navigate(`/search/${category}/${query}`);
          
    }

    

  };

  return (
    <form onSubmit={handleSubmit} className="search-header" >
      <div className="input-group w-100">
        <select
          className="custom-select border-right"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="products">Product</option>
          <option value="brands">Brand</option>          
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={query}
          onChange={handleQueryChange}
        />

        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-search" /> Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
