import { useState, useEffect} from "react"
import axios from "axios"
import Category from "../../types/category.types"
import "./categories.styles.css"
import env from "../../config/env.config"

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const {data} = await axios.get(`${env.apiUrl}/category`)
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }
  console.log({categories})
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map(category => <categoryItem />)} */}
      </div>
    </div>
  )
}

export default Categories