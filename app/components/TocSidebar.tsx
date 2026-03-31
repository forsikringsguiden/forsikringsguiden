"use client";

import { useState, useEffect, useRef } from "react";
import type { TocItem } from "../../lib/articles";

export default function TocSidebar({ tocItems }: { tocItems: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingIds = tocItems.map((t) => t.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-64px 0px -60% 0px",
        threshold: 0,
      }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [tocItems]);

  return (
    <nav aria-label="Innholdsfortegnelse">
      <p className="font-sans text-xs font-bold text-[#9ca3af] uppercase tracking-widest mb-4">
        Innhold
      </p>
      <ul className="space-y-1">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
              <a
                href={`#${item.id}`}
                className={`block text-sm leading-snug py-1 transition-colors duration-150 ${
                  isActive
                    ? "text-accent font-semibold font-sans"
                    : "text-[#6b7280] hover:text-navy font-sans"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
