export const Card = ({ id, name, tokenType, description, src, styles }) => {
    return (
        <div className={styles.card} key={id}>
            <img src={src} alt={name} />
            <div className={styles.info}>
                <p>Name:</p> {name}
                <p>Description:</p> {description}
                <p>Token Type:</p> {tokenType}
            </div>
        </div>
    )
}