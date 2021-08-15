

// 1.Solving problems using array functions on rest countries data.

// a.Get all the countries from Asia continent /region using Filter function
const getCountries1=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.onload=()=>{        
        const countries=JSON.parse(xhr.response);        
        console.log(countries.filter(val=> val.region=='Asia'));
    }
    xhr.send();
}

getCountries1();