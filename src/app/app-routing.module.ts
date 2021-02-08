import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchScreenComponent } from './search-screen/pages/search-screen/search-screen.component'
import { NewBoatScreenComponent } from './new-boat-screen/pages/new-boat-screen/new-boat-screen.component'

const routes: Routes = [
  {
    path: '',
    component: SearchScreenComponent,
  },
  {
    path: 'home',
    component: SearchScreenComponent,
  },
  {
    path: 'index',
    component: SearchScreenComponent,
  },
  {
    path: 'new-boat',
    component: NewBoatScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
