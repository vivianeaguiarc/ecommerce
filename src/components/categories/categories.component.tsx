import { useState } from "react"
import Category from "../../types/category.types"
import "./categories.styles.scss"

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map(category => <categoryItem />)} */}
      </div>
    </div>
  )
}

export default Categories