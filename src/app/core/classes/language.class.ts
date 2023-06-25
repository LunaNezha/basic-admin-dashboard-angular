import { Culture } from "../enums/cultures.enum";
import { IlanguageDetails } from "../interfaces/language.interface";

export class languageDetails implements IlanguageDetails {
  constructor(
    public name: string,
    public image: string,
    public code: number,
    public culture: Culture,
  ){}
};
