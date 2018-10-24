const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Buckets = function (url) {
  this.url = url;
  this.request = new Request(this.url);
};

Buckets.prototype.bindEvents = function () {

  PubSub.subscribe('BucketView:bucket-delete-clicked', (event) => {
    this.deleteBucket(event.detail);
  })
  PubSub.subscribe('BucketFormView:bucket-loaded', (event) => {
    this.postBucket(event.detail);
  })
};

Buckets.prototype.getData = function () {
  this.request.get()
  .then((buckets) => {
    PubSub.publish('Buckets:data-loaded', buckets);
    console.log(buckets);
  })
  .catch(console.error);
};

Buckets.prototype.postBucket = function (bucket) {
  this.request.post(bucket)
  .then((buckets) => {
    PubSub.publish('Buckets:data-loaded', buckets);
  })
  .catch(console.error);
};

Buckets.prototype.deleteBucket = function (bucketId) {
  this.request.delete(bucketId)
  .then((buckets) => {
    PubSub.publish('Buckets:data-loaded', buckets);
  })
  .catch(console.error);
};

module.exports = Buckets;
