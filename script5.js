

// e.Print the country which uses US Dollars as currency.

const getCountries5=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.onload=()=>{        
        const countries=JSON.parse(xhr.response);        
        console.log(countries.filter(val=> val.currencies[0].code=='USD'));
    }
    xhr.send();
}

getCountries5();