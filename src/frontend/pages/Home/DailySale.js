import React from 'react'

function DailySale() {
  return (
    <section className="padding-bottom">
  <header className="section-heading mb-4">
    <h3 className="title-section">Daily deals</h3>
  </header>
  <div className="row row-sm">
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">10% OFF</b>
          <img alt="" src={require("../../assets/images/items/9.jpg")} /> 
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Just another product name</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">85% OFF</b>
          <img alt="" src={require("../../assets/images/items/10.jpg")} />
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Some item name here</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">10% OFF</b>
          <img alt="" src={require("../../assets/images/items/11.jpg")} />
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Great product name here</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">90% OFF</b>
          <img alt="" src="images/items/12.jpg" /> 
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Just another product name</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">20% OFF</b>
          <img alt="" src="images/items/5.jpg" /> 
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Just another product name</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div href="/" className="card card-sm card-product-grid">
        <a href="/" className="img-wrap"> 
          <b className="badge badge-danger mr-1">20% OFF</b>
          <img alt="" src="images/items/6.jpg" />
        </a>
        <figcaption className="info-wrap">
          <a href="/" className="title">Some item name here</a>
          <div className="price-wrap">
            <span className="price">$45</span>
            <del className="price-old">$90</del>
          </div> {/* price-wrap.// */}
        </figcaption>
      </div>
    </div> {/* col.// */}
  </div> {/* row.// */}
</section>

  )
}

export default DailySale
