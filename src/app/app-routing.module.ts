import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AwsComponent } from './aws/aws.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';
import { IncomeShareAgreementComponent } from './income-share-agreement/income-share-agreement.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'aws', component: AwsComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'income-share-agreement', component: IncomeShareAgreementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
