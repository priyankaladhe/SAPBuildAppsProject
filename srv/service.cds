using {BUILDAPPS as my} from '../db/schema';

service Build  @(path: '/browse') {

entity Employee as projection on my.Employee;

}