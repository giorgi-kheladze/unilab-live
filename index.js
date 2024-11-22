const containerP = document.getElementById("container-p")
const form = document.getElementById("form")

function addItem(){
    containerP.style.display = "none";
    form.style.display = "block"
}
function clearItem(){
    containerP.style.display = "block";
    form.style.display = "none"
}

const inputText = document.getElementById("input");

let http = new XMLHttpRequest()
http.open('get', "http://ip-api.com/json/", true)
http.send()

http.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        let result = `
            <p>Country: ${data.country}</p>
            <p>Timezone: ${data.timezone}</p>
        `;
        document.getElementById("form").innerHTML = result;
    }
};

console.log("hello")
