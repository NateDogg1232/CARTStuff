var output = ""

function poundTriangle() {
    clear();
    for (let i = 1; i <= 7; i++)
        log("#".repeat(i));
}

function art3mis() {
    clear();
    for (let i = 0; i < 100; i++) {
        if ((!(i % 5)) && (!(i % 3))) {
            log("Art3mis & Parzival");
        } else if (!(i % 5)) {
            log("Parzival")
        } else if (!(i % 3)) {
            log("Art3mis");
        } else {
            log(i);
        }
    }
}

function log(str) {
    output += (str + '<br>');
    document.getElementById("output").innerHTML = output;
}

function clear() {
    output = "";
    document.getElementById("output").innerHTML = "";
}

function chessBoard(x, y) {
    clear();
    for (let i = 0; i < y; i++) {
        if (!(i % 2)) {
            for (let j = 0; j < x; j++) {
                output += "#&nbsp;";
            }
        } else {
            for (let j = 0; j < x; j++) {
                output += "&nbsp;#";
            }
        }
        output += "<br>"
    }
    document.getElementById("output").innerHTML = output;
}

function stringPyramid(baseHeight) {
    clear();
    for (let i = 1; i <= baseHeight; i += 2) {
        log("&nbsp;".repeat((baseHeight - i) / 2) + "#".repeat(i));
    }
}
