import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksListService {

  // banksList = [
  //   {
  //     id: 1,
  //     bankName: 'HDFC',
  //     country: 'India',
  //     location: 'Athani',
  //     rating: 4
  //   }, {
  //     id: 2,
  //     bankName: 'Federal',
  //     country: 'India',
  //     location: 'Ganeshwadi',
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     bankName: 'HSBC',
  //     country: 'United Kingdom',
  //     location: 'Leamington Spa',
  //     rating: 4
  //   },
  //   {
  //     id: 4,
  //     bankName: 'HDFC',
  //     country: 'India',
  //     location: 'Ganeshwadi',
  //     rating: 4
  //   },
  //   {
  //     id: 5,
  //     bankName: 'HSBC',
  //     country: 'United Kingdom',
  //     location: 'London',
  //     rating: 4
  //   },
  //   {
  //     id: 6,
  //     bankName: 'Barclays',
  //     country: 'United Kingdom',
  //     location: 'Leamington Spa',
  //     rating: 5
  //   },
  //   {
  //     id: 7,
  //     bankName: 'Barclays',
  //     country: 'United Kingdom',
  //     location: 'Birmingham',
  //     rating: 5
  //   },
  //   {
  //     id: 8,
  //     bankName: 'HSBC',
  //     country: 'United Kingdom',
  //     location: 'Stratford',
  //     rating: 4
  //   },
  //   {
  //     id: 9,
  //     bankName: 'HDFC',
  //     country: 'India',
  //     location: 'Pune',
  //     rating: 4
  //   },
  //   {
  //     id: 10,
  //     bankName: 'HSBC',
  //     country: 'United Kingdom',
  //     location: 'Oxford',
  //     rating: 4
  //   },
  //   {
  //     id: 11,
  //     bankName: 'HSBC',
  //     country: 'United Kingdom',
  //     location: 'Manchester',
  //     rating: 4
  //   }];

  // countrylist = [{
  //   id: 1,
  //   countries: [
  //     'India', 'United kingdom', 'United states'
  //   ],
  // }];

  constructor(private http: HttpClient) { 
  }

  GetBankDetails() {
    //return this.http.get("https://localhost:44319/api/Banks");
    return this.http.get("https://banklistapi-san.azurewebsites.net/api/Banks");
  }

  GetCountryName(id : number) {
    //return this.http.get('https://localhost:44319/api/v1.0/countries/' + id);
    return this.http.get('https://banklistapi-san.azurewebsites.net/api/v1.0/countries/' + id);
  }
}
