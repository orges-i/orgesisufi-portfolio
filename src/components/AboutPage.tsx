import { GraduationCap, Languages, MapPin, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from 'figma:asset/46ec34ed9c16ed2478710595d308ac5e6d75c204.png';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-foreground mb-6">{t('about.title')}</h1>
          
          {/* Profile Image */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <motion.div
              className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profileImage}
                alt="Orges Isufi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              className="flex-1 prose prose-lg max-w-none"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-muted-foreground">
                {t('about.paragraph1')}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-muted-foreground">
              {t('about.paragraph3')}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="p-2 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <img 
                      src="https://www.ubt-uni.net/wp-content/themes/university-of-business-and-technology/repository/logo.png.webp" 
                      alt="UBT College" 
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                  <CardTitle className="text-foreground">{t('about.education')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground">{t('about.degree')}</p>
                <div className="space-y-1">
                  <p className="text-muted-foreground">{t('about.university')}</p>
                  <p className="text-muted-foreground">{t('about.degreeText')}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-4">
                  <MapPin size={16} />
                  <span>{t('about.location')}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="p-2 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Languages className="text-primary" size={28} />
                  </motion.div>
                  <CardTitle className="text-foreground">{t('about.languages')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-foreground">{t('about.albanian')}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {t('about.native')}
                      </Badge>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-foreground">{t('about.english')}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {t('about.proficient')}
                      </Badge>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-foreground">{t('about.turkish')}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {t('skills.beginner')}
                      </Badge>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
