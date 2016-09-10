var data = [];

// This function loads the PDF file with all of the cells on the HTML Table
function exportPDF() {
    var pdf = new jsPDF();
    pdf.setFontSize(10);
    var rows = document.getElementsByTagName('tr');
    for (r = 0; r < rows.length; r++) {

        // Turns the current row on the rows array into a new array
        data[r] = new Array();

        // Checks if the current row has a highlighted class
        if (rows[r].className == 'highlighted') {
            data[r].highlighted = true;
        }

        else {
            data[r].highlighted = false;
        }

        // Checks if the current row has a tableHeader class
        if (rows[r].className = 'tableHeader') {
            data[r].header = true;
        }

        else {
            data[r].header = false;
        }

        // Checks if the current row has a tableDiv class
        if (rows[r].className == 'table-div') {
            data[r].div = true;
        }

        else {
            data[r].div = false;
        }

        var rowData = rows[r].getElementsByTagName('td');
        var rowHeader = rows[r].getElementsByTagName('th');
        for (d = 0; d < rowData.length; d++) {
            data[r][d] = rowData[d].innerHTML;
        }
    }

    // Sets the specific pdf attributes for each special row class
    for (r = 0; r < data.length; r++) {
        var c = 0;
        if (data[r].highlighted == true) {
            pdf.setFillColor(255, 255, 0);
        }

        else if (data[r].header == true) {
            pdf.setFillColor(21, 21, 21);
            pdf.setTextColor(230, 230, 230);
        }

        else if (data[r].div == true) {
            pdf.setFillColor(21, 21, 255);
        }

        else {
            pdf.setFillColor(255, 255, 255);
            pdf.setTextColor(21, 21, 21);
        }

        for (d = 1; d <= data.length; d++) {
            // Number Cell
            if (d == 1) {
                pdf.rect(10, (8 * c), 10, (8 * c), 'FD');
                pdf.text(13, (8 * c + 5), data[r][d - 1]);
            }

            // Room Name Cell
            if (d == 2) {
                pdf.rect(20, (8 * c), 80, (8 * c), 'FD');
                pdf.text(22, (8 * c + 5), data[r][d - 1]);
            }

            // Type Cell
            if (d == 3) {
                pdf.rect(80, (8 * c), 15, (8 * c), 'FD');
                pdf.text(82, (8 * c + 5), data[r][d - 1]);
            }

            // Door Number Cell
            if (d == 4) {
                pdf.rect(95, (8 * c), 20, (8 * c), 'FD');
                pdf.text(97, (8 * c + 5), data[r][d - 1]);
            }

            // Timeslot 1 Cell
            if (d == 5) {
                pdf.rect(115, (8 * c), 20, (8 * c), 'FD');
                if (data[r][d - 1].includes('<button') == true) {
                    pdf.text(117, (8 * c + 5), ' ');
                }

                else {
                    pdf.text(117, (8 * c + 5), data[r][d - 1]);
                }
            }

            // Timeslot 2 Cell
            if (d == 6) {
                pdf.rect(135, (8 * c), 20, (8 * c), 'FD');
                if (data[r][d - 1].includes('<button') == true) {
                    pdf.text(137, (8 * c + 5), ' ');
                }

                else {
                    pdf.text(137, (8 * c + 5), data[r][d - 1]);
                }
            }

            // Timeslot 3 Cell
            if (d == 7) {
                pdf.rect(155, (8 * c), 20, (8 * c), 'FD');
                if (data[r][d - 1].includes('<button') == true) {
                    pdf.text(157, (8 * c + 5), ' ');
                }

                else {
                    pdf.text(157, (8 * c + 5), data[r][d - 1]);
                }
            }
        }

        console.log(c);

        c++;

        if (c == 35) {
            pdf.addPage();
            c = 1;
        }
    }

// sample jsPDF code
/*
    pdf.rect(20, 20, 10, 10);
    pdf.setFont('arial');
    pdf.setFontType('normal');
    pdf.text(20, 20, 'Hello world!');
    pdf.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    pdf.addPage();
    pdf.text(20, 20, 'Do you like that?');
*/

    // Output as Data URL
    pdf.output('dataurlnewwindow');
}

// Replaces the current button with the time
function timeBtn(Id) {
    var currentId = document.getElementById(Id);
    var systemDate = new Date();
    var time = systemDate.toLocaleTimeString();
    var confirmBox = confirm('Set the Time to ' + time + '?');
    if (confirmBox == true) {
        currentId.innerHTML = time;
    }
}

// Puts time buttons in all of the timeslots
for (i = 1; i <= 27; i++) {
    for (n = 1; n <= 3; n++) {
        var currentId = '1-' + i + '-' + n;
        var currentElement = document.getElementById(currentId);
        currentElement.innerHTML = '<button onClick=timeBtn("' + currentId + '")>Time</button>';
    }
}

for (i = 1; i <= 3; i++) {
    for (n = 1; n <= 3; n++) {
        var currentId = '2-' + i + '-' + n;
        var currentElement = document.getElementById(currentId);
        currentElement.innerHTML = '<button onClick=timeBtn("' + currentId + '")>Time</button>';
    }
}

for (i = 4; i <= 4; i++) {
    for (n = 1; n <= 3; n++) {
        var currentId = '2-' + i + '-' + n;
        var currentElement = document.getElementById(currentId);
        currentElement.innerHTML = '<button onClick=timeBtn("' + currentId + '")>Time</button>';
    }
}

for (i = 1; i <= 39; i++) {
    for (n = 1; n <= 3; n++) {
        var currentId = '4-' + i + '-' + n;
        var currentElement = document.getElementById(currentId);
        currentElement.innerHTML = '<button onClick=timeBtn("' + currentId + '")>Time</button>';
    }
}

for (i = 1; i <= 65; i++) {
    for (n = 1; n <= 3; n++) {
        var currentId = '5-' + i + '-' + n;
        var currentElement = document.getElementById(currentId);
        currentElement.innerHTML = '<button onClick=timeBtn("' + currentId + '")>Time</button>';
    }
}