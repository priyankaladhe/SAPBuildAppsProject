namespace BUILDAPPS;
 
entity Employee {
    key id : UUID;
    empid : String(30);
    empname:String(100);
    street: String(100);
    city: String(100);
    state: String(100);
    zip: String(10);
}
 
