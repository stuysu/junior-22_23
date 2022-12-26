import { useState } from "react";
import styles from "../../styles/components/schedule/Schedule.module.css";

const getFormattedTime = (date) => {
    let hours = date.getHours();
    if (hours == 0) {
        hours = 12;
    } else {
        hours = hours % 12;
    }

    return `${hours}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
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
    
    function findBlock() {
        // convert schedule startTimes into minutes
        let minutes = [];
        let day = getDayOfWeek(activeTime);
        let dayInfo = schedule.days[day];
        dayInfo.bell.schedule.forEach(block => {
            let s = block.startTime.split(":");
            minutes.push(Number(s[0]) * 60 + Number(s[1]));
        });

        let cMinutes = activeTime.getHours() * 60 + activeTime.getMinutes();

        let blockNum = minutes.length - 1;
        for (let i = 0; i < minutes.length; ++i) {
            if (cMinutes < minutes[i]) {
                blockNum = i - 1;
                break;
            }
        }
        // sMinutes = when did the block start
        // cMinutes = current minutes
        return {
            block: blockNum,
            blockName: dayInfo.bell.schedule[blockNum].name,
            sMinutes: minutes[blockNum],
            cMinutes: cMinutes,
            progressMinutes: cMinutes - minutes[blockNum],
            endMinutes: dayInfo.bell.schedule[blockNum].duration
        }
    }

    function renderBlock () {
        let blockData = findBlock();
        
        return (
            <div className={styles.scheduleBlock}>
                <div className={styles.scheduleBlockTitle}>
                    {blockData.blockName}
                </div>
                <div className={styles.scheduleProgressContainer}>
                    <div className={[styles.blockElapsed, styles.scheduleProgress].join(' ')}>{blockData.progressMinutes}</div>
                    <div className={[styles.blockEnd, styles.scheduleProgress].join(' ')}>{blockData.endMinutes - blockData.progressMinutes}</div>
                </div>
            </div>
        )
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

                {renderBlock()}
            </div>
        </div>
    );
}