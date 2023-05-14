import { DishFormData, DishType } from "../../types";
import SoupFields from "./SoupFields";
import FormTitle from "./FormTitle";
import PizzaFields from "./PizzaFields";
import SandwichFields from "./SandwichFields";
import ValidationErrors from "./ValidationErrors";
import { useState } from "react";

const DishForm = () => {
    const API_ENDPOINT =
        "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

    const [formFields, setFormFields] = useState<DishFormData>({
        name: "",
        preparation_time: "",
        type: "pizza",
        diameter: 0,
        no_of_slices: 0,
        slices_of_bread: 0,
        spiciness_scale: 0,
        errors: {},
    });

    const isDisabled =
        !formFields.name ||
        !formFields.preparation_time ||
        !formFields.type ||
        (formFields.type === "pizza" &&
            (!formFields.diameter || !formFields.no_of_slices)) ||
        (formFields.type === "soup" && !formFields.spiciness_scale) ||
        (formFields.type === "sandwich" && !formFields.slices_of_bread);

    const resetFormFields = () =>
        setFormFields({
            name: "",
            preparation_time: "",
            type: "pizza",
            diameter: 0,
            no_of_slices: 0,
            slices_of_bread: 0,
            spiciness_scale: 0,
            errors: {},
        });

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormFields((prevFormFields) => {
            if (name === "type") {
                return {
                    [name]: value as DishType,
                    name: prevFormFields.name,
                    preparation_time: prevFormFields.preparation_time,
                    diameter: 0,
                    no_of_slices: 0,
                    slices_of_bread: 0,
                    spiciness_scale: 0,
                    errors: { ...prevFormFields.errors },
                };
            }

            if (
                name === "diameter" ||
                name === "no_of_slices" ||
                name === "slices_of_bread" ||
                name === "spiciness_scale"
            ) {
                return { ...prevFormFields, [name]: +value };
            }

            return { ...prevFormFields, [name]: value };
        });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const filteredForm: DishFormData = Object.entries(
                formFields
            ).reduce(
                (acc, [key, value]) => {
                    if (key === "errors") {
                        return acc;
                    }

                    if (value) {
                        return { ...acc, [key]: value };
                    }

                    return acc;
                },
                {
                    name: formFields.name,
                    preparation_time: formFields.preparation_time,
                    type: formFields.type,
                }
            );

            const res = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(filteredForm),
            });

            if (res.ok) {
                resetFormFields();
            } else {
                const errorData = await res.json();
                setFormFields((prevFormFields) => ({
                    ...prevFormFields,
                    errors: { ...errorData },
                }));

                throw new Error(
                    "Failed to submit the form. An error occurred while sending the data to the server."
                );
            }
        } catch (err) {
            console.error(`Error while submitting the form: ${err}`);
        }
    };

    return (
        <form
            name="dish_form"
            className="flex flex-col gap-5 animate-fadeInFromBottom"
            onSubmit={handleFormSubmit}
        >
            <FormTitle />

            <label>
                Dish name
                <br />
                <input
                    className="bg-secondary p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                    placeholder="Dish name"
                    type="text"
                    name="name"
                    value={formFields.name}
                    onChange={handleFieldChange}
                />
                {formFields.errors?.name && (
                    <ValidationErrors errorMessages={formFields.errors.name} />
                )}
            </label>

            <label>
                Preparation time
                <br />
                <input
                    className="bg-secondary backdrop-blur-sm p-4 rounded-2xl focus:outline-none placeholder:text-slate-400 w-full  border border-white border-opacity-10 mt-2 focus:ring-2 focus:ring-accent"
                    placeholder="%H:%M:%S"
                    pattern="\d{2}:\d{2}:\d{2}"
                    type="text"
                    name="preparation_time"
                    value={formFields.preparation_time}
                    onChange={handleFieldChange}
                />
                {formFields.errors?.preparation_time && (
                    <ValidationErrors
                        errorMessages={formFields.errors.preparation_time}
                    />
                )}
            </label>

            <label>
                Select dish type
                <br />
                <select
                    className="w-full bg-secondary p-4 rounded-2xl mt-2 border border-white border-opacity-10 focus:ring-2 focus:ring-accent focus:outline-none"
                    name="type"
                    value={formFields.type}
                    onChange={handleFieldChange}
                >
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="sandwich">Sandwich</option>
                </select>
                {formFields.errors?.type && (
                    <ValidationErrors errorMessages={formFields.errors.type} />
                )}
            </label>

            {formFields.type === "pizza" && (
                <PizzaFields
                    formFields={formFields}
                    handleFieldChange={handleFieldChange}
                />
            )}

            {formFields.type === "soup" && (
                <SoupFields
                    formFields={formFields}
                    handleFieldChange={handleFieldChange}
                />
            )}

            {formFields.type === "sandwich" && (
                <SandwichFields
                    formFields={formFields}
                    handleFieldChange={handleFieldChange}
                />
            )}

            <button
                className="bg-accent py-4 rounded-2xl disabled:bg-gray-500"
                disabled={isDisabled}
            >
                Create!
            </button>
        </form>
    );
};

export default DishForm;
