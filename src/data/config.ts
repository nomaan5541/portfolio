const config = {
  title: "Nomaan Khan | Future Cyber Security Engineer",
  description: {
    long: "Motivated Computer Science Engineering graduate with strong skills in Python, Flask, and SQL. Passionate about Full-Stack Development and Cyber Security, aiming to build secure, scalable, and future-ready applications while continuously learning modern technologies.",
    short:
      "Nomaan Khan is a Computer Science Engineering graduate passionate about Full-Stack Development and Cyber Security.",
  },
  keywords: [
    "Nomaan Khan",
    "virus_boss",
    "portfolio",
    "Cyber Security",
    "AI",
    "Computer Science",
    "Full-Stack Developer",
    "React",
    "Python",
    "Flask",
    "Node.js",
    "Socket.IO",
    "Web Development",
    "Future Technologies",
  ],
  author: "Nomaan Khan",
  email: "nomaankhangta@gmail.com",
  site: "https://viruszhunter.blogspot.com",

  // for github stars button
  githubUsername: "nomaan5541",
  githubRepo: "PortfolioWebsite", // Assuming they might want to use this repo name

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "", // User didn't provide Twitter
    linkedin: "", // User didn't provide LinkedIn url but asked to optimize for it. I'll leave empty string.
    instagram: "https://instagram.com/virus_boss",
    facebook: "", // User didn't provide Facebook
    github: "https://github.com/nomaan5541",
    youtube: "https://youtube.com/@virusbosss", // Added YouTube
    blog: "https://viruszhunter.blogspot.com", // Added Blog
  },
};
export { config };
