import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../core/api-url';

// Review Dto
export interface ReviewDto {
  id: number;
  rating: number;
  description: string;
  bookId: number;
  createdAt: string;
  editedAt: string;
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  // Gets all Reviews
  getReviewAll() {
    return this.http.get<ReviewDto[]>(`${this.apiUrl}/Review/all`);
  }

  // Gets Review with id: ReviewId
  getReview(reviewId: number) {
    return this.http.get<ReviewDto>(`${this.apiUrl}/Review/${reviewId}`);
  }
}
