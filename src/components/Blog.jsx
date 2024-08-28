import React from "react";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import blog4 from "../images/blog-4.jpg";
import blog5 from "../images/blog-5.jpg";
import blog6 from "../images/blog-6.jpg";

function Blog() {
  return (
    <div className="blog-section">
      <div className="blog--subsec pt-[60px]">
        <h1>Latest Blogs</h1>
        <div className="w-[100%] blog--cont py-[60px]">
          <div className="blog--boxes flex flex-row gap-[20px] justify-center">
            <div className="blog--box w-[30%] flex flex-col gap-[40px]">
              <div className="blog--img w-full">
                <img src={blog4} alt="" className="w-full h-full " />
              </div>

              <div className="blog--content">
                <div className="blog--text w-full flex flex-col gap-[10px]">
                  <h2>The Journey of Coffee: From Bean to Cup </h2>
                  <p>
                    Coffee, a beloved beverage enjoyed by millions around the
                    world, has a rich and complex journey from its origins as a
                    humble bean to the comforting cup we sip each morning.{" "}
                  </p>
                </div>
                <div className="blog--btns flex flex-row gap-[10px]">
                  <button className="blog--btns-btn">Read more</button>
                  <button className="blog--btns-btn">View more</button>
                </div>
              </div>
            </div>

            <div className="blog--box w-[30%] flex flex-col gap-[40px]">
              <div className="blog--img w-full">
                <img src={blog2} alt="" className="w-full h-full " />
              </div>

              <div className="blog--content">
                <div className="blog--text w-full flex flex-col gap-[10px]">
                  <h2>The Health Benefits of Drinking Coffee </h2>
                  <p>
                    The Health Benefits of Drinking Coffee Coffee is one of the
                    most popular beverages worldwide, cherished for its rich
                    flavor and invigorating aroma.
                  </p>
                </div>
                <div className="blog--btns flex flex-row gap-[10px]">
                  <button className="blog--btns-btn">Read more</button>
                  <button className="blog--btns-btn">View more</button>
                </div>
              </div>
            </div>

            <div className="blog--box w-[30%] flex flex-col gap-[40px]">
              <div className="blog--img w-full">
                <img src={blog3} alt="" className="w-full h-full " />
              </div>

              <div className="blog--content">
                <div className="blog--text w-full flex flex-col gap-[10px]">
                  <h2>Exploring the Different Types of Coffee Beans</h2>
                  <p>
                    Coffee is more than just a beverage; it's a global culture,
                    a daily ritual, and for many, a passion. At the heart of
                    every cup of coffee is the humble coffee bean,
                  </p>
                </div>
                <div className="blog--btns flex flex-row gap-[10px]">
                  <button className="blog--btns-btn">Read more</button>
                  <button className="blog--btns-btn">View more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
