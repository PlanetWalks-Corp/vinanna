class Person {
    personId: number;
    personFirstName: string;
    personLastName: string;
    dob: Date;
    imageName: string;
    description: string;
    profession: string;
    age: number;

    constructor(personId: number, personFirstName: string, personLastName: string, dob: Date, imageName: string, description: string, profession: string, age: number) {
     this.personId = personId;
     this.personFirstName = personFirstName;
     this.personLastName = personLastName;
     this.dob = dob;
     this.imageName = imageName;
     this.description = description;
     this.profession = profession;
     this.age = age;
     }
}

class Fairs {
    fairId: number;
    fairName: string;
    fairType: string;
    description: string;
    imageName: string;
    constructor(fairId: number, fairName: string, fairType: string, imageName: string, description: string) {
     this.fairId = fairId;
     this.fairName = fairName;
     this.fairType = fairType;
     this.description = description;
     this.imageName = imageName;}
}

export class Place{
	placeId: number;
	placeName: string;
	imageName: string;
	placeType: string;
	description: string;
	address: string;

	constructor(placeId: number, placeName: string, imageName: string, placeType: string, description: string, address: string){
	this.placeId = placeId;
	this.placeName = placeName;
	this.imageName = imageName;
	this.placeType = placeType;
	this.address = address;
	this.description = description;}
}

class Image{
	imageId: number;
	imageName: string;

	constructor(imageId: number, imageName:string){
	this.imageId = imageId;
	this.imageName = imageName;}
}
class Album{
	albumId: number;
	albumName: string;
	image: Image[];

	constructor(albumId: number, albumName: string, image: Image[]){
	this.albumId = albumId;
	this.albumName = albumName;
	this.image = image;
	}
}
export class City{
	cityId: number;
	cityName: string;
	population: number;
	geoLocation: string;
	history: string;
	weatherCondition: string;
	places: Place[];
	person: Person[];
	fair: Fairs[];
	album: Album;

	constructor(cityId: number, cityName: string, population: number, geoLocation: string, history: string, weatherCondition: string, places: Place[], person: Person[], fair: Fairs[],album: Album){
	this.cityId = cityId;
	this.cityName = cityName;
	this.population = population;
	this.geoLocation = geoLocation;
	this.history = history;
	this.weatherCondition = weatherCondition;
	this.places = places;
	this.person = person;
	this.fair = fair;
	this.album = album;
	}
}
