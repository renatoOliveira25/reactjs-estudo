import styles from "./Category.module.css"

function Category({ categoria, children }) {
    return (
        <section className={ styles.categoria }>
            <h2>{ categoria }</h2>
            <div>
                { children }
            </div>
        </section>
    )
}

export default Category;