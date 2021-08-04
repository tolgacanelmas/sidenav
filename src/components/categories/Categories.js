import React from 'react';
import MenuItem from './MenuItem';
import styles from './categories.module.css';

const categories = [
  {
    name: "Home",
    img: "/home.png",
    subCategory: []
  },
  {
    name: "Calendar",
    img: "/calendar.png",
    subCategory: []
  },
  {
    name: "Messages",
    img: "/messages.png",
    subCategory: []
  },
  {
    name: "Projects",
    img: "/projects.png",
    subCategory: [
      "Google", "Amazon", "Facebook", "Airbnb"
    ]
  },
  {
    name: "Progress",
    img: "/progress.png",
    subCategory: []
  },
  {
    name: "Goals",
    img: "/goals.png",
    subCategory: []
  }
]

function Categories() {

  return (
    <div className={styles.categoriesContainer}>
      {
        categories.map((category, i) => {
          return (
            <MenuItem name={category.name} img={category.img} subCategory={category.subCategory} key={i} />
          )
        })
      }
    </div>
  );
}

export default Categories;
