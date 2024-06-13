"use client"

import { Icons } from "./icons"
import {ChefHat, Utensils, UtensilsCrossed} from "lucide-react"
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
import {  RadioGroup, RadioGroupItem  } from "@radix-ui/react-radio-group"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function Affine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Affinez votre plât</CardTitle>
        <CardDescription>Affinez les préferences du plât que vous souhaitez.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
      <RadioGroup defaultValue="card" className="flex space-x-4 justify-center">
  <div>
        <RadioGroupItem
        value="noob"
        id="noob"
        className="peer sr-only"
        aria-label="Débutant"
        />
        <Label
        htmlFor="card"
        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        style={{ minWidth: '100px', minHeight: '100px' }}
        >
        <Utensils className="mb-3 h-6 w-6"/>
        Débutant
        </Label>
    </div>
    <div>
        <RadioGroupItem
        value="middle"
        id="middle"
        className="peer sr-only"
        aria-label="Intermédiaire"
        />
        <Label
        htmlFor="paypal"
        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        style={{ minWidth: '100px', minHeight: '100px' }}
        >
        <UtensilsCrossed className="mb-3 h-6 w-6" />
        Intermédiaire
        </Label>
    </div>
    <div>
        <RadioGroupItem
        value="pro"
        id="pro"
        className="peer sr-only"
        aria-label="Expérimenté"
        />
        <Label
        htmlFor="apple"
        className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        style={{ minWidth: '100px', minHeight: '100px' }}
        >
        <ChefHat className="mb-3 h-6 w-6" />
        Expérimenté
        </Label>
    </div>
    </RadioGroup>

        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1 pt-4">
            <span>Température</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
                Choisissez si votre plât doit être chaud ou froid.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Choisir" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="hot">Chaud</SelectItem>
                    <SelectItem value="tied">Tiède</SelectItem>
                    <SelectItem value="cold">Froid</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Piquant</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              Choisissez si vous souhaitez manger piquant.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional" />
        </div>
        <Slider defaultValue={[50]} max={100} step={1} />
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Thème</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              Choisissez le thème de votre plât, une particularité de celui-çi.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
        <Input placeholder="Ex. Mexicain, Romantique, ..."/>
      </CardContent>
    </Card>
  )
}