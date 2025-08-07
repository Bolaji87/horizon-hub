import { Link } from "react-router-dom";
import { categoryItems } from "../../lib/data";

function Category() {
  return (
    <ul className="mt-10 flex w-full max-w-max flex-col items-center gap-8 rounded-md bg-white">
      {categoryItems.map((item, key) => (
        <li key={key}>
          <Link
            to={item.to}
            className="t rounded-xl px-6 py-3 transition duration-300 ease-linear hover:bg-gray-50"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Category;
