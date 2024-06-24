"use client"
import React, { useEffect, useState } from "react";
import { Recipe } from "@/components/recipe";
import { RecipeComplete } from "@/components/recipe-complete";

export const RecipeLoader: React.FC = () => {
  const [isRecipeComplete, setIsRecipeComplete] = useState(false);

  const checkLocalStorage = () => {
    const storedRecipe = localStorage.getItem('recette');
    const title = localStorage.getItem('titre');
    const description = localStorage.getItem('description');
    const storedIngredients = localStorage.getItem('ingredient');
    const calorie = localStorage.getItem('calorie');
    const glucide = localStorage.getItem('glucide');
    const proteine = localStorage.getItem('proteine');

    if (storedRecipe && title && description && storedIngredients && calorie && glucide && proteine) {
      setIsRecipeComplete(true);
    } else {
      setIsRecipeComplete(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkLocalStorage();
      window.addEventListener('storage', checkLocalStorage);
    }

    return () => {
      window.removeEventListener('storage', checkLocalStorage);
    };
  }, []);

  return isRecipeComplete ? <RecipeComplete /> : <Recipe />;
};
