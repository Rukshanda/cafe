import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaDollarSign } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "../services/apiAuth";
import { getProducts } from "../services/apiProducts";
import { getCartItem, insertOrUpdateCartItem } from "../services/apiCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Spinner from "./Spinner";
import Cards from "../utils/Cards";

function Products() {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTag, setSelectedTag] = useState("featured");  

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          setUserId(userData.id);
        } else {
          console.error("User data is invalid:", userData);
        }
      } catch (error) {
        console.error("Error getting user ID:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const productsData = await getProducts();
        const filteredProducts = productsData.filter(
          (product) => product.tag === selectedTag
        );
        setItems(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, [selectedTag]);

  const addToCart = async (productId) => {
    if (userId) {
      try {
        await insertOrUpdateCartItem({ productId, user_id: userId });
        const cartData = await getCartItem();
        console.log(cartData);
        setSelectedItems((prevSelectedItems) => [
          ...prevSelectedItems,
          productId,
        ]);
        toast.success("Item added to cart!");
      } catch (error) {
        console.error("Error adding product to cart:", error.message);
        toast.error("Error adding product to cart.");
      }
    } else {
      toast.error("Please log in to add items to the cart.");
    }
  };

  return (
    <div className="products-sec">
      <h1>Our Coffees</h1>
      <div className="toggle-bar flex items-center justify-center">
        <div className="bar flex md:gap-[30px] gap-[10px] justify-center flex-wrap">
          <div
            className={`pro-bar ${selectedTag === "featured" ? "active-bar" : ""}`}
            onClick={() => setSelectedTag("featured")}
          >
            <span>Featured</span>
          </div>
          <div
            className={`pro-bar ${selectedTag === "latest" ? "active-bar" : ""}`}
            onClick={() => setSelectedTag("latest")}
          >
            <span>Latest</span>
          </div>
          <div
            className={`pro-bar ${selectedTag === "bestseller" ? "active-bar" : ""}`}
            onClick={() => setSelectedTag("bestseller")}
          >
            <span>Bestseller</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading-indicator">
          <Spinner/>
        </div> 
      ) : (
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={2}
        slidesPerView={4}  
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1, 
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 2, 
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,  
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,  
            spaceBetween: 20,
          },
        }}
      >
        {items.map((el, index) => (
          <SwiperSlide key={index} className="product-slide">
            <Cards 
              index={index} 
              ID={el.id} 
              name={el.name} 
              pic={el.pic} 
              price={el.price} 
              selectedItems={selectedItems} 
              addToCart={addToCart} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      )}
    </div>
  );
}

export default Products;
