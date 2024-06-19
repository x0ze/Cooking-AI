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
                <div className="flex"><span className="text-green-500 font-bold">1.</span> <span className="ml-2">Allez dans la page recette.</span></div><br />
                <div className="flex"><span className="text-green-500 font-bold">2.</span> <span className="ml-2">Sélectionnez un mode.</span></div><br />
                <div className="flex"><span className="text-green-500 font-bold">3.</span> <span className="ml-2">Prenez une photo ou entrez vos ingredients.</span></div><br />
                <div className="flex"><span className="text-green-500 font-bold">4.</span> <span className="ml-2">Vous pouvez affiner votre plat avec des réglages supplémentaires, comme votre niveau en cuisine ou le niveau de piquant du plat.</span></div><br />
                <div className="flex"><span className="text-green-500 font-bold">5.</span> <span className="ml-2">Entrez vos allergies et sélectionnez votre régime (vegan, halal). Vous pouvez aussi spécifier un nombre de calories pour votre plat. Sauvegardez ensuite vos préférences.</span></div><br />
                <div className="flex"><span className="text-green-500 font-bold">6.</span> <span className="ml-2">Cliquez sur le bouton finish, attendez quelques secondes et vous aurez votre recette.</span></div>
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
                Nous proposons un service complètement gratuit !
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Quels types de recettes puis-je générer ?</AccordionTrigger>
                <AccordionContent>
                Vous pouvez générer une variété de recettes, y compris des plats végétariens, véganes, halal et bien plus encore. Vous pouvez également spécifier des préférences comme le niveau de piquant ou le nombre de calories.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Comment les recettes sont-elles générées ?</AccordionTrigger>
                <AccordionContent>
                Nos recettes sont générées par une intelligence artificielle qui analyse les ingrédients que vous fournissez et crée des recettes personnalisées en fonction de vos préférences et restrictions alimentaires.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>Puis-je enregistrer mes recettes préférées ?</AccordionTrigger>
                <AccordionContent>
                Cette fonctionnalité est prévue, mais est toujours en cours de dévloppement.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>Y a-t-il une limite au nombre de recettes que je peux générer ?</AccordionTrigger>
                <AccordionContent>
                Non, vous pouvez générer autant de recettes que vous le souhaitez sans aucune limitation.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger>Puis-je partager mes recettes ?</AccordionTrigger>
                <AccordionContent>
                Cette fonctionnalité est prévue, mais est toujours en cours de dévloppement.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
                <AccordionTrigger>Que faire si j'ai des allergies alimentaires ?</AccordionTrigger>
                <AccordionContent>
                Vous pouvez spécifier vos allergies alimentaires dans les paramètres de recette. L'IA prendra en compte ces informations pour générer des recettes sûres pour vous.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
