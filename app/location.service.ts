import { Injectable } from '@angular/core';

import { Country, State, City } from './location.classes';
import {COUNTRY_LIST, STATE_LIST, CITY_LIST} from './location.data';

@Injectable()
export class LocationService {

  // return Country list
  getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRY_LIST);
  }

  // return States list
  getStates(): Promise<State[]> {
    return Promise.resolve(STATE_LIST);
  }

  // return States list filterd by Country id
  getStatesByCountry(country: number): Promise<State[]> {
    var states = [];
    states = STATE_LIST.filter(state => {
            return country && (state.country == country);
        });
    return Promise.resolve(states);
  }

  // return City list
  getCities(): Promise<City[]> {
    return Promise.resolve(CITY_LIST);
  }

  // return City list filterd by State Id
  getCitiesByState(state: number): Promise<City[]> {
    var cities = [];
    cities = CITY_LIST.filter(city => {
            return state && (city.state == state);
        });
    return Promise.resolve(cities);
  }



  // Simulate server latency with 2 second delay
  getCountriesSlowly(ms): Promise<Country[]> {
    return new Promise(resolve => {      
      setTimeout(() => resolve(this.getCountries()), ms);
    });
  }
}
