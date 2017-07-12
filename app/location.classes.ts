
export class Country {
    "id": number;
    "name": string;
}

export class State {
    "id": number;
    "name": string;
    "country": number;
}


export class City {
    "id": number;
    "name": string;
    "state": number;
}

export class LocationFilter {
	country: Country;
	state: State;
	city: City;

	constructor() {
		this.clean();  		
	}

	clean(){
		this.country = null;
		this.state = null;
		this.city = null; 
	}

    public get countrySelection(): Country {
		return null;
//		return this.country;
	}

	public set countrySelection(value: Country) {
		this.country = value;
	}

    public get stateSelection(): State {
		return this.state;
	}

	public set stateSelection(value: State) {
		this.state = value;
	}

    public get citySelection(): City {
		return this.city;
	}

	public set citySelection(value: City) {
		this.city = value;
	}
}