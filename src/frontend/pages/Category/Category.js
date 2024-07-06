import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import apiCategory from '../../../api/apiCategory'

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    apiCategory.getAll().then((res) => {
      console.log("data: ",res.data);

      try{
        const categoryData = res.data.map( category => {
          return {
            id: category.id,
            name: category.attributes.category_name,
            parent: category.attributes.parent_id,
            slug: category.attributes.slug,
          }
        })

        setCategory(categoryData);
      }
      catch(err){
        console.log(err);
      }

      
      console.log("category: ", category);
    })
  }, [])

  return (
<section className="section-content padding-y">
  <div className="container">
    <nav className="row">
      {
        category.map((category, index) =>{
          return (
            <div key={index} className="col-md-3">
        <div className="card card-category">
          <div className="img-wrap" style={{background: '#ffd7d7'}}>
            {/* <img src="images/items/1.jpg" /> */}
          </div>
          <div className="card-body">
            <h4 className="card-title"><Link to={`/products-by-cat/${category.name.toLowerCase()}`}>{category.name}</Link></h4>
            <ul className="list-menu">
              <li><p>Unisex T shirts</p></li>
            
            </ul>
          </div>
        </div>
      </div> 
          )
        })
      }
      
      
    </nav>
  </div> 
</section>

  )
}

export default Category
