const input1 = document.getElementById ('input1');

const button1 = document.getElementById ('button1');

const div1 = document.getElementById('firstDiv')

button1.onclick = function abc (event) {
    let currentValue = input1.value;
    
    if(!currentValue || currentValue < 0){
        currentValue = 9;
    }
    
fetch('http://numbersapi.com/' + currentValue + '/trivia')
    .then(function (response) {
        return (response.text());
    })
    .then (function(textResponse){
        div1.innerText = textResponse;
    })
    .catch(function (err) {
        alert("Some Error");
        console.log(err);
    })
};