import { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? t('contact.error'));
      }

      toast.success(t('contact.success'));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Failed to send contact message', error);
      const message = error instanceof Error ? error.message : t('contact.error');
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-foreground mb-4">{t('contact.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contact.sendMessage')}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t('contact.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.namePlaceholder')}
                      required
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      required
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder')}
                      rows={6}
                      required
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.sending')
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        {t('contact.sent')}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        {t('contact.send')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contact.connectWith')}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t('contact.connectSubtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.a
                  href="https://www.linkedin.com/in/orges-isufi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground">{t('contact.linkedin')}</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/orges-i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground">{t('contact.github')}</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:orgesisufi1@hotmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground">Email</p>
                  </div>
                </motion.a>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contact.lookingFor')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <motion.div
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{t('contact.aiProjects')}</span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{t('contact.saasDev')}</span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{t('contact.ecommSolutions')}</span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{t('contact.fullTime')}</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
