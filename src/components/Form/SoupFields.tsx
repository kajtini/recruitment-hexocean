import { DishFormData } from "../../types";
import ValidationErrors from "./ValidationErrors";

interface SoupFieldsProps {
    formFields: DishFormData;
    handleFieldChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

const SoupFields = ({ formFields, handleFieldChange }: SoupFieldsProps) => {
    return (
        <label>
            Spiciness scale
            <br />
            <input
                className="bg-secondary backdrop-blur-sm p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                placeholder="1-10"
                type="number"
                name="spiciness_scale"
                min={1}
                max={10}
                value={formFields.spiciness_scale || ""}
                onChange={handleFieldChange}
            />
            {formFields.errors?.spiciness_scale && (
                <ValidationErrors
                    errorMessages={formFields.errors.spiciness_scale}
                />
            )}
        </label>
    );
};

export default SoupFields;
