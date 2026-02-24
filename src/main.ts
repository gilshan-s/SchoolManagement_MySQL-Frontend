import { bootstrapApplication } from '@angular/platform-browser';
import { Crud } from './app/crud/crud';
import { appConfig } from './app/app.config';

bootstrapApplication(Crud, appConfig)
  .catch((err) => console.error(err));
