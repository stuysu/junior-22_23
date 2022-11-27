import Image from "next/image";
import ImageLink from "../common/ImageLink.js";
import styles from "../../styles/components/MemberCard.module.css";
import url from 'url';

// imgurl -> their thumbnail img
// name -> their name
/*
<MemberCard>
{children} <- description of the member
</MemberCard>
*/

function createSocialIcon(social, email=false) {
	const logoForSocial = {
		"www.facebook.com": "/logos/logo-facebook.svg",
		"github.com": "/logos/logo-github.svg",
		"www.instagram.com": "/logos/logo-instagram.svg",
		"www.linkedin.com": "/logos/logo-linkedin.svg",
		"www.tiktok.com": "/logos/logo-tiktok.svg",
		"www.youtube.com": "/logos/logo-youtube.svg"
	}

	if (email) {
		return (
			<ImageLink
				width={25}
				height={25}
				href={"mailto:" + social}
				src="/logos/mail-outline.svg"
			/>
		);
	}

	let parsed_url = url.parse(social);

	if (parsed_url.host == null) {
		return;
	}

	return (
		<ImageLink
			width={25}
			height={25}
			href={social}
			src={logoForSocial[parsed_url.host]}
			external={true}
		/>
	);
}

export default function MemberCard({ name, image_src, role, bio, email, socials }) {
	return (
		<div className={styles.memberCardCont}>
			<div className={styles.memberCard}>
				<div className={styles.memberFront}>
					{/*Temp, changed to img tag so any domain can be used*/}
					<img src={image_src || "/images/Portrait_Placeholder.jpg"} width={300} height={300} />
				</div>
				<div className={styles.memberDesc}>
					{bio}
				</div>
			</div>
			<div className={styles.memberInfo}>
				<div className={styles.mainInfo}>
					<div className={styles.memberName}>
						{name}
					</div>
					<div className={styles.memberRole}>
						{role || "Member"}
					</div>
				</div>
				<div className={styles.memberSocials}>
					{createSocialIcon(email, true)}
					{createSocialIcon(socials[0])}
					{createSocialIcon(socials[1])}
					{createSocialIcon(socials[2])}
				</div>
			</div>
		</div>
	)
}
