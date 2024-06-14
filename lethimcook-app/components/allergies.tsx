"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { Input } from "@/components/ui/input"


export function Allergies() {
  return (
    <div>
      <Card className="w-[400px] m-4">
        <CardHeader>
          <CardTitle>Allergies et régime</CardTitle>
          <CardDescription>Personnaliser vos allergies et votre régime</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="w-full allergies">
            <span>Allergies</span>
            <MultipleSelector
              // defaultOptions={OPTIONS}
              className="w-full"
              placeholder="Entrer une allergie"
              creatable
              emptyIndicator={
                <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                  no results found.
                </p>
              } 
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="vegetarien" className="flex flex-col space-y-1">
              <span>Végétarien</span>
            </Label>
            <Switch id="vegetarien" aria-label="vegetarien" />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="vegan" className="flex flex-col space-y-1">
              <span>Vegan</span>
            </Label>
            <Switch id="vegan" aria-label="v" />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Label htmlFor="halal" className="flex flex-col space-y-1">
              <span>Halal</span>
            </Label>
            <Switch id="halal" aria-label="halal" />
          </div>
          <div className="w-full">
            <span>Nombre de calories</span>
            <Input
              type="number"
              placeholder="Entrer un nombre de calories pour votre plat"
              className="w-full"
              id="calorie"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Sauvegarder vos préférence
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}