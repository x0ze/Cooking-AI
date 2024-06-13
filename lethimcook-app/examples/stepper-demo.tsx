import { Step, type StepItem, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import OllamaData from "@/components/ollama";
import { ModeCards } from "@/components/ModeCards";



const steps = [
	{ label: "Mode" },
	{ label: "Aliments" },
	{ label: "Régime" },
] satisfies StepItem[];

export default function StepperDemo() {
	return (
		<div className="container flex w-full flex-col gap-4">
			<Stepper initialStep={0} steps={steps}>
				{steps.map((stepProps, index) => {
					return (
						<Step key={stepProps.label} {...stepProps}>
							{/* Contenu spécifique pour chaque étape */}
							{index === 0 && (
								<div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md flex-col">
									<h1 className="text-xl m-4">Choisir un mode</h1>
									<ModeCards></ModeCards>
								</div>
							)}
							{index === 1 && (
								<div className="h-40 flex justify-between my-2 border bg-secondary text-secondary rounded-md p-5">
									<div>
										<h1 className="text-center pb-2">Ajouter vos aliments</h1>
										<OllamaData />
									</div>
								</div>
							)}
							{index === 2 && (
								<div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
									<h1 className="text-xl">Régime Content</h1>
								</div>
							)}
						</Step>
					);
				})}
				<Footer />
			</Stepper>
		</div>
	);
}

const Footer = () => {
	const {
		nextStep,
		prevStep,
		resetSteps,
		hasCompletedAllSteps,
		isLastStep,
		isOptionalStep,
		isDisabledStep,
	} = useStepper();
	return (
		<>
			{hasCompletedAllSteps && (
				<div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
					<h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
				</div>
			)}
			<div className="w-full flex justify-end gap-2">
				{hasCompletedAllSteps ? (
					<Button size="sm" onClick={resetSteps}>
						Reset
					</Button>
				) : (
					<>
						<Button
							disabled={isDisabledStep}
							onClick={prevStep}
							size="sm"
							variant="secondary"
						>
							Prev
						</Button>
						<Button size="sm" onClick={nextStep}>
							{isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
						</Button>
					</>
				)}
			</div>
		</>
	);
};
