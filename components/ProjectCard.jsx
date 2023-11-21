import Link from "next/link";
const ProjectCard = ({ name, description, imageSrc , url}) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
        <Link href={url}>
      <img
        src={imageSrc} // Replace with your image URL
        alt={name}
        className="w-full h-48 object-cover"
      />
      </Link>
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
    );
  };
  
  export default ProjectCard;