import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CurriculumComponent,
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        SharedModule,
    ]
   
})
export class PagesModule { }
