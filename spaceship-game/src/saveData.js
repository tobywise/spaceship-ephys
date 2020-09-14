var subjectID;

var saveSubject = function (elem) {

    subjectID = document.getElementById("subjectID").value;

    if (subjectID.length> 0) {
        // https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance/51647623
        function allStorage() {

            var archive = {}, // Notice change here
                keys = Object.keys(localStorage),
                i = keys.length;
        
            while ( i-- ) {
                if (keys[i].includes(subjectID)) {
                    archive[ keys[i] ] = localStorage.getItem( keys[i] );
                }
                
            }
        
            return archive;
        }

        var allData = JSON.stringify(allStorage());

        var a = document.createElement("a");
        var file = new Blob([allData], {type: 'text/plain'});
        a.href = URL.createObjectURL(file);
        a.download = 'subject_' + subjectID + '_data.json';
        a.click();
    }
    else {
        alert("No subject ID entered");

    }
};

var saveAll = function (elem) {

    // https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance/51647623
    function allStorage() {

        var archive = {}, // Notice change here
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            archive[ keys[i] ] = localStorage.getItem( keys[i] );
        }
    
        return archive;
    }

    var allData = JSON.stringify(allStorage());

    var a = document.createElement("a");
    var file = new Blob([allData], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = 'all_data.json';
    a.click();

};


var clearDataStart = function(elem) {

    document.getElementById('main').innerHTML += `
    <br><br><br>
    <b>Do you really want to clear all the data?</b>
    <button type=\"button\" id=\"clearButton2\" class=\"submit_button\" style="color:red">Yes</button>
    `
    document.getElementById("clearButton2").onclick = clearData;

}

var clearData = function(elem) {

    localStorage.clear();

}

document.getElementById('header_title').innerHTML = "Spaceship game";
document.getElementById('main').innerHTML = `
Enter subject ID to download data for:<br><br>
<input id="subjectID"></input><br><br>
<button type=\"button\" id=\"downloadSubjectButton\" class=\"submit_button\">Download subject</button>

<br><br><br>
Or click below to download all saved data:<br><br>
<button type=\"button\" id=\"downloadAllButton\" class=\"submit_button\">Download all</button>
<br><br><br>
<p>Click below to clear all data stored by in the browser's cache</p>
<button type=\"button\" id=\"clearButton1\" class=\"submit_button\" style="color:red">Clear data</button>

`

document.getElementById("downloadSubjectButton").onclick = saveSubject;
document.getElementById("downloadAllButton").onclick = saveAll;
document.getElementById("clearButton1").onclick = clearDataStart;

