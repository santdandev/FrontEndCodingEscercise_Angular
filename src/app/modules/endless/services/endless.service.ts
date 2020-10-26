import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndlessService {

  constructor(private httpClient: HttpClient) { }

  getHowItWorks() {
    return this.httpClient.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge');    
  }
}
