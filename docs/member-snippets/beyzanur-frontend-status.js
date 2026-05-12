const frontendStatus = {
  owner: "Beyzanur Dogan",
  issue: "#4",
  page: "Login Page Demo",
  buttonState: "aktif",
};

function printFrontendStatus() {
  console.log("Frontend Demo Durumu");
  console.log(`Sorumlu: ${frontendStatus.owner}`);
  console.log(`Issue: ${frontendStatus.issue}`);
  console.log(`Sayfa: ${frontendStatus.page}`);
  console.log(`Buton Durumu: ${frontendStatus.buttonState}`);
}

printFrontendStatus();
