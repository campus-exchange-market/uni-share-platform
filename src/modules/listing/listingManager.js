// KAN-8: Basit ilan modülü

const listings = [];

function addListing(title, ownerEmail) {
  if (!title || !ownerEmail) {
    throw new Error("Başlık ve kullanıcı e-postası zorunludur.");
  }

  const listing = {
    id: Date.now(),
    title,
    ownerEmail,
    status: "active",
    createdAt: new Date().toISOString()
  };

  listings.push(listing);
  return listing;
}

function getListings() {
  return listings;
}

module.exports = {
  addListing,
  getListings
};