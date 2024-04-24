"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/search";
import Card from "./components/Card";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("Chicken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        if (!res.ok) {
          throw new Error("Aconteceu um erro");
        }
        const result = await res.json();
        //console.log(result)
        setRecipes(result?.meals);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    fetchRecipes();
  }, [name]);

  console.log(recipes);

  return (
    <div>
      <Header />
      <Search setName={setName} setRecipes={setRecipes} />
      <div className="flex items-center justify-center p-10">
        {loading ? (
          <>
            {" "}
            <h1 className="text-center text-3xl"> Carregando...</h1>{" "}
          </>
        ) : (
          <>
            <div className="flex flex-wrap flex-col lg:flex-row items-center gap-5">
              {recipes?.map((recipe) => (
                <Card key={recipe?.idMeal} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
