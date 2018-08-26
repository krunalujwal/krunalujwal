// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const settings = {
  API_URL: 'http://locahost:4200/',
  HMR: true,
  APP_STORAGE_KEY: 'krunalujwal',
  PRODUCTION: false
};


export const environment = {
  apiUrl: (typeof settings.API_URL !== 'undefined') ? settings.API_URL : 'http://locahost:4200/',
  localStorageKey: (settings.APP_STORAGE_KEY !== undefined) ? settings.APP_STORAGE_KEY : 'krunalujwal',
  production: (settings.PRODUCTION !== undefined) ? settings.PRODUCTION : false,
  hmr: (settings.HMR !== undefined) ? settings.HMR : false
};
