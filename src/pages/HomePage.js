import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Nowe Krosy",
    author: "Kros",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum dolore culpa nemo assumenda natus delectus earum praesentium veritatis quos. Ratione repudiandae nostrum necessitatibus sapiente vel expedita unde aliquid amet.",
  },
  {
    id: 2,
    title: "Nowe Kellys",
    author: "Kros",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum dolore culpa nemo assumenda natus delectus earum praesentium veritatis quos. Ratione repudiandae nostrum necessitatibus sapiente vel expedita unde aliquid amet.",
  },
  {
    id: 3,
    title: "Nowe Giant",
    author: "Kros",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum dolore culpa nemo assumenda natus delectus earum praesentium veritatis quos. Ratione repudiandae nostrum necessitatibus sapiente vel expedita unde aliquid amet.",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
