import {
  FaLocationArrow,
  FaGithub,
  FaTwitter,
  FaRocket,
} from "react-icons/fa6";
import MagicButton from "./ui/magicButton";

// Mock data for social media
const socialMedia = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/PhucLam202/bifrost-mint-LST-learningVe" },

  { id: 2, icon: <FaTwitter />, link: "https://x.com/PLtheCoder" },
];
const Footer = () => {
  return (
    <footer
      className="relative w-full pt-20 pb-10 bg-[#1a0826] overflow-hidden"
      id="contact"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-fuchsia-500/10"></div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
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
            className="absolute w-1 h-1 bg-fuchsia-400 rounded-full animate-pulse"
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
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center px-4 md:px-20">
        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
            Unlock Your Staking Potential Now
          </h1>

          <p className="text-fuchsia-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Unlock your staking potential with our cutting-edge liquid staking
            solution, trusted by thousands of users.
          </p>

          <div className="relative">
            <MagicButton
              title="Start Earning Now"
              icon={<FaRocket />}
              position="right"
              href="https://bifrost-mint-lst-learning-ve-phuclpst09495-gmailcoms-projects.vercel.app/dashboard"
              aria-label="Start earning with Dotheon"
              otherClasses="px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent mb-12"></div>

        {/* Bottom section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-fuchsia-300 text-xl md:text-base">
            <span className="font-mono">Bifrhub</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="group relative w-12 h-12 rounded-lg bg-gradient-to-br from-purple-800 to-fuchsia-900 border border-purple-700 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-400/25"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative z-10  group-hover:text-fuchsia-400 transition-colors duration-300 text-lg">
                  {item.icon}
                </div>

                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-lg border border-fuchsia-400/0 group-hover:border-fuchsia-400/50 transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom glowing line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-fuchsia-400/30"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/30"></div>
    </footer>
  );
};

export default Footer;
