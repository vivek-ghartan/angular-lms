import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';

//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CorporateComponent } from './corporate/corporate.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AwsComponent } from './aws/aws.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';
import { IncomeShareAgreementComponent } from './income-share-agreement/income-share-agreement.component';
import { FormComponent } from './shared/form/form.component'
import { FrontBannerComponent } from './shared/front-banner/front-banner.component';
import { MentorCardComponent } from './shared/mentor-card/mentor-card.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    CorporateComponent,
    NavigationComponent,
    AwsComponent,
    ConsultingComponent,
    ContactUsComponent,
    CoursesComponent,
    FaqComponent,
    IncomeShareAgreementComponent,
    FormComponent,
    FrontBannerComponent,
    MentorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // HttpClientModule,
    // HttpClient,
    FormsModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
