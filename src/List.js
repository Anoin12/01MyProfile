import React from "react";

function List({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return <ul>{items.map(renderItem)}</ul>;
}

export default List;