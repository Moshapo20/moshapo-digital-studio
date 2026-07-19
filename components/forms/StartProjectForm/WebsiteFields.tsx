import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { StartProjectFormValues } from "./types";
import { fieldClass, labelClass, errorClass } from "./fieldStyles";

export function WebsiteFields({
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
          <label htmlFor="websitePackage" className={labelClass}>
            Website Package
          </label>
          <select id="websitePackage" className={fieldClass} {...register("websitePackage")}>
            <option value="landing">Landing Page — R1,500</option>
            <option value="starter">Starter — R2,500</option>
            <option value="growth">Growth — R5,000</option>
            <option value="premium">Premium — From R8,500</option>
          </select>
        </div>
        <div>
          <label htmlFor="typeOfWebsite" className={labelClass}>
            Type of Website
          </label>
          <input id="typeOfWebsite" className={fieldClass} {...register("typeOfWebsite")} />
          {errors.typeOfWebsite && <p className={errorClass}>{errors.typeOfWebsite.message as string}</p>}
        </div>
        <div>
          <label htmlFor="numberOfPages" className={labelClass}>
            Number of Pages
          </label>
          <input id="numberOfPages" className={fieldClass} {...register("numberOfPages")} />
          {errors.numberOfPages && <p className={errorClass}>{errors.numberOfPages.message as string}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select id="budget" className={fieldClass} {...register("budget")}>
            <option value="">Select a range</option>
            <option value="under-2500">Under R2,500</option>
            <option value="2500-5000">R2,500 – R5,000</option>
            <option value="5000-8500">R5,000 – R8,500</option>
            <option value="8500-plus">R8,500+</option>
          </select>
          {errors.budget && <p className={errorClass}>{errors.budget.message as string}</p>}
        </div>
        <div>
          <label htmlFor="hasDomain" className={labelClass}>
            Do you have a domain?
          </label>
          <select id="hasDomain" className={fieldClass} {...register("hasDomain")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="hasHosting" className={labelClass}>
            Do you have hosting?
          </label>
          <select id="hasHosting" className={fieldClass} {...register("hasHosting")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="hasContent" className={labelClass}>
            Do you have content & images?
          </label>
          <select id="hasContent" className={fieldClass} {...register("hasContent")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="partial">Some of it</option>
          </select>
        </div>
        <div>
          <label htmlFor="desiredLaunchDate" className={labelClass}>
            Desired Launch Date
          </label>
          <input id="desiredLaunchDate" type="date" className={fieldClass} {...register("desiredLaunchDate")} />
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
