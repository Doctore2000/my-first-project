import { Component, Input, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { Country, State, City, LocationFilter } from 'app/location.classes';
import { LocationService } from 'app/location.service';

@Component({
  selector: 'depended-comboboxes',
  providers: [LocationService],
  templateUrl: './dep-com-boxs.component.html',
  styleUrls: ['./dep-com-boxs.component.css']
})

export class DepComBoxsComponent implements OnInit {	
  filter = new LocationFilter();
	withEmptyRow = false;

  list = {
    countries: Country[0],
		states: State[0],
		cities: City[0]
	};

	constructor(private locationService: LocationService) { 				
	}

	ngOnInit(){
		this.reload();
	}


  reload(){
		this.filter.clean(); 
		this.list = {
				countries: Country[0],
				states: State[0],
				cities: City[0]
			};

		this.locationService.getCountriesSlowly(1000).then(countries => {
				this.list.countries = countries; 
			});
	}
		
	filterCountryChanged(){
		var filter = this.filter.country;
		this.filter.state = null;

		this.locationService.getStatesByCountry(filter ? filter.id : null).then(states => { 				
				this.list.states = states;
		
				this.filter.city = null;
				this.list.cities = [];
			});
  }
		
	filterStateChanged(){
		var filter = this.filter.state;
		this.filter.city = null;

		this.locationService.getCitiesByState(filter ? filter.id : null).then(cities => {
				this.list.cities = cities;
			});
  }
		
	filterCityChanged(){
  }

	callDebugger(){
		debugger;
	}
}
