// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import {Link} from 'react-router-dom'

import Slider from '../../partial/Header/Slider';

export default function SliderLogIn() {
  return (
    <section className="section-main padding-y">
      <main className="card">
        <div className="card-body">
          <div className="row">
            <aside className="col-lg col-md-3 flex-lg-grow-0">
              <nav className="nav-home-aside">
                <h6 className="title-category">
                  MY MARKETS <i className="d-md-none icon fa fa-chevron-down" />
                </h6>
                <ul className="menu-category">
                  <li><Link to="/fashion-and-clothes">Fashion and clothes</Link></li>
                  <li><Link to="/automobile-and-motors">Automobile and motors</Link></li>
                  <li><Link to="/gardening-and-agriculture">Gardening and agriculture</Link></li>
                  <li><Link to="/electronic-and-tech">Electronics and tech</Link></li>
                  <li><Link to="/packaging-and-printing">Packaging and printing</Link></li>
                  <li><Link to="/home-and-kitchen">Home and kitchen</Link></li>
                  <li><Link to="/digital-goods">Digital goods</Link></li>
                  <li className="has-submenu">
                    <Link to="/products">More items</Link>
                    <ul className="submenu">
                      <li><Link to="/">Submenu name</Link></li>
                      <li><Link to="/">Great submenu</Link></li>
                      <li><Link to="/">Another menu</Link></li>
                      <li><Link to="/">Some others</Link></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9 col-xl-7 col-lg-7">
             <Slider/>
            </div>
            <div className="col-md d-none d-lg-block flex-grow-1">
              <aside className="special-home-right">
                <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Men clothing</h6>
                    <Link to="/men-clothing" className="btn btn-secondary btn-sm"> Source now </Link>
                  </div>
                  <img src={require('../../assets/images/items/1.jpg')} height={80} alt='ô' className="img-bg" />
                </div>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Winter clothing </h6>
                    <Link to="/winter-clothing" className="btn btn-secondary btn-sm"> Source now </Link>
                  </div>
                  <img src={require('../../assets/images/items/2.jpg')} height={80} className="img-bg" alt=""/>
                </div>
                <div className="card-banner border-bottom">
                  <div className="py-3" style={{ width: '80%' }}>
                    <h6 className="card-title">Home inventory</h6>
                    <Link to="/home-inventory" className="btn btn-secondary btn-sm"> Source now </Link>
                  </div>
                  <img src={require('../../assets/images/items/6.jpg')} height={80} className="img-bg" alt="" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}