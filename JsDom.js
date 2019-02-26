var arr_of_obj = [{ firstName: "Sunil", lastName: "Chopra", age: 46 }, { firstName: "Mahima", lastName: "Chopra", age: 21 },{ firstName: "Rahul", lastName: "Chopra", age: 20 },{ firstName: "Madhu", lastName: "Chopra", age: 45 },{ firstName: "Sunil", lastName: "Chopra", age: 46 }]

document.addEventListener('DOMContentLoaded', function(){
    document.getElementsByClassName('tableclass1')[0].addEventListener('click', function (event) {
        arr_of_obj.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));

    });
 })
document.addEventListener('DOMContentLoaded', function (event) {
    var table = document.createElement('table');
    var header = Object.keys(arr_of_obj[0]);
    var tr = document.createElement('tr');
    for (var i = 0; i < header.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = header[i];
        th.setAttribute('class', 'tableClass1')
        tr.appendChild(th);
    }
    table.appendChild(tr);

 
    for (var i = 0; i < arr_of_obj.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < header.length; j++) {
            var td = document.createElement('td');
            td.innerHTML = arr_of_obj[i][header[j]];
            td.setAttribute('class', 'tableClass');
            tr.appendChild(td);
        }
    table.appendChild(tr);
    }
    document.body.appendChild(table);
});