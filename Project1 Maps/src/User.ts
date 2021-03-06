import faker from 'faker';
import {Mappable} from './CustomMap'
export class User implements Mappable {

    name: string;
    location : {
        lat: number;
        lng: number;
    }
    color: string="red";


    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()) ,
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `userName: ${this.name}`
    }

}

// note : whenever we use a JS package in ts project, there are higher chances that the package is not written in TS. Hence TS compiler will also find it difficult to work with such packages.
// - To solve this issue , typescript-definition_files were introduced, that makes it easier for tS compilers to understand the js packages. Each package has a standard type definition_file defined for it.