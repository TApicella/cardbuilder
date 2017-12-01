// load in JSON data from file


var loadData = function(path){

}
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", path, true);
oReq.send();

function reqListener(e) {
    data = JSON.parse(this.responseText);
}

var data;
module.exports = data;