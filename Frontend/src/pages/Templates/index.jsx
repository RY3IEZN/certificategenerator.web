import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./template.style.scss";

import Filter from "./modal";

// template card images
import cardimg from "../../assets/images/Templates/Rectangle1.webp";
import cardimg2 from "../../assets/images/Templates/Rectangle2.webp";
import cardimg3 from "../../assets/images/Templates/Rectangle3.webp";
import cardimg4 from "../../assets/images/Templates/Rectangle4.webp";
import cardimg5 from "../../assets/images/Templates/Rectangle5.webp";
import cardimg6 from "../../assets/images/Templates/Rectangle6.webp";
import cardimg7 from "../../assets/images/Templates/Rectangle7.webp";
import cardimg8 from "../../assets/images/Templates/Rectangle8.webp";
import cardimg9 from "../../assets/images/Templates/Rectangle9.webp";
import cardimg10 from "../../assets/images/Templates/Rectangle10.webp";
import cardimg11 from "../../assets/images/Templates/Rectangle11.webp";
import premiumicon from "../../assets/images/Templates/icons/Vector.svg";
import filtericon from "../../assets/images/Templates/icons/setting.svg";
import addicon from "../../assets/images/Templates/icons/add-square.svg";
import closeicon from "../../assets/images/Templates/icons/close.png";

export default function Template() {
  const [modalState, setModalState] = useState(false);

  const [category, setCategory] = useState([]);

  const cardImages = [
    {
      id: 1,
      url: cardimg,
      type: "recognition",
      layout: "landscape",
    },
    {
      id: 2,
      url: cardimg2,
      type: "recognition",
      layout: "landscape",
    },
    {
      id: 3,
      url: cardimg3,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 4,
      url: cardimg4,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 5,
      url: cardimg5,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 6,
      url: cardimg6,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 7,
      url: cardimg7,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 8,
      url: cardimg8,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 9,
      url: cardimg9,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 10,
      url: cardimg10,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 11,
      url: cardimg11,
      type: "completion",
      layout: "landscape",
    },
  ];

  let categories = category;

  const closeModal = () => {
    setModalState(false);
  };

  const childToParent = (clickedCategory) => {
    categories.push(clickedCategory);
  };

  const errorMsg = document.querySelector('.error-wrapper');

  const applySelectCategories = () => {
    setCategory(categories);

    if (categories.length === 0) {
      showErrorMsg();
    } else {
      return hideErrorMsg();
    }
  };

  const hideErrorMsg = () => {
    errorMsg.classList.add('hideerrorMsg');
  }

  const showErrorMsg = () => {
    errorMsg.classList.remove('hideerrorMsg');
  }

  return (
    <div className="template-wrapper">
      <header>
        <h1 className="templates-title">Templates</h1>
        <div className="error-wrapper hideerrorMsg">
          <div className="error-container">
            <p className="error-container__message">Oops! It seems like none of the templates match the filters you selected. Please modify your filters or browse the templates manually.</p>
            <img onClick={hideErrorMsg} src={closeicon} alt="close icon" className="closeicon" />
        </div>
        </div>

        <div className="top-container-div">
          <p>All results</p>

          {/* hide clear button if no filter is selected */}
          {categories.length === 0 ? null : (
            <button onClick={() => setCategory([])} className="clear-btn">
              Clear All Filters
            </button>
          )}
        </div>
        <button
          className="filter-btn"
          onClick={() => setModalState(!modalState)}
        >
          Filters{" "}
          <span>
            <img src={filtericon} alt="" />
          </span>
        </button>
        {/* modal popup */}
        <Filter
          modalClose={closeModal}
          open={modalState}
          selectedCategory={childToParent}
          applyCategories={applySelectCategories}
          setCategory={setCategory}
        />
      </header>
      <div className="cards-container">
        {/* cards start */}
        <div className="template-card">
          <div className="template-card__header">
            <h2 className="canvas-title">Blank Canvas</h2>
            <button className="btn-premium">
              Premium
              <img src={premiumicon} alt="" />
            </button>
          </div>
          <div className="template-card__icon">
            <Link to="/pricing">
              <img src={addicon} alt="card" />
            </Link>
          </div>
        </div>

        {cardImages
          .filter((item) => {
            return category.length === 0 ? item : category.includes(item.type);
          })
          .map((item) => {
            return (
              <div key={item.id} className="template-card">
                <div className="template-card__img">
                  <a href="#">
                    <img src={item.url} alt="card" />
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
