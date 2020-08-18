import React from 'react';
import Google from "./asset/google.png";
import About from "./asset/icons/supermarket.png";
import Cat1 from "./asset/category1.jpg";
import Cat2 from "./asset/category2.jpg";
import Cat3 from "./asset/category3.jpg";
import Cat4 from "./asset/category4.jpg";
import Cat5 from "./asset/category5.jpg";
import Cat6 from "./asset/category6.jpg";

import mockup1 from "./asset/mockups/grocery1.png";
import mockup2 from "./asset/mockups/grocery2.png";
import mockup3 from "./asset/mockups/grocery3.png";
import mockup4 from "./asset/mockups/grocery4.png";
import mockup5 from "./asset/mockups/grocery5.png";
import Feature from "./asset/mockups/featuremock.png";

import Flour from "./asset/icons/flour.png";
import Grocery from "./asset/icons/grocery.png";
import Money from "./asset/icons/money.png";
import Shop from "./asset/icons/shop.png";
import Dairy from "./asset/icons/dairy.png";
import Truck from "./asset/icons/truck.png";
import Phone from "./asset/icons/phone.png";
import Rupee from "./asset/icons/rupee.png";
import Return from "./asset/icons/return.png";
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

        

        <div className="about-content">
          <div className="about-image">
              <img src={About}  />
          </div>

          <div className="about-text">
          
            <span>
            <div className="about-head">
            About Us
            
            </div>
             <p> Our dholpur share grocery app brings to you thousand of products at great prices and deals. Shop on the dholpur share app for the latest grocery products.</p>
             <p> Get groceries delievered safely with super savings on every order on dholpur share, save more with dholur share get guaranteed lowest prices on all your supermarket shopping; home deliverey in dholpur.</p>
              <p>Dholpur share is your low price online store where you get the latest products from patanjali, ashirwad, saffola, fortune, amul, pepsi, colgate, surf excel, maggie, vim, haldiram amongst other leading brands.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-grid">

          <div className="category-item">
            <img src={Cat1} title="Pulses" />
            <span className="category-name">Pulses</span>
          </div>

          <div className="category-item">
            <img src={Cat2} title="Choclates" />
            <span className="category-name">Choclates</span>
          </div>

          <div className="category-item">
            <img src={Cat3} title="Choclates" />
            <span className="category-name">Grocery</span>
          </div>

          <div className="category-item">
            <img src={Cat4} title="Fruits" />
            <span className="category-name">Fruits</span>
          </div>

          <div className="category-item">
            <img src={Cat5} title="Vegetables" />
            <span className="category-name">Vegetables</span>
          </div>

          <div className="category-item">
            <img src={Cat6} title="Pulses" />
            <span className="category-name">Pulses</span>
          </div>

        </div>
      </div>

      

      <div className="features">
        <div className="features-grid">

          <div className="features-item">

            <div className="features-card">
              <div className="features-logo">
                  <img src={Grocery} />
              </div>
              <div className="features-name">
                <span className="features-head">Fresh Grocery</span>
              </div>
            </div>

            <div className="features-card">
              <div className="features-logo">
                  <img src={Dairy} />
              </div>
              <div className="features-name">
                <span className="features-head">Dairy Product</span>
              </div>
            </div>

            <div className="features-card">
              <div className="features-logo">
                  <img src={Flour} />
              </div>
              <div className="features-name">
                <span className="features-head">Grain Product</span>
              </div>
            </div>

          </div>

          <div className="features-item">
            <img height="450" src={Feature} />
          </div>

          <div className="features-item">

            <div className="features-card">
              <div className="features-logo">
                  <img src={Money} />
              </div>
              <div className="features-name">
                <span className="features-head">In Budget</span>
              </div>
            </div>

            <div className="features-card">
              <div className="features-logo">
                  <img src={Shop} />
              </div>
              <div className="features-name">
                <span className="features-head">Secure Shopping</span>
              </div>
            </div>

            <div className="features-card">
              <div className="features-logo">
                  <img src={Truck} />
              </div>
              <div className="features-name">
                <span className="features-head">Home Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mockups">
        <div className="mockup-grid">
          <div className="mockup-item">
            <img src={mockup1} />
          </div>
          <div className="mockup-item">
            <img src={mockup2} />
          </div>
          <div className="mockup-item">
            <img src={mockup3} />
          </div>
          <div className="mockup-item">
            <img src={mockup4} />
          </div>
          <div className="mockup-item">
            <img src={mockup5} />
          </div>
        </div>
      </div>


      <div className="footer">
              <div className="footer-grid">

                <div className="footer-card">
                  <div className="footer-logo">
                      <img src={Truck} />
                  </div>
                  <div className="footer-name">
                    <span className="footer-head">Free Shipping</span>
                  </div>
                </div>

                <div className="footer-card">
                  <div className="footer-logo">
                      <img src={Phone} />
                  </div>
                  <div className="footer-name">
                    <span className="footer-head">Need Help Call 9461503768</span>
                  </div>
                </div>

                <div className="footer-card">
                  <div className="footer-logo">
                      <img src={Rupee} />
                  </div>
                  <div className="footer-name">
                    <span className="footer-head">Money Back Gaurantee</span>
                  </div>
                </div>

                <div className="footer-card">
                  <div className="footer-logo">
                      <img src={Return} />
                  </div>
                  <div className="footer-name">
                    <span className="footer-head">7 Days Return Service</span>
                  </div>
                </div>

              </div>

              <div className="footer-info">
                  <div className="footer-contact">
                      <h1>Contact Us</h1>
                      <div className="list">
                        <span>336/3 Mangal Ashiyana Ramkunj colony Bari Road, Dholpur (Rajasthan)</span>
                        <span>9461503768,  70144 69969</span>
                        <span>Mon-Sun 8:00am to 12:00pm</span>
                        
                      </div>
                  </div>
                  <div className="footer-socialmedia">
                      <h1>Join Us </h1>
                      <div className="social-icon">
                        <div class="icon-box">
                           <a href="https://www.facebook.com/dholpurshare/" target="_blank"> <i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                        <div class="icon-box">
                        <a href="https://www.instagram.com/dholpurshare?r=nametag" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        <div class="icon-box">
                        <a href="https://twitter.com/dholpurshare?s=09" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                        <div class="icon-box">
                        <a href="https://www.youtube.com/channel/UCxiwM0jksurWL9m2zneptsQ" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                      </div>

                  </div>
              </div>
              
          </div>



    </div>
  );
}

export default App;
