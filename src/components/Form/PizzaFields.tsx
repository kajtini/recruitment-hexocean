import { DishFormData } from "../../types";
import ValidationErrors from "./ValidationErrors";

interface PizzaFieldsProps {
    formFields: DishFormData;
    handleFieldChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

const PizzaFields = ({ formFields, handleFieldChange }: PizzaFieldsProps) => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <label>
                Number of slices
                <br />
                <input
                    className="bg-secondary backdrop-blur-sm p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                    placeholder="Slices"
                    type="number"
                    name="no_of_slices"
                    value={formFields.no_of_slices || ""}
                    onChange={handleFieldChange}
                />
                {formFields.errors?.no_of_slices && (
                    <ValidationErrors
                        errorMessages={formFields.errors.no_of_slices}
                    />
                )}
            </label>
            <label>
                Diameter
                <br />
                <input
                    className="bg-secondary backdrop-blur-sm p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                    placeholder="Diameter"
                    type="number"
                    name="diameter"
                    value={formFields.diameter || ""}
                    onChange={handleFieldChange}
                />
                {formFields.errors?.diameter && (
                    <ValidationErrors
                        errorMessages={formFields.errors.diameter}
                    />
                )}
            </label>
        </div>
    );
};

export default PizzaFields;
