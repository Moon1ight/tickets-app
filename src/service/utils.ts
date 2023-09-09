export const formatTime = (dateToFormat: string) => {
    const date = new Date(dateToFormat)
    let hh = date.getHours().toString()
    if (+hh < 10) hh = "0" + hh

    let mm = date.getMinutes().toString()
    if (+mm < 10) mm = "0" + mm

    return hh + ":" + mm
}