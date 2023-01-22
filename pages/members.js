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
    let memberCard = (
      <MemberCard
        member={member}
        key={i}
      />
    );

    if (!deps[member['Department']]) deps[member['Department']] = [];
    deps[member['Department']].push(memberCard);
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

export async function getServerSideProps({ res }) {
  //Cache
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=600'
  );

  const { google } = require('googleapis');

  const sheets = google.sheets({
    version: 'v4',
    auth: process.env.SHEETS_API_KEY
  });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.MEMBERS_SPREADSHEET_ID,
    range: 'Form Responses 1!A1:Z'
  });

  //Convert spreadsheet data into array of dicts
  let [columns, ...rows] = response.data.values;

  let parsed_csv = rows.map((row) => {
    let dict = {};

    columns.forEach((v, i) => {
      dict[columns[i]] = row[i] || "";
    })

    return dict;
  });

  console.log(parsed_csv);

  //Had to move the title and currentPage stuff because getServerSideProps and getStaticProps can't coexist
  return {
    props: { members: parsed_csv, pageName: 'Members' }
  };
}

export default function Members({ members }) {
  return (
    <>
      <h1 className="title">Our Team</h1>
      {renderMembers(members)}
    </>
  );
}
