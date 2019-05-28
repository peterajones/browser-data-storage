// Check for localStorage
if (localStorage) {

    console.log("localStorage is available");

} else {

    console.log("localStorage is NOT available");

}

// Check for sessionStorage
if (localStorage) {

    console.log("sessionStorage is available");

} else {

    console.log("sessionStorage is NOT available");

}

// Session Storage
const btn1 = document.querySelector("#submit1");

btn1.addEventListener("click", () => {

    "use strict";

    const fnameSession = document.querySelector("#fname_session").value;
    const lnameSession = document.querySelector("#lname_session").value;

    if (fnameSession && lnameSession !== "") {

        sessionStorage.setItem("first_name", fnameSession);
        sessionStorage.setItem("last_name", lnameSession);

    } else {

        alert("SESSION STORAGE: Please fill out both First Name and Last Name and submit again.");

    }

});

// Get the sessionStorage data and display it.
const firstNameSession = sessionStorage.getItem("first_name");
const lastNameSession = sessionStorage.getItem("last_name");

if (!firstNameSession || !lastNameSession) {

    document.querySelector("#first_name_session").innerHTML = "nothing in sessionStorage";

} else {

    document.querySelector("#first_name_session").innerHTML = firstNameSession;
    document.querySelector("#last_name_session").innerHTML = lastNameSession;

}

const clearSession = document.querySelector("#clear1");

clearSession.addEventListener("click", () => {

    "use strict";

    sessionStorage.clear();

});

// Local Storage
const btn2 = document.querySelector("#submit2");

btn2.addEventListener("click", () => {

    "use strict";

    const fnameLocal = document.querySelector("#fname_local").value;
    const lnameLocal = document.querySelector("#lname_local").value;

    console.log(`form submitted: ${fnameLocal} ${lnameLocal}`);

    if (fnameLocal && lnameLocal !== "") {

        localStorage.setItem("first_name", fnameLocal);
        localStorage.setItem("last_name", lnameLocal);

    } else {

        alert("LOCAL STORAGE: Please fill out both First Name and Last Name and submit again.");

    }

});

// Get the localStorage data and display it.
const firstNameLocal = localStorage.getItem("first_name");
const lastNameLocal = localStorage.getItem("last_name");

if (!firstNameLocal || !lastNameLocal) {

    document.querySelector("#first_name_local").innerHTML = "nothing in localStorage";

} else {

    document.querySelector("#first_name_local").innerHTML = firstNameLocal;
    document.querySelector("#last_name_local").innerHTML = lastNameLocal;

}

const clearLocal = document.querySelector("#clear2");

clearLocal.addEventListener("click", () => {

    "use strict";

    localStorage.clear();

});
