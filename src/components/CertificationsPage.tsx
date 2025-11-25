import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import fmaLogo from '../assets/fmalogo.png';
import cacttusLogo from '../assets/cactuslogo.png';
import mtfLogo from '../assets/mtfinstitute.png';
import { Link } from 'react-router-dom';

export function CertificationsPage() {
  const { t } = useLanguage();
  
  const certifications = [
    {
      title: t('certifications.aiSpecialist.title'),
      issuer: 'Future Minds Academy',
      issuerUrl: 'https://futureminds.io/',
      logo: fmaLogo,
      date: '2025',
      description: t('certifications.aiSpecialist.description'),
      skills: [
        'AI Integration',
        'Prompt Engineering',
        'Full-Stack Development',
        'SaaS Architecture',
        'Cursor',
        'Bolt',
        'Lovable',
        'Supabase',
        'APIs',
        'Gemini Nanobanana',
        'VEO3',
        'Windsurf',
      ],
      project: t('projects.eduflow.title'),
      projectDescription: t('certifications.aiSpecialist.projectDescription'),
      projectLink: '/projects#eduflow',
      featured: true,
    },
    {
      title: t('certifications.frontend.title'),
      issuer: 'Cacttus Education',
      logo: cacttusLogo,
      date: '2021',
      description: t('certifications.frontend.description'),
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'jQuery',
        'Responsive Design',
        'Website Testing and Deployment',
      ],
      certificateUrl: 'https://drive.google.com/file/d/1wJFYfvbDJwRKORN2GM2KPyRAIW29_jGl/view',
      featured: false,
    },
    {
      title: t('certifications.efset.title'),
      issuer: 'EF SET',
      logo: 'https://cert.efset.org/_next/static/media/logo.06bf8183.svg',
      date: '2023',
      description: t('certifications.efset.description'),
      skills: ['English Language', 'Written Communication', 'Verbal Communication'],
      certificateUrl: 'https://cert.efset.org/Yr5AoT',
      featured: false,
    },
    {
      title: 'Digital Marketing Fundamentals',
      issuer: 'MTF Institute',
      logo: mtfLogo,
      date: '2023',
      description: 'Completed online course covering basic concepts in digital marketing.',
      skills: [
        'Digital Marketing Fundamentals',
        'Landing Page Basics / Optimization',
        'A/B Testing Awareness',
        'Social Media & Email Marketing Awarness',
      ],
      certificateUrl: 'https://drive.google.com/file/d/1w4prs1EB0lJrk35KC2X2XQ3c-yW6ZFPU/view',
      featured: false,
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
          <h1 className="text-foreground mb-4">{t('certifications.title')}</h1>
          <p className="text-muted-foreground">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`hover:shadow-xl transition-all duration-300 ${
                  cert.featured ? 'border-primary border-2' : 'border-primary/20'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-start gap-3 flex-1">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-lg mt-1 flex items-center justify-center min-w-[60px] min-h-[60px]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {cert.logo ? (
                          <img 
                            src={cert.logo} 
                            alt={cert.issuer} 
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <Award className="text-primary" size={24} />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <CardTitle className="text-foreground">{cert.title}</CardTitle>
                          {cert.featured && (
                            <Badge className="bg-primary text-primary-foreground">
                              {t('certifications.featured')}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {cert.issuerUrl ? (
                            <a 
                              href={cert.issuerUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors hover:underline"
                            >
                              {cert.issuer}
                            </a>
                          ) : (
                            cert.issuer
                          )}
                        </CardDescription>
                        <div className="flex items-center gap-1 text-muted-foreground mt-2">
                          <Calendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cert.description}</p>

                  <div>
                    <h4 className="text-foreground mb-3">{t('certifications.skillsCovered')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {cert.project && (
                    <motion.div
                      className="bg-primary/5 p-4 rounded-lg border border-primary/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="text-foreground mb-2">
                            {t('certifications.capstoneProject')}:{' '}
                            {cert.projectLink ? (
                              <Link
                                to={cert.projectLink}
                                className="text-primary hover:underline font-semibold"
                              >
                                {cert.project}
                              </Link>
                            ) : (
                              cert.project
                            )}
                          </h4>
                          <p className="text-muted-foreground mb-0">
                            {cert.projectDescription}
                          </p>
                        </div>
                        {cert.projectLink && (
                          <Link
                            to={cert.projectLink}
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-background px-4 py-2 text-primary hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            {t('projects.viewProject')}
                            <ExternalLink size={16} />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-background px-4 py-2 hover:bg-primary/10 hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      {t('certifications.viewCertificate')}
                      <ExternalLink size={16} />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
