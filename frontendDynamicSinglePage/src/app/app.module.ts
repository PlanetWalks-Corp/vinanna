import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CitylayoutComponent} from './citylayout/citylayout.component';
import {CitylistComponent} from './citylist/citylist.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    CitylayoutComponent,
    CitylistComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
