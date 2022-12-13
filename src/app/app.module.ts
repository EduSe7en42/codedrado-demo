import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabReloadService } from './service/tab-reload-service.service';
import { Tab1PageModule } from './tab1/tab1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy
  }, TabReloadService, Tab1PageModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
