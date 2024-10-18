import type { Application, Agent } from 'egg';
import TbkService from './tbService';
function createOneClient(config: Record<string, any>, app: Application | Agent) {
  app.coreLogger.info('[egg-tbk] 开始初始化',
    config.appKey, config.secret, config.restUrl);
  const client = new TbkService(config.appKey, config.secret, config.restUrl);
  return client;
}

export function initPlugin(app: Application | Agent) {
  app.addSingleton('tbk', createOneClient);
}
