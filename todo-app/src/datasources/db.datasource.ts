import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb+srv://buitansang:xEoD26uSmMRPiUIG@test.m3rst4c.mongodb.net/test?retryWrites=true&w=majority";',
  useNewUrlParser: true,
  connectionTimeout: 171121,
};

// nảy chị yarn add cái connect mongo ở ngoài giờ cái node_modules nó ngố cái git luôn r

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
