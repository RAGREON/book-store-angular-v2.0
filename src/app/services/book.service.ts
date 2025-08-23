import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../core/api-url';
import { Observable } from 'rxjs';

// Book Dto
export interface BookDto {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
  description: string;
  genres: [];
}

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  // Gets all Books
  getBookAll(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(`${this.apiUrl}/Book/all`);
  }

  // Gets Book with id: bookId
  getBook(bookId: number): Observable<BookDto> {
    return this.http.get<BookDto>(`${this.apiUrl}/Book/${bookId}`)
  }
}
