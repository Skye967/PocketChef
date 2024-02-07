"use client";

import React, { useEffect, useState } from "react";
import api from "./api/api";
import { RecipeListDeconstructor } from "./util/chatGPTParser";
import { RecipeList } from "./components/RecipeList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import RecipeForm from "./components/RecipeForm";
import Image from "next/image";
import logo from "../public/littleChefLogo.png"

type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string;
};

export default function Home() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (ingredientList: String, mealType: string, numberOfRecipes: string, dietType: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await api.post("/chat/completions", {
        model: "gpt-3.5-turbo", // or the version you want to use
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `In JSON format return ${numberOfRecipes} ${dietType} ${mealType} recipes with ${ingredientList}. With the properties title, ingredients, and instructions using only these ingredients `,
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
  
  const handleDummySubmit = (ingredientList: String, mealType: string, numberOfRecipes: string, dietType: string) => {
    fetchData(ingredientList, mealType, numberOfRecipes, dietType);

  return (
    <main>
      <div className="flex justify-between bg-gradient-to-r from-green-500 via-pink-500 to-green-500 text-white py-8 p-8">
        <div className="w-1/3">
          <Image
            src={logo}
            alt="PocketChef Logo"
            className="w-20 h-20 rounded-full bg-white p-1"
          />
        </div>
        <div className="flex justify-center place-items-center w-1/3">
          <h1 className="text-4xl font-bold text-center ">PocketChef</h1>
        </div>
        <div className="w-1/3"></div>
      </div>
      <RecipeForm onSubmit={handleDummySubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && RecipeList ? (
        <RecipeList recipes={recipeList} />
      ) : (
        <Loading />
      )}
    </main>
  );
}
