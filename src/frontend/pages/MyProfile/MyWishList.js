import React from 'react'
import { Link } from 'react-router-dom'

function MyWishList() {
  return (
    <section className="section-content padding-y">
  <div className="container">
    <div className="row">
      <aside className="col-md-3">
        <nav className="list-group">
          <Link className="list-group-item" to="/my-profile"> Account overview</Link>
          <Link className="list-group-item" to="/my-address"> My Address </Link>
          <Link className="list-group-item" to="/my-order"> My Orders </Link>
          <Link className="list-group-item active" to="/my-wish-list"> My wishlist </Link>
          <Link className="list-group-item" to="/my-setting"> Settings </Link>
          <Link className="list-group-item" to="/log-out"> Log out </Link>
        </nav>
      </aside> {/* col.// */}
      <main className="col-md-9">
      <article className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <figure className="itemside mb-4">
                  <div className="aside"><img src="images/items/1.jpg" className="border img-md" /></div>
                  <figcaption className="info">
                    <a href="#" className="title">Great product name goes here</a>
                    <p className="price mb-2">$80</p>
                    <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                    <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                  </figcaption>
                </figure>
              </div> {/* col.// */}
              <div className="col-md-6">
                <figure className="itemside mb-4">
                  <div className="aside"><img src="images/items/2.jpg" className="border img-md" /></div>
                  <figcaption className="info">
                    <a href="#" className="title">Men's Jackeet for Winter </a>
                    <p className="price mb-2">$1280</p>
                    <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                    <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                  </figcaption>
                </figure>
              </div> {/* col.// */}
              <div className="col-md-6">
                <figure className="itemside mb-4">
                  <div className="aside"><img src="images/items/3.jpg" className="border img-md" /></div>
                  <figcaption className="info">
                    <a href="#" className="title">Another book of item goes here </a>
                    <p className="price mb-2">$280</p>
                    <a href="#" className="btn btn-secondary btn-sm"> Add to cart </a>
                    <a href="#" className="btn btn-danger btn-sm" data-toggle="tooltip" title data-original-title="Remove from wishlist"> <i className="fa fa-times" /> </a>
                  </figcaption>
                </figure>
              </div> {/* col.// */}
            </div> {/* row .//  */}
          </div> {/* card-body.// */}
        </article>
      </main> {/* col.// */}
    </div>
  </div> {/* container .//  */}
</section>
  )
}

export default MyWishList