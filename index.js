
const inputBtn = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-el");
const saveTabBtn = document.getElementById("saveTab-el")

let myleads = [];
// console.log(myleads[0]);

// myleads = JSON.parse(myleads);
// myleads.push("www.school.com");
// myleads = JSON.stringify(myleads); 
// console.log(myleads);

let leadFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
if (leadFromLocalStorage) {
    myleads = leadFromLocalStorage;
    render(myleads);
}


inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myleads", JSON.stringify(myleads));
    // console.log(localStorage.getItem("myleads"));

    render(myleads);
})


// localStorage.setItem("myleads", "www.ayush.com");
// console.log( localStorage.getItem("myleads") );
// localStorage.clear();




function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>";

        // create element
        // set text content
        // append

        // const li = document.createElement("li");
        // li.textContent = myleads[i];
        // ulEl.append(li);

        // listItems += "<li><a href='myleads[i]' target = '_blank'>" + myleads[i] + "</a></li>";
        listItems +=
            `<li>
                <a href="${leads[i]}" target= '_blank'> ${leads[i]} </a>
            </li>`;
        // console.log(listItems);

    }
    ulEl.innerHTML = listItems;
}


// const tab = [
//     { url: "https://www.google.com" }
// ]

saveTabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myleads));
        render(myleads);
    });
})


deleteBtn.addEventListener("click", () => {
    localStorage.clear();
    myleads = [];
    render(myleads);
}
)

// Try to do less DOM manipulations (like element.innerHTML use out of for loop instead of using at every 
// iterations