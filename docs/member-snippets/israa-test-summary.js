const testSummary = {
  owner: "Israa Alalo",
  issue: "#5",
  reviewStatus: "onay bekliyor",
  testResult: "gecti",
};

function printTestSummary() {
  console.log("Test ve Review Ozeti");
  console.log(`Sorumlu: ${testSummary.owner}`);
  console.log(`Issue: ${testSummary.issue}`);
  console.log(`Review: ${testSummary.reviewStatus}`);
  console.log(`Test Sonucu: ${testSummary.testResult}`);
}

printTestSummary();
