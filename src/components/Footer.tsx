import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Dumbbell className="h-8 w-8" />
              <span>FitFlow</span>
            </div>
            <p className="text-muted-foreground">
              Your journey to a healthier, stronger you starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/workouts" className="text-muted-foreground hover:text-primary transition-colors">
                  Workouts
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@fitflow.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mon - Fri: 6:00 AM - 10:00 PM</li>
              <li>Saturday: 7:00 AM - 9:00 PM</li>
              <li>Sunday: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FitFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
