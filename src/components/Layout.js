import React from "react";

export default function Layout() {
  return (
    <div className="layout">
      <div className="box">
        <h3>Main Content</h3>
        <p>
          This is the main content section. On desktop, it takes 2/3 width. On
          mobile, it stacks.
        </p>
      </div>
      <div className="box">
        <h3>Sidebar</h3>
        <p>This is the sidebar content.</p>
      </div>
    </div>
  );
}
