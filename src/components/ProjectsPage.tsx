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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useMemo, useState } from "react";
import { cn } from "./ui/utils";
import eduflowImage from "../assets/eduflowprojectshowcase.png";
import eduflow1 from "../assets/eduflow1.png";
import eduflow2 from "../assets/eduflow2.png";
import eduflow3 from "../assets/eduflow3.png";
import eduflow4 from "../assets/eduflow4.png";
import aerocommandImage from "../assets/aerocommandthumbnail.png";
import developerThumbnail from "../assets/developerportfoliothumbnail.png";
import recbaseThumbnail from "../assets/recbasethumbnail.png";
import pocketbalanceThumbnail from "../assets/pocketbalancethumbnail.png";
import bpmbodyThumbnail from "../assets/bpmbodythumnail.png";
import uavThumbnail from "../assets/uavthumbnail.png";
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

const GROUPS = ["AI Projects", "Web Development", "All Projects"] as const;

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
          "Figma",
          "Make",
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
        title: t("projects.recbase.title"),
        category: t("projects.recbase.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.recbase.description"),
        longDescription: t("projects.recbase.longDescription"),
        image: recbaseThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1ftrPytsDgL2AA57DEovazxKogEuuVfo8/view?usp=sharing",
        images: [
          "https://drive.google.com/file/d/1ftrPytsDgL2AA57DEovazxKogEuuVfo8/view?usp=sharing",
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
        title: t("projects.pocketbalance.title"),
        category: t("projects.pocketbalance.category"),
        groups: ["AI Projects", "All Projects"],
        description: t("projects.pocketbalance.description"),
        longDescription: t("projects.pocketbalance.longDescription"),
        image: pocketbalanceThumbnail,
        previewUrl:
          "https://drive.google.com/file/d/1OB_4QxB42iPXoyWQshgkXdJnd6cQD6ft/view",
        images: ["https://drive.google.com/file/d/1OB_4QxB42iPXoyWQshgkXdJnd6cQD6ft/view"],
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

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeGroup, setActiveGroup] = useState<(typeof GROUPS)[number]>(
    GROUPS[0]
  );

  const projectsToDisplay =
    activeGroup === "All Projects"
      ? projects
      : projects.filter((project) => project.groups.includes(activeGroup));

  const openDetails = (project: Project) => {
    setActiveProject(project);
    setDetailsOpen(true);
  };

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
          {GROUPS.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={cn(
                "flex-1 min-w-[140px] rounded-xl px-3 py-2 text-sm font-medium transition-colors md:text-base",
                activeGroup === group
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-transparent text-muted-foreground hover:bg-accent/40 hover:text-foreground"
              )}
            >
              {group}
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
                role="button"
                tabIndex={0}
                onClick={() => openDetails(project)}
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

        <Dialog
          open={detailsOpen}
          onOpenChange={(open: boolean) => {
            setDetailsOpen(open);
            if (!open) {
              setActiveProject(null);
            }
          }}
        >
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{activeProject?.title}</DialogTitle>
              <DialogDescription>
                {activeProject?.description ?? t("projects.subtitle")}
              </DialogDescription>
            </DialogHeader>
            {activeProject && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(activeProject.category)}
                  <Badge variant="outline">{activeProject.category}</Badge>
                </div>
                <p className="text-muted-foreground">
                  {activeProject.longDescription}
                </p>
                <div>
                  <h4 className="mb-2 text-foreground">
                    {t("projects.technologiesUsed")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <Badge
                        key={`${activeProject.title}-tech-${tech}`}
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-foreground">
                    {t("projects.keyFeatures")}
                  </h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {activeProject.features
                      .slice(0, 8)
                      .map((feature, index) => (
                        <li
                          key={`${activeProject.title}-detail-feature-${index}`}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span
                            className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
