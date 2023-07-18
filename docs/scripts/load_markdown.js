// Copyright (c) 2020, Qualcomm Innovation Center, Inc. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause

function LoadPage(index) {
    Object.prototype.getByIndex = function(index) {
        return this[Object.keys(this)[index]];
      };
    pagename = data[board].getByIndex(index -1);
    url = data_url + board + '/' + pagename
    fetch(url)
            .then(response => response.blob())
            .then(blob => {
                var r = new FileReader();
                r.onload = function(e) {
                    var contents = e.target.result;
                    var convertor = new showdown.Converter({'rawHeaderId': true}),
                        text = contents,
                        html = convertor.makeHtml(text)

                    markdown = `<a name="` + pagename + `">` + html + `</a>`
                    document.getElementById("markdown").innerHTML = markdown
                    mermaid.init(undefined, document.getElementsByClassName("mermaid"))

                    const mk = document.getElementById("markdown");

                    for(const h2 of mk.querySelectorAll("h1, h2, h3, h4, h5, h6"))
                    {
                        h2.id=h2.id.replace(/\./g, "-")
                        h2.id=h2.id.replace(/_/g, "")
                        h2.innerHTML = `<a href="#${index}#${h2.id}">${h2.innerHTML}</a>`
                    }
                    const id = location.hash.split("#")[2];

                    console.log(id)
                    function findPos(obj) {
                        var curtop = 0;
                        if (obj.offsetParent) {
                            do {
                                curtop += obj.offsetTop;
                            } while (obj = obj.offsetParent);
                            return [curtop];
                        }
                    }

                    window.scroll(0,0);

                    if(id)
                    {
                        window.scroll(0,findPos(document.getElementById(id))
                            -document.querySelector("body > nav").clientHeight);
                    }

                }
                r.readAsText(blob);

            });
}

function createBoards(data) {
    string = ``
    Object.keys(data).forEach(element => {
        if(element == "Home") {
            string = string + `<a href="` + url + `"> ` + element + `</a>`
        } else {
            string = string + `<a href="` + url + element + `/` + `"> ` + element + `</a>`
        }
    })
    document.getElementById("board").innerHTML = string
}

function createCardString(name, pic) {
    card_start = `<div class="card">`
    title = `<header class="article-header"> <h2 class="article-title">` +
        name +  ` Development Kit` +
        `</h2> </header>`
    image = `<img src=` + `"./pics/` + name + `/` + pic + `" alt="` + name + `" style="width:800px;margin:auto">`
    button = `<a href="./` + name + `" class="btn btn-primary">OnBoarding Documentation</a>`
    card_end = `</div>`
    return card_start + title + image + button + card_end
}

function createCards() {
    string = ``
    Object.keys(cards_info).forEach(element => {
        string = string + createCardString(element, cards_info[element]["Banner"])
        console.log(element + cards_info[element]["Banner"])
    })
    try {
        document.getElementById("markdown cards").innerHTML = string
    } catch (error) { }
}

async function createSteps() {
    string = ``
    markdown = ``
    i = 1
    Object.keys(data[board]).forEach(element => {
        string = string + `<a id="`+element+`" title="`+ element +`'" href="#` + element + `" onclick="LoadPage(` + i + `);location.href = '#';return false;"> ` + i + ". " + element + ` </a>`
        i++
        url = data_url + board + '/' + data[board][element]
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                var r = new FileReader();
                r.onload = function(e) {
                    var contents = e.target.result;
                    var convertor = new showdown.Converter(),
                        text = contents,
                        html = convertor.makeHtml(text)

                    //markdown = markdown + `<a name="` + element + `">.<br>.<br>.<br>` + html + `</a>`
                    //document.getElementById("markdown").innerHTML = markdown
                    mermaid.init(undefined, document.getElementsByClassName("mermaid"))
                }
                r.readAsText(blob);
            })
    })
    document.getElementById("step").innerHTML = string
}

function getUrl() {
    url = document.location.href
    n = url.indexOf("index.html")
    if(n > 0) {
        url = url.substring(0,n)
    }
    n = url.indexOf(board)
    if(n > 0) {
        url = url.substring(0,n)
    }
    data_url = url + data_url
}
function setup(data) {
    createBoards(data)
    createSteps()
    createCards()
}

getUrl()
setup(data)

window.addEventListener("load", () => {
    const pg = location.hash.split("#")[1];

    if(Number(pg))
        LoadPage(Number(pg));
    else
        LoadPage(1)
})
