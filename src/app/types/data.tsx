export const navItems = [
  { name: "About", link: "#bento" },
  { name: "Projects", link: "#project" },
  { name: "Eperience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Rust",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
    ],
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
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

export const workExperience = [
  {
    id: 1,
    title: "High-Performance Backend & API Development",
    desc: "Built and optimized RESTful and gRPC APIs using Rust and Node.js, ensuring scalability and security for web applications.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development & User Experience",
    desc: "Designed and implemented interactive, responsive user interfaces with React.js and Next.js, focusing on performance and seamless user experience.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "LLM Integration & Optimization",
    desc: "Researched and deployed LLM integration solutions into applications, including query optimization, data processing, and improving response accuracy.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "DevOps Infrastructure Deployment & Management",
    desc: "Set up and maintained CI/CD pipelines using Docker and Kubernetes. Managed databases (PostgreSQL, MongoDB) and deployed applications on cloud platforms.",
    thumbnail: "/exp4.svg",
  },
];
