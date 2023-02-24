import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = 'http://localhost:5000/personnes';

  constructor(private httpClient: HttpClient) { }

  getPersonnes() {
    return this.httpClient.get(this.url);
  }
}
