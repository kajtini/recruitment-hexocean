export type DishType = "pizza" | "soup" | "sandwich";

export interface DishFormData {
    name: string;
    preparation_time: string;
    type: DishType;
    no_of_slices?: number;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
    errors?: DishFormErrors;
}

export interface DishFormErrors {
    name?: string[];
    preparation_time?: string[];
    type?: string[];
    diameter?: string[];
    no_of_slices?: string[];
    spiciness_scale?: string[];
    slices_of_bread?: string[];
}
