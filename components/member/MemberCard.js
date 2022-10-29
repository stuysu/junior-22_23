import Image from "next/image";

// imgurl -> their thumbnail img
// name -> their name
/* 
<MemberCard>
{children} <- description of the member
</MemberCard>
*/

export default function MemberCard ({src, name, children}) {
    return (
        <div className="member-card">
            <div className="member-front">
                <div className="member-name">{name}</div>
                <Image src={src} width={500} height={500} />
            </div>
            <div className="member-desc">
                {children}
            </div>
        </div>
    )
}