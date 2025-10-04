import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <ImageWithFallback
                  src="https://framerusercontent.com/images/lmqHUDA6OlMMqYvyUq5QoqlIwLA.png"
                  alt="Webbheads Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl">Webbheads</span>
            </div>
            <p className="text-muted-foreground">
              Crafting digital experiences that inspire and engage.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-foreground transition-colors">Team</a></li>
              <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Webbheads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
