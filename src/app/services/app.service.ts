import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  search = new BehaviorSubject('')
  // category = 'characters' || 'comics' || 'events'
  category: string

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';
  private token: string = 'ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'

  getCharacters(limit?: number, offset?: number): Observable<any> {
    let endpoint: string = `characters?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;
    this.category = 'characters'

    return this.http.get<any>(requestUrl)
  }

  getComics(limit?: number, offset?: number): Observable<any> {
    let endpoint: string = `comics?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;
    this.category = 'comics'

    return this.http.get<any>(requestUrl)
  }

  getEvents(limit?: number, offset?: number): Observable<any> {
    let endpoint: string = `events?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;
    this.category = 'events'

    return this.http.get<any>(requestUrl)
  }


  // TODO:  items by id

  getCharacterID(id: number): Observable<any> {
    let endpont: string = `characters${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<any>(requestUrl)
  }

  getComicID(id: number): Observable<any> {
    let endpont: string = `comics${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<any>(requestUrl)
  }

  getEventID(id: number): Observable<any> {
    let endpont: string = `events${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<any>(requestUrl)
  }

  // getCharacterID(id: number): Observable<any> {
  //   let endpont: string = `${this.category}${"/" + id}?`
  //   let requestUrl = this.baseUrl + endpont + this.token
  //   console.log(this.category);

  //   return this.http.get<any>(requestUrl)
  // }

  // getComicID(id: number): Observable<any> {
  //   let endpont: string = `${this.category}${"/" + id}?`
  //   let requestUrl = this.baseUrl + endpont + this.token
  //   console.log(this.category);


  //   return this.http.get<any>(requestUrl)
  // }

  // getEventID(id: number): Observable<any> {
  //   let endpont: string = `${this.category}${"/" + id}?`
  //   let requestUrl = this.baseUrl + endpont + this.token
  //   console.log(this.category);

  //   return this.http.get<any>(requestUrl)
  // }
}
