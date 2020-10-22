// const octokit = require('@octokit/rest');
 
var gitToken = "c5f1106d82fb93920fe5d41fea0577e2355a4a28";
 
// octokit.authenticate({
//     type: 'token',
//     token: gitToken
// });


const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: gitToken,
    userAgent: 'nodeTestApp v0.0.1',
    timeZone: 'America/Los_Angeles'
});

console.log("before");

// (async () => {
//   const {issues} = await octokit.issues.listForRepo({
//     owner : 'mdarden',
//     repo: 'testTargetRepo'
//   });
// });

// (async () => {
// const { data } = await octokit.request("/user");
// return data
// });

async function getIssuesList(owner,repo){
  const result = await octokit.issues.listForRepo({owner,repo});
  return result;
}

async function createRepo(name){
  const result = await octokit.repos.createForAuthenticatedUser({name});
  return result;
}

// name = "repoFromOctokit"
// console.log(createRepo(name))

getIssuesList("mdarden","testTargetRepo")
.then(getIssuesList => {
    console.log(getIssuesList);
})
.catch(error => {
    // ...send error response...
    console.log("error getting issues list");
});

// date = "date".concat(Date.now())

console.log(date);

// console.log("issues: ", issues);

