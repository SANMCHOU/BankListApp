import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { BanksListService } from './banks-list.service';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
//import {MatButtonModule, MatIconModule, MaterialComponent} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BankdetailsComponent,
    RatingStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  //exports: [MaterialComponent],
  providers: [BanksListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
