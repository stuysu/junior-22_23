import Image from "next/image";
import styles from "../../styles/components/MemberCard.module.css";

// imgurl -> their thumbnail img
// name -> their name
/* 
<MemberCard>
{children} <- description of the member
</MemberCard>
*/

export default function MemberCard({ src, name, role, children }) {
	return (
		<div className={styles.memberCardCont}>
			<div className={styles.memberCard}>
				<div className={styles.memberFront}>
					<Image src={src ? src : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} width={250} height={250} />
				</div>
				<div className={styles.memberDesc}>
					{children}
				</div>
			</div>
			<div className={styles.memberInfo}>
				<div className={styles.mainInfo}>
					<div className={styles.memberName}>
						{name}
					</div>
					<div className={styles.memberRole}>
						{role ? role : "Member"}
					</div>
				</div>
				<div className={styles.memberSocials}>
					<div className={styles.iconCont}>
						<div className={styles.tempIcon} />
					</div>
					<div className={styles.iconCont}>
						<div className={styles.tempIcon} />
					</div>
					<div className={styles.iconCont}>
						<div className={styles.tempIcon} />
					</div>
					<div className={styles.iconCont}>
						<div className={styles.tempIcon} />
					</div>
				</div>
			</div>
		</div>
	)
}