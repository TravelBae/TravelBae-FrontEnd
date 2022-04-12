import React from "react";

export default function Layout({ sidebar, children, mainClassName }) {
  return (
    <div className="flex font-main">
      <aside className="w-44 min-h-screen">{sidebar}</aside>
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
    </div>
  );
}
