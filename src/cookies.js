export function setCookie(dataname, datavalue) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = dataname + "=" + datavalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function checkCookie() {
    let data = getCookie("data");
    if (data !== "") {
        return data
    } else {
        let data = { finished: 0, stars: [{ "level": 0, "count": 0 },],dates:10 }
        setCookie("data", JSON.stringify(data));
    }
}