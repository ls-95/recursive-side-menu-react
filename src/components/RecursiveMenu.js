import "./styles.css";
import MenuList from "./MenuList";

export default function RecursiveMenu({ menus = [] }) {
  return (
    <div className="recursive-menu-container">
      <MenuList list={menus} />
    </div>
  );
}
