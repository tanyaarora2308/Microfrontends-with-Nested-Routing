import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';
import appRoutes from './routerconfig';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
