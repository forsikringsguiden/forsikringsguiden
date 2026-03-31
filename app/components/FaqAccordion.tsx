"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-gray-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <dt>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-sans font-semibold text-navy text-base">
                  {item.question}
                </span>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                isOpen ? "max-h-48 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-[#4b5563] leading-relaxed">{item.answer}</p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
