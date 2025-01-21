import { React, useState } from "react";
import logo from "./assets/logo.png";
import "./MainPage.css";
import c1 from "./assets/rasp.jpeg";
import c2 from "./assets/pizza.jpg";
import c3 from "./assets/pancake.jpg";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/spageti.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper core components
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Swiper modules
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import SearchBar from "./SearchBar";
import "./RecipeSearch.css";
import { Link } from "react-router-dom";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";

function Main() {
  const [dropdownRecipes, setDropdownRecipes] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);

  const categories = [
    { name: "Appetizers", image: "https://via.placeholder.com/100" },
    { name: "Breakfast", image: "https://via.placeholder.com/100" },
    { name: "Dinner", image: "https://via.placeholder.com/100" },
    { name: "Sides", image: "https://via.placeholder.com/100" },
    { name: "Soups", image: "https://via.placeholder.com/100" },
    { name: "Dessert", image: "https://via.placeholder.com/100" },
    { name: "Coffee", image: "https://via.placeholder.com/100" },
    { name: "Drinks", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="body">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="limg" />
          <div className="logot">
            Reci<span className="hlight">Picker</span>
          </div>
        </div>

        <div className="right-container">
          <div className="search-bar-container">
            <SearchBar />
          </div>

          <div className="nav-links">
            <a href="/">HOME</a>
            <div
              className="dropdown-container"
              onMouseEnter={() => setDropdownRecipes(true)}
              onMouseLeave={() => setDropdownRecipes(false)}
            >
              <a href="#" className="dropdown-link">
                RECIPES
              </a>
              {dropdownRecipes && (
                <div className="dropdown-menu">
                  <a href="/appetizers">Appetizers</a>
                  <a href="/breakfast">Breakfast</a>
                  <a href="/dessert">Dessert</a>
                  <a href="/drinks">Drinks</a>
                  <a href="/main-dish">Main Dish</a>
                  <a href="/salad">Salad</a>
                  <a href="/sauces">Sauces</a>
                  <a href="/seafood">Seafood</a>
                  <a href="/snacks">Snacks</a>
                  <a href="/soup">Soup</a>
                  <a href="/sandwiches">Sandwiches</a>
                  <a href="/vegetarian">Vegetarian</a>
                </div>
              )}
            </div>
            <a href="/add-recipes">ADD RECIPES</a>
            <a href="/blog">BLOG</a>
            <div
              className="dropdown-container"
              onMouseEnter={() => setDropdownAbout(true)}
              onMouseLeave={() => setDropdownAbout(false)}
            >
              <a href="#" className="dropdown-link">
                ABOUT
              </a>
              {dropdownAbout && (
                <div className="dropdown-menu">
                  <a href="/about-us">About Us</a>
                  <a href="/contact">Contact</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="main">
        {/* Swiper Section */}
        <div className="slidersection">
          <div className="blurcon"></div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1.09}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
<<<<<<< HEAD
            style={{marginLeft:"8%",marginRight:"20%",width:"90%"}}
            navigation
          >
            <SwiperSlide >
              <img src={c1} alt="Slide 1" style={{ width: "90%", marginLeft:"10%",borderRadius:"50px"}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={p2} alt="Slide 2" style={{ width: "90%", marginLeft:"10%",borderRadius:"50px"}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={p3} alt="Slide 3" style={{ width: "90%", marginLeft:"10%",borderRadius:"50px" }} />
=======
            style={{ marginLeft: "8%", marginRight: "20%", width: "90%" }}
            navigation
          >
            <SwiperSlide>
              <img
                src={c1}
                alt="Slide 1"
                style={{
                  width: "90%",
                  marginLeft: "10%",
                  borderRadius: "50px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p2}
                alt="Slide 2"
                style={{
                  width: "90%",
                  marginLeft: "10%",
                  borderRadius: "50px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={p3}
                alt="Slide 3"
                style={{
                  width: "90%",
                  marginLeft: "10%",
                  borderRadius: "50px",
                }}
              />
>>>>>>> f77cf29 (Update the file changes to [describe changes])
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Recipe Search Section */}
        <div className="section">
<<<<<<< HEAD
        <div className="recipe-search-container">
          <h2 className="search-title">WHAT CAN I HELP YOU FIND?</h2>
          <div className="search-bar-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
            <button className="browse-button">
              BROWSE THE RECIPE INDEX &raquo;
            </button>
          </div>

          <div className="categories-container">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <p className="category-name">{category.name}</p>
=======
          <div className="recipe-search-container">
            <div style={{ display: "flex", marginLeft: "27.5%" }}>
              <h2 className="search-title">WHAT CAN I HELP YOU FIND?</h2>
              <div className="search-bar-wrapper">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                  />
                  <div className="search-button">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </div>
                </div>
                <button className="browse-button">
                  BROWSE THE RECIPE INDEX &raquo;
                </button>
>>>>>>> f77cf29 (Update the file changes to [describe changes])
              </div>
            </div>
            <div className="categories-container">
              {categories.map((category, index) => (
                <div key={index} className="category-item">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                  />
                  <p className="category-name">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
