import type { Application, IBoot } from 'egg';
import { initPlugin } from './lib/tbk';

export default class AppBootHook implements IBoot {
  private readonly app: Application;
  constructor(app: Application) {
    this.app = app;
  }

  configDidLoad() {
    if (this.app.config.tbk.app) {
      initPlugin(this.app);
    }
  }
}
