import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

export const RoutingPagesRoutes = RouterModule.forChild(routes);
