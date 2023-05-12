/*function to create the bill after we add items */
function createBill() {
    var index = 0;
    var items = ["null", "null", "null", "null"];
    var quantities = ["null", "null", "null", "null"];
    var prices = ["null", "null", "null", "null"];



    var e1 = document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    if (itemselected1 != "1") {
        items[index] = itemselected1;
        quantities[index] = document.getElementById("q1").value;
        prices[index] = document.getElementById("p1").value;
        index++;
    }

    var e1 = document.getElementById("item2");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    if (itemselected1 != "1") {
        items[index] = itemselected1;
        quantities[index] = document.getElementById("q2").value;
        prices[index] = document.getElementById("p2").value;
        index++;
    }


    var e3 = document.getElementById("item3");
    var itemselected3 = e3.options[e3.selectedIndex].value;
    if (itemselected3 != "1") {
        items[index] = itemselected3;
        quantities[index] = document.getElementById("q3").value;
        prices[index] = document.getElementById("p3").value;
        index++;
    }

    var e4 = document.getElementById("item4");
    itemselected4 = e4.options[e4.selectedIndex].value;
    if (itemselected4 != "1") {
        items[index] = itemselected4;
        quantities[index] = document.getElementById("q4").value;
        prices[index] = document.getElementById("p4").value;
        index++;
    }
    var e5 = document.getElementById("item5");
    itemselected5 = e5.options[e5.selectedIndex].value;
    if (itemselected5 != "1") {
        items[index] = itemselected5;
        quantities[index] = document.getElementById("q5").value;
        prices[index] = document.getElementById("p5").value;
        index++;
    }
    var e6 = document.getElementById("item6");
    itemselected6 = e6.options[e4.selectedIndex].value;
    if (itemselected6 != "1") {
        items[index] = itemselected6;
        quantities[index] = document.getElementById("q6").value;
        prices[index] = document.getElementById("p6").value;
        index++;
    }
    var e7 = document.getElementById("item7");
    itemselected7 = e7.options[e7.selectedIndex].value;
    if (itemselected7 != "1") {
        items[index] = itemselected7;
        quantities[index] = document.getElementById("q7").value;
        prices[index] = document.getElementById("p7").value;
        index++;
    }

    var fTot = 0.0;
    strt(1);
    for (var i = 0; i < index; i++) {
        document.write("<tr>");
        createtbl(items[i]);
        createtbl(quantities[i]);
        createtbl(prices[i]);
        var tot = parseFloat(quantities[i]) * parseFloat(prices[i]);
        document.write("<td>" + tot + "</td>");
        fTot += tot;
        document.write("</tr>");
    }
    document.write("<tr><td colspan=\"3\"><strong>TOTAL</strong></td><td>" + fTot + "</td><tr>");
    strt(2);
    strt(3);


}
/* This function to create the bill using table */
function createtbl(x) {
    document.write("<td>" + x + "</td>");
}

/* write details on bill < custm name resturant name .... */
function strt(n) {
    if (n == 1) {
        document.writeln("<h3 style=\"text-align:center;\">Bill of " + document.getElementById("rest_name").value + " || For: " + document.getElementById("cust_name").value + " || Conctact: " + document.getElementById("contact").value + "</h3>");
        document.writeln("<table width=\"90%\" border=\"1\">");
        document.writeln("<tr><th>ITEMS</th><th>QUANTITY</th><th>PRICE</th><th></th></tr>");
    }
    if (n == 2)
        document.writeln("</table>");
    if (n == 3)
        document.writeln(document.getElementById("rest_name").value);
    if (n == 4)
        document.writeln(document.getElementById("rest_name").value);

}
/* calcluate the sum of items (totals) */
function createTot(x, y) {
    var checkBox = document.getElementById("student");
    let discountPrice = 0;
    if (checkBox.checked == true) {
        let calculateDiscount1 = tot * 0.2;
        tot = tot - calculateDiscount1;
        newText.innerText = result.toFixed(3) + " OMR";
    } else {
    }
    var tot = parseFloat(x) * parseFloat(y);
    document.write("<td>" + tot + "</td>");

}

/* Menue for Nissan and the price for each item */
function Nissan(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 280.9;
    if (element == 'Mechanical Parts') p = 105.5;
    if (element == 'Electical Parts') p = 50.3;
    if (element == 'Structural Parts') p = 1000;
    if (element == 'Car consumables ') p = 40.3;
    if (element == 'Car tires ') p = 150.7;
    document.getElementById("p1").value = p;
}

/* Menue for Toyota and the price for each item */
function Toyota(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 300.9;
    if (element == 'Mechanical Parts') p = 110.5;
    if (element == 'Electical Parts') p = 60.3;
    if (element == 'Structural Parts') p = 900;
    if (element == 'Car consumables ') p = 50.3;
    if (element == 'Car tires ') p = 250.7;
    document.getElementById("p2").value = p;
}

/* Menue for mercedes and the price for each item */
function mercedes(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 350.9;
    if (element == 'Mechanical Parts') p = 250.5;
    if (element == 'Electical Parts') p = 80.3;
    if (element == 'Structural Parts') p = 1200;
    if (element == 'Car consumables ') p = 60.3;
    if (element == 'Car tires ') p = 170;
    document.getElementById("p3").value = p;
}

/* Menue for Audi and the price for each item */
function Audi(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 350.9;
    if (element == 'Mechanical Parts') p = 240.5;
    if (element == 'Electical Parts') p = 50.9;
    if (element == 'Structural Parts') p = 1500;
    if (element == 'Car consumables ') p = 70.5;
    if (element == 'Car tires ') p = 180.9;
    document.getElementById("p4").value = p;
}


/* Menue for BMW and the price for each item */
function BMW(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 320.2;
    if (element == 'Mechanical Parts') p = 90.3;
    if (element == 'Electical Parts') p = 55.4;
    if (element == 'Structural Parts') p = 800;
    if (element == 'Car consumables ') p = 30.3;
    if (element == 'Car tires ') p = 180.7;
    document.getElementById("p5").value = p;
}
/* Menue for jeep and the price for each item */
function jeep(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 200.2;
    if (element == 'Mechanical Parts') p = 100;
    if (element == 'Electical Parts') p = 40;
    if (element == 'Structural Parts') p = 800;
    if (element == 'Car consumables ') p = 30.6;
    if (element == 'Car tires ') p = 200;
    document.getElementById("p6").value = p;
}
/* Menue for GMC and the price for each item */
function GMC(element) {
    var p = 0.0;
    if (element == 'Engine Spare Parts') p = 200.2;
    if (element == 'Mechanical Parts') p = 90.5;
    if (element == 'Electical Parts') p = 39.3;
    if (element == 'Structural Parts') p = 950.1;
    if (element == 'Car consumables ') p = 30.3;
    if (element == 'Car tires ') p = 130.1;
    document.getElementById("p7").value = p;
}







/* This method will add a new customers */
function addNewRow() {
    var table = document.getElementById("employee-table");
    var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length;
    var row = table.insertRow(rowCount);
    for (var i = 0; i < cellCount; i++) {
        var cell = row.insertCell(i);
        if (i < cellCount - 1) {
            cell.innerHTML = '<input type="text" class="form-control" />';
        } else {
            cell.innerHTML = '<input class="btn btn-danger" '
                + ' type="button" value="delete" onclick="deleteRow(this)" />';
        }
    }
}
//------------------------------------------------------

/* This method will delete  */
function deleteRow(ele) {
    var table = document.getElementById('employee-table');
    var rowCount = table.rows.length;
    if (rowCount <= 1) {
        alert("There is no row available to delete!");
        return;
    }
    if (ele) {
        //delete specific customers
        ele.parentNode.parentNode.remove();
    } else {
        //delete last customers
        table.deleteRow(rowCount - 1);
    }
}

  $(document).ready(function(){
      
              $('#btn').clack(function(){

                 $('#par').fadeToggle(2000)
              })
              });