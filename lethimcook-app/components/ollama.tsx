'use client'
import React, { useState } from 'react';
import PromptForm from './PromptForm';

export default function OllamaData(): JSX.Element {
  const [prompts, setPrompts] = useState<string[]>(['']);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handlePromptChange = (index: number, value: string) => {
    const newPrompts = [...prompts];
    newPrompts[index] = value;
    setPrompts(newPrompts);
  };

  const addPromptForm = () => {
    setPrompts([...prompts, '']);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponseMessage(null);

    try {
      const predefinedPrompt = "Fait une recette avec les aliments suivants :";
      const prompt = `${predefinedPrompt} ${prompts.join(', ')}`;

      const response = await fetch(`http://localhost:3000/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prompt
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
      <form onSubmit={handleSubmit}>
        {prompts.map((prompt, index) => (
          <PromptForm
            key={index}
            index={index}
            prompt={prompt}
            onPromptChange={handlePromptChange}
          />
        ))}
        <button type="button" onClick={addPromptForm}>Ajouter un prompt</button>
        <button type="submit">Envoyer</button>
      </form>
      {loading && <div>Chargement...</div>}
      {error && <div>Erreur : {error.message}</div>}
      {responseMessage && <div>Réponse: {responseMessage}</div>}
    </>
  );
}
