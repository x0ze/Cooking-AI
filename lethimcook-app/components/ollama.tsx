// OllamaData.tsx
import React, { useState } from 'react';
import PromptForm from './PromptForm';
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {callback} from "@/components/ollama-submit";
interface Prompt {
  prompt: string;
  quantity: string;
  unit: string;
}

export default function OllamaData(): JSX.Element {
  const [prompts, setPrompts] = useState<Prompt[]>([{ prompt: '', quantity: '', unit: '' }]);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handlePromptChange = (index: number, field: string, value: string) => {
    const newPrompts = [...prompts];
    newPrompts[index] = { ...newPrompts[index], [field]: value };
    setPrompts(newPrompts);
  };

  const addPromptForm = () => {
    setPrompts([...prompts, { prompt: '', quantity: '', unit: '' }]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponseMessage(null);

    try {
      const predefinedPrompt = "Fait une recette avec les aliments suivants :";
      const formattedPrompts = prompts.map(prompt => `${prompt.prompt} [${prompt.quantity} ${prompt.unit}]`);
      const promptText = `${predefinedPrompt} ${formattedPrompts.join(', ')}`;
      console.log(promptText);
      const response = await fetch(`http://localhost:3000/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: promptText
        })
      });

       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }

      const data = await response.json();
      console.log('Response data:', data);

      // Extraire les valeurs spécifiques du message JSON
      const messageContent = JSON.parse(data.message.content);
      const { Titre, Description, Ingredient, Recette } = messageContent;

      // Stocker chaque élément avec des clés distinctes dans localStorage
      localStorage.setItem('titre', JSON.stringify(Titre));
      localStorage.setItem('description', JSON.stringify(Description));
      localStorage.setItem('ingredient', JSON.stringify(Ingredient));
      localStorage.setItem('recette', JSON.stringify(Recette));

      // Mettre à jour l'état avec le message complet si nécessaire
      setResponseMessage(data.message.content);
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
    // finally {
    //   //
    // }
  };
  return (
    <>
    
      <form id='food-form' onSubmit={handleSubmit}>
        {prompts.map((prompt, index) => (
          <PromptForm
            key={index}
            index={index}
            prompt={prompt.prompt}
            quantity={prompt.quantity}
            unit={prompt.unit}
            onPromptChange={handlePromptChange}
          />
        ))}
        <Button type='button' onClick={addPromptForm} variant="outline" size="icon" className='m-2'>
          <Plus className="h-4 w-4" />
        </Button>
        {/* <button type="submit">Valider</button> */}
      </form>
      {loading && <div>Chargement...</div>}
      {error && <div>Erreur : {error.message}</div>}
      {responseMessage && <pre>Réponse: {responseMessage}</pre>}
    </>
  );
}



