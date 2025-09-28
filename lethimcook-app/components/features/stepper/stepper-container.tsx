"use client";

import StepperFeature from "./stepper-feature";

export function StepperContainer() {
	return (
		<div className="w-full space-y-8">
			<div className="flex flex-col gap-4 m-4">
				<StepperFeature />
			</div>
		</div>
	);
}
