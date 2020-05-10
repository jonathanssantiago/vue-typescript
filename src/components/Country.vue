<template>
    <div class="Country">
        <select 
            name="contries" 
            id="countries"
            @change="selectedCountry"
        >
        <option 
            v-for="(country, index) of countries"
            :key='"country-"+index'
            :value='country.alpha2Code'
            :selected="country.alpha2Code === getCountrySelected.alpha2Code"
        >
        {{ country.name }}
        </option>
        </select>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, PropSync} from 'vue-property-decorator';
import { ICountry } from '@/store/modules/settings/types';
import { State, Action, Getter } from 'vuex-class';

@Component
export default class Country extends Vue {
    @Action('fetchCountries', { namespace: 'settings'}) getCountries: any;
    @Action('setSelectedCountry', { namespace: 'settings'}) setCountry: any;
    @Getter('getCountries', { namespace: 'settings' }) countries!: ICountry[];
    @Getter('getSelectedCountry', { namespace: 'settings' }) getCountrySelected!: ICountry;
    @Prop({ type: String, required: false}) prop1!: string;
    @PropSync('loading', {type: Boolean, required: true}) loadingButton!: boolean;

    teste: string;

    constructor(){
        super();
        this.teste = '';
    }

    get teste2(){
        return this.teste + '2312';
    }

    @Watch('prop1')
    onTeste(teste: string){
        console.log(teste)
    }
    
    @Watch('loadingButton')
    onLoading(load: boolean){
        console.log(load)
    }

    mounted() {
        this.getCountries();
    }

    selectedCountry(e: any){
        const country = this.countries.find((country: ICountry) => country.alpha2Code ===  e.target.value);
        this.setCountry(country);
    }
}
</script>