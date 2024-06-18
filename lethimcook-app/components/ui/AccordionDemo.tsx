import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-[700px] m-[auto] mt-4">
            <h2 className="mt-12 border-b pb-2 text-2xl font-semibold">FAQ</h2>  
            <AccordionItem value="item-1">
                <AccordionTrigger>Comment générer des recettes ?</AccordionTrigger>
                <AccordionContent>
                1. Allez dans la page recette.<br />
                2. Sélectionnez un mode.<br />
                3. Prenez une photo ou entrez vos ingredients.<br />
                4. Vous pouvez affinez votre plat avec des réglages supplémentaires, comme votre niveau en cuisine ou le niveau de piquant du plat.<br />
                5. Entrez vos allergies et selectionnez votre régime (vegan, halal). Vous pouvez aussi spécifier un nombre de calories pour votre plat. Sauvegarder ensuite vos préférences.<br />
                6. Cliquer sur le bouton finish, attendez quelques secondes et vous aurez votre recette.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Est-ce que je peut générer une recette aléatoire ?</AccordionTrigger>
                <AccordionContent>
                Oui. Sélectionnez le mode manuel et n'entrez aucun ingrédient. L'IA vous générera une recette aléatoire.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Combien ça coûte ?</AccordionTrigger>
                <AccordionContent>
                C'est gratuit.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
    }