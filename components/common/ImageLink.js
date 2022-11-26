import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/ImageLink.module.css';

export default function ImageLink({ href, src, width, height, alt, external }) {
  const image = (
    <Image
      className={styles.imgLink}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );

  // Open in new tab if external
  if (external) {
    return (
      <Link href={href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      </Link>
    );
  }

  // Use built-in Next.js Link component to avoid reloading the page
  return <Link href={href}>{image}</Link>;
}
