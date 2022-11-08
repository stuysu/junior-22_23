import Head from "next/head";
import NavBar from "../components/common/NavBar";
import MemberCard from "../components/member/MemberCard.js";
import Collection from "../components/layouts/Collection";

import styles from "../styles/Members.module.css";

/* 
MEMBER IN FORMAT
[
    [email, name, position, department, desc, img_src]
]
*/
const renderMembers = members => {
    let deps = {}
    members.forEach(member => {
        if (!deps[member[3]]) deps[member[3]] = [];
        deps[member[3]].push(member);
    });

    let collections = [];

    for (let [key, value] of Object.entries(deps)) {
        let cards = value.map(m => <MemberCard name={m[1]} src={m[5]} role={m[2]}>{m[4]}</MemberCard>)
        collections.push(
            <Collection title={key.toUpperCase()}>
                {cards}
            </Collection>
        )
    }

    return collections;
}

/* TEMP MEMBERS, create CSV parse function once we get CSV */
const members = [
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "IT", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "MEDIA", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "EVENTS", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "FINANCE", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "IT", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "IT", "I have no personality nor interests.", ""],
    ["rsim40@stuy.edu", "Randy Sim", "JC President", "IT", "I have no personality nor interests.", ""],
]

// Temp Navbar. Render once
// store members somewhere else for quick editing
export default function Members() {
    return (
        <div>
            <Head>
                <title>Members | Junior Caucus</title>
            </Head>

            <NavBar />

            <div className={styles.memberTitle}>
                Members
            </div>
            
            {renderMembers(members)}
        </div>
    )
}
