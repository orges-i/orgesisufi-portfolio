import {
  ExternalLink,
  Sparkles,
  Code,
  ShoppingCart,
  Image as ImageIcon,
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
import developerThumbnail from "../assets/developerportfoliothumbnail.png";
import developer1 from "../assets/developerportfolio1.png";
import developer2 from "../assets/developerportfolio2.png";
import developer3 from "../assets/developerportfolio3.png";
import developer4 from "../assets/developerportfolio4.png";
import developer5 from "../assets/developerportfolio5.png";
import developer6 from "../assets/developerportfolio6.png";

type Project = {
  title: string;
  category: string;
  group: "AI Projects" | "Web Development" | "All Projects";
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  previewUrl?: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  featured?: boolean;
};

const GROUPS = ["AI Projects", "Web Development", "All Projects"] as const;

export function ProjectsPage() {
  const { t } = useLanguage();

  const projects = useMemo<Project[]>(
    () => [
      {
        title: t("projects.eduflow.title"),
        category: t("projects.eduflow.category"),
        group: "AI Projects",
        description: t("projects.eduflow.description"),
        longDescription: t("projects.eduflow.longDescription"),
        image: eduflowImage,
        previewUrl: eduflow1,
        images: [eduflow1, eduflow2, eduflow3, eduflow4],
        technologies: [
          "AI Integration",
          "Full-stack Development",
          "React",
          "TypeScript",
          "Supabase",
          "APIs",
          "Cursor",
          "Bolt",
          "Lovable",
        ],
        features: t("projects.eduflow.features") as unknown as string[],
        demoUrl: "https://orges-i-eduflow-impo-e6c3.bolt.host/",
        featured: true,
      },
      {
        title: "Developer Themed Portfolio Website",
        category: "AI Projects | Portfolio",
        group: "AI Projects",
        description:
          "A clean and modern developer themed portfolio website, fully vibecoded with Emergent. Showcases skills, projects, and contact info in a professional way.",
        longDescription:
          "Crafted with Emergent Agent and Claude Sonnet, this developer-themed portfolio delivers a polished experience that highlights personal brand, recent work, and contact pathways. The layout keeps content focused while maintaining a refined aesthetic suitable for client or employer presentations.",
        image: developerThumbnail,
        previewUrl: developer1,
        images: [
          developer1,
          developer2,
          developer3,
          developer4,
          developer5,
          developer6,
        ],
        technologies: ["Emergent Agent", "Claude Sonnet"],
        features: [
          "Developer themed presentation",
          "Project highlight sections",
          "Integrated contact touchpoints",
        ],
        demoUrl: "https://fisteku-dev.preview.emergentagent.com/",
      },
      {
        title: t("projects.ecomm.title"),
        category: t("projects.ecomm.category"),
        group: "Web Development",
        description: t("projects.ecomm.description"),
        longDescription: t("projects.ecomm.longDescription"),
        image:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        previewUrl:
          "https://images.unsplash.com/photo-1557825835-a5267448a13c?auto=format&fit=crop&w=1600&q=80",
        images: [
          "https://images.unsplash.com/photo-1557825835-a5267448a13c?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        ],
        technologies: [
          "Shopify Liquid",
          "JavaScript",
          "CSS3",
          "HTML5",
          "Google Ads API",
          "Product Research Tools",
        ],
        features: t("projects.ecomm.features") as unknown as string[],
      },
      {
        title: t("projects.portfolio.title"),
        category: t("projects.portfolio.category"),
        group: "Web Development",
        description: t("projects.portfolio.description"),
        longDescription: t("projects.portfolio.longDescription"),
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        previewUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
        images: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Bootstrap",
          "jQuery",
          "Responsive Design",
        ],
        features: t("projects.portfolio.features") as unknown as string[],
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
      : projects.filter((project) => project.group === activeGroup);

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
                      {project.featured && (
                        <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">
                          {t("certifications.featured")}
                        </Badge>
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
                                className="flex items-start gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.4 + featureIndex * 0.05,
                                }}
                              >
                                <span
                                  className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                                  aria-hidden="true"
                                />
                                <span>{feature}</span>
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
                              Preview Images
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
