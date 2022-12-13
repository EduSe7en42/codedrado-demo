import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  }
)
export class TabReloadService {
  public articles: any;

  constructor(private httpClient: HttpClient) { }

  async getNewsInformation(subject: string, lang: string) {
    const url = 'https://free-news.p.rapidapi.com/v1/search?q='+ subject +'&lang='+ lang;

    const options = {
        headers: {
            'X-RapidAPI-Key': '23ce84eb49msh21ee208013f1005p1857bdjsn5615dfe82d7c',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
    };

    return this.httpClient.get<any[]>(url, options);      
  }
}

