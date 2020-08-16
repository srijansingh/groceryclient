import React from 'react';
import Google from "./asset/google.png";
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="landing">
        <header>
          <div className="company-logo">
          <i className="fa fa-shopping-cart" id="icon" aria-hidden="true"></i> Dholpurshare
          </div>

          <nav className="tab">
            <a href="#home">Home</a>
            <a href="#home">About</a>
            <a href="#home">Category</a>
            <a href="#home">Feature</a>
            <a href="#home">Contact</a>
          </nav>
        </header>

        <div className="intro">
          <div className="intro-brand">
            <span className="brand">Dholpurshare Grocery</span>
            <span className="desc"><p>Get groceries delievered safely with super savings on every order on dholpur share, save more with dholur share get guaranteed lowest prices on all your supermarket shopping</p></span>
          </div>
          
          <div className="intro-form">
            <img src={Google} height="100px"/>
            <div className="form">
              <input type="number" placeholder="Mobile Number" /><button>Get Link</button>
            </div>
          </div>

        </div>
      </div>

      <div className="about">

        <div className="about-head">About Us</div>

        <div className="about-content">
          <div className="about-image">

          </div>

          <div className="about-text">
            <span>
              Our dholpur share grocery app brings to you thousand of products at great prices and deals. Shop on the dholpur share app for the latest grocery products.
              Get groceries delievered safely with super savings on every order on dholpur share, save more with dholur share get guaranteed lowest prices on all your supermarket shopping; home deliverey in dholpur.
              Dholpur share is your low price online store where you get the latest products from patanjali, ashirwad, saffola, fortune, amul, pepsi, colgate, surf excel, maggie, vim, haldiram amongst other leading brands.
            </span>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-grid">

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src="" title="category" />
            <span className="category-name">Pulses</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
