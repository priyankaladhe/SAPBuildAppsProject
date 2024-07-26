const cds = require("@sap/cds");
var nodemailer = require('nodemailer');
 
function lPad(str, size) {
  var s = str.toString();
  while (s.length < size) {
    s = "0" + s;
  }
  return s; // return new number
}
 
function Mymethod(){
    var pet ='Mydog'
    console.log(pet);
}

class Build extends cds.ApplicationService {
  
  async init() {

  const db = await cds.connect.to("db");

  this.on('UpdateData', async (req) => {
    var x = await db.run(
      " UPDATE BUILDAPPS_testDetails SET STATUS = '" + req.data.STATUS +"' WHERE ID = '" + req.data.ID +"' "
    );
    return 'Updated Successfully';
  });


  this.on('PullRequest', async (req) => {
    const { testDetails } = this.entities;
    const { EMAIL } = req.data.EMAIL;
  
    // Retrieve the LinkedIn profile URL
    const user = await SELECT.one.from(testDetails).where({ EMAIL: req.data.EMAIL , STATUS : 'Open'});
    //if (user !== null) {
      // Redirect to the LinkedIn profile
      return (user);
    //} else {
      return 'QR Code not found';
    //}
    console.log(user);
  });

    
  this.on('scan', async (req) => {
        const { qrCodeID } = req.data.qrCodeID;
        //const { userID }   = req.data.userID;
        
        // Log the scan event

        //await INSERT.into(Scans).entries({ userID, qrCodeID });
  
        // Retrieve the LinkedIn profile URL
        const user = await SELECT.one.from(Users).where({ ID: req.data.qrCodeID });
        if (user !== null) {
          // Redirect to the LinkedIn profile
          return (user.linkedinQR);
        } else {
          return 'QR Code not found';
        }
        console.log(user);
      });
   // });


    return super.init();
  }
 
}
 
module.exports = { Build };