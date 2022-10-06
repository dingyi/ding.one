import styles from "./podcastTile.module.css"
import Image from "next/future/image"
import External from "@ui/Icons/external"
import util from "@styles/util.module.css"

export default function PodcastTile({
  imageUrl,
  title,
  url,
}: any) {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div>
        <Image
          className={styles.image}
          src={imageUrl}
          width={200}
          height={200}
          alt={title}
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNklBAoBQAA6wCgMY0wVQAAAABJRU5ErkJggg==`}
          //https://png-pixel.com/
        />
      </div>

      <div className={styles.stack}>
        <div>
          <h4 className={util.tileTitle + " " + styles.inline}>{title}</h4>
          <span className={styles.externalIcon}>
            <External />
          </span>
        </div>
      </div>
    </a>
  )
}
