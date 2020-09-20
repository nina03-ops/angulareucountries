import { Country } from './country';
import { Component, OnInit } from '@angular/core';
import {CountriesService } from  './countries.service';

@Component({
  selector: 'app-eucountries',
  templateUrl: './eucountries.component.html',
  styleUrls: ['./eucountries.component.css']
})
export class EucountriesComponent implements OnInit {
  public countries: Country[];
  constructor(private countriesService: CountriesService) { }
  
  onSubmit() {
    const res = this.countriesService.getCountries()
    console.log(res);
  }

  ngOnInit(): void {
    const res = this.countriesService.getCountries()
    .subscribe((data) => 
    this.countries = data);
  }

}
