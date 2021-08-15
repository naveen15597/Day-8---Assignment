

// b.Get all the countries with a population of less than 2 lakhs using Filter function

const getCountries2=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.onload=()=>{        
        const countries=JSON.parse(xhr.response);        
        console.log(countries.filter(val=> val.population<2_00_000));
    }
    xhr.send();
}

getCountries2();