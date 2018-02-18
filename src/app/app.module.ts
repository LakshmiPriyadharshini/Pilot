import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AccountPageComponent } from './account-page/account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
