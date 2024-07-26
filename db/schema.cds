namespace BUILDAPPS;

entity Employee {
  key id      : UUID;
      empid   : String(30);
      empname : String(100);
      street  : String(100);
      city    : String(100);
      state   : String(100);
      zip     : String(10);
}

entity Scans {
  key ID        : UUID;
      userID    : UUID;
      qrCodeID  : UUID;
      timestamp : DateTime;
}

entity Users {
  key ID         : UUID;
      firstName  : String;
      lastName   : String;
      linkedinQR : String(500);
      email      : String;
}

entity testDetails {
  key ID          : UUID;
      NAME        : String(50);
      EMAIL       : String(50);
      STATUS      : String(30);
      DESCRIPTION : String(100);
}
