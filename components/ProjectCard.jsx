const ProjectCard = ({ name, description, imageSrc }) => {
    return (
      <div className="mb-8">
        <img
          src={imageSrc} // Replace with your image URL
          alt={name}
          className="rounded-lg w-full h-auto"
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;