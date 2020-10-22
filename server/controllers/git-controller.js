// create and get github issues

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: "c5f1106d82fb93920fe5d41fea0577e2355a4a28",
    userAgent: 'nodeTestApp v0.0.1',
    timeZone: 'America/Los_Angeles'
});

// async function getIssuesList(owner,repo) {
//     const issuesList = await octokit.issues.listForRepo({
//         owner: "mdarden",
//         repo: "testTargetRepo"
//     });
//     return issuesList;
// }

async function getIssuesList(owner,repo){
    const result = await octokit.issues.listForRepo({owner,repo});
    return result;
  }

  async function createIssue(owner,repo,title){
    const result = await octokit.issues.create({owner,repo,title});
    return result;
  }

exports.getIssues = (req, res) => {
    console.log('In controller - getIssues');
 
    getIssuesList("mdarden","testTargetRepo")
    .then(getIssuesList => {
        res.json(getIssuesList);
    })
    .catch(error => {
        // ...send error response...
        "error getting issues list"
    });
  };

exports.createIssue = (req, res) => {
    console.log('In controller - createIssue');

    issueFromCloudID = "issueFromCloud".concat(Date.now());
    console.log("creating issue ",issueFromCloudID);

    createIssue("mdarden","testTargetRepo",issueFromCloudID)
    .then(createIssue => {
        res.json(createIssue);
    })
    .catch(error => {
        // ...send error response...
        "error creating issue"
    });
  };
  