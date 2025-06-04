import { enableProdMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication, provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//   bootstrapApplication(AppComponent, {providers: [
//   provideHttpClient(
//     withInterceptors([loggingInterceptor, cachingInterceptor]),
//   ),
//     provideZonelessChangeDetection(),
//   provideBrowserGlobalErrorListeners(),
//   provideClientHydration(withIncrementalHydration())
// ]});