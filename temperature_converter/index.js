const input = document.querySelector("#input");
const kelvin = document.querySelector("#kelvin");
const farenhiet = document.querySelector("#farenhiet");
const celius = document.querySelector("#celius");
const result = document.querySelector("#result");
const subtext = document.querySelector("#Subtext");
const bodi = document.querySelector("#bodi");

kelvin.addEventListener("click", e => {
    bodi.style.backgroundImage = "url()";
    result.innerHTML = "";
    if (input.value != '') {
        let a = parseFloat(input.value);
        const b = a + 273.15;
        if (a > 30) {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)";
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A SUNNY DAY";
        } else if(a < 30 && a >= 15) {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1598717123623-994ab270a08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80)"
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A NORMAL DAY";
        } else {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1512864666823-fed78bed3614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)";
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A SNOW DAY";
        }
        result.style.display = "block";
        result.innerHTML = "YOUR RESULT IN KELVIN IS " + b + "K";
    }
    else {
        subtext.style.display="none";
        alert("enter valid number");
    }
})

farenhiet.addEventListener("click", e => {
    result.innerHTML = "";
    if (input.value != '') {
        let a = parseFloat(input.value);
        let b = (a * 9 / 5) + 32;
        if (a > 30) {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)";
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A SUNNY DAY";
        } else if (a < 30 && a >= 15) {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1598717123623-994ab270a08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80)";
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A NORMAL DAY";
        } else {
            bodi.style.backgroundImage = "url(https://images.unsplash.com/photo-1512864666823-fed78bed3614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)";
            subtext.style.display = "block";
            subtext.innerHTML = "ITS A SNOW DAY";
        }
        result.style.display = "block";
        result.innerHTML = "YOUR RESULT IN FARENHIET IS "+ b;
    }
    else {
        subtext.style.display="none";
        alert("enter valid number");
    }
})

celcius.addEventListener("click", e => {
    let a = parseFloat(input.value);
    if (a > 30) {
        bodi.style.backgroundImage = "url(images/sunnyday.jpg)";
        subtext.style.display = "block";
        subtext.innerHTML = "ITS A SUNNY DAY";
    } else if (a < 30 && a >= 15) {
        bodi.style.backgroundImage = "url(images/normalday.jpg)";
        subtext.style.display = "block";
        subtext.innerHTML = "ITS A NORMAL DAY";
    } else {
        bodi.style.backgroundImage = "url(images/snowday.jpg)";
        subtext.style.display = "block";
        subtext.innerHTML = "ITS A SNOW DAY";
    }
    result.style.display = "block";
    result.innerHTML = "YOUR RESULT IN CELCIUS IS " + input.value + " Degrees";
})