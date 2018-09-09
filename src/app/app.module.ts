import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthServiceConfig, AuthService } from './core/google-login/google-auth.service';
import { GoogleLoginProvider } from './core/google-login/providers';
import { FilterPipe } from './core/pipes/filter.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('738996251613-6ub9qg7bj39bc9i6rhgshacpd3mrue0m.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
