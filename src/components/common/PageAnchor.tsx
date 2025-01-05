"use client";

import React, { useState, useEffect } from "react";

const Anchor = () => {
  const items = [
    { key: "1", href: "#about", title: "About" },
    { key: "2", href: "#resume", title: "Resume" },
    { key: "3", href: "#projects", title: "Projects" },
    { key: "4", href: "#contact", title: "Contact" },
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id); // Update active state
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6, // Adjust sensitivity
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="hidden md:flex fixed w-1/6 h-full top-0 left-0 px-4 py-[8rem] bg-gray-100 dark:bg-gray-800">
      <ul className="flex flex-col space-y-2">
        {items.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              className={`${
                active === item.href.slice(1) // Match href with active section ID
                  ? "text-blue-800 font-bold" // Active link styling
                  : "text-blue-600"
              } hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-all`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Anchor;