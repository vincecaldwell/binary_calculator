

function action(e) {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    var res = document.getElementById('res');

    switch(action){
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            var expr = res.innerHTML;
            var nums = /(\d+)/g;
            expr = expr.replace(nums, function(match) {
                return parseInt(match,2);
            })
            res.innerHTML = eval(expr).toString(2);
            break;
        default:
            console.error('NOT WORKING');
            break;
    }
    
}

var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = action;
}

