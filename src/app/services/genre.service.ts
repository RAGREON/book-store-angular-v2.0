import { Inject, Injectable } from '@angular/core';
import { routes } from '../app.routes';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../core/api-url';
import { Observable } from 'rxjs';

export interface GenreDto {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class GenreService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getGenreAll(): Observable<GenreDto[]> {
    return this.http.get<GenreDto[]>(`${this.apiUrl}/Genre/all`);
  }
}
