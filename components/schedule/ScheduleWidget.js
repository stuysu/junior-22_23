import { useState } from "react";
import styles from "../../styles/components/schedule/Schedule.module.css";

const getFormattedTime = (date) => {
    let hours = date.getHours();
    if (hours == 0) {
        hours = 12;
    } else {
        hours = hours % 12;
    }

    return `${hours}:${date.getMinutes()}:${String(date.getSeconds()).padStart(2, "0")}`;
}

const getFormattedDay = (schedule, date) => {
    let dayOfWeek = getDayOfWeek(date);
    if (dayOfWeek >= schedule.days.length) return "No School";
    return schedule.days[dayOfWeek].bell.scheduleName;
}

const getDayOfWeek = (date) => {
    // sunday is 0 in javascript date object
    let day = date.getDay();
    if (day == 0) return 6;
    return day - 1;
}

export default function ScheduleWidget({ schedule }) {
    const [activeTime, setActiveTime] = useState(new Date());

    function refreshTime() {
        setActiveTime(new Date());
    }
    
    // SET TIMEOUT SO THAT IT MATCHES UP WITH A SECOND (LESS BUGGY SECOND CHANGING)
    setTimeout(() => { setInterval(refreshTime, 1000); }, 1000 - new Date().getMilliseconds());
    
    return (
        <div className={styles.scheduleWidget}>
            <div className={styles.scheduleTime}>
                <div className={styles.dateWrapper}>
                    {getFormattedDay(schedule, activeTime)}
                </div>
                <div className={styles.timeWrapper}>
                    {getFormattedTime(activeTime)}
                </div>
            </div>
        </div>
    );
}