import React from "react";
import "./blog.style.scss";


export default function Blog() {
  return (
    <div>
        <div className="blog-container">
            <h2>Blog</h2>
            <div className="blog-container__main">
                <div className="blog-container__header">
                <h2>Welcome to our world at Certawi</h2>
                <p>Get to know how it is to work at a wonderful place like Certawi. Also get to meet the various geniuses at the company</p>
                <button>Read Article</button>
                <div className="profile">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Nancy Pelosi</p>
                        <p>10th June 2022</p>
                    </div>
                </div>
                </div>
                <div className="blog-container__image">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
