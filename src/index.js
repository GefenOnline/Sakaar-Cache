import _ from 'lodash';
import cacheManager from 'cache-manager';
import redisStore from 'cache-manager-ioredis';

const redisUrl = process.env.REDIS_TEST_URL || process.env.REDIS_URL || `redis://:@localhost:6379`;
const parts = redisUrl.split(':');
const passAndhost = parts[2].split('@');

const redisConfig = {
    store: redisStore,
    host: passAndhost[1],
    port: parseInt(parts[3], 10),
};

if (process.env.NODE_ENV === 'test') {
    redisConfig.db = 7;
}

if (_.size(passAndhost[0])) {
    redisConfig.password = passAndhost[0];
}

const sakaarCache = cacheManager.caching(redisConfig);

const sakaarCacheClient = sakaarCache.store.getClient();

sakaarCacheClient.on('error', (error) => {
    console.error(error);
});

export default sakaarCache;
