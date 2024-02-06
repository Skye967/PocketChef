"use client";

import React, { useEffect, useState } from "react";
import api from "./api/api";
import { RecipeListDeconstructor } from "./util/chatGPTParser";
import { RecipeList } from "./components/RecipeList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import RecipeForm from "./components/RecipeForm";

type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string;
};

export default function Home() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (ingredientList: String, mealType: string, numberOfRecipes: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await api.post("/chat/completions", {
        model: "gpt-3.5-turbo", // or the version you want to use
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `In JSON format return ${numberOfRecipes} ${mealType} recipes with ${ingredientList}. With the properties title, ingredients, and instructions using only these ingredients `,
          },
        ],
      });

      const List = RecipeListDeconstructor(
        result.data.choices[0].message.content
      );
      setRecipeList(List.recipes);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong, please try again");
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleDummySubmit = (ingredientList: String, mealType: string, numberOfRecipes: string) => {
    fetchData(ingredientList, mealType, numberOfRecipes);
  };

  return (
    <main>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
        <h1 className="text-4xl font-bold text-center">
          Ingredients 2 Recipes
        </h1>
      </div>
      <RecipeForm onSubmit={handleDummySubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && RecipeList ? <RecipeList recipes={recipeList} /> : <Loading />}
    </main>
  );
}
