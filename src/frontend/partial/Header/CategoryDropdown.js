import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import apiCategory from '../../../api/apiCategory';

import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';

function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null); // Track the active parent category
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiCategory.getAll().then(res => {
      try {
        const categoryData = res.data.map(item => ({
          id: item.id,
          name: item.attributes.category_name,
          parent: item.attributes.parent_id,
          slug: item.attributes.slug,
        }));
        setCategories(categoryData);
      } catch (err) {
        console.log("Category Error:", err.message);
      }
    })
  }, []);

  const handleMouseEnter = (index) => {
    setIsOpen(true);
    setActiveParent(index);
    // console.log("active parent:", activeParent);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveParent(null);   
  };

  const handleClick = (slug) => {
    navigate(`/products-by-cat/${slug}`);
    window.location.reload();
  };

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={() => handleMouseEnter(null)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        className="nav-link dropdown-toggle"
        to="/category"
      >
        Category
      </Link>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {categories.map((item, index) => (
          item.parent === 0 && (
            <div key={index} style={{position: 'relative'}} >
              <Link
                className="dropdown-item"
                to={`/products-by-cat/${item.slug}`}
                onClick={() => handleClick(item.slug)}
                onMouseEnter={() => handleMouseEnter(index)}                
              >
                {capitalizeFirstLetter(item.name)}
              </Link>
             
              {activeParent === index && (
                <ul className={`dropdown-menu}`}
                  style={{position: 'absolute', left: '7rem', top: 0}}
                 >
                  {categories.map((subCat, subIndex) => ( 
                    subCat.parent === item.id && (
                      <li key={subIndex} className='category-sub-li'>
                        <Link
                          className="dropdown-item"
                          to={`/products-by-cat/${subCat.slug}`}
                          onClick={() => handleClick(subCat.slug)}
                        >
                          {capitalizeFirstLetter(subCat.name)}
                        </Link>
                      </li>
                    )
                  ))}
                </ul>
              )}
            </div>
          )
        ))}
      </div>
    </li>
  );
}

export default CategoryDropdown;
