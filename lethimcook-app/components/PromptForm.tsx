import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface PromptFormProps {
  index: number;
  prompt: string;
  onPromptChange: (index: number, value: string) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ index, prompt, onPromptChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPromptChange(index, event.target.value);
  };

  return (
    <form className='w-full mx-auto p-2'>
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <Input
            type="text"
            value={prompt}
            onChange={handleChange}
            placeholder="Nom de votre aliment"
            className="w-full"
          />
        </div>
        <div className="w-1/4">
          <Input
            type="number"
            placeholder="Quantité"
            className="w-full"
          />
        </div>
        <div className="w-1/4">
          <Select>
            <SelectTrigger id="framework" className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="kg">Kilogramme</SelectItem>
              <SelectItem value="gr">Gramme</SelectItem>
              <SelectItem value="l">Litre</SelectItem>
              <SelectItem value="ml">Millilitre</SelectItem>
              <SelectItem value="pcx">Pièces</SelectItem>
              <SelectItem value="morceau">Morceau</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>

  );
};

export default PromptForm;
