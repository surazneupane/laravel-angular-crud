import { Injectable } from '@angular/core';
import * as GLOBAL from 'globals';
import {HttpClient} from '@angular/common/http';

import {Hero} from '../components/heroes/hero';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  API_URL = GLOBAL.API_URL;

  constructor(private httpClient : HttpClient) { 
  


  }

  getAllHeroes() : Observable<Hero[]>
  {
    return this.httpClient.get<Hero[]>(this.API_URL+'heroes');
  }


  insertHero(hero:Hero):Observable<Hero>
  {
    return this.httpClient.post<Hero>(this.API_URL+'heroes',hero);
  }


  deleteHero(hero:Hero):Observable<Hero>
  {
    return this.httpClient.delete<Hero>(this.API_URL+'heroes/'+hero.id);
    
  }
}
