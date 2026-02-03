const longCountries = countries.filter(country => country.length > 7);

console.log(longCountries);

const result = countries
  .filter(c => c.length > 7)
  .map(c => `${c} (${c.length})`);

console.log(result);
