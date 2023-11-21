// components/AboutMe.js
const AboutMe = () => {
    return (
      <section className="bg-gray-100 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src="/profile-picture.jpg" // Replace with your image URL
                alt="Profile"
                className="rounded-full w-full md:w-64 h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700">
                Hello! My name is [Your Name]. I am a [Your Profession] based in [Your Location].
              </p>
              <p className="text-gray-700 mt-4">
                I am passionate about [Your Interests or Skills]. In my free time, I enjoy [Your Hobbies or Activities].
              </p>
              <p className="text-gray-700 mt-4">
                Feel free to reach out to me at [Your Email] if you want to connect or collaborate!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  