import { ModeslInterface } from "./ModelsInterface";

export interface BaseModelInterface {
    prototype?;
    associate?(models: ModeslInterface): void;
}