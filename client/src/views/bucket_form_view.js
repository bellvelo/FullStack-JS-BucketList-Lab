const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function (form) {
  this.form = form;
};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

BucketFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newBucket = this.createBucket(event.target);
  console.log(newBucket);
  PubSub.publish('BucketFormView:bucket-loaded', newBucket);
  event.target.reset();
}

BucketFormView.prototype.createBucket = function (form) {
  const newBucket = {
    stage: form.stage.value,
    race: form.race.value,
    country: form.country.value
  }
  return newBucket;
};

module.exports = BucketFormView;
