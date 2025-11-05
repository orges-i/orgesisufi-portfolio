import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import shopifyLogo from '../assets/shopifylogo.png';

export function ExperiencePage() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t('experience.ecomm.title'),
      company: t('experience.ecomm.company'),
      period: t('experience.ecomm.period'),
      location: t('experience.ecomm.location'),
      type: t('experience.ecomm.type'),
      logo: shopifyLogo,
      responsibilities: t('experience.ecomm.responsibilities') as unknown as string[],
      skills: ['Shopify', 'Dropshipping', 'Google Ads', 'Product Research', 'SEO', 'Conversion Optimization'],
    },
    {
      title: t('experience.frontend.title'),
      company: t('experience.frontend.company'),
      period: t('experience.frontend.period'),
      location: t('experience.frontend.location'),
      type: t('experience.frontend.type'),
      logo: 'https://newborn.media/wp-content/uploads/2022/09/nbm.png',
      responsibilities: t('experience.frontend.responsibilities') as unknown as string[],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'Responsive Design', 'Testing'],
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-foreground mb-4">{t('experience.title')}</h1>
          <p className="text-muted-foreground">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 group">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <Briefcase className="text-primary" size={24} />
                        )}
                      </motion.div>
                      <div>
                        <CardTitle className="text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-foreground mb-3">{t('experience.responsibilities')}</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          className="text-muted-foreground flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + respIndex * 0.05 }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-3">{t('experience.skillsTech')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
