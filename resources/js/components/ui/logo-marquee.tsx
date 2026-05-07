"use client";

import React from "react";
import { cn } from "@/lib/utils";

const categories = [
  {
    label: "Langages",
    icon: "fa-solid fa-code",
    items: [
      { name: "HTML5", class: "devicon-html5-plain colored" },
      { name: "CSS3", class: "devicon-css3-plain colored" },
      { name: "JavaScript", class: "devicon-javascript-plain colored" },
      { name: "TypeScript", class: "devicon-typescript-plain colored" },
      { name: "PHP", class: "devicon-php-plain" },
      { name: "Python", class: "devicon-python-plain colored" },
      { name: "Java", class: "devicon-java-plain" },
      { name: "C++", class: "devicon-cplusplus-plain colored" },
      { name: "Swift", class: "devicon-swift-plain colored" },
      { name: "Kotlin", class: "devicon-kotlin-plain colored" },
    ],
  },
  {
    label: "Frameworks",
    icon: "fa-solid fa-layer-group",
    items: [
      { name: "Laravel", class: "devicon-laravel-plain colored" },
      { name: "React", class: "devicon-react-original colored" },
      { name: "Vue.js", class: "devicon-vuejs-plain colored" },
      { name: "Angular", class: "devicon-angularjs-plain colored" },
      { name: "WordPress", class: "devicon-wordpress-plain" },
      { name: "Tailwind", class: "devicon-tailwindcss-original colored" },
      { name: "Node.js", class: "devicon-nodejs-plain colored" },
      { name: "Django", class: "devicon-django-plain colored" },
      { name: "Flask", class: "devicon-flask-original colored" },
      { name: "Spring", class: "devicon-spring-plain colored" },
    ],
  },
  {
    label: "Bases de Données & Outils",
    icon: "fa-solid fa-database",
    items: [
      { name: "MySQL", class: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", class: "devicon-postgresql-plain colored" },
      { name: "MongoDB", class: "devicon-mongodb-plain colored" },
      { name: "Redis", class: "devicon-redis-plain colored" },
      { name: "SQLite", class: "devicon-sqlite-plain colored" },
      { name: "Firebase", class: "devicon-firebase-plain colored" },
      { name: "Docker", class: "devicon-docker-plain colored" },
      { name: "Git", class: "devicon-git-plain colored" },
      { name: "GitHub", class: "devicon-github-original" },
      { name: "VS Code", class: "devicon-vscode-plain colored" },
    ],
  },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { name: string; class: string }[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative flex overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-scroll 40s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 mr-5"
          >
            <i className={`${item.class} text-xl`} />
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("py-20 overflow-hidden bg-white", className)} {...props}>
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Technologies <span className="text-[#2ECC71]">Maîtrisées</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          Les outils et frameworks que nous utilisons au quotidien
        </p>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <i className={cat.icon} />
              {cat.label}
            </h3>
            <MarqueeRow items={cat.items} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
