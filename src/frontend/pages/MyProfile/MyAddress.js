import React from 'react'
import { Link } from 'react-router-dom'

function MyAddress() {
  return (
   <section className="section-content padding-y">
  <div className="container">
    <div className="row">
      <aside className="col-md-3">
        <nav className="list-group">
        <Link className="list-group-item" to="/my-profile"> Account overview</Link>
          <Link className="list-group-item active" to="/my-address"> My Address </Link>
          <Link className="list-group-item" to="/my-order"> My Orders </Link>
          <Link className="list-group-item " to="/my-wish-list"> My wishlist </Link>
          <Link className="list-group-item" to="/my-setting"> Settings </Link>
          <Link className="list-group-item" to="/log-out"> Log out </Link>
        </nav>
      </aside> {/* col.// */}
      <main className="col-md-9">
        <a href="#" className="btn btn-light mb-3"> <i className="fa fa-plus" /> Add new address </a>
        <div className="row">
          <div className="col-md-6">
            <article className="box mb-4">
              <h6>London, United Kingdom</h6>
              <p>Building: Nestone <br /> Floor: 22, Aprt: 12</p>
              <a href="#" className="btn btn-light disabled"> <i className="fa fa-check" /> Default</a> <a href="#" className="btn btn-light"> <i className="fa fa-pen" /> </a>   <a href="#" className="btn btn-light"> <i className="text-danger fa fa-trash" /></a>
            </article>
          </div>  {/* col.// */}
          <div className="col-md-6">
            <article className="box mb-4">
              <h6>Tashkent, Uzbekistan</h6>
              <p>Building one <br /> Floor: 2, Aprt: 32</p>
              <a href="#" className="btn btn-light">Make default</a> <a href="#" className="btn btn-light"> <i className="fa fa-pen" /> </a>   <a href="#" className="btn btn-light"> <i className="text-danger fa fa-trash" /></a>
            </article>
          </div>  {/* col.// */}
          <div className="col-md-6">
            <article className="box mb-4">
              <h6>Moscow, Russia</h6>
              <p>Lenin street <br /> Building A, Floor: 3, Aprt: 32</p>
              <a href="#" className="btn btn-light">Make default</a> <a href="#" className="btn btn-light"> <i className="fa fa-pen" /> </a>   <a href="#" className="btn btn-light"> <i className="text-danger fa fa-trash" /></a>
            </article>
          </div>  {/* col.// */}
        </div> {/* row.// */}
      </main> {/* col.// */}
    </div>
  </div> {/* container .//  */}
</section>

  )
}

export default MyAddress