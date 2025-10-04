import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  'User-centered design approach',
  'Agile development methodology',
  'Transparent communication',
  'Continuous innovation',
  'Long-term partnerships',
  'Quality over quantity',
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[64px] font-bold">About Webbheads</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're a passionate team of digital creators who believe in the power of great design 
              and clean code. Since our founding, we've helped dozens of businesses transform their 
              digital presence and achieve their goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our approach combines strategic thinking, creative excellence, and technical expertise 
              to deliver solutions that don't just look good – they work brilliantly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span>{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742440710402-721332ea7898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTk0NjcyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our workspace"
                className="w-full h-full object-cover aspect-square rounded-[50px]"
              />
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
