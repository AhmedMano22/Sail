import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    OurTeamComponent,
    CareersComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutModule { }
