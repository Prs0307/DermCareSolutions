import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { CrouselComponent } from './crousel/crousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ResultComponent } from './result/result.component';
import {BenefitsComponent} from './benefits/benefits.component';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    BenefitsComponent,
    FooterComponent,
    ImageComponent,
    CrouselComponent,
    UploadImgComponent,
    ResultComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
