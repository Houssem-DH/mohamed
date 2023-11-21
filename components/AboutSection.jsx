// components/AboutMe.js
const AboutMe = () => {
    return (
      <div>
      <section className="bg-gray-100 p-8" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="/mohamed.jpg" // Replace with your image URL
              alt="Profile"
              className="rounded-full w-full md:w-64 h-auto border-4 border-gray-200"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 text-lg">
            Hello! My name is Mohammed Benadad. I am a software developer based in Setif.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
            I am passionate about crafting efficient and creative software solutions. In my free time, I enjoy diving into the world of open-source projects and staying updated with the latest developments in the tech industry.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
            Feel free to reach out to me at benaddaddhia@gmail.com if you want to connect or collaborate on any exciting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
    <br /><br /><br />
    </div>
    );
  };
  
  export default AboutMe;
  