module.exports = {
    ajax: function (opj={}) {
        let def = {
            type: "get",
            async: true,
        }
        let defs = Object.assign({}, def, opj);
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest() ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");
            console.log(xhr,"----------------")
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(xhr.status)
                    }
                }
            };
            if (defs.type == "get") {
                xhr.open(defs.type, defs.url + "?" + utils.formateObj(defs.data), defs.async);
                xhr.send(null)
            }
            if (defs.type == "post") {
                xhr.open(defs.type, defs.url, defs.async);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(utils.formateObj(defs.data))
            }
        })
    }

}