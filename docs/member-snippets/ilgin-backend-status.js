const backendStatus = {
  owner: "Ilgin Kirez",
  issue: "#3",
  service: "ListingService",
  status: "hazir",
};

function printBackendStatus() {
  console.log("Backend Demo Durumu");
  console.log(`Sorumlu: ${backendStatus.owner}`);
  console.log(`Issue: ${backendStatus.issue}`);
  console.log(`Servis: ${backendStatus.service}`);
  console.log(`Durum: ${backendStatus.status}`);
}

printBackendStatus();
