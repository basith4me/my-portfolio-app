import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import trn1 from "../assets/trn-1.png";
import trn2 from "../assets/trn-2.png";
import trn3 from "../assets/trn-3.png";
import ee1 from "../assets/ee-1.png";
import ee2 from "../assets/ee-2.png";
import ee3 from "../assets/ee-3.png";

const Projects = () => {
  const projects = [
    {
      title: "TournamentsLK - sports website",
      description:
        "TournamentsLK is a sports platform that connects players and teams with tournament organizers. Players can discover and join tournaments that match their interests, while organizers can create and publish tournaments through the platform. The system includes secure user authentication using JWT, a dedicated dashboard for organizers to manage their tournaments, and an admin panel with full control over the entire system. User feedback is seamlessly sent to administrators via EmailJS to ensure effective communication and continuous improvement.s",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "emailjs",
      ],
      // github: "https://github.com/yourusername/project1",
      live: "https://tournaments-lk-1.onrender.com/",
      featured: true,
      images: [
        trn1,
        trn2,
        trn3,
      ],
    },
    {
      title: "Elite Engineering - construction company website",
      description:
        "Elite Engineering is a construction company website that showcases the company's services, projects, and expertise in the construction industry. allowing visitors to explore ongoing projects and company news.",
      technologies: ["React", "Framer motion", "TailwindCSS", "vite"],
      github: "https://github.com/yourusername/project2",
      live: "https://eliteengineeringdemoapp.netlify.app/",
      featured: true,
      images: [
        ee1,
        ee2,
        ee3,
      ],
    },
    {
      title: "React Jobs Job Portal",
      description:
        "A Static website that allows developers to explore job opportunities. Json server is used as mock backend to fetch job data and display job listings.",
      technologies: ["React.js", "TailwindCSS", "Vite", "Json-Server"],
      github: "https://github.com/basith4me/react_jobs.git",
      live: "https://project3-demo.com",
      featured: false,
    },
    {
      title: "Sticky Notes App",
      description:
        "Sticky Notes App is a web application that allows users to create, edit, and manage sticky notes.",
      technologies: ["React", "TailwindCSS", "Appwrite", "Vite"],
      github: "https://github.com/basith4me/stickyNoteApp.git",
      live: "https://project4-demo.com",
      featured: false,
    },
    {
      title: "Car Rental Platform",
      description:
        "Car Rental Platform is a web application that allows users to browse, book, and manage car rentals. ",
      technologies: ["html", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/basith4me/car-rental-app.git",
      live: "https://project5-demo.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const [currentImageIndex, setCurrentImageIndex] = useState(
    featuredProjects.map(() => 0)
  );

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] =
        (newIndexes[projectIndex] + 1) %
        featuredProjects[projectIndex].images.length;
      return newIndexes;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] =
        newIndexes[projectIndex] === 0
          ? featuredProjects[projectIndex].images.length - 1
          : newIndexes[projectIndex] - 1;
      return newIndexes;
    });
  };

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] = imageIndex;
      return newIndexes;
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter flex items-center">
            <span className="text-primary font-mono mr-4">03.</span>
            Things I've Built
            <span className="ml-8 h-px bg-dark-lighter flex-grow max-w-xs"></span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center group ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Project Image/Background */}
              {/* <div className={`md:col-span-7 ${index % 2 === 0 ? '' : 'md:col-start-6'}`}>
                <div className="relative h-80 bg-dark-light rounded border border-dark-lighter overflow-hidden group-hover:border-primary transition-colors duration-300">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <FiFolder className="w-20 h-20 text-primary/20" />
                  </div>
                </div>
              </div> */}

              <div
                className={`md:col-span-7 ${
                  index % 2 === 0 ? "" : "md:col-start-6"
                }`}
              >
                <div className="relative h-80 bg-dark-light rounded border border-dark-lighter overflow-hidden group-hover:border-primary transition-colors duration-300">
                  {/* Image Display */}
                  <div className="relative w-full h-full">
                    {project.images.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          currentImageIndex[index] === imgIdx
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imgIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => prevImage(index)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark/80 hover:bg-primary/80 text-slate-lighter p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => nextImage(index)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark/80 hover:bg-primary/80 text-slate-lighter p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={20} />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => goToImage(index, imgIdx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex[index] === imgIdx
                            ? "bg-primary w-8"
                            : "bg-slate/50 hover:bg-slate"
                        }`}
                        aria-label={`Go to image ${imgIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 0
                    ? "md:col-start-6 md:-ml-12"
                    : "md:col-start-1 md:-mr-12"
                } relative z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-slate-lighter mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="bg-dark-light p-6 rounded shadow-lg border border-dark-lighter">
                  <p className="text-slate leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mt-4 font-mono text-sm text-slate ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 mt-4 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-primary transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub size={22} />
                  </a> */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-primary transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-lighter mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-light p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-dark-lighter hover:border-primary flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <FiFolder className="text-primary w-10 h-10" />
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                    {/* <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a> */}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-lighter mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
