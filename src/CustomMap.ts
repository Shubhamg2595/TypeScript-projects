// this class is going to carry a refrence to the google map that we craete, our goal is to hide the existence of google map from other developers.
import { User } from "./User";
import { Company } from "./Company";


// instructions to every other class on how they canbe argument to 'addMarker'

interface Mappable {
    location: {
        lat: number,
        lng: number,
    }
}



export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

//   addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: company.location.lat,
//         lng: company.location.lng,
//       },
//     });
//   }
}
