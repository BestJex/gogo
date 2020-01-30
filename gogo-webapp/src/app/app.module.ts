import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { SearchService } from './services/search.service';
import { Logger } from './shared/logger.service';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SearchService,
    Logger
  ],
  bootstrap: [IndexComponent]
})
export class AppModule { }
