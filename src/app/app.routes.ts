import { RouterModule, Routes } from '@angular/router';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { WheaterAppComponent } from './wheater-app/wheater-app.component';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
    { path: '', redirectTo: 'counter', pathMatch: 'full' },
    {path:'counter', component:CounterAppComponent},
    {path:'wheater', component:WheaterAppComponent},
    {path:'chatui',component:ChatComponent}

];
NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }