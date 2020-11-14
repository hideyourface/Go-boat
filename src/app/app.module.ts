import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/pages/search-screen/search-screen.component';
import { NewBoatScreenComponent } from './new-boat-screen/pages/new-boat-screen/new-boat-screen.component';
import { MainHeaderComponent } from './shared/container/main-header/main-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchHeaderComponent } from './search-screen/container/search-header/search-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    NewBoatScreenComponent,
    MainHeaderComponent,
    SearchHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
