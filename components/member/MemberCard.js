import Image from "next/image";
import styles from "../../styles/components/MemberCard.module.css";

// imgurl -> their thumbnail img
// name -> their name
/* 
<MemberCard>
{children} <- description of the member
</MemberCard>
*/

export default function MemberCard ({src, name, children}) {
    return (
        <div className={styles.memberCard}>
            <div className={styles.memberFront}>
                <div className={styles.memberName}>{name}</div>
                <Image src={src ? src : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} width={250} height={230} />
            </div>
            <div className={styles.memberDesc}>
                {children}
            </div>
        </div>
    )
}