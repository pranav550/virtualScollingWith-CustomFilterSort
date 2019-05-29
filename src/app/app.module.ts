import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualTableComponent } from './components/virtual-table/virtual-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { FilterPipe } from './pipe/filter.pipe';
import { SortingPipe } from './pipe/sorting.pipe';
@NgModule({
  declarations: [
    AppComponent,
    VirtualTableComponent,
    FilterPipe,
    SortingPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
