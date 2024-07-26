using {BUILDAPPS as my} from '../db/schema';

service Build  @(path: '/browse') {

entity Employee as projection on my.Employee;

entity testDetails as projection on my.testDetails;

entity Users as projection on my.Users;

entity Scans as projection on my.Scans;

action SendEmail() returns Boolean;

action updateQR() returns String;

action scan(qrCodeID: String(200)) returns String;

action UpdateData(STATUS: String(200),ID:String(36)) returns String;

action PullRequest(EMAIL: String(200)) returns String;

}