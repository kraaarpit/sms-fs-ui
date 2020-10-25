import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  _event: any;
  baseUrl = 'https://stark-sierra-28589.herokuapp.com/v1';
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(`${this.baseUrl}/event`);
  }

  getById(id) {
    return this.http.get(`${this.baseUrl}/event/${id}`);
  }

  geSort(sortBy, orderBy) {
    return this.http.get(
      `${this.baseUrl}/event?sortBy=${sortBy}&orderBy=${orderBy}`
    );
  }

  create(data) {
    return this.http.post(`${this.baseUrl}/event`, data);
  }

  update(id, data) {
    return this.http.put(`${this.baseUrl}/event/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.baseUrl}/event/${id}`);
  }
}
