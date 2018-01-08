const cacheManager = require('cache-manager');
const redisStore = require('cache-manager-ioredis');

const redisUrl = process.env.REDIS_TEST_URL || process.env.REDIS_URL || `redis://:@localhost:6379`;
const parts = redisUrl.split(':');
const passAndhost = parts[2].split('@');

const redisConfig = {
    store: redisStore,
    host: passAndhost[1],
    port: parseInt(parts[3], 10),
    ttl: 600,
};

function ttlMsToSeconds(ttl) {
    return Math.floor((ttl / 1000));
}

if (process.env.NODE_ENV === 'test') {
    redisConfig.db = 7;
}

if (passAndhost[0].length > 0) {
    redisConfig.password = passAndhost[0];
}

const sakaarCache = cacheManager.caching(redisConfig);

const sakaarCacheClient = sakaarCache.store.getClient();

sakaarCacheClient.on('error', (error) => {
    console.error(error);
});

if (sakaarCache.wrap === undefined) {
    console.error("Can't find wrap function?");
}

module.exports = {
    fetch: (key, exec, options = { ttl: 30 }) => sakaarCache.wrap(key, () => exec(), { ttl: ttlMsToSeconds(options.ttl) }),
};

return module.exports;
