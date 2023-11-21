// components/AboutMe.js
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Description for Project 1. Lorem ipsum...",
      imageSrc: "/project1.jpg", // Replace with your image URL
    },
    {
      name: "Project 2",
      description: "Description for Project 2. Lorem ipsum...",
      imageSrc: "/project2.jpg", // Replace with your image URL
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
