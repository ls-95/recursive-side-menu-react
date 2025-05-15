import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem item={listItem} key={index} />
          ))
        : null}
    </ul>
  );
}
