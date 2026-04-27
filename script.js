function updateData() {
    document.getElementById("cpu").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("memory").innerText = Math.floor(Math.random()*100) + "%";
    document.getElementById("network").innerText = Math.floor(Math.random()*100) + " Mbps";
}

setInterval(updateData, 1000);