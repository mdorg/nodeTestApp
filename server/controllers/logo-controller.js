// import dependencies to source credentials using ibm-cloud-env and initialize
// const IBMCloudEnv = require('ibm-cloud-env');
// IBMCloudEnv.init('/server/config/mappings.json');

// initialize Cloudant
// const CloudantSDK = require('@cloudant/cloudant');
// const cloudant = new CloudantSDK(IBMCloudEnv.getString('cloudant_url'));


// import dependencies for App Configuration/AppRapp and initialize
const { appRappClient } = require('@local/ibm-apprapp');
const { UrlBuilder } = require('@local/ibm-apprapp/lib/Utils/UrlBuilder');
const urlBuilder = UrlBuilder.getInstance()
urlBuilder.setOverrideServerHost('apprapp-dev-37b89de8caeb649450a9af91731f3589-0000.us-south.containers.appdomain.cloud')

const client = appRappClient.getInstance({
  region: 'us-south',
  appID: 'node-test-app',
  guid: '933d6de8-7e98-4139-972a-93eabfd0b321',
  apikey: 'wnGm64l3BDfO1tTIK0rCUqN0GQbPfEqzWNksghEgwlMo',
  liveFeatureUpdateEnabled: true, // Optional, by default this is true.
  // featureFile: 'custom/userJson.json' // Optional, add this field if liveFeatureUpdateEnabled false or get features when the device is offline during the first app load.
})

// console.log('client: ',client);

// get logo of application
exports.getLogo = (req, res) => {
  console.log('In controller - getLogo');

  // Retrieve value from App Configuration service here:
  const feature = client.getFeature('logo-image-source');

  if(feature) {
    console.log('feature found');
  } 
  else {
    console.log('feature not found');
  }

  // console.log(`Feature currentValue ${feature.getCurrentValue()} `);

  // if(feature) {
  //     if(feature.isEnabled()) {
  //       console.log('feature is enabled');
  //     } 
  //     else {
  //       console.log('feature is disabled');
  //     }
  //     console.log("data", feature);
  //     console.log(`\n Feature Name ${feature.getFeatureName()} `);
  //     console.log(`Feature ShortName ${feature.getFeatureShortName()} `);
  //     console.log(`Feature Type ${feature.getFeatureDataType()} `);
  //     console.log(`Feature is enabled ${feature.isEnabled()} `);
  //     console.log(`Feature currentValue ${feature.getCurrentValue()} `);
  // }

  // Hard code values here:
  // var logoSrc = "logo.png"
  var logoSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wikipedia-sipi-image-db-mandrill-4.2.03-quantize-only-CCC.png";
  // var logoSrc = "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png";

  console.log('Get logo successful');
  return res.status(200).json({'logoSrc':logoSrc});
};

