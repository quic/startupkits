// Copyright (c) 2020, Qualcomm Innovation Center, Inc. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause

function createBoards(data) {
    string = ``
    Object.keys(data).forEach(element => {
        string = string + `<a href="` + url + element + `/` + `"> ` + element + `</a>`
    })
    document.getElementById("board").innerHTML = string
}

function setup(data) {
    createBoards(data)
}

setup(data)