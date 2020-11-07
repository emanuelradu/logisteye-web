export interface Package {
    id: number;
    is_delivered: boolean;
    date: Date;
    source_location: Location;
    destination_location: Location;
    current_location: Location;
    company: Company;
}

export interface Location{
    id?: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface Company{
    id: number;
    name: string;
}