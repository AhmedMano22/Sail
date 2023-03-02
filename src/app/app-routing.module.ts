import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AboutUsComponent } from './core/about/about-us/about-us.component';
import { CareersComponent } from './core/about/careers/careers.component';
import { ContactUsComponent } from './core/about/contact-us/contact-us.component';
import { OurTeamComponent } from './core/about/our-team/our-team.component';
import { IndexComponent } from './core/components/index/index.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';



const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: 'index', component: IndexComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "our-team", component: OurTeamComponent },
  { path: "careers", component: CareersComponent },
  { path: "contact-us", component: ContactUsComponent },



  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
