const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketListView = function (container) {
  this.container = container;
};

BucketListView.prototype.bindEvents = function () {
  PubSub.subscribe('Buckets:data-loaded', (event) => {
    // debugger;
    this.render(event.detail);
    // console.log(event.detail);
  })
};

BucketListView.prototype.render = function (buckets) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  buckets.forEach((bucket) => bucketView.render(bucket))
};

module.exports = BucketListView;
