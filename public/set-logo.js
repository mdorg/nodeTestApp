// initialize variables and display
const http1 = new XMLHttpRequest();
let responseData1 = [];
getLogo();

// Set url or path to logo using a server side script
// I am using a server side script because I'd like to use App Configuration service 
// and 'require' is not defined for client-side js
function getLogo() {
    http1.open('GET', location + 'logo');
    http1.onreadystatechange = function() {
      if (http1.readyState === XMLHttpRequest.DONE && http1.status === 200) {
        responseData1 = JSON.parse(http1.responseText);
        console.log('logo response data: ', responseData1);
        // responseData.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
        updateLogo(responseData1);
      } else if (http1.readyState === XMLHttpRequest.DONE) {
        alert('An error occurred when getting the logo.');
      }
    };
    http1.send();
  }


  function updateLogo(responseData1) {
    console.log('Updating logo... ');
    var logoSource = responseData1['logoSrc'];
    console.log('image source: ', logoSource);
    document.getElementById('logo').src = logoSource;
  }


// Get URL or path to logo from local switch block
// function getLogo() {
//     var imgSwitch = "mandrill";
//     switch(imgSwitch) {
//     case "mandrill":
//         var imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Wikipedia-sipi-image-db-mandrill-4.2.03-quantize-only-CCC.png";
//         break;
//     case "lena":
//         var imgSrc = "https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png";
//         break;
//     default:
//         var imgSrc = "logo.png";
//     }
//     return imgSrc
// }

