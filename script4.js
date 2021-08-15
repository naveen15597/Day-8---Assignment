


// d.Print the total population of countries using reduce function

const getCountries4=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.onload=()=>{        
        const countries=JSON.parse(xhr.response);        
        const totPopulation=(val,acc)=>{
            return val+acc.population;
        }
        console.log('Total Population=',countries.reduce(totPopulation,0));
    }
    xhr.send();
}

getCountries4();