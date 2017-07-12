import { Component, Input, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { LocationTreeNode } from './location-tree.node';

import { GridColumn } from './grid-tree/grid-tree.component';

import { Country, State, City } from 'app/location.classes';
import { LocationService } from 'app/location.service';


@Component({
  selector: 'location-tree',
  providers: [LocationService],
  templateUrl: './location-tree.component.html',
  styleUrls: ['./location-tree.component.css']
})

export class LocationTreeComponent implements OnInit {	
	rootNode: LocationTreeNode;
	nodeList: LocationTreeNode[]= [];

	columnDefinition: GridColumn[];

	constructor(private locationService: LocationService) {
		this.rootNode = new LocationTreeNode(0, null, 'rootNode', false);
		this.rootNode.isRoot = true;

		this.columnDefinition = [new GridColumn({
				name: 'Location',
				index: 'name'
			}),
			new GridColumn({
				name: 'ID',
				index: 'id'
			}),
			new GridColumn({
				name: 'head of government',
				index: 'headOf'
			}),
			new GridColumn({
				name: 'Population',
				index: 'population'
			})];
	}

	ngOnInit(){
		this.createTreeStructure();
	}

	createTreeStructure(){
		let me = this;

		Promise
			.all([this.locationService.getCountries(), this.locationService.getStates(), this.locationService.getCities()])
			.then(values => {
				let countries = values[0];
				let states: any = values[1];
				let cities: any = values[2];

				countries.forEach(country => {
					let countryNode = new LocationTreeNode(country.id, this.rootNode.id, country.name, false);
					countryNode.data = country;

					states.forEach(state => {
						if(state.country == country.id){
							let stateNode = new LocationTreeNode(state.id, state.country, state.name, false);
							stateNode.data = state; 

							cities.forEach(city => {
								if(city.state == state.id){
									let cityNode = new LocationTreeNode(city.id, city.state, city.name, true);
									cityNode.data = city;

									stateNode.children.push(cityNode);
								}

								me.nodeList.push(new LocationTreeNode(city.id, city.state, city.name, true));
							});

							countryNode.children.push(stateNode);
						}
					});

					me.rootNode.children.push(countryNode);
				});	
			})
			.catch(() => console.log('Exception by Promise.all'));;
	}

	callDebugger(){
		debugger;
	}
}
