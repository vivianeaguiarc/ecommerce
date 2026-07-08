import { FunctionComponent } from "react"
import Category from "../../types/category.types"
import "./category-item.styles.css"

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div className="category-item-container">
      <div className="category-name-container">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem