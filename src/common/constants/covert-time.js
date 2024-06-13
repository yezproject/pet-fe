function dateToMinis(date) {
    const ms = new Date(date)
    return ms.getTime()
}

function minisToDate(ms) {
    const date = new Date(ms)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${day}/${month}/${year}`
}

export { dateToMinis, minisToDate }
