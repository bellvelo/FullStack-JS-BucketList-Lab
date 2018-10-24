const BucketFormView = require('./views/bucket_form_view.js');
const BucketListView = require('./views/bucket_list_view.js');
const Buckets = require('./models/buckets.js');

document.addEventListener('DOMContentLoaded', () => {

  const bucketsForm = document.querySelector('form#event-form');
  const bucketsFormView = new BucketFormView(bucketsForm);
  bucketsFormView.bindEvents();

  const bucketsContainer = document.querySelector('div#buckets');
  const bucketsListView = new BucketListView(bucketsContainer);
  bucketsListView.bindEvents();

  const bucketUrl = 'http://localhost:3000/api/bucketlist';
  const buckets = new Buckets(bucketUrl);
  buckets.bindEvents();
  buckets.getData();

});
