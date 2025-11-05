import { ArrowRight, Code, Sparkles, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import eduflowImage from '../assets/eduflowprojectshowcase.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';

  const featuredSkills = [
    {
      category: t('skills.aiTools'),
      skills: [],
    },
    {
      category: t('skills.webDev'),
      skills: [],
    },
    {
      category: t('skills.ecommerce'),
      skills: [],
    },
  ];

  return (
    <div className="w-full">
      <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}>
        {/* Background Elements - Removed cubes for cleaner design */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Intentionally left empty for a cleaner look */}
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>

        {/* Centered Text Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="mb-1">
                <motion.h1
                  className={`${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    fontSize: 'clamp(50px, 15vw, 80px)',
                    lineHeight: '1',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontStyle: 'italic',
                    marginBottom: '0.5rem',
                    textShadow: isDark ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {t('home.title')}
                </motion.h1>
              </motion.div>
              
              <motion.h2
                className={`font-normal text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                style={{
                  fontSize: 'clamp(18px, 5vw, 32px)',
                  lineHeight: '1.2',
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem',
                  padding: '0 1rem',
                  fontWeight: 400,
                  textShadow: isDark ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t('home.subtitle')}
              </motion.h2>
              
              <motion.p
                className={`max-w-2xl mx-auto text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {t('home.intro')}
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate('projects')}
                  className="bg-primary hover:bg-primary/90 group shadow-xl"
                >
                  {t('home.viewPortfolio')}
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('contact')}
                  className="border-primary/30 hover:bg-primary/20 backdrop-blur-md shadow-xl"
                >
                  {t('home.contactMe')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .float {
            animation: float 6s ease-in-out infinite;
          }
          .float-2 {
            animation: float 8s ease-in-out infinite;
            animation-delay: 1s;
          }
          .float-3 {
            animation: float 7s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          /* Smooth theme transition */
          * {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          }
        `
      }} />

      {/* Featured Project Section */}
      <section className="w-full py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-4">{t('home.featuredProject')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.featuredSubtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="max-w-5xl mx-auto hover:shadow-2xl transition-all duration-300 border-primary/20 overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <motion.img
                    src={eduflowImage}
                    alt="Eduflow Course Creation Platform"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="text-primary" size={24} />
                      <Badge className="bg-primary text-primary-foreground">
                        {t('certifications.featured')}
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground">
                      {t('home.projectName')}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {t('home.projectType')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground">
                      {t('home.projectDescription')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Full-Stack SaaS Development</Badge>
                      <Badge variant="outline">Lovable</Badge>
                      <Badge variant="outline">Figma Make</Badge>
                      <Badge variant="outline">Bolt V2</Badge>
                    </div>
                    <Button
                      onClick={() => onNavigate('projects')}
                      className="bg-primary hover:bg-primary/90 mt-4 group"
                    >
                      {t('projects.viewProject')}
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-4">{t('home.skillsTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.skillsSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredSkills.map((skillGroup, index) => {
              const icons = [
                <Sparkles key="ai" className="text-primary" size={32} />,
                <Code key="code" className="text-primary" size={32} />,
                <ShoppingCart key="shop" className="text-primary" size={32} />,
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/30 h-full group">
                    <CardHeader>
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {icons[index]}
                      </motion.div>
                      <CardTitle className="text-foreground">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('skills')}
              className="border-primary/20 hover:bg-primary/10"
            >
              {t('home.viewAllSkills')}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
