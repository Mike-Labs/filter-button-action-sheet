// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BarcodeService {

//   private barcode:string = '';

//   constructor() { }


//   setBarcode(code:string){
//     this.barcode = code;
//   }


//   getBarcode(){
//     return this.barcode;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  private details: any = {}; // Store details like name, phone, email, etc.

  constructor() { }

  // Set all details extracted from the QR code
  setDetails(details: { name: string, gender: string, age: string, id: string, area: string, meal_card_number: string, school: string, guardian_name: string, phone: string, email: string, company: string, image: string }) {
    this.details = details;
  }

  // Get the stored details
  getDetails() {
    return this.details;
  }
}

