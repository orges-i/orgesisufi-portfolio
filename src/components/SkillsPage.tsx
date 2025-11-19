import { Code, ShoppingCart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsPage() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: 'AI | Generative AI',
      icon: <Sparkles className="text-primary" size={32} />,
      color: 'primary',
      skills: [
        'AI Integration',
        'Generative AI',
        'App Development',
        'AI-Powered SaaS Development',
        'No-Code & Low-Code Development with AI',
        'Prompt Engineering & LLM Reasoning'
      ],
    },
    {
      title: t('skills.webDev'),
      icon: <Code className="text-primary" size={32} />,
      color: 'primary',
      skills: [
        'HTML / HTML5',
        'CSS / CSS3',
        'JavaScript',
        'Bootstrap',
        'jQuery',
        'Responsive Web Design',
        'Front-End Development',
        'Website Testing and Deployment',
        'Web Design/Prototyping'
      ],
    },
    {
      title: 'E-Commerce Solutions',
      icon: <ShoppingCart className="text-primary" size={32} />,
      color: 'primary',
      skills: [
        'Shopify Store Management',
        'Shopify Theme Development',
        'Product Research',
        'Dropshipping',
        'Google Ads (Store Optimization)',
        'Conversion Optimization',
        'Listing Optimization'
      ],
    },
  ];

  const additionalTools = [
    'Supabase',
    'Canva',
    'Notion',
    'Trello',
    'Asana',
    'Hands-on Windows troubleshooting and support'
  ];


  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-foreground mb-4">{t('skills.title')}</h1>
          <p className="text-muted-foreground">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-foreground">{category.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="px-4 py-2 border-primary/20 hover:bg-primary/10">
                            <CheckCircle2 size={16} className="mr-2 text-primary" />
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="mt-8 border-primary/20 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">{t('skills.additionalTools')}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {t('skills.additionalToolsDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {additionalTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="outline" className="px-4 py-2 border-primary/20 hover:bg-primary/10">
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
