import React from "react";
//destructuring the prop
function CategoryFilter({ categories, onSelect, selectedCategory }) {
//mapping thru the categories 
  const CategoryButtons = categories.map((category) => {
//onSelect is equal to SetCategory
    //setting the category to whatever the user clicked
    const handleClick = () => {
      onSelect(category)
    }
//each of the category if it match the selected category of the user
    return (
      <button
        className={category === selectedCategory ? "selected" : null}
        key={category}
        onClick={handleClick}
      >{category}</button>
    )
  })


//
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CategoryButtons}
    </div>
  );
}

export default CategoryFilter;
