const RESUME = {
  name: "JOHN LLOYD PRADO",
  title: "IT Specialist",
  tagline: "Helping people and systems work better together.",
  location: "Calamba City, Laguna, Philippines",
  email: "johnlloyd.prado1@gmail.com",
  phone: "+63 968 *** 2034",
  resumePdf: "resume.pdf",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/john-lloyd-prado-a21584302", icon: "linkedin" },
    { label: "Email", url: "mailto:johnlloyd.prado1@gmail.com", icon: "mail" },
  ],

  about: `Experienced IT Specialist with expertise in ERP Oracle administration, NAS backup, server and network management, and user support. Proven ability to troubleshoot hardware and software issues, optimize system performance, and reduce downtime.

At Mix Plant, Inc., I support desktops, laptops, printers, and mobile devices; administer Microsoft 365 and Oracle ERP; manage backups and server infrastructure; and help teams stay productive through reliable technology.`,

  experience: [
    {
      role: "IT Specialist",
      company: "Mix Plant, Inc.",
      period: "July 2024 — Present",
      location: "Calamba City, Laguna",
      highlights: [
        "Continued ERP Oracle administration, M365 support, and infrastructure responsibilities following promotion from IT Staff.",
        "Provide technical support for desktops, laptops, printers, mobile devices, and other IT equipment.",
        "Microsoft 365 Administrator; ERP Oracle System Administrator including user creation and responsibility assignment.",
        "Oracle Data Encoder: suppliers, customers, finished goods accounts; MT940 bank deposit uploads.",
        "NAS backup procedures, server administration, and networked computing systems.",
        "Support for meeting room technology, video conferencing, and remote access (Zoom & MS Teams).",
      ],
    },
    {
      role: "IT Staff",
      company: "Mix Plant, Inc.",
      period: "June 2022 — July 2024",
      location: "Calamba City, Laguna",
      highlights: [
        "Installed new PC workstations and laptops with Windows 11 and Microsoft Office Home & Business 2021–2024.",
        "Supported user acceptance testing for procure-to-pay processes.",
        "Installed and configured Linux operating systems, including Ubuntu.",
        "Gained hands-on experience with NAS storage management and backup procedures.",
      ],
    },
  ],

  projects: [
    {
      name: "Batching Process Control System",
      description:
        "Digitalization of the Batching Control Process Form for Mix Plant production. Built a web-based QMS with PHP and MySQL on IIS featuring batch data entry, pre-shift raw materials checklist, multi-batch product details, canvas signatures, and role-based workflow (Batcher → Foreman → QA → Production Head). Includes dashboard, review queue, user management, reports, and Excel export.",
      tags: ["PHP", "MySQL", "IIS", "Web Application", "Digitalization"],
      image: "images/batching-login.png",
      imageAlt: "Login page of the Batching Process Control System (LB-FM-14)",
      url: "",
      repo: "",
    },
    {
      name: "Sensory Evaluation Form (9-Point Hedonic Test)",
      description:
        "Developed and deployed a digital sensory evaluation system for R&D using Microsoft Forms, SharePoint Lists, and Power Automate. Standardizes product testing on a 9-point hedonic scale (color, aroma, mouthfeel, taste, and overall acceptability), automates response routing and storage, and replaces manual encoding for faster, more consistent analysis.",
      tags: ["Microsoft Forms", "SharePoint", "Power Automate", "Microsoft 365"],
      image: "images/sensory-evaluation-form.png",
      imageAlt: "Microsoft Forms sensory evaluation sheet (9-point hedonic test)",
      url: "",
      repo: "",
    },
    {
      name: "Double-Authenticator Wi-Fi Access System",
      description:
        "Developed a double-authenticator Wi-Fi access system using FreeRADIUS on Linux to strengthen network security and control user access.",
      tags: ["FreeRADIUS", "Linux", "Networking", "Security"],
      url: "",
      repo: "",
    },
  ],

  skills: [
    {
      category: "Technical",
      items: [
        "Microsoft 365",
        "Oracle ERP",
        "Hardware troubleshooting",
        "Windows 11 deployment",
        "Linux / Ubuntu",
        "NAS & backups",
        "HTML & CSS",
        "SQL",
        "Power Automate",
      ],
    },
    {
      category: "Infrastructure & Systems",
      items: [
        "Server administration",
        "Networked computing systems",
        "ERP user & data management",
        "Video conferencing support",
        "Basic Linux commands",
      ],
    },
    {
      category: "Professional",
      items: [
        "Customer service orientation",
        "Attention to detail",
        "Time management",
        "Critical thinking",
        "Adaptability",
        "Initiative & continuous learning",
      ],
    },
  ],

  education: [
    {
      degree: "B.S. Information Technology — Business Analytics",
      school: "Batangas State University (Malvar Campus)",
      period: "2018 — 2022",
      note: "Bachelor of Science in Information Technology, major in Business Analytics.",
    },
  ],
};
