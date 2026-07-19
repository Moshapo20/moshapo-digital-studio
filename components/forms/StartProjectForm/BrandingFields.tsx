import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { StartProjectFormValues } from "./types";
import { fieldClass, labelClass, errorClass } from "./fieldStyles";

export function BrandingFields({
  register,
  errors,
}: {
  register: UseFormRegister<StartProjectFormValues>;
  errors: FieldErrors<StartProjectFormValues>;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="brandingService" className={labelClass}>
            Branding Service Required
          </label>
          <input id="brandingService" className={fieldClass} {...register("brandingService")} />
          {errors.brandingService && <p className={errorClass}>{errors.brandingService.message as string}</p>}
        </div>
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <input id="industry" className={fieldClass} {...register("industry")} />
          {errors.industry && <p className={errorClass}>{errors.industry.message as string}</p>}
        </div>
        <div>
          <label htmlFor="hasExistingLogo" className={labelClass}>
            Do you have an existing logo?
          </label>
          <select id="hasExistingLogo" className={fieldClass} {...register("hasExistingLogo")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="hasExistingBrandColors" className={labelClass}>
            Do you have existing brand colors?
          </label>
          <select id="hasExistingBrandColors" className={fieldClass} {...register("hasExistingBrandColors")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredStyle" className={labelClass}>
            Preferred Style
          </label>
          <input id="preferredStyle" className={fieldClass} {...register("preferredStyle")} />
          {errors.preferredStyle && <p className={errorClass}>{errors.preferredStyle.message as string}</p>}
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
        <label htmlFor="projectDescription" className={labelClass}>
          Project Description
        </label>
        <textarea id="projectDescription" rows={5} className={fieldClass} {...register("projectDescription")} />
        {errors.projectDescription && (
          <p className={errorClass}>{errors.projectDescription.message as string}</p>
        )}
      </div>
    </div>
  );
}
