import * as React from "react"
import PromptForm from "../ollama/PromptForm"
 
import { Button } from "@/components/ui/shadcn/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/custom/card"
import { Input } from "@/components/ui/shadcn/input"
import { Label } from "@/components/ui/shadcn/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select"
 
export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Aliment</Label>
              <Input id="name" placeholder="Nom de votre aliment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Unité</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Kilogramme</SelectItem>
                  <SelectItem value="sveltekit">Gramme</SelectItem>
                  <SelectItem value="astro">Litre</SelectItem>
                  <SelectItem value="nuxt">Millilitre</SelectItem>
                  <SelectItem value="sveltekit">Pièces</SelectItem>
                  <SelectItem value="sveltekit">Morceau</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Ajouter</Button>
      </CardFooter>
    </Card>
  )
}