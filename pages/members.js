import Collection from '../components/layouts/Collection';
import MemberCard from '../components/member/MemberCard.js';

// import styles from '../styles/Members.module.css';

/*
MEMBER IN FORMAT
[
    [name, position, img_src, desc]
]
*/
function renderMembers(members) {
  let deps = {};
  members.forEach((member, i) => {
    let [name, position, img_src, desc] = member;

    let memberCard = (
      <MemberCard name={name} src={img_src} role={position} key={i}>
        {desc}
      </MemberCard>
    );

    if (!deps[position]) deps[position] = [];
    deps[position].push(memberCard);
  });

  let collections = Object.entries(deps).map(([department, memberCards], k) => {
    return (
      <Collection title={department.toUpperCase()} key={k}>
        {memberCards}
      </Collection>
    );
  });

  return collections;
}

export async function getServerSideProps() {
  const { google } = require("googleapis");

  const sheets = google.sheets({
    version: "v4",
    auth: process.env.SHEETS_API_KEY,
  });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.MEMBERS_SPREADSHEET_ID,
    range: "Form Responses 1!B1:G",
  });

  let data = response.data.values;
  let members = [];

  for (let b = 1; b < data.length; b++) {
    let [name, position, img_src, , desc] = data[b]; //Desc should actually be one before since rn it points to the "hello 😊" column

    members.push([name, position, img_src, desc]);
  }

  //Had to move the title and currentPage stuff because getServerSideProps and getStaticProps can't coexist
  return {
    props: {
      members: members,
      title: 'Members | Junior Caucus',
      currentPage: 'Members'
    }
  };
}

export default function Members({ members }) {
    return (
        <>
            <h1 className="title">Our Team</h1>
            {renderMembers(members)}
        </>
    )
}
