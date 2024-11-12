import styles from "@/styles/products.module.css"
import { Product } from "@/components/Product";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Filter } from "@/components/Filters";

export default function Products() {

    return (
        <main className={styles.products}>
            <article className={styles.filters}>
                <Filter></Filter>
            </article>
            <section className={styles.product}>
                <Product></Product>
            </section>
            
        </main>


    )
}
/*
<article className={styles.filters}>
                <Filter></Filter>
            </article>
            <section className={styles.product}>
                <Product></Product>
            </section>
            <Cart></Cart>
            <button className={styles.button__darkMode}
                onClick={handleMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
*/

/*
  const [darkMode, setDarkMode] = useState(false)

  const handleMode = () => {
      if (darkMode) {
          document.body.classList.remove('darkMode')
          setDarkMode(false)
      } else {
          document.body.classList.add('darkMode')
          setDarkMode(true)
      }
  }
*/