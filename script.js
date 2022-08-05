// async function getCountries(){
// 	const response = await fetch(`https://restcountries.com/v2/all`);
// 	const responseData = await response.json();
//     console.log(responseData);

//     return responseData;
// }
const fetchBtn = document.getElementById("search");
fetchBtn.addEventListener("click", handleGetCountries);

const dumy = [
  { name: "rwanda", callingCodes: "250" },
  { name: "congo", callingCodes: "150" },
];

async function handleGetCountries() {
  const nameInput = document.getElementById("selectedName");
  const jsonData = await getCountryName(nameInput.value);

  const ul = document.getElementById("coutryNames");

  const listContainer = document.querySelector(".listContainer");
  ul.textContent = "";
  listContainer.innerHTML = "";
  for (var i = 0; i < jsonData.length; i++) {
    const list = document.createElement("div");
    list.setAttribute("class", "list");
    //<div class='list'></div>

    const code = document.createElement("div");
    code.setAttribute("id", "countryCode");
    code.textContent = jsonData[i].callingCodes;
    // <div id="countryCode"></div>

    const input = document.createElement("input");
    input.setAttribute("id", "resultName");
    input.setAttribute("class", "controlstyle");
    input.setAttribute("type", "text");
    input.setAttribute("disabled", true);
    input.setAttribute("value", jsonData[i].name);
    //<input type='text' id="resultName" class="controlstyle" disabled>
    //</input>

    // append to list element
    list.appendChild(input);
    list.appendChild(code);
    /**
     * <div class='list'>
     * <input type='text' id="resultName" class="controlstyle"
     * disabled />
     * <div id="countryCode"></div>
     * </div>
     */

    // append list element to list container
    console.log(list);
    listContainer.appendChild(list);

    // const countryCodeDiv = document.getElementById("countryCode");
    // const countryNameinput =document.getElementById("resultName");
    // const li = document.createElement("li");
    // li.textContent = jsonData[i].name +" "+"+"+jsonData[i].callingCodes;
    // li.textContent = jsonData[i].callingCodes;
    // countryCodeDiv.textContent = "+"+jsonData[i].callingCodes;
    // countryNameinput.setAttribute("value",jsonData[i].name);
    // ul.appendChild(li);
  }
}

async function getCountryName(name) {
  const response = await fetch(`https://restcountries.com/v2/name/${name}`);
  const responseData = await response.json();
  return responseData;
}
