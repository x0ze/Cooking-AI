"use client";

import StepperDemo from "@/examples/stepper-demo";

export function StepperExamples() {
	return (
		<div className="w-full space-y-8">
			<div className="flex flex-col gap-4">
				<p className="font-semibold">Default</p>
				<StepperDemo />
			</div>
		</div>
	);
}
