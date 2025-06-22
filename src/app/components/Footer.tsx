import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import MagicButton from "./ui/magicButton";

// Mock data for social media
const socialMedia = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/PhucLam202" },
  { id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/phuclam-dante" },
  { id: 3, icon: <FaTwitter />, link: "https://x.com/PLtheCoder" },
];
const Footer = () => {
  return (
    <footer
      className="relative w-full pt-20 pb-10 bg-black overflow-hidden"
      id="contact"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10"></div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glowing borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center px-4 md:px-20">
        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight">
            Ready to take yourdigital presence to the next level?
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Reach out to me today and let&apos;s discuss how I can help you achieve
            your goals in the digital realm.
          </p>

          <div className="relative">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow className="text-emerald-400" />}
              position="right"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mb-12"></div>

        {/* Bottom section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-gray-400 text-sm md:text-base">
            <span className="font-mono">&copy; 2025 Lam Thanh Phuc</span>
            <div className="mt-1 text-xs text-emerald-400/60">
              Crafted with cyberpunk aesthetics
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="group relative w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/25"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 text-lg">
                  {item.icon}
                </div>

                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-lg border border-emerald-400/0 group-hover:border-emerald-400/50 transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom glowing line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-400/30"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400/30"></div>
    </footer>
  );
};

export default Footer;
