// import { createContext, useContext, useState } from "react";

// const CategoryContext = createContext();

// function CategoryProvider({ children }) {
//   const [showCategory, setShowCategory] = useState(false);
//   function handleShow() {
//     setShowCategory((isShow) => !isShow);
//   }

//   return (
//     <CategoryContext.Provider
//       value={{
//         showCategory,
//         handleShow,
//       }}
//     >
//       {children}
//     </CategoryContext.Provider>
//   );
// }

// function useCategory() {
//   const context = useContext(CategoryContext);
//   if (context === undefined)
//     throw new Error("CategoryContext must be used within CategoryProvider");
//   return context;
// }

// export { CategoryProvider, useCategory };
