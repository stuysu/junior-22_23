import Collection from '../components/layouts/Collection';
import MemberCard from '../components/member/MemberCard.js';

// import styles from '../styles/Members.module.css';

export async function getStaticProps() {
  return {
    props: {
      title: 'Members | Junior Caucus',
      currentPage: 'Members'
    }
  };
}

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

    // added key just to make react happy :D
    let k = 0;
    for (let [key, value] of Object.entries(deps)) {
        let cards = value.map((m, i) => <MemberCard key={i} name={m[1]} src={m[5]} role={m[2]}>{m[4]}</MemberCard>)
        collections.push(
            <Collection title={key.toUpperCase()} key={k}>
                {cards}
            </Collection>
        )
        k++;
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
        <>
            <h1 className="title">Our Team</h1>
            {renderMembers(members)}
        </>
    )
}
