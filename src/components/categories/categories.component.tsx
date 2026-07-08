import { useEffect, useState } from "react";
import axios from "axios";

import env from "../../config/env.config";
import Category from "../../types/category.types";
import CategoryItem from "../category-item/category-item.component";

import "./categories.styles.css";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      if (!env.apiUrl) {
        console.error("REACT_APP_API_URL não foi configurada.");
        return;
      }

      const { data } = await axios.get<Category[]>(`${env.apiUrl}/category`);

      console.log("Categorias recebidas:", data);

      setCategories(data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;