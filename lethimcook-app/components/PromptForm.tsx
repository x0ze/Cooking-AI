import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PromptFormProps {
  index: number;
  prompt: string;
  quantity: string;
  unit: string;
  onPromptChange: (index: number, field: string, value: string) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ index, prompt, quantity, unit, onPromptChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    onPromptChange(index, name, value);
  };

  return (
    <div className='w-full mx-auto p-2'>
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <Input
            type="text"
            name="prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="Nom de votre aliment"
            className="w-full"
          />
        </div>
        <div className="w-1/4">
          <Input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            placeholder="Quantité"
            className="w-full"
          />
        </div>
        <div className="w-1/4">
          <Select name="unit" value={unit} onValueChange={(value) => onPromptChange(index, 'unit', value)}
            name="unit"
            value={unit}
            onValueChange={(value) => onPromptChange(index, 'unit', value)}
          >
            <SelectTrigger id="framework" className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Kilogramme">Kilogramme</SelectItem>
              <SelectItem value="Gramme">Gramme</SelectItem>
              <SelectItem value="Litre">Litre</SelectItem>
              <SelectItem value="Millilitre">Millilitre</SelectItem>
              <SelectItem value="Pièces">Pièces</SelectItem>
              <SelectItem value="Morceaux">Morceau</SelectItem>
              <SelectItem value="Kilogramme">Kilogramme</SelectItem>
              <SelectItem value="Gramme">Gramme</SelectItem>
              <SelectItem value="Litre">Litre</SelectItem>
              <SelectItem value="Millilitre">Millilitre</SelectItem>
              <SelectItem value="Pièces">Pièces</SelectItem>
              <SelectItem value="Morceau">Morceau</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
