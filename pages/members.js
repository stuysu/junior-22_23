import Head from "next/head";
import NavBar from "../components/common/NavBar";
import MemberCard from "../components/member/MemberCard.js";
import Collection from "../components/layouts/Collection";

// Temp Navbar. Render once
// store members somewhere else for quick editing
export default function Members() {
    return (
        <div>
            <Head>
                <title>Members | Junior Caucus</title>
            </Head>
            <NavBar />
            <div className="memberTitle">
                Members
            </div>
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
        </div>
    )
}