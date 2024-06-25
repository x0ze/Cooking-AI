import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from 'next/image'
import pizza from "@/public/pizza.jpeg"
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
import { Utensils } from 'lucide-react';

export const RecipeComplete: React.FC = () => {
  const [steps, setSteps] = useState<string[]>([]);
  const [recipeTitle, setRecipeTitle] = useState<string>("");
  const [recipeDescription, setRecipeDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const updateRecipeData = () => {
    const storedRecipe = localStorage.getItem('recette');
    const parsedRecipe = storedRecipe ? JSON.parse(storedRecipe) : [];
    setSteps(parsedRecipe);

    const title = localStorage.getItem('titre') || '';
    const description = localStorage.getItem('description') || '';
    setRecipeTitle(title);
    setRecipeDescription(description);

    const storedIngredients = localStorage.getItem('ingredient');
    const parsedIngredients = storedIngredients ? JSON.parse(storedIngredients) : [];
    setIngredients(parsedIngredients);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateRecipeData();
      window.addEventListener('storage', updateRecipeData);
    }

    return () => {
      window.removeEventListener('storage', updateRecipeData);
    };
  }, []);

  return (
    <div className="container flex flex-row justify-between mt-10 text-3xl md:text-4xl font-bold">
      <div className="h-full w-[60%]">
        <Skeleton className="h-[400px] w-full rounded-sxl" />
        {/*<img src="pizza.jpeg" alt="" className="h-[400px] w-full rounded-xl" />*/}
        <div className="space-y-2">
          <div className="flex justify-start">
            <h1 className="mt-5">{recipeTitle}</h1>
            <Card className="m-4 w-16">
              <CardContent className="p-2">
                      <div className="flex justify-between">
                        <h2 className="text-lg">{localStorage.getItem('couvert')}</h2>
                        <Utensils className="text-lg text-primary"/>
                      </div>
              </CardContent>
            </Card>
          </div>
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
          <CardTitle className="text-center underline">Liste des aliments</CardTitle>
        </CardHeader>
        <CardContent className="text-lg font-normal">
          {ingredients.map((ingredient, index) => {
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
                <div className="text-2xl font-bold">{localStorage.getItem('calorie')} kcal</div>
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
                <div className="text-2xl font-bold">{localStorage.getItem('glucide')} g</div>
                <p className="text-xs text-muted-foreground">
                  Le rapport normal pour un adulte est de ~275/j
                </p>
              </CardContent>
            </Card>
            <Card className="m-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Protéine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{localStorage.getItem('proteine')} g</div>
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
};
