

// async function getCountries(){
// 	const response = await fetch(`https://restcountries.com/v2/all`);
// 	const responseData = await response.json();
//     console.log(responseData);

//     return responseData;                                                               
// }

async function getCountryName(name) {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);
    const responseData = await response.json();
    return responseData;
}


async function handleGetCountries() {
    const nameInput = document.getElementById("selectedName");
    jsonData = await getCountryName(nameInput.value);

    const ul = document.getElementById("coutryNames");
    

    ul.textContent = "";
    for (var i = 0; i < jsonData.length; i++) {
        console.log("Name: " + jsonData[i].name.official)
        const countryCodeDiv = document.getElementById("countryCode");
        const countryNameinput =document.getElementById("resultName");
        // const li = document.createElement("li");
        // li.textContent = jsonData[i].name +" "+"+"+jsonData[i].callingCodes;
        // li.textContent = jsonData[i].callingCodes;
        countryCodeDiv.textContent = "+"+jsonData[i].callingCodes;
        countryNameinput.setAttribute("value",jsonData[i].name);
        // ul.appendChild(li);
       
    }
    console.log(jsonData)
}

const fetchBtn = document.getElementById("search");
fetchBtn.addEventListener("click", handleGetCountries);