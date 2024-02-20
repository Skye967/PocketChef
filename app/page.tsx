"use client";

import React, { useState } from "react";
import { RecipeList } from "./components/RecipeList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import RecipeForm from "./components/RecipeForm";
import Image from "next/image";
import logo from "../public/littleChefLogo.png";
import { Recipe } from "./util/constants";
import { RecipeListConstructor } from "./util/chatGPTParser";

export default function Home() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testList, setTestList] = useState<any>(null);
  let count = 0;

  const HandleSubmit = async (
    ingredientList: String,
    mealType: string,
    numberOfRecipes: string,
    dietType: string
  ) => {
    setError(null);
    setIsLoading(true);

    try {
      const list: Promise<Recipe[] | null> = RecipeListConstructor(
        ingredientList,
        mealType,
        numberOfRecipes,
        dietType
      );
      setRecipeList(await list);
    } catch (error) {
      console.log("Something went wrong!", error);
      setError("Something went wrong, please try again!");
    }

    setIsLoading(false);
  };

  return (
    <main>
      <div className="flex justify-between bg-gradient-to-r from-emerald-300 via-emerald-800 to-emerald-300 text-white p-6 shadow-black shadow-sm">
        <div className="w-1/3">
          <Image
            src={logo}
            alt="PocketChef Logo"
            className="w-20 h-20 rounded-full bg-white p-1"
          />
        </div>
        <div className="flex justify-center place-items-center w-1/3">
          <h1 className="text-3xl font-bold text-center ">PocketChef</h1>
        </div>
        <div className="w-1/3"></div>
      </div>
      <RecipeForm onSubmit={HandleSubmit} />
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && RecipeList ? (
        <RecipeList recipes={recipeList} />
      ) : (
        <Loading />
      )}
    </main>
  );
}
