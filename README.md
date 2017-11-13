### Sakaar Cache
Wrapper for [node-cache-manager](https://github.com/BryanDonovan/node-cache-manager) to be used inside Gefen's microservices.
It uses Redis store, but can be used with different stores:
- MongoDB
- FS
- Memcached
- HazelCast
- Memory

## Features
# Fetch
Wrap a function in `fetch` and cache the result for future use. If the cache doesn't exist then the function will be evaluated.
````javascript
function getOperation(id, cb) {
    sakaar.fetch(id, (cacheCallback) => { 
        getOperationById(id, cacheCallback);
    }, {ttl: 1000}, cb);
}
````
