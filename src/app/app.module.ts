import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
