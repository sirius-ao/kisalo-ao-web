import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { IsActiveMatchOptions, provideRouter, Router, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions({
      onViewTransitionCreated: ({ transition }) => {
        const router = inject(Router);
        const targetUrl = router.currentNavigation()!.finalUrl!;

        const config = {
          paths: 'exact',
          matrixParams: 'exact',
          fragment: 'ignored',
          queryParams: 'ignored',
        } satisfies IsActiveMatchOptions;

        if (router.isActive(targetUrl, config)) {
          transition.skipTransition();
        }
      }
    })), 
    provideClientHydration(withEventReplay())
  ]
};
