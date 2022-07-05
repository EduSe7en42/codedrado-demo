import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public articles: any;
  
  constructor(private httpClient: HttpClient) {  }

  ngOnInit(): void { 
    this.getNewsInformation('bitcoin', 'pt'); 
  }
  
  getNewsInformation(subject: string, lang: string) {
      const url = 'https://free-news.p.rapidapi.com/v1/search?q='+ subject +'&lang='+ lang;

      const options = {
          headers: {
              'X-RapidAPI-Key': '23ce84eb49msh21ee208013f1005p1857bdjsn5615dfe82d7c',
              'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
          }
      };

      this.httpClient.get<any[]>(url, options).subscribe(data => {
        this.articles = Object.values(data)[5];
      });
  }
}



