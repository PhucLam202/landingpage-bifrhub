import { FaChartLine, FaSearch, FaLink, FaCoins, FaRobot, FaFolderOpen } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#bento" },
  { name: "Projects", link: "#project" },
  { name: "Eperience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    icon: <FaChartLine />,
    title: "Analytics",
    description: (
      <>
        <div className="font-bold text-base mb-1">Protocol Analytics</div>
        <div className="text-xs">Track TVL, APY, and performance metrics across all major liquid staking protocols.</div>
      </>
    ),
    className: "",
  },
  {
    id: 2,
    icon: <FaSearch />,
    title: "Search",
    description: (
      <>
        <div className="font-bold text-base mb-1">Smart Search</div>
        <div className="text-xs">Find protocols instantly and get real-time updates on performance.</div>
      </>
    ),
    className: "",
  },
  {
    id: 3,
    icon: <FaLink />,
    title: "Integration",
    description: (
      <>
        <div className="font-bold text-base mb-1">Bifrost Integration</div>
        <div className="text-xs">Direct access to Bifrost's liquid staking pools with special benefits.</div>
      </>
    ),
    className: "",
  },
  {
    id: 4,
    icon: <FaCoins />,
    title: "Staking",
    description: (
      <>
        <div className="font-bold text-base mb-1">LST Minting</div>
        <div className="text-xs">Mint Liquid Staking Tokens with one click and track your yields.</div>
      </>
    ),
    className: "",
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "AI Assistant",
    description: (
      <>
        <div className="font-bold text-base mb-1">AI Portfolio Assistant</div>
        <div className="text-xs">Get personalized staking recommendations and automated optimization.</div>
      </>
    ),
    className: "",
  },
  {
    id: 6,
    icon: <FaFolderOpen />,
    title: "Portfolio",
    description: (
      <>
        <div className="font-bold text-base mb-1">Portfolio Management</div>
        <div className="text-xs">Track all your staking positions and monitor yields in one place.</div>
      </>
    ),
    className: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aurafi",
    des: "The AI-Powered Web3 Portfolio Assistant project is an intelligent chatbot designed to help users effectively manage their Web3 portfolios. By leveraging the power of Artificial Intelligence (AI), this chatbot is capable of analyzing your wallet activity on the SUI blockchain and providing insightful advice on risk management, staking opportunities, and specific position analyses.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg","/sui.svg", "/openai.svg", "/tail.svg"],
    linkgit: "https://github.com/PhucLam202/AuraFi-SuiHackthon-PV",
    linkVideo: "",
  },
  {
    id: 2,
    title: "SuiBeacon - Nix Package CLI",
    des: "A fast and modular CLI tool for managing Nix packages with REST API support and cloud deployment.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/mongo.svg", "/nix.svg", "/docker.svg"],
    linkgit: "https://github.com/PhucLam202/SuiBeacon-BE",
    linkVideo: "https://youtu.be/1wMs72O5vq4",
  },
  {
    id: 3,
    title: "SharkBling- Sui-based Prediction Market",
    des: "Decentralized social prediction dApp powered by Sui blockchain with fullstack smart contract and REST API.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/ts.svg", "/sui.svg", "/openai.svg", "/re.svg"],
    linkgit: "https://github.com/PhucLam202/SharkBling-BE",
    linkVideo: "https://www.youtube.com/watch?v=TRULMrwT-bY",
  },
  {
    id: 4,
    title: "BubbleDOT - AI x Polkadot Code Generator",
    des: "AI-powered IDE assistant that generates full project folders, smart contract code, and deploys directly to Polkadot ecosystem.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/ts.svg", "/aws.svg", "/polkadot.svg"],
    linkgit: "https://github.com/PhucLam202/Polkadot-Hackathon2024",
    linkVideo: "https://youtu.be/7a5TuQ3yXY8",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

