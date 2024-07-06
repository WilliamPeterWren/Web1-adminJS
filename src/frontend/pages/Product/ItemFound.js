import React from 'react'
import { Link } from 'react-router-dom'

function ItemFound(props) {
  return (
    <header className="mb-3">

      <div className="form-inline">
        <strong className="mr-md-auto">{props.quantity} Items found </strong>
        <select className="mr-2 form-control">
          <option>Latest items</option>
          <option>Trending</option>
          <option>Most Popular</option>
          <option>Cheapest</option>
        </select>
        <div className="btn-group">
          <Link to="/products" className="btn btn-light active" data-toggle="tooltip" title="/" data-original-title="List view"> 
            <i className="fa fa-bars" />
          </Link>
          <Link to="/products" className="btn btn-light" data-toggle="tooltip" title="/" data-original-title="Grid view"> 
            <i className="fa fa-th" />
          </Link>
        </div>
      </div>

    </header>
  )
}

export default ItemFound
