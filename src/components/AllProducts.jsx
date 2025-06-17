import React, { useState, useEffect } from "react";
import PageBanner from "../utils/PageBanner";
import Cards from '../utils/Cards';
import { getProducts, getProductsByCategory, getMerchs, getMerchByCategory } from "../services/apiProducts";
import { getCurrentUser } from "../services/apiAuth";
import { insertOrUpdateCartItem, getCartItem } from "../services/apiCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCaretDown } from "react-icons/fa6";
import Spinner from "./Spinner";

function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState("coffees");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state

  const [isCoffeesOpen, setIsCoffeesOpen] = useState(false); 
  const [isMerchOpen, setIsMerchOpen] = useState(false);      
  
  const [activeSubCategory, setActiveSubCategory] = useState(""); 
  
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
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);   
      let data;

       if (selectedCategory === "coffees") {
        data = selectedSubCategory
          ? await getProductsByCategory(selectedSubCategory)
          : await getProducts();  
      } else if (selectedCategory === "merch") {
        data = selectedSubCategory
          ? await getMerchByCategory(selectedSubCategory)
          : await getMerchs();  
      }

      setProducts(data || []);
      setLoading(false);  
    };

    fetchProducts();
  }, [selectedCategory, selectedSubCategory]);

  const addToCart = async (productId) => {
    if (userId) {
      try {
        await insertOrUpdateCartItem({ productId, user_id: userId });
        const cartData = await getCartItem();
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

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setActiveSubCategory(subCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);  
    setSelectedSubCategory("");  
    setActiveSubCategory("");  
  };

  return (
    <div className="products-page">
      <div className="products-page--sec">
        <PageBanner bannertext="Products" />

        <div className="products-page--main flex md:flex-row flex-col lg:gap-[80px] md:gap-[50px] gap-[0px]">
          {/* Sidebar */}
          <div className="products-sidebar md:w-[20%] w-[100%] md:sticky md:top-[80px]   md:h-screen">
            <div className="products-sidebar--catog md:h-[100vh] md:py-[60px] pt-[20px] pb-[30px]">
              <div className="products-sidebar--cont">
                <p className="heading lg:px-[30px] px-[15px]">Categories</p>

                <div className="cursor-pointer">
                  <p
                    onClick={() => {
                      setIsCoffeesOpen(!isCoffeesOpen);
                      handleCategoryClick("coffees");
                      setIsMerchOpen(false);            
                    }}
                    className="catog--bar"
                  >
                    Coffees
                    <FaCaretDown />
                  </p>

                  {isCoffeesOpen && (
                    <div className="flex flex-col catog--box gap-[5px]">
                      <span
                        onClick={() => handleSubCategoryClick("Arabica")}
                        className={activeSubCategory === "Arabica" ? "active--catog" : ""}
                      >
                        Arabica
                      </span>
                      <span
                        onClick={() => handleSubCategoryClick("Robusta")}
                        className={activeSubCategory === "Robusta" ? "active--catog" : ""}
                      >
                        Robusta
                      </span>
                    </div>
                  )}
                </div>

                <div className="cursor-pointer">
                  <p
                    onClick={() => {
                      setIsMerchOpen(!isMerchOpen);
                      handleCategoryClick("merch");
                      setIsCoffeesOpen(false);        
                    }}
                    className="catog--bar"
                  >
                    Merch
                    <FaCaretDown />
                  </p>

                  {isMerchOpen && (
                    <div className="flex flex-col catog--box gap-[5px]">
                      <span
                        onClick={() => handleSubCategoryClick("shirts")}
                        className={activeSubCategory === "shirts" ? "active--catog" : ""}
                      >
                        Shirts
                      </span>
                      <span
                        onClick={() => handleSubCategoryClick("cups")}
                        className={activeSubCategory === "cups" ? "active--catog" : ""}
                      >
                        Cups
                      </span>
                      <span
                        onClick={() => handleSubCategoryClick("books")}
                        className={activeSubCategory === "books" ? "active--catog" : ""}
                      >
                        Diaries
                      </span>
                      <span
                        onClick={() => handleSubCategoryClick("bags")}
                        className={activeSubCategory === "bags" ? "active--catog" : ""}
                      >
                        Bags
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* All products */}
          <div className="all-products md:w-[75%] w-[100%] pt-[50px] pb-[160px]">
            {loading ? (
              <div className="loading-indicator">
                <Spinner />
              </div>
            ) : (
              <div className="productsallcards grid xl:grid-cols-4 lg:grid-cols-3 xsm:grid-cols-2  gap-4">
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <Cards
                      ID={product.id}
                      price={product.price}
                      name={product.name}
                      pic={product.pic}
                      addToCart={addToCart}
                      selectedItems={selectedItems}
                      className= "customforpro"
                    />
                  ))
                ) : (
                  <p>No products available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
