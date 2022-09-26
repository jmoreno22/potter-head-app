import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters.interface';


@Injectable({
  providedIn: 'root'
})
export class HogwartsService {
  public apiUrl: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http: HttpClient) { }

  /**
     * List of staff characters of Hogwarts.
     *
     * @return {Observable<Characters[]>}
     * @memberof HogwartsService
    */
  getStaffList(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/staff`);
  }

  /**
     * List of characters of Hogwarts by house.
     *
     * @param {string} house
     * @return {Observable<Characters[]>}
     * @memberof HogwartsService
    */
  getCharactersListByHouse(house: string): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/house/${house}`);
  }

  /**
     * List of students of Hogwarts
     *
     * @return {Observable<Characters[]>}
     * @memberof HogwartsService
    */
  getStudentsList(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.apiUrl}/students`);
  }
}
