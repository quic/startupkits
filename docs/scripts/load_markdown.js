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
                    var convertor = new showdown.Converter(),
                        text = contents,
                        html = convertor.makeHtml(text)

                    markdown = `<a name="` + pagename + `">` + html + `</a>`
                    document.getElementById("markdown").innerHTML = markdown
                    mermaid.init(undefined, document.getElementsByClassName("mermaid"))

                    window.scrollTo(0,0)
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

async function createSteps() {
    string = ``
    markdown = ``
    i = 1
    Object.keys(data[board]).forEach(element => {
        string = string + `<a id="`+element+`" title="`+ element +`'" href="#` + element + `" onclick="LoadPage(` + i + `);return false;"> ` + i + ". " + element + ` </a>`
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
            });
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
    LoadPage(1)
}

getUrl()
setup(data)
