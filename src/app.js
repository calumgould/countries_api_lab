import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountryIndex: null,
      favouriteCountries: [],
      favouriteCountryIndex: null
    },
    mounted(){
      this.fetchCountries()
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((total, country) => {
          return total += country.population
        }, 0)
      },
      addFavouriteCountry: function () {
        return this.favouriteCountries.push(this.countries[this.favouriteCountryIndex])
      }
    },
    methods: {
      fetchCountries: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((data) => this.countries = data)
      }
    }
  });
});
