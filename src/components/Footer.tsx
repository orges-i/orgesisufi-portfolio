import {
  Linkedin,
  Mail,
  Download,
  // Github,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-border bg-card/50 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {t("home.title")}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/orges-isufi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>

            {/*
              <motion.a
                href="https://github.com/orges-i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub Profile"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            */}

            <motion.a
              href="mailto:orgesisufi1@hotmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Send Email"
            >
              <Mail size={20} />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="/Orges-Isufi-Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={t("nav.resume")}
            >
              <Download size={20} />
              <span>{t("nav.resume")}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
