import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { FormsComponent } from './forms/forms.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomepageComponent,
    ServicesComponent,
    FormsComponent,
    BlogComponent,
    ContactComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    NgbModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
