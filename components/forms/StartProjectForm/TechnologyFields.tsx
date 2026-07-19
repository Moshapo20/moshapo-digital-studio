import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { StartProjectFormValues } from "./types";
import { fieldClass, labelClass, errorClass } from "./fieldStyles";

const toolOptions = ["Excel", "WhatsApp", "Paper", "Manual process", "Other"];

export function TechnologyFields({
  register,
  errors,
}: {
  register: UseFormRegister<StartProjectFormValues>;
  errors: FieldErrors<StartProjectFormValues>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="businessProblem" className={labelClass}>
          What business problem are you trying to solve?
        </label>
        <textarea id="businessProblem" rows={3} className={fieldClass} {...register("businessProblem")} />
        {errors.businessProblem && <p className={errorClass}>{errors.businessProblem.message as string}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="whoWillUse" className={labelClass}>
            Who will use the system?
          </label>
          <input id="whoWillUse" className={fieldClass} {...register("whoWillUse")} />
          {errors.whoWillUse && <p className={errorClass}>{errors.whoWillUse.message as string}</p>}
        </div>
        <div>
          <label htmlFor="currentProcess" className={labelClass}>
            How is this currently managed?
          </label>
          <input id="currentProcess" className={fieldClass} {...register("currentProcess")} />
          {errors.currentProcess && <p className={errorClass}>{errors.currentProcess.message as string}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget
          </label>
          <input id="budget" className={fieldClass} {...register("budget")} />
          {errors.budget && <p className={errorClass}>{errors.budget.message as string}</p>}
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <input id="timeline" className={fieldClass} {...register("timeline")} />
          {errors.timeline && <p className={errorClass}>{errors.timeline.message as string}</p>}
        </div>
      </div>

      <div>
        <span className={labelClass}>Currently using</span>
        <div className="flex flex-wrap gap-4">
          {toolOptions.map((tool) => (
            <label key={tool} className="flex items-center gap-2 text-sm text-black/70">
              <input type="checkbox" value={tool} {...register("currentTools")} />
              {tool}
            </label>
          ))}
        </div>
        {errors.currentTools && <p className={errorClass}>{errors.currentTools.message as string}</p>}
      </div>

      <div>
        <label htmlFor="requiredFeatures" className={labelClass}>
          Required Features
        </label>
        <textarea id="requiredFeatures" rows={4} className={fieldClass} {...register("requiredFeatures")} />
        {errors.requiredFeatures && <p className={errorClass}>{errors.requiredFeatures.message as string}</p>}
      </div>
    </div>
  );
}
