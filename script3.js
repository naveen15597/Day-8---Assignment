

// c.Print the following details name, capital, flag using forEach function


const getCountries3=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.onload=()=>{        
        const countries=JSON.parse(xhr.response);        
        countries.forEach(element => {
            console.log('Name=',element.name +', '+'Capital=',element.capital+', '+'flag=',element.flag)
        });
    }
    xhr.send();
}

getCountries3();