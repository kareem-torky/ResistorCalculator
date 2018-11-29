
var colors_arr = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'];
var multipliers_arr = ['1', '10', '100', '1k', '10k', '100k', '1M', '10M', '100M', '1T'];

document.getElementById('calculate-btn').addEventListener('click', calculateVal);
var aTags = document.querySelectorAll('a');


for(tag in aTags){
    aTags[tag].addEventListener('click', getColor);
}


function getColor(e){
    var color = e.target.innerHTML;
    var class_name = e.target.className;
    if(class_name == 'f-r'){
        document.getElementById('first-ring').innerHTML = color;
    } else if(class_name == 's-r'){
        document.getElementById('second-ring').innerHTML = color;       
    } else if(class_name == 't-r'){
        document.getElementById('third-ring').innerHTML = color;       
    } else {
        return false;
    }
}


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
        if(fr == colors_arr[i]) {
            var fr_val = i;
        }
        if(sr == colors_arr[i]) {
            var sr_val = i;
        }
        if(tr == colors_arr[i]) {
            var tr_val = i;
        }
    }

    total_val = (sr_val + (fr_val*10)) * Math.pow(10, tr_val); 
    document.getElementById('result').innerHTML = '<p class="result"> R = <span>'+
                                                    total_val +
                                                    '</span> Ohms</p>';
}
