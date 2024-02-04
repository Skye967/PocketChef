"use client";

import Ingredient from "./components/Ingredient";
// import RecipeList from "./components/RecipeList";
import React, { useState } from "react";
import api from "./api/api";
import { RecipeListDeconstructor } from "./util/chatGPTParser";
import { RecipeList } from "./components/RecipeList";


type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string;
};

export default function Home() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null)

  
  const fetchData = async (ingredientList: String) => {
       try {
         const result = await api.post("/chat/completions", {
           model: "gpt-3.5-turbo", // or the version you want to use
           messages: [
             { role: "system", content: "You are a helpful assistant." },
             { role: "user", content: `Return 5 recipes in JSON format using only ${ingredientList}`  },
           ],
         });
         const List = RecipeListDeconstructor(result.data.choices[0].message.content);
         setRecipeList(List.recipes)
          console.log(result)
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

  const handleDummySubmit = (ingredientList: String) => {
      console.log(ingredientList);
      fetchData(ingredientList); 
  };

  return (
    <main>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
        <h1 className="text-4xl font-bold text-center">
          Ingredients 2 Recipes
        </h1>
      </div>
      <Ingredient onSubmit={handleDummySubmit} />
      <RecipeList recipes={recipeList} />
    </main>
  );
};