import { NextResponse } from "next/server";
import { ollama } from "@/app/api/ollamaConnect";

export async function POST(req: any): Promise<any> {
    const { prompt }: { prompt: string } = await req.json();
    console.log('Received prompt:', prompt);
    const schema = {
        "Titre": {
          "type": "string",
          "description": "Le titre du plat générer."
        },
        "Description": {
          "type": "string",
          "description": "Courte description du plat."
        },
        "Ingredient": {
          "type": "string",
          "description": "Liste des ingrédients qu'il faut pour faire le plat"
        },
        "Recette": 
        {
          "type": "string",
          "description": "Marche a suivre étape par étape pour faire le plat"
        }
      }
      const msgs = [
        {"role": "system", "content": `Une personne te donne une liste d'ingrédient. Créer une recette qui contient les aliments. L'output doit être en français et générer selon le schéma JSON suivant : ${JSON.stringify(schema, null, 2)} donne uniquement le json et ne fait pas de phrase inutile avant et après le json`}, 
        { "role": "user", "content":  prompt}, 
      ]

    const response = await ollama.chat({
        model: 'llama3',
        messages: msgs,
        stream: false,
    });

    console.log('Generated response:', response);

    return NextResponse.json(response);
}

export function GET(): any {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
