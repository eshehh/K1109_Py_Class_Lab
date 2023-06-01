import React, { useState } from "react";
import Map from "./Map";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoriesBlock = styled.div`
  background-color: white;
  position: sticky;
  top: 0px;
  display: flex;
  padding: 1rem;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`;

const Category = styled(Link)`
  background-color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
}`;

const categories = [
  { name: "거제도", text: "거제도" },
  { name: "거문도", text: "거문도" },
  { name: "추자도", text: "추자도" },
  { name: "통영", text: "통영" }
];

const PlacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            to={`/${c.name}`}
            onClick={() => handleCategorySelect(c)}
            className={selectedCategory === c ? "active" : ""}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock> */}
      <Map selectedCategory={selectedCategory} />
    </div>
  );
};

export default PlacePage;