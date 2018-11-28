
var options_arr = [];

document.getElementById('calculate-btn').addEventListener('click', calculateVal);
options_arr = document.getElementsByTagName('a');
options_arr.forEach(addEventListener('click', getColor));

function getColor(e){
    var color = e.target.innerHTML;
    var classes = e.target.parentElement.className;
    var classes_arr = classes.split(" ");
    if(classes_arr[1] == 'f-r'){
        document.getElementById('first-ring').innerHTML = color;
    } else if(classes_arr[1] == 's-r'){
        document.getElementById('second-ring').innerHTML = color;       
    } else if(classes_arr[1] == 't-r'){
        document.getElementById('third-ring').innerHTML = color;       
    } else {
        return false;
    }
}

var colors_arr = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
var multipliers_arr = ['1', '10', '100', '1k', '10k', '100k', '1M', '10M', '100M', '1T'];

function calculateVal(){
    var fr = document.getElementById('first-ring').innerHTML;
    var sr = document.getElementById('second-ring').innerHTML;
    var tr = document.getElementById('third-ring').innerHTML;
    var total_val = '';

    if(fr == 'First ring:' | sr == 'Second ring:' | tr == 'Third ring:'){
        alert('Please select all values first');
        return false;
    }

    for(var i=0; i<10; i++){
        if(fr === colors_arr[i]) {
            var fr_val = i;
            alert(fr_val);
            //total_val += fr_val;
        }
        if(sr == colors_arr[i]) {
            var sr_val = i;
            //total_val += sr_val;
        }
        if(tr == colors_arr[i]) {
            var tr_val = multipliers_arr[i];
            //total_val += ' *';
            //total_val += tr_val;
        }
    }

    //document.getElementById('result').innerHTML = '<p>'+ total_val +'</p>';
}
