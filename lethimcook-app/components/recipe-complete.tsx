"use client"
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export function RecipeComplete() {
  const [steps, setSteps] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Check if localStorage is available (client-side only)
    if (typeof window !== 'undefined') {
      // Fetch recipe steps
      const storedRecipe = localStorage.getItem('recette');
      const parsedRecipe = storedRecipe ? JSON.parse(storedRecipe) : [];
      setSteps(parsedRecipe);

      // Fetch recipe title and description
      const title = localStorage.getItem('titre') || '';
      const description = localStorage.getItem('description') || '';
      setRecipeTitle(title);
      setRecipeDescription(description);

      // Fetch ingredients and their quantities
      const storedIngredients = localStorage.getItem('ingredient');
      const parsedIngredients = storedIngredients ? JSON.parse(storedIngredients) : [];
      setIngredients(parsedIngredients);
    }
  }, []);

  return (
    <div className="container flex flex-row justify-between mt-10 text-3xl md:text-4xl font-bold">
      <div className="h-full w-[60%]">
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="space-y-2">
          <h1 className="mt-5">{recipeTitle}</h1>
          <p className="text-base text-muted-foreground mx-auto">{recipeDescription}</p>
          <Accordion type="single" collapsible className="w-full text-lg font-normal">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>Étape {index + 1}</AccordionTrigger>
                <AccordionContent>{step}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Card className="w-[400px] min-h-[600px] m-0">
        <CardHeader>
          <CardTitle className="text-center">Liste des aliments</CardTitle>
        </CardHeader>
        <CardContent className="text-lg font-normal">
          {ingredients.map((ingredient, index) => {
            // Split the ingredient by '(' and ')'
            const parts = ingredient.split('(');
            if (parts.length === 2) {
              const name = parts[0].trim();
              const quantity = parts[1].replace(')', '').trim();

              return (
                <Card key={index} className="m-2">
                  <CardContent className="flex flex-row items-center justify-between space-y-0 p-2">
                    <h2 className="text-xl">{name}</h2>
                    <p className="text-xs text-muted-foreground">{quantity}</p>
                  </CardContent>
                </Card>
              );
            } else {
              return (
                <Card key={index} className="m-2">
                  <CardContent className="flex flex-row items-center justify-between space-y-0 p-2">
                    <h2 className="text-xl">{ingredient}</h2>
                  </CardContent>
                </Card>
              );
            }
          })}
          <Separator className="my-4 h-[3px]" />
          <div className="">
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Calorie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">529 kcal</div>
                <p className="text-xs text-muted-foreground">
                  Le rapport normal pour un adulte est de 2000/j
                </p>
              </CardContent>
            </Card>
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Glucide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20 g</div>
                <p className="text-xs text-muted-foreground">
                  Le rapport normal pour un adulte est de 250, 300/j
                </p>
              </CardContent>
            </Card>
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Protéine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15 g</div>
                <p className="text-xs text-muted-foreground">
                  Le rapport normal pour un adulte est de ~70/j
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
