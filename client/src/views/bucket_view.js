const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (bucket) {
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const stage = this.createHeading(bucket.stage);
  bucketContainer.appendChild(stage);

  const race = this.createDetail('Race', bucket.race);
  bucketContainer.appendChild(race);

  const country = this.createDetail('Country', bucket.country);
  bucketContainer.appendChild(country);

  const deleteButton = this.createDeleteButton(bucket._id);
  bucketContainer.appendChild(deleteButton);

  this.container.appendChild(bucketContainer);
};

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`
  return detail;
};

BucketView.prototype.createDeleteButton = function (bucketId) {
  const button = document.createElement('button');
  button.textContent = 'Remove Item';
  button.classList.add('delete-btn');
  button.value = bucketId;

  button.addEventListener('click', (event) => {
    PubSub.publish('BucketView:bucket-delete-clicked', event.target.value);
  });
  return button;
};

module.exports = BucketView;
