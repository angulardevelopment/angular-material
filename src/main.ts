import { enableProdMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication, provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app-routes';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request made with URL:', req.url);
  return next(req);
};

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(
    withInterceptors([appInterceptor]), // loggingInterceptor, cachingInterceptor
  ),
  provideRouter(ROUTES),
    provideZonelessChangeDetection(),
  provideBrowserGlobalErrorListeners(),
  provideClientHydration(withIncrementalHydration())
]});

