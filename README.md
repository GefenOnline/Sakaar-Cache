# Sakaar Cache
Wrapper for [node-cache-manager](https://github.com/BryanDonovan/node-cache-manager) to be used inside Gefen's microservices.
It uses Redis store, but can be used with different stores:
- MongoDB
- FS
- Memcached
- HazelCast
- Memory


## Usage
````javascript
  sakaarCache
    .wrap(key, () => getUser(userId))
    .then(console.log)
    .catch(err => {
      // handle error
    });
````
