import React from "react";
import styles from "./styles.scoped.css";

// Fungsi ini untuk membuat komponen layout
// parameter yang ada didalamnya merupakan props yang bisa diturunkan kedalam komponen ini
export default function Layout({ sidebar, children, mainClassName }) {
  return (
    <div className="flex font-main">
      <aside className="w-44 min-h-screen">{sidebar}</aside>
      <main className={`flex-1 ${mainClassName}`}>
        {children}
      </main>
    </div>
  );
}
