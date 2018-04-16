import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { MatModule } from './mat/mat.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecordsComponent } from './records/records.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { DayComponent } from './day/day.component';

// Services
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { ActivityService } from './activity.service';
import { MetricService } from './metric.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecordsComponent,
    AnalyticsComponent,
    NavbarComponent,
    FiltersComponent,
    DayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatModule,
  ],
  providers: [
    AuthService,
    MessageService,
    ActivityService,
    MetricService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
