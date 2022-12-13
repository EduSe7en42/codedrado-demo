import { Component, Input, OnInit } from '@angular/core';
import { TabReloadService } from '../service/tab-reload-service.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'toolbar-principal',
  templateUrl: './toolbar-principal.component.html',
  styleUrls: ['./toolbar-principal.component.scss'],
})
export class ToolbarPrincipalComponent implements OnInit {
  @Input() title: string;

  constructor(public TabReload: TabReloadService, public tabNews: Tab1Page) { }

  ngOnInit() {}

  searchNews(query: string) { 
    if (query == "") {
      this.tabNews.ngOnInit("Santos FC");
    }
    
    this.tabNews.ngOnInit(query);
  }

  async getNewsFromService(query: string, lang = "pt"){
    return (await (this.TabReload.getNewsInformation(query, lang))).subscribe(data => { Object.values(data)[5]; });
  }
}
