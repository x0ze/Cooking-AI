import React, { useState } from 'react';
import PromptForm from './PromptForm';
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
// import {promptText} from "@/components/ollama"
// const {promptText} = require('@/components/ollama');
interface Prompt {
  prompt: string;
  quantity: string;
  unit: string;
}


let promptText = {};
export function callback(data : any){
  console.log(data)
  promptText = data;
}






export default function OllamaSubmit(): JSX.Element {
  const [prompts, setPrompts] = useState<Prompt[]>([{ prompt: '', quantity: '', unit: '' }]);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sendData = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponseMessage(null);

    try {
      console.log(promptText)
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
      setResponseMessage(data.response);
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    	{/* <form onSubmit={sendData}>
	      <button type="submit">Envoyre</button>
      </form> */}
      {loading && <div>Chargement...</div>}
      {error && <div>Erreur : {error.message}</div>}
      {responseMessage && <div>Réponse: {responseMessage}</div>}
    </>
  );
}
