const liteflow = require("@liteflow/service").service();

liteflow
  .listenTask({
    runLighthouseAudit: require("./tasks/runLighthouseAudit")
  })
  .on("error", error => console.error(error));

liteflow
  .emitEvent("started", { success: true })
  .catch(error => console.error(error));
