import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { CurriculumComponent } from './home/curriculum/curriculum.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CurriculumComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
