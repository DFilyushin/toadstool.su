import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

export function DateFormat({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy', {locale: ru})} </time>
}

export function getAge() {
    const date1 = new Date("06/13/1983")
    const date2 = new Date()
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffYears = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    return diffYears
}
