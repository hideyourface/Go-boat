import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/pages/search-screen/search-screen.component';
import { NewBoatScreenComponent } from './new-boat-screen/pages/new-boat-screen/new-boat-screen.component';
import { MainHeaderComponent } from './shared/container/main-header/main-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchHeaderComponent } from './search-screen/container/search-header/search-header.component';
import { SearchContainerComponent } from './search-screen/container/search-container/search-container.component';
import { SearchResultsListComponent } from './search-screen/container/search-results-list/search-results-list.component';
import { NewBoatFormContainerComponent } from './new-boat-screen/container/new-boat-form/new-boat-form-container.component';
import { NewBoatSideImageComponent } from './new-boat-screen/components/new-boat-side-image/new-boat-side-image.component';
import { NewBoatFormComponent } from './new-boat-screen/components/new-boat-form/new-boat-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterConfirmComponent } from './new-boat-screen/components/register-confirm/register-confirm.component'
@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    NewBoatScreenComponent,
    MainHeaderComponent,
    SearchHeaderComponent,
    SearchContainerComponent,
    SearchResultsListComponent,
    NewBoatFormContainerComponent,
    NewBoatSideImageComponent,
    NewBoatFormComponent,
    RegisterConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
