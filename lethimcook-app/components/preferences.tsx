"use client"

import { Icons } from "./icons"
import {ChefHat, Utensils, UtensilsCrossed} from "lucide-react"
import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {  RadioGroup, RadioGroupItem  } from "@radix-ui/react-radio-group"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {ToggleGroup,ToggleGroupItem,} from "@/components/ui/toggle-group"

export function Affine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Affinez votre plât</CardTitle>
        <CardDescription>Affinez les préferences du plât que vous souhaitez.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
      <ToggleGroup type="single" className="cards">
        <ToggleGroupItem value="noob" className="h-[auto] p-1">
          <Card>
                <Label
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                style={{ minWidth: '100px', minHeight: '100px' }}
                >
                <Utensils className="mb-3 h-6 w-6"/>
                Débutant
                </Label>
            </Card>
        </ToggleGroupItem>
        <ToggleGroupItem value="middle"  className="h-[auto] p-1">
            <Card>
                <Label
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                style={{ minWidth: '100px', minHeight: '100px' }}
                >
                <UtensilsCrossed className="mb-3 h-6 w-6" />
                Intermédiaire
                </Label>
                </Card>
        </ToggleGroupItem>
        <ToggleGroupItem value="pro"  className="h-[auto] p-1">
          <Card>
                <Label
                className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                style={{ minWidth: '100px', minHeight: '100px' }}
                >
                <ChefHat className="mb-3 h-6 w-6" />
                Expérimenté
                </Label>
            </Card>
        </ToggleGroupItem>
      </ToggleGroup>

        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1 pt-4">
            <span>Température</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
                Choisissez si votre plât doit être chaud ou froid.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="mt-4">
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

        <div className="flex items-center justify-between space-x-4 mt-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Piquant</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              Choisissez si vous souhaitez manger piquant.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional"/>
        </div>
        <Slider defaultValue={[50]} max={100} step={1} className="mt-4"/>
        <div className="flex items-center justify-between space-x-4 mt-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Thème</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground mt-1">
              Choisissez le thème de votre plât, une particularité de celui-çi.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
        <Input placeholder="Ex. Mexicain, Romantique, ..." className="mt-4"/>
      </CardContent>
    </Card>
  )
}