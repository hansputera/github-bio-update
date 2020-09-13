const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: "TOKEN GITHUB"
});

const moment = require("moment");


// GitHub Bio Update

setInterval(() => {
  octokit.users.updateAuthenticated({ bio: `${moment().utcOffset("+0700").format("HH:mm")} WIB`}).then(() => {
    console.log("Updated bio.");
  });
}, 60000); // 1 menit
