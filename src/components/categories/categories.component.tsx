import { useEffect, useState } from "react";
import axios from "axios";

import Category from "../../types/category.types";
import env from "../../config/env.config";
import CategoryItem from "../category-item/category-item.component";

import "./categories.styles.css";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/category`);

      console.log("API URL:", env.apiUrl);
      console.log("Resposta da API:", data);

      setCategories(data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log("Estado:", categories);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;