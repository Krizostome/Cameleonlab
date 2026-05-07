"use client";

import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Analyse & Conception",
    date: "Étape 1",
    content: "Nous analysons vos besoins, définissons les objectifs et concevons l'architecture optimale pour votre projet.",
    category: "Analyse",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design & Prototypage",
    date: "Étape 2",
    content: "Nous créons des maquettes et prototypes interactifs pour valider l'expérience utilisateur avant le développement.",
    category: "Design",
    icon: PenTool,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Développement",
    date: "Étape 3",
    content: "Notre équipe développe votre solution avec les meilleures pratiques et technologies du marché.",
    category: "Développement",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Tests & Optimisation",
    date: "Étape 4",
    content: "Tests rigoureux, optimisation des performances et préparation pour la mise en production.",
    category: "Tests",
    icon: TestTube,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Lancement",
    date: "Étape 5",
    content: "Mise en production, suivi post-lancement et accompagnement continu pour garantir le succès.",
    category: "Lancement",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default RadialOrbitalTimelineDemo;
