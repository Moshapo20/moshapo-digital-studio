import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { StartProjectFormValues } from "./types";
import { fieldClass, labelClass, errorClass } from "./fieldStyles";

export function SharedContactFields({
  register,
  errors,
}: {
  register: UseFormRegister<StartProjectFormValues>;
  errors: FieldErrors<StartProjectFormValues>;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Name
        </label>
        <input id="fullName" className={fieldClass} {...register("fullName")} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message as string}</p>}
      </div>
      <div>
        <label htmlFor="businessName" className={labelClass}>
          Business Name
        </label>
        <input id="businessName" className={fieldClass} {...register("businessName")} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" type="email" className={fieldClass} {...register("email")} />
        {errors.email && <p className={errorClass}>{errors.email.message as string}</p>}
      </div>
      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp Number
        </label>
        <input id="whatsapp" className={fieldClass} {...register("whatsapp")} />
        {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message as string}</p>}
      </div>
    </div>
  );
}
