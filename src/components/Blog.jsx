import React from "react";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
  

function Blog() {
  const blogs = [
    {
      image: blog1,
      title: "The Journey of Coffee: From Bean to Cup",
      description:
        "Coffee, a beloved beverage enjoyed by millions around the world, has a rich and complex journey from its origins as a humble bean to the comforting cup we sip each morning.",
    },
    {
      image: blog2,
      title: "The Health Benefits of Drinking Coffee",
      description:
        "Coffee is one of the most popular beverages worldwide, cherished for its rich flavor and invigorating aroma.",
    },
    {
      image: blog3,
      title: "Exploring the Different Types of Coffee Beans",
      description:
        "Coffee is more than just a beverage; it's a global culture, a daily ritual, and for many, a passion. At the heart of every cup of coffee is the humble coffee bean.",
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog--subsec pt-16">
        <h1 className="text-center text-3xl font-bold">Latest Blogs</h1>
        <div className="blog--cont py-16 px-4 md:px-8 lg:px-12">
          <div className="blog--boxes flex flex-wrap gap-5 justify-center">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="blog--box w-full md:w-[45%] lg:w-[30%] flex flex-col gap-10"
              >
                <div className="blog--img w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="blog--content">
                  <div className="blog--text w-full flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                  <div className="blog--btns flex gap-2">
                    <button className="blog--btns-btn   text-white px-4 py-2 rounded-md">
                      Read more
                    </button>
                    <button className="blog--btns-btn   text-white px-4 py-2 rounded-md">
                      View more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
