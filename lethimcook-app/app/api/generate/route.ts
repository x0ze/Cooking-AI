import { NextResponse } from "next/server";
import { ollama } from "@/app/api/ollamaConnect";

export async function POST(req: any): Promise<any> {
    const { prompt }: { prompt: string } = await req.json();
    console.log('Received prompt:', prompt);
    console.log('Received prompt:', prompt);
    const schema = {
        "Titre": {
            "type": "string",
            "description": "Le titre du plat généré. Il doit être un nom de plat réaliste et couramment utilisé."
        },
        "Description": {
            "type": "string",
            "description": "Description du plat."
        },
        "Ingredient": {
            "type": "string",
            "description": "Liste des ingrédients nécessaires pour préparer le plat."
        },
        "Recette": {
            "type": "string",
            "description": "Instructions étape par étape pour préparer le plat."
        },
        "Calorie": {
            "type": "string",
            "description": "Le nombre de calorie au totale dans le plat"
        },
        "Prot": {
            "type": "string",
            "description": "Le nombre de proteine au totale dans le plat en gramme"
        },
        "Glucide": {
            "type": "string",
            "description": "Le nombre de glucide au totale dans le plat en gramme"
        },
        "Couvert": {
            "type": "string",
            "description": "Le nombre de personne pour manger le plat"
        }
    };
    
    const exampleOutput = {
        "Titre": "Burger de boeuf",
        "Description": "Un burger classique avec un steak juteux, du pain et du ketchup.",
        "Ingredient": ["Pain (3x)", "steak (250 grammes)", "ketchup (selon envie)"],
        "Recette": ["Faites cuire le steak selon votre préférence", "Toastez légèrement le pain", "Placez le steak cuit sur la moitié inférieure du pain", "Ajoutez du ketchup par-dessus le steak", "Refermez le burger avec la moitié supérieure du pain et servez."],
        "Calorie": 216,
        "Prot": 15,
        "Glucide": 20,
        "Couvert": 1
    };
    
    const msgs = [
        {
            "role": "system",
            "content": `Une personne te donne une liste d'ingrédients. Crée une recette d'un plat ou d'un menu qui utilise ces ingrédients de manière réaliste. Le nom du plat ou du menu doit être reconnaissable et logique par rapport aux ingrédients. Si la personne ne te donne aucun ingrédient, crée une recette aléatoire. L'output doit être en français et doit être généré selon le schéma JSON suivant : ${JSON.stringify(schema, null, 2)}. Fournis uniquement le JSON, sans texte supplémentaire avant ou après. Voici un exemple d'output attendu :
            ${JSON.stringify(exampleOutput, null, 2)}`
        }, 
        { 
            "role": "user", 
            "content": prompt 
        }
    ];    

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
