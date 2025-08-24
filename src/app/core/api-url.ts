import { InjectionToken } from "@angular/core";
import { environments } from "../../environments/environment";

export const API_URL = new InjectionToken<string>('apiUrl', {
  providedIn: 'root',
  factory: () => environments.apiUrl
})