// get logo for application
exports.getLogo = (req, res) => {
    console.log('In controller - getLogo');
    res.json({
      logoSrc: 'logo.png',
    });
  };
  

// // import dependencies to source credentials using ibm-cloud-env and initialize
// const IBMCloudEnv = require('ibm-cloud-env');
// IBMCloudEnv.init('/server/config/mappings.json');

// // initialize Cloudant
// const CloudantSDK = require('@cloudant/cloudant');
// const cloudant = new CloudantSDK(IBMCloudEnv.getString('cloudant_url'));


//import dependencies for App Configuration/AppRapp and initialize
// const { appRappClient } = require('@local/ibm-apprapp');
// const client = appRappClient.getInstance({
//   region: 'us-south',
//   appID: 'node-test-app',
//   guid: '933d6de8-7e98-4139-972a-93eabfd0b321',
//   apikey: 'wnGm64l3BDfO1tTIK0rCUqN0GQbPfEqzWNksghEgwlMo',
//   liveFeatureUpdateEnabled: true, // Optional, by default this is true.
//   featureFile: 'custom/userJson.json' // Optional, add this field if liveFeatureUpdateEnabled false or get features when the device is offline during the first app load.
// })


// create mydb database if it does not already exist
// cloudant.db.create('mydb')
//   .then(data => {
//     console.log('mydb database created');
//   })
//   .catch(error => {
//     if (error.error === 'file_exists') {
//       console.log('mydb database already exists');
//     } else {
//       console.log('Error occurred when creating mydb database', error.error);
//     }
//   });
// const mydb = cloudant.db.use('mydb');


// get logo from App Configuration service
// exports.getLogo = (req, res, next) => {
//   console.log('In route - getLogo');
//   return "logo.png"

//   return mydb.list({include_docs: true})
//     .then(fetchedNames => {
//       let names = [];
//       let row = 0;
//       fetchedNames.rows.forEach(fetchedName => {
//         names[row] = {
//           _id: fetchedName.id,
//           name: fetchedName.doc.name,
//           timestamp: fetchedName.doc.timestamp,
//         };
//         row = row + 1;
//       });
//       console.log('Get logo successful');
//       return res.status(200).json(logo);
//     })
//     .catch(error => {
//       console.log('Get logo failed');
//       return res.status(500).json({
//         message: 'Get logo failed.',
//         error: error,
//       });
//     });

// };

// Set logo in App Configuration service
// exports.setLogo = (req, res, next) => {
//   console.log('In route - setLogo');
//   let name = {
//     name: req.body.name,
//     timestamp: req.body.timestamp,
//   };
//   return mydb.insert(name)
//     .then(addedName => {
//       console.log('Set logo successful');
//       return res.status(201).json({
//         _id: addedName.id,
//         name: addedName.name,
//         timestamp: addedName.timestamp,
//       });
//     })
//     .catch(error => {
//       console.log('Set logo failed');
//       return res.status(500).json({
//         message: 'Set logo failed.',
//         error: error,
//       });
//     });
// };
