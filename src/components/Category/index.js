import styles from "./Category.module.css"
import videos from "../../json//videos.json"

export const categorias = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia e Hidrografia"
]

export function filtrarCategoria(id) {
    return videos.filter(video => video.category === categorias[id]);
}

function Category({ categoria, children }) {
    return (
        <section className={styles.categoria}>
            <h2>{categoria}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}

export default Category;