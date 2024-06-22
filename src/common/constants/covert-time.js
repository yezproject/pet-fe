function dateToMillis(date) {
    const ms = new Date(date)
    return ms.getTime()
}

function millisToDate(ms) {
    const date = new Date(ms)
    
    const formatter = new Intl.DateTimeFormat("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    })
  
    return formatter.format(date)
}

export { dateToMillis, millisToDate }

