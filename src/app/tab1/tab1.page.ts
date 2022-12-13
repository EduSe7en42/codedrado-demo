import { Component, Injectable } from '@angular/core';
import { TabReloadService } from '../service/tab-reload-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
@Injectable({
  providedIn: 'root'
})
export class Tab1Page {
  public articles: any = [];
  constructor(private TabService: TabReloadService) {  }

  async ngOnInit(query = "Santos FC"){
    this.getNewsService(query)
  }

  async getNewsService(query: string, lang = "pt") {
    return (await (this.TabService.getNewsInformation(query, lang))).subscribe(data => {
      this.articles = Object.values(data)[5];
    });
  }
}



