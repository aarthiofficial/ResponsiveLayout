import React, { useState } from "react";

const data = [
  {
    id: "fruits",
    label: "Fruits",
    children: [
      { id: "apple", label: "Apple" },
      { id: "banana", label: "Banana" },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    children: [
      { id: "carrot", label: "Carrot" },
      { id: "spinach", label: "Spinach" },
    ],
  },
];

export default function NestedCheckbox() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggle = (id, isChecked, children) => {
    const updated = { ...checkedItems };

    const updateChildren = (nodes) => {
      nodes?.forEach((child) => {
        updated[child.id] = isChecked;
        updateChildren(child.children);
      });
    };

    updated[id] = isChecked;
    updateChildren(children);

    setCheckedItems(updated);
  };

  const isIndeterminate = (children) => {
    if (!children) return false;
    const all = children.every((c) => checkedItems[c.id]);
    const none = children.every((c) => !checkedItems[c.id]);
    return !all && !none;
  };

  const renderTree = (items) =>
    items.map((item) => (
      <div key={item.id} style={{ marginLeft: "20px" }}>
        <input
          type="checkbox"
          checked={!!checkedItems[item.id]}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate(item.children);
          }}
          onChange={(e) => toggle(item.id, e.target.checked, item.children)}
        />
        <label>{item.label}</label>
        {item.children && renderTree(item.children)}
      </div>
    ));

  const selectAll = (e) => {
    const allChecked = e.target.checked;
    const updated = {};
    const updateAll = (nodes) => {
      nodes.forEach((node) => {
        updated[node.id] = allChecked;
        if (node.children) updateAll(node.children);
      });
    };
    updateAll(data);
    setCheckedItems(updated);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Nested Checkbox</h3>
      <div>
        <input
          type="checkbox"
          checked={
            Object.keys(checkedItems).length > 0 &&
            Object.values(checkedItems).every(Boolean)
          }
          ref={(el) => {
            if (el) {
              const allValues = Object.values(checkedItems);
              el.indeterminate =
                allValues.some(Boolean) && !allValues.every(Boolean);
            }
          }}
          onChange={selectAll}
        />
        <label>Select All</label>
      </div>
      {renderTree(data)}
    </div>
  );
}
