import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/managecategories.module.css";

const Modal = ({
  isOpen,
  onClose,
  categories,
  handleSave,
  showSuccess,
  newCategory,
  setNewCategory,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          X
        </span>{" "}
        <h2>My Categories</h2>
        <div className={styles.categories}>
          {categories &&
            categories.map((category) => (
              <button key={category._uuid} className={styles.category}>
                {category.category}
              </button>
            ))}
        </div>
        <input
          type="text"
          placeholder="Untitled Quiz"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleSave}>Add</button>
        {showSuccess && (
          <div className={styles.successMessage}>Quiz saved successfully!</div>
        )}
      </div>
    </div>
  );
};

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deleteCategory =() => {

  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://crudapi.co.uk/api/v1/categories",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 7cLK5cEEhDUdcQJsEoTZNdqQ6t-9ZlcHWLkjPICBAkqbHcKezw`,
            },
          }
        );

        const fetchedCategories = response.data;
        console.log(fetchedCategories);

        setCategories(fetchedCategories.items);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };
    fetchCategories();
  }, []);

  const handleSave = async () => {
    try {
      console.log(newCategory); 
      console.log(categories); 

      const response = await axios.post(
        "https://crudapi.co.uk/api/v1/categories",
        [{category: newCategory}],
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 7cLK5cEEhDUdcQJsEoTZNdqQ6t-9ZlcHWLkjPICBAkqbHcKezw",
          },
        }
      );

      console.log("C saved successfully:", response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error saving quiz. Details:", {
        message: error.message,
        stack: error.stack,
      });
    }
  };

  return (
    <div>
      <h2>All Categories</h2>

      {categories.map((category) => (
        <button key={category._uuid} >{category.category}</button>
      ))}

      <button onClick={toggleModal}>+</button>
      <delete onClick={deleteCategory} >Delete</delete>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        categories={categories}
        handleSave={handleSave}
        showSuccess={showSuccess}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
      />
    </div>
  );
};

export default ManageCategories;
