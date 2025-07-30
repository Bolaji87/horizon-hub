import { Link } from "react-router-dom";
const categoryItems = [
  { text: "All products", to: "/" },
  { text: "Female wears", to: "/" },
  { text: "Male wears", to: "/" },
  { text: "Hijabs", to: "/" },
  { text: "Male caps", to: "/" },
];

function Category({ onCategory }) {
  return (
    <ul
      onMouseLeave={() => onCategory(false)}
      className="h-54 flex w-44 flex-col items-center justify-center gap-5 rounded-md bg-white p-4 py-4 shadow-lg"
    >
      {categoryItems.map((item, key) => (
        <li key={key}>
          <Link
            to={item.to}
            className="rounded-xl px-5 py-2 transition duration-300 ease-linear hover:bg-gray-100"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Category;
