function getFirstSelector(selector) {
    return document.querySelectorAll("div")[0];
}

function nestedTarget() {
    return document.querySelectorAll("#nested .target")[0];
}

function increaseRankBy(n) {
    var stuff = document.querySelectorAll(".unranked-list")[0].childNodes;
    for (let i = 0; i < stuff.length; i++) {
        stuff[i].innerHTML = parseInt(stuff[i].innerHTML) + n;
    }
}

function deepestChild() {
    var node = document.getElementById("grand-node");
    while (true) {
        
    }
}
