export const portfolioData = {
  hero: {
    title: "CREATIVE DESIGNER & DEVELOPER",
    subtitle: "PERSONAL PORTFOLIO",
    description: "Crafting digital experiences at the intersection of design, code, and storytelling. Based between pixels and concepts.",
    buttonWorkText: "View Work",
    buttonContactText: "Contact Me"
  },
  projectCategories: {
    web:         { label: 'WEB',         coverImage: null },
    graphics:    { label: 'GRAPHICS',    coverImage: null },
    photography: { label: 'VIDEO',       coverImage: null },
  },
  projects: {
    web: [
      {
        id: "web-1",
        title: "Recipe Page",
        date: "1 MONTH",
        team: "Solo",
        description: "Our first web development oriented project to start getting HTML and CSS skills.",
        tools: ["HTML", "CSS"],
        link: "#",
        media: [
          { type: 'video', src: '/projects/mandatory-assignment.mp4', poster: '/projects/recipe-thumbnail.jpg' },
        ]
      },
      {
        id: "web-2",
        title: "Lions Brother Heart",
        date: "3 WEEKS",
        team: "Solo",
        description: "This website was developed as our first semester exam project.",
        tools: ["HTML", "CSS"],
        link: "#",
        media: [
          { type: 'video', src: '/projects/videoo.mp4', poster: '/projects/lion-preview.png' },
        ]
      }
    ],
    graphics: [
      {
        id: "graphic-1",
        title: "The Brothers Lion Heart Poster",
        date: "1ST SEMESTER",
        team: "Solo",
        description: "This poster was created by me in Photoshop as a part of our 1st semester project in the academy.",
        tools: ["Photoshop"],
        link: "#",
        media: [
          { type: 'image', src: '/projects/poster.jpg', alt: 'The Brothers Lion Heart Poster' },
        ]
      }
    ],
    photography: [
      {
        id: "photo-1",
        title: "Esbjerg In November",
        date: "1 WEEK",
        team: "Solo",
        description: "This video was made for our school project where we needed to present our city where we study.",
        tools: ["Premiere Pro"],
        link: "#",
        media: [
          { type: 'video', src: '/projects/esbjerg.mp4', poster: '/projects/ESBJERG.png' },
        ]
      },
      {
        id: "photo-2",
        title: "Sea Commercial",
        date: "1 WEEK",
        team: "Solo",
        description: "In this project we needed to create a commercial for our university.",
        tools: ["Premiere Pro"],
        link: "#",
        media: [
          { type: 'video', src: '/projects/sea.mp4', poster: '/projects/SEA-COM.jpg' },
        ]
      }
    ]
  },
  journey: [
    {
      id: "j-1",
      year: "PRESENT",
      title: "Multimedia Design",
      institution: "AP Degree Program",
      description: "AP degree in multimedia design web development, graphic design, photography, videography."
    },
    {
      id: "j-2",
      year: "2025",
      title: "International Baccalaureate",
      institution: "High School Education",
      description: "High school education."
    },
    {
      id: "j-3",
      year: "2025",
      title: "Academy \"STEP\"",
      institution: "Computer Software Development",
      description: "Computer software development academy."
    },
    {
      id: "j-4",
      year: "2024",
      title: "High School",
      institution: "Ukraine",
      description: "Secondary upper education in Ukraine."
    }
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/emil-kostenko/" },
    { name: "Instagram", url: "https://www.instagram.com/kostenko.emill/" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100068962952034&locale=ru_RU" }
  ],
  contact: {
    email: "kostenkoemil05@gmail.com",
    phone: "+4591933926"
  }
};
