var obj = {
    samsung : {
        STT : 1,
        gia : 100
    },

    iphone : {
        STT : 2,
        gia : 120
    }
};

var keys = Object.keys(obj);
console.log(keys);
var values = Object.values(obj);
console.log(values[0].STT);
function diengiatri(){
    console.log("Dien gia tri!");
    for(var i=0; i<2; i++){
        var row = document.createElement("tr");
        document.getElementById("data").appendChild(row);

        var col1 = document.createElement("td");
        col1.innerHTML = values[i].STT;

        var col2 = document.createElement("td");
        col2.innerHTML = keys[i];
        
        var col3 = document.createElement("td");
        col3.innerHTML = values[i].gia;
        
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
    }
    
}
