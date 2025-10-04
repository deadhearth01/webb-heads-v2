import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQ0ODg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU5NTU4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Emily Watson',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1752650733757-bcb151bc2045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyfGVufDF8fHx8MTc1OTU1ODgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'James Park',
    role: 'Product Strategist',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk1MDk5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented people behind the pixels. We're designers, developers, and dreamers united by a passion for digital excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 inline-block">
                <div className="w-32 h-32 ring-4 ring-background group-hover:ring-primary/20 transition-all rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-3">{member.role}</p>
              <div className="flex gap-2 justify-center">
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <Linkedin size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <Twitter size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
