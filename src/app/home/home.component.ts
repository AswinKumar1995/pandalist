import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
import countryAbbreviations from "../../assets/country.json"
import countryCodes from "../../assets/country-code.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public countryCode :string = "Select Country.."
  public sortOrders: string[] = []
  public allCountrywithCodes :any;
  public allCountriesSymbols = Object.keys(countryAbbreviations)
  public allCountriesCodes = Object.values(countryCodes)
  public allCountryNames = Object.values(countryAbbreviations)
  public selectedCode : string;
  
 

  
  constructor() {

   }

  ngOnInit() {
    for (let code of (this.allCountriesSymbols)){
      var countryName = countryAbbreviations[code]
      var countryCode = countryCodes[code]
      this.sortOrders.push(countryName + " ( "+ countryCode + " )")
    }


  }


  public changeCountryCode(value:any){
    console.log("Option clicked")
    console.log(value)
    this.countryCode = value.split("(")[1].split(")")[0] 
    console.log("Country Code : ",this.countryCode)
    

  }

}
