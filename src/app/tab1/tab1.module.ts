import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ToolbarPrincipalComponentModule } from '../toolbar-principal/toolbar-principal.module';
import { NewsCardComponentModule } from '../news-card/news-card.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    NewsCardComponentModule,
    ToolbarPrincipalComponentModule,
    HttpClientModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
