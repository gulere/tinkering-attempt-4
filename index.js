//temperature conversion program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        if (temp >= 50){
            window.alert("🔥very hot!🥵");
        }
        else if (temp === -273.15){
            window.alert("💀absolute zero!💀");
        }  
        else if (temp <= -50){
            window.alert("🧊very cold!🥶");
        }
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        if (temp >= 122){
            window.alert("🔥very hot!🥵");
        }
        else if (temp === -459.67){
            window.alert("💀absolute zero!💀");
        }  
        else if (temp <= -58){
            window.alert("🧊very cold!🥶");
        }
        temp = (temp - 32) * (5/9);  
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "select a unit!"; 
    }
}

