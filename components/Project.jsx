// components/AboutMe.js
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  const projects = [
    {
      name: "Table",
      description: "Creating intricate 3D models through development using Blender, a versatile and powerful 3D modeling software.",
      imageSrc: "/table.png", // Replace with your image URL
      url: "/table",
    },
    {
      name: "Sence",
      description: "Animating a soda cap elegantly unscrewing and revealing a cube glass, showcasing Blender's dynamic development capabilities.",
      imageSrc: "/scene.gif",
      url: "/sence", // Replace with your image URL
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gray-100 p-8" id="web">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">WEB3D</h2>
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
