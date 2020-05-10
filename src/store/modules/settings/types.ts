export interface ICountry{
    name: string;
    alpha2Code: string;
    subregion: string;
}

export interface ISettingsState{
    countries: Array<ICountry>;
    selectedCountry: ICountry;
    error: boolean;
}