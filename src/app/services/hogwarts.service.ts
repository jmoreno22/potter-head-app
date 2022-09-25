import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters, House } from '../models/Characters.interface';


@Injectable({
  providedIn: 'root'
})
export class HogwartsService {
  private apiUrl: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http: HttpClient) { }

  getStaffList(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/staff`);
  }

  getCharactersListByHouse(house: string): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/house/${house}`);
  }

  getStudentsList(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/students`);
  }
}
