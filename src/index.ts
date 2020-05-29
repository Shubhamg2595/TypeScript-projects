import { User } from "./User";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();

const myMap = new CustomMap("map");

myMap.addUserMarker(user);

// const company = new Company();

// console.log("user -", user);
// console.log("company -", company);
