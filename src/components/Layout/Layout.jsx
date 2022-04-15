import React from "react";
import styles from './styles.scoped.css';

export default function Layout({ sidebar, children, mainClassName }) {
  return (
    <div className="flex font-main">
      <aside className="w-44 min-h-screen">{sidebar}</aside>
      <main className={`flex-1 h-screen ${mainClassName}`}>
        {children}
        <footer className="bg-white z-40 fixed bottom-0 w-screen">
          © 2022 TravelBae by TravelBae Team
        </footer>
      </main>
    </div>
  );
}
