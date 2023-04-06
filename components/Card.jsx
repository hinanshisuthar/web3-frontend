import Image from "next/image"

export const Card = ({ id, name, tokenType, description, src, styles }) => {
    return (
        <div className={styles.card} key={id}>
            <Image src={src} alt={name} width="100%" height="auto" />
            <div className={styles.info}>
                <p>Name:</p> {name}
                <p>Description:</p> {description}
                <p>Token Type:</p> {tokenType}
            </div>
        </div>
    )
}