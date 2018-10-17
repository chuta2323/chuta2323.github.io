/*!
 * @brief   TIME to bgColor
 * @param   turn: turn back (true / false)
 * @return  RGB Code (ex. #123456)
 * @detail  change bgColor when this function called.
 */
function time2bgColor(turn) {
    document.bgColor = time2rgb(turn);

    return document.bgColor;
}

/*!
 * @brief   TIME to fgColor
 * @param   turn: turn back (true / false)
 * @return  RGB Code (ex. #123456)
 * @detail  change fgColor when this function called.
 */
function time2fgColor(turn) {
    document.fgColor = time2rgb(turn);

    return document.fgColor;
}

/*!
 * @brief   TIME to RGB Code
 * @param   turn: turn back (true / false)
 * @return  RGB Code (ex. #123456)
 */
function time2rgb(turn) {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var rgb;

    if (turn === true) {
        /* Color reversal enabled */
        h = 255 - h;
        m = 255 - m;
        s = 255 - s;
        h = h.toString(16);
        m = m.toString(16);
        s = s.toString(16);
    }
    else {
        /* Color reversal disabled */
        if (h < 10) { h = "0" + h; }
        if (m < 10) { m = "0" + m; }
        if (s < 10) { s = "0" + s; }
    }

    rgb = "#" + h + m + s;

    return rgb;
}
