import { DishFormData } from "../../types";
import ValidationErrors from "./ValidationErrors";

interface SandwichFieldsProps {
    formFields: DishFormData;
    handleFieldChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

const SandwichFields = ({
    formFields,
    handleFieldChange,
}: SandwichFieldsProps) => {
    return (
        <label>
            Slices of bread
            <br />
            <input
                className="bg-secondary backdrop-blur-sm p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                placeholder="Slices of bread"
                type="number"
                name="slices_of_bread"
                value={formFields.slices_of_bread || ""}
                onChange={handleFieldChange}
            />
            {formFields.errors?.slices_of_bread && (
                <ValidationErrors
                    errorMessages={formFields.errors.slices_of_bread}
                />
            )}
        </label>
    );
};

export default SandwichFields;
