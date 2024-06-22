const currentTimeString = () => {
    return timeToString(new Date())
}

const timeToString = (date) => {
    return date.toTimeString().split(" ")[0].slice(0, 5)
}

const currentDateString = () => {
    return dateToString(new Date())
}

const dateToString = (date) => {
    return date.toISOString().split("T")[0] 
}

const dateToMillis = (date) => {
    return new Date(date).getTime()
}

const millisToDate = (ms) => {
    const formatter = new Intl.DateTimeFormat("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    })
  
    return formatter.format(new Date(ms))
}

export { currentTimeString, currentDateString, dateToMillis, millisToDate, timeToString, dateToString }