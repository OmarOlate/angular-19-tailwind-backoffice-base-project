import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app/app-routing.module';
import { AngularSvgIconModule, SvgHttpLoader, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch()),
    {
      provide: SvgLoader,
      useClass: SvgHttpLoader, 
    },
    SvgIconRegistryService,  
    AngularSvgIconModule,    
  ],
};
