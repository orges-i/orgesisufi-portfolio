import {
  ExternalLink,
  Sparkles,
  Code,
  ShoppingCart,
  Image as ImageIcon,
  GripHorizontal,
  FileText,
  Smartphone,
  Link2,
  Paintbrush,
  Lock,
  Database,
  MapPin,
  Gauge,
  Camera,
  Layers,
  Leaf,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useMemo, useState } from "react";
import { cn } from "./ui/utils";
import eduflowImage from "../assets/eduflowprojectshowcase.png";
import eduflow1 from "../assets/eduflow1.png";
import eduflow2 from "../assets/eduflow2.png";
import eduflow3 from "../assets/eduflow3.png";
import eduflow4 from "../assets/eduflow4.png";
// import aerocommandImage from "../assets/aerocommandthumbnail.png";
import developerThumbnail from "../assets/developerportfoliothumbnail.png";
import recbaseThumbnail from "../assets/recbasethumbnail.png";
// import pocketbalanceThumbnail from "../assets/pocketbalancethumbnail.png";
import bpmbodyThumbnail from "../assets/bpmbodythumnail.png";
import zvrichThumbnail from "../assets/zvrichthumbnail.png";
import plantlyThumbnail from "../assets/plantlythumbnail.png";
// import flowThumbnail from "../assets/flowthumbnail.png";
import akCarShopThumbnail from "../assets/carshopthumbnail.png";
import duobassThumbnail from "../assets/duobassthumbnail.png";
import caplombierThumbnail from "../assets/caplombierthumbnail.png";
import kimiumbautenThumbnail from "../assets/kimiumbauten.png";
import emryShowellThumbnail from "../assets/emryshowellthumbnail.png";
import victoriaToursThumbnail from "../assets/victoriatoursthumbnail.png";
import klinakuThumbnail from "../assets/klinakuthumbnail.png";
import bletaThumbnail from "../assets/bletathumbnail.png";
import newBornMediaThumbnail from "../assets/newbornmediathumbnail.png";
import bmwThumbnail from "../assets/bmwthumbnail.png";
import milkyWayThumbnail from "../assets/milkywaythumbnail.png";
import hamLogThumbnail from "../assets/hamlogthumbnail.png";
import mobileriaErioniThumbnail from "../assets/mobileriaerionithumbnail.png";
import uavThumbnail from "../assets/uavthumbnail.png";
import lynkrThumbnail from "../assets/lynkrthumbnail.png";
import developer1 from "../assets/developerportfolio1.png";
import developer2 from "../assets/developerportfolio2.png";
import developer3 from "../assets/developerportfolio3.png";
import developer4 from "../assets/developerportfolio4.png";
import developer5 from "../assets/developerportfolio5.png";
import developer6 from "../assets/developerportfolio6.png";

type Project = {
  title: string;
  category: string;
  groups: ("AI Projects" | "Web Development" | "All Projects")[];
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  previewUrl?: string;
  technologies: string[];
  features: React.ReactNode[];
  demoUrl?: string;
  featured?: boolean;
  statusBadge?: string;
};

const GROUPS = [
  { id: "AI Projects", labelKey: "projects.groups.ai" },
  { id: "Web Development", labelKey: "projects.groups.web" },
  { id: "All Projects", labelKey: "projects.groups.all" },
] as const;

export function ProjectsPage() {
  const { t } = useLanguage();

  const projects = useMemo<Project[]>(
    () => [
      {
        title: t("projects.eduflow.title"),
        category: t("projects.eduflow.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.eduflow.description"),
        longDescription: t("projects.eduflow.longDescription"),
        image: eduflowImage,
        previewUrl:
          "https://drive.google.com/file/d/1U6ep0iBRkbUtYajc9teyqO6Y1gM95TKz/view?usp=sharing",
        images: [eduflow1, eduflow2, eduflow3, eduflow4],
        technologies: [
          "Claude Sonnet",
          "Figma Make",
          "Lovable",
          "Bolt V2",
          "Supabase",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Motion/React",
          "Lucide Icons",
          "Dialog Components",
        ],
        features: [
          <>
            <GripHorizontal className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[0]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[1]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[2]}
          </>,
          <>
            <Link2 className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[3]}
          </>,
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[4]}
          </>,
          <>
            <Lock className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[5]}
          </>,
          <>
            <Database className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.eduflow.features")[6]}
          </>,
        ],
        demoUrl: "https://orges-i-eduflow-impo-e6c3.bolt.host/",
        featured: true,
      },

      {
        title: t("projects.lynkr.title"),
        category: t("projects.lynkr.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.lynkr.description"),
        longDescription: t("projects.lynkr.longDescription"),
        image: lynkrThumbnail,
        technologies: [
          "Antigravity",
          "Google AI Studio",
          "Gemini 3.0 Pro & Flash",
          "Supabase PostgreSQL",
          "React",
          "Tailwind CSS",
          "ThreeJs",
          "Supabase Auth & Storage",
        ],
        features: [
          <>
            <GripHorizontal className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[0]}
          </>,
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[1]}
          </>,
          <>
            <Layers className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[2]}
          </>,
          <>
            <Link2 className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[3]}
          </>,
          <>
            <Gauge className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[4]}
          </>,
          <>
            <Database className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.lynkr.features")[5]}
          </>,
        ],
        demoUrl: "https://lynkr-flame.vercel.app/",
        statusBadge: t("projects.inProcess"),
      },

      {
        title: t("projects.recbase.title"),
        category: t("projects.recbase.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.recbase.description"),
        longDescription: t("projects.recbase.longDescription"),
        image: recbaseThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1qpuOulTt7bxkC4YLK_FLjXVqijqrOhCV/view?usp=sharing",
        images: [
          "https://drive.google.com/file/d/1qpuOulTt7bxkC4YLK_FLjXVqijqrOhCV/view?usp=sharing",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Lovable",
          "AI Integration",
          "Boolean Search",
          "Activity Tracking",
        ],
        features: [
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.recbase.features")[0]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.recbase.features")[1]}
          </>,
          <>
            <Lock className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.recbase.features")[2]}
          </>,
        ],
      },

      {
        title: t("projects.bpmbody.title"),
        category: t("projects.bpmbody.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.bpmbody.description"),
        longDescription: t("projects.bpmbody.longDescription"),
        image: bpmbodyThumbnail,
        technologies: [
          "Next.js 14",
          "React",
          "TailwindCSS",
          "Radix UI",
          "TypeScript",
          "Vercel",
          "V0",
        ],
        features: [
          <>
            <Code className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.bpmbody.features")[0]}
          </>,
          <>
            <Link2 className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.bpmbody.features")[1]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.bpmbody.features")[2]}
          </>,
          <>
            <ImageIcon className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.bpmbody.features")[3]}
          </>,
          <>
            <MapPin className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.bpmbody.features")[4]}
          </>,
        ],
        demoUrl: "https://v0-bpmb-ody-whats-app-store.vercel.app/",
      },

      // Bleta E-commerce Web App
      {
        title: t("projects.bleta.title"),
        category: t("projects.bleta.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.bleta.description"),
        longDescription: t("projects.bleta.longDescription"),
        image: bletaThumbnail,
        demoUrl: "https://ecommerce-lab2-frontend.vercel.app/",
        technologies: [
          "React (Vite)",
          "React Router DOM",
          "Tailwind CSS",
          "Axios",
          "Node.js/Express",
          "MongoDB (Mongoose)",
          "JWT Auth",
          "Stripe Checkout",
          "Vercel",
        ],
        features: [
          <>
            <Lock className="inline mr-2 text-primary" size={20} />
            {t("projects.bleta.features")[0]}
          </>,
          <>
            <ShoppingCart className="inline mr-2 text-primary" size={24} />
            {t("projects.bleta.features")[1]}
          </>,
          <>
            <Layers className="inline mr-2 text-primary" size={20} />
            {t("projects.bleta.features")[2]}
          </>,
        ],
      },

      {
        title: t("projects.uavAnalyzer.title"),
        category: t("projects.uavAnalyzer.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.uavAnalyzer.description"),
        longDescription: t("projects.uavAnalyzer.longDescription"),
        image: uavThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1jppZ4C_ljmpHVAATNxh2C6TcM475xzsM/view?usp=drive_link",
        demoUrl: "https://drone-battery-consumption-calculato.vercel.app/",
        images: [uavThumbnail],
        technologies: [
          "Figma Make",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Recharts",
          "shadcn/ui",
          "jsPDF",
        ],
        features: [
          <>
            <Sparkles className="inline mr-2 text-primary" size={20} />{" "}
            {t("projects.uavAnalyzer.features")[0]}
          </>,
          <>
            <Gauge className="inline mr-2 text-primary" size={20} />{" "}
            {t("projects.uavAnalyzer.features")[1]}
          </>,
          <>
            <Code className="inline mr-2 text-primary" size={20} />{" "}
            {t("projects.uavAnalyzer.features")[2]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={20} />{" "}
            {t("projects.uavAnalyzer.features")[3]}
          </>,
        ],
      },

      /*
      {
        title: t("projects.aerocommand.title"),
        category: t("projects.aerocommand.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.aerocommand.description"),
        longDescription: t("projects.aerocommand.longDescription"),
        image: aerocommandImage,
        previewUrl:
          "https://drive.google.com/file/d/1iVuG9fw1C_0XLuQipTreXNSBcxMc7sCq/view?usp=sharing",
        images: [aerocommandImage],
        technologies: [
          "Vite",
          "TypeScript",
          "React",
          "shadcn/ui",
          "Tailwind CSS",
          "Supabase",
          "Lovable",
          "Claude Sonnet",
        ],
        features: [
          <>
            <GripHorizontal className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.aerocommand.features")[0]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.aerocommand.features")[1]}
          </>,
          <>
            <Link2 className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.aerocommand.features")[2]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.aerocommand.features")[3]}
          </>,
          <>
            <Database className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.aerocommand.features")[4]}
          </>,
        ],
        statusBadge: t("projects.inProcess"),
      },
      */

      /*
      {
        title: t("projects.pocketbalance.title"),
        category: t("projects.pocketbalance.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.pocketbalance.description"),
        longDescription: t("projects.pocketbalance.longDescription"),
        image: pocketbalanceThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1OB_4QxB42iPXoyWQshgkXdJnd6cQD6ft/view",
        images: [
          "https://drive.google.com/file/d/1OB_4QxB42iPXoyWQshgkXdJnd6cQD6ft/view",
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Firebase",
          "Tailwind CSS",
          "ShadCN UI",
          "Google Gemini",
          "Genkit",
        ],
        features: [
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.pocketbalance.features")[0]}
          </>,
          <>
            <Code className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.pocketbalance.features")[1]}
          </>,
          <>
            <Database className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.pocketbalance.features")[2]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.pocketbalance.features")[3]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.pocketbalance.features")[4]}
          </>,
        ],
        statusBadge: t("projects.inProcess"),
      },
      */

      {
        title: t("projects.zvrich.title"),
        category: t("projects.zvrich.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.zvrich.description"),
        longDescription: t("projects.zvrich.longDescription"),
        image: zvrichThumbnail,
        images: [zvrichThumbnail],
        technologies: [
          "Lovable",
          "React 18",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "React Router DOM",
        ],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.zvrich.features")[0]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.zvrich.features")[1]}
          </>,
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.zvrich.features")[2]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.zvrich.features")[3]}
          </>,
        ],
        demoUrl: "https://orges-i.github.io/zvrich-ecommerce/",
      },

      // KIMI Umbauten Modern Website (added)
      {
        title: t("projects.kimiUmbauten.title"),
        category: t("projects.kimiUmbauten.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.kimiUmbauten.description"),
        longDescription: t("projects.kimiUmbauten.longDescription"),
        image: kimiumbautenThumbnail,
        technologies: ["Bolt.new", "React", "Tailwind CSS"],
        features: [
          <>
            <MapPin className="inline mr-2 text-primary" size={16} />
            {t("projects.kimiUmbauten.features")[0]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />
            {t("projects.kimiUmbauten.features")[1]}
          </>,
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.kimiUmbauten.features")[2]}
          </>,
        ],
        demoUrl: "https://orges-i.github.io/kimi-bauwelten/",
      },

      {
        title: t("projects.akCarShop.title"),
        category: t("projects.akCarShop.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.akCarShop.description"),
        longDescription: t("projects.akCarShop.longDescription"),
        image: akCarShopThumbnail,
        technologies: [
          "Figma Make",
          "Bolt",
          "React",
          "Vite",
          "Tailwind CSS",
          "Radix UI",
          "shadcn/ui",
          "Embla Carousel",
          "Framer Motion",
        ],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.akCarShop.features")[0]}
          </>,
          <>
            <ImageIcon className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.akCarShop.features")[1]}
          </>,
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.akCarShop.features")[2]}
          </>,
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.akCarShop.features")[3]}
          </>,
        ],
        demoUrl: "https://ak-car-shop-ag-proto-fal9.bolt.host/",
      },

      // DuoBass Records Modern Website (added)
      {
        title: t("projects.duoBass.title"),
        category: t("projects.duoBass.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        // first paragraph (short description)
        description: t("projects.duoBass.description"),
        // second paragraph (longer description)
        longDescription: t("projects.duoBass.longDescription"),
        image: duobassThumbnail,
        technologies: ["Bolt V2", "React", "Tailwind CSS"],
        features: [
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />
            {t("projects.duoBass.features")[0]}
          </>,
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.duoBass.features")[1]}
          </>,
          <>
            <MapPin className="inline mr-2 text-primary" size={16} />
            {t("projects.duoBass.features")[2]}
          </>,
        ],
        demoUrl: "https://www.duobassrecords.com/",
      },

      // CA Plombier Geneva Modern Website (added)
      {
        title: t("projects.caPlombier.title"),
        category: t("projects.caPlombier.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.caPlombier.description"),
        longDescription: t("projects.caPlombier.longDescription"),
        image: caplombierThumbnail,
        technologies: ["Bolt.new", "React", "Tailwind CSS"],
        features: [
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />
            {t("projects.caPlombier.features")[0]}
          </>,
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.caPlombier.features")[1]}
          </>,
          <>
            <Globe className="inline mr-2 text-primary" size={16} />
            {t("projects.caPlombier.features")[2]}
          </>,
        ],
        demoUrl: "https://ca-plombier-prototyp-e0bl.bolt.host/",
      },

      {
        title: t("projects.developerThemed.title"),
        category: t("projects.developerThemed.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.developerThemed.description"),
        longDescription: t("projects.developerThemed.longDescription"),
        image: developerThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1zvhoaIysPBLu8ZCsuYm0BXuhtN1pp1qH/view?usp=sharing",
        images: [
          developer1,
          developer2,
          developer3,
          developer4,
          developer5,
          developer6,
        ],
        technologies: [
          "Emergent Agent",
          "Claude Sonnet",
          "React",
          "Tailwind CSS",
          "shadcn/ui",
        ],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.developerThemed.features")[0]}
          </>,
        ],
        demoUrl: "https://fisteku-dev.preview.emergentagent.com/",
      },

      {
        title: t("projects.plantly.title"),
        category: t("projects.plantly.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.plantly.description"),
        longDescription: t("projects.plantly.longDescription"),
        image: plantlyThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1Vpq8Aisiy4gYyoYzgW5SsCp0JZyw0l7D/view?usp=sharing",
        images: [plantlyThumbnail],
        technologies: [
          "Rork + Expo",
          "React Native",
          "Expo Router",
          "TypeScript",
          "Zustand",
          "React Query",
          "NativeWind",
          "Expo Camera",
          "Expo Image Picker",
          "Expo File System",
          "Location APIs",
        ],
        features: [
          <>
            <Camera className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.plantly.features")[0]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.plantly.features")[1]}
          </>,
          <>
            <Leaf className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.plantly.features")[2]}
          </>,
          <>
            <Globe className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.plantly.features")[3]}
          </>,
        ],
        statusBadge: t("projects.inProcess"),
      },

      /*
      {
        title: t("projects.flow.title"),
        category: t("projects.flow.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.flow.description"),
        longDescription: t("projects.flow.longDescription"),
        image: flowThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1lGuNv2WV8t93fbHxDaAmuKFFPkF1EK-z/view?usp=sharing",
        images: [flowThumbnail],
        technologies: [
          "Vibecode + Expo",
          "React Native",
          "Expo Router",
          "TypeScript",
          "Zustand",
          "React Query",
        ],
        features: [
          <>
            <FileText className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[0]}
          </>,
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[1]}
          </>,
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[2]}
          </>,
          <>
            <Download className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[3]}
          </>,
          <>
            <Save className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[4]}
          </>,
          <>
            <Globe className="inline mr-2 text-primary" size={16} />{" "}
            {t("projects.flow.features")[5]}
          </>,
        ],
        statusBadge: t("projects.inProcess"),
      },
      */

      // Emry Showell Web Experience (added)
      {
        title: t("projects.emryShowell.title"),
        category: t("projects.emryShowell.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.emryShowell.description"),
        longDescription: t("projects.emryShowell.longDescription"),
        image: emryShowellThumbnail,
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.emryShowell.features")[0]}
          </>,
        ],
        demoUrl: "https://emryshowell.com",
      },

      // Victoria Tours Website Project (added)
      {
        title: t("projects.victoriaTours.title"),
        category: t("projects.victoriaTours.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.victoriaTours.description"),
        longDescription: t("projects.victoriaTours.longDescription"),
        image: victoriaToursThumbnail,
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.victoriaTours.features")[0]}
          </>,
        ],
        demoUrl: "https://orges-i.github.io/victoriatours/",
      },

      // New Born Media Full Stack Web App (added)
      {
        title: t("projects.newBornMedia.title"),
        category: t("projects.newBornMedia.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.newBornMedia.description"),
        longDescription: t("projects.newBornMedia.longDescription"),
        image: newBornMediaThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1Esgu1s237Ufr4afVrSvkdVnGE6OfKQvk/view",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Handlebars.js",
          "MongoDB",
          "Express.js",
        ],
        features: [
          <>
            <FileText className="inline mr-2 text-primary" size={16} />
            {t("projects.newBornMedia.features")[0]}
          </>,
          <>
            <Lock className="inline mr-2 text-primary" size={16} />
            {t("projects.newBornMedia.features")[1]}
          </>,
        ],
      },

      // BMW Group Demo Side Project (added)
      {
        title: t("projects.bmwGroup.title"),
        category: t("projects.bmwGroup.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.bmwGroup.description"),
        longDescription: t("projects.bmwGroup.longDescription"),
        image: bmwThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1kw2rC41U-NqUH17wWGMFAdoLQrfTfE8b/view",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        features: [
          <>
            <Sparkles className="inline mr-2 text-primary" size={16} />
            {t("projects.bmwGroup.features")[0]}
          </>,
        ],
      },

      // Klinaku & Associates Website (added)
      {
        title: t("projects.klinaku.title"),
        category: t("projects.klinaku.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.klinaku.description"),
        longDescription: t("projects.klinaku.longDescription"),
        image: klinakuThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1BQZS7sxjeIYbPtqFBsqiO4CYjzTt-B_I/view",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.klinaku.features")[0]}
          </>,
        ],
      },

      // Milky Way Farm Capstone (added)
      {
        title: t("projects.milkyWay.title"),
        category: t("projects.milkyWay.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.milkyWay.description"),
        longDescription: t("projects.milkyWay.longDescription"),
        image: milkyWayThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1wMXXgHqefLXaScN8yztOnKwdpu4FttYp/view",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
        features: [
          <>
            <Smartphone className="inline mr-2 text-primary" size={16} />
            {t("projects.milkyWay.features")[0]}
          </>,
        ],
      },

      // Ham-Log Gruppe Front End Website (added)
      {
        title: t("projects.hamLog.title"),
        category: t("projects.hamLog.category"),
        groups: ["Web Development", "All Projects"],
        description: t("projects.hamLog.description"),
        longDescription: t("projects.hamLog.longDescription"),
        image: hamLogThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1Ed5siYdw5N7PQiWUfSqXhgAqBCCBq_4T/view?usp=sharing",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.hamLog.features")[0]}
          </>,
        ],
      },

      // Mobileria Erioni Website (added)
      {
        title: t("projects.mobileriaErioni.title"),
        category: t("projects.mobileriaErioni.category"),
        groups: ["AI Projects", "Web Development", "All Projects"],
        description: t("projects.mobileriaErioni.description"),
        longDescription: t("projects.mobileriaErioni.longDescription"),
        image: mobileriaErioniThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1SwVZZnF687McC4TWTus4dXj8oNduXEAl/view?usp=sharing",
        technologies: ["Cursor"],
        features: [
          <>
            <Paintbrush className="inline mr-2 text-primary" size={16} />
            {t("projects.mobileriaErioni.features")[0]}
          </>,
        ],
      },
    ],
    [t]
  );

  const getCategoryIcon = (category: string) => {
    if (category.includes("AI") || category.includes("SaaS")) {
      return <Sparkles className="text-primary" size={20} />;
    }
    if (category.includes("E-Commerce")) {
      return <ShoppingCart className="text-primary" size={20} />;
    }
    return <Code className="text-primary" size={20} />;
  };

  const [activeGroup, setActiveGroup] = useState<(typeof GROUPS)[number]["id"]>(
    GROUPS[0].id
  );

  const projectsToDisplay =
    activeGroup === "All Projects"
      ? projects
      : projects.filter((project) => project.groups.includes(activeGroup));

  return (
    <div className="w-full py-20">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-foreground">{t("projects.title")}</h1>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-2xl bg-muted/20 p-1">
          {GROUPS.map(({ id, labelKey }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveGroup(id)}
              className={cn(
                "flex-1 min-w-[140px] rounded-xl px-3 py-2 text-sm font-medium transition-colors md:text-base",
                activeGroup === id
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-transparent text-muted-foreground hover:bg-accent/40 hover:text-foreground"
              )}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {projectsToDisplay.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-300 hover:shadow-2xl",
                  project.featured
                    ? "border-2 border-primary"
                    : "border-primary/20"
                )}
              >
                <div className="grid gap-6 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <div className="relative h-64 w-full overflow-hidden md:h-full">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      />
                      {(project.featured || project.statusBadge) && (
                        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                          {project.featured && (
                            <Badge className="bg-primary text-primary-foreground">
                              {t("certifications.featured")}
                            </Badge>
                          )}
                          {project.statusBadge && (
                            <Badge className="bg-secondary text-secondary-foreground border border-primary/20 shadow">
                              {project.statusBadge}
                            </Badge>
                          )}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <CardHeader className="mb-4 p-0">
                      <div className="mb-2 flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <Badge variant="outline" className="border-primary/20">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-foreground">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0">
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>

                      <div>
                        <h4 className="mb-2 text-foreground">
                          {t("projects.technologiesUsed")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge variant="secondary">{tech}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 text-foreground">
                          {t("projects.keyFeatures")}
                        </h4>
                        <ul className="grid gap-2 md:grid-cols-2">
                          {project.features
                            .slice(0, 6)
                            .map((feature, featureIndex) => (
                              <motion.li
                                key={`${project.title}-feature-${featureIndex}`}
                                className="flex items-center gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.4 + featureIndex * 0.05,
                                }}
                              >
                                {feature}
                              </motion.li>
                            ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {t("projects.viewProject")}
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {project.previewUrl && (
                          <Button
                            asChild
                            variant="outline"
                            className="inline-flex items-center gap-2"
                          >
                            <a
                              href={project.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(event) => event.stopPropagation()}
                            >
                              <ImageIcon size={16} />
                              {t("projects.previewImages")}
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
