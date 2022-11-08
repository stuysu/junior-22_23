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

// store members somewhere else for quick editing
export default function Members() {
  return (
    <>
      <h1 className="title">Our Team</h1>

      <Collection title="IT">
        <MemberCard name="Randy Sim" src="">
          This is a test description. I have no personality nor interests.
        </MemberCard>
        <MemberCard name="Randy Sim" src="">
          This is a test description. I have no personality nor interests.
        </MemberCard>
        <MemberCard name="Randy Sim" src="">
          This is a test description. I have no personality nor interests.
        </MemberCard>
        <MemberCard name="Randy Sim" src="">
          This is a test description. I have no personality nor interests.
        </MemberCard>
        <MemberCard name="Randy Sim" src="">
          This is a test description. I have no personality nor interests.
        </MemberCard>
      </Collection>
    </>
  );
}
