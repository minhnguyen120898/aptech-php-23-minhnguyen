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

function diengiatri(){
    console.log("Dien gia tri!");
    for(var i=0;i<2 ;i++){
        var row = document.createElement("tr");
        
        for(var j=0; j < 3 ; j++){
            var col = document.createElement("td");
            var txt = document.createTextNode("row" + i + "col" +j);
            col.appendChild(txt);
            row.appendChild(col);
        }

        document.getElementById("data").appendChild(row);
    }
    
}
