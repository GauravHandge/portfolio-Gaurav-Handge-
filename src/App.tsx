import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Award, Briefcase, Medal, Trophy } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactDetails, setShowContactDetails] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    setShowContactDetails(true);
    window.open('mailto:gauravhandge770903@gmail.com?subject=Project%20Inquiry&body=Hi%20Gaurav,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,');
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")'
    }}>
      {/* Navigation */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">GH</span>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-white hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</a>
              <a href="#session" className="text-white hover:text-blue-400 transition-colors">Session</a>
              <a href="#Participation" className="text-white hover:text-blue-400 transition-colors">Participation</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 bg-black/20"></section>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img src="./1737093869216.jpg" alt="Passport Photograph"> 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-500/10 backdrop-blur-sm -z-10 transform scale-110"></div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Gaurav Handge
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              AI/ML Developer , Data Science & Cyber Security Specialist
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          "🌟 An enthusiastic and dedicated professional specializing in Artificial Intelligence (AI) 🤖, Machine Learning (ML) 📊, Data Science 📈, and Cybersecurity 🔒. With a strong academic foundation 📚 and hands-on experience in diverse projects, I've developed innovative solutions in areas like smart agriculture 🌾, quantum computing ⚛️, defense technology 🛡️, and digital security 🔐.

          💡 My expertise lies in building intelligent systems that combine data-driven insights 📊 and robust algorithms 🧠 to solve complex real-world challenges 🌍."**            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/GauravHandge" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/gaurav-handge-865354267/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:gauravhandge770903@gmail.com" className="social-link">
                <Mail className="w-6 h-6" />
              </a>
              <a href="/Gaurav Handge resume.pdf" download className="social-link" title="Download Resume">
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section id="experience" className="py-20 bg-black/20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-16">
      Professional Experience
    </h2>
    <div className="max-w-4xl mx-auto space-y-8">
      {/* AI/ML Developer Section */}
      <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl flex items-start justify-between">
        {/* Text Content */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">AI/ML Developer</h3>
              <p className="text-blue-400">G-Tech(Nashik) India</p>
            </div>
            <span className="text-gray-400">2023 - 2024</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed and implemented machine learning models for various applications</li>
            <li>Led a team of 4 developers in creating innovative AI solutions</li>
            <li>Improved model accuracy by 35% through optimization techniques</li>
          </ul>
        </div>
        {/* Image */}
        <img
          src="/gtech_institute_logo.jpg"
          alt="AI/ML Developer"
          className="w-40 h-40 rounded-object-cover ml-6"
        />
      </div>

      {/* Cyber Security Intern Section */}
      <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl flex items-start justify-between">
        {/* Text Content */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Cyber Security Intern</h3>
              <p className="text-blue-400">Palo Alto(Bengaluru)</p>
            </div>
            <span className="text-gray-400">(Aug)2024</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Conducted security audits and vulnerability assessments</li>
            <li>Developed automated security testing scripts</li>
            <li>Implemented security protocols for sensitive data protection</li>
          </ul>
        </div>
        {/* Image */}
        <img
          src="https://cdn.prod.website-files.com/61a1122d4f5629ccdeb44eee/624258ed4a33c9b161158aa2_Palo%20Alto%20Log.png"
          alt="Cyber Security Intern"
          className="w-50 h-40 rounded-object-cover ml-6"
        />
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-16">Projects
      <p className="text-2xl font-bold text-center text-white mt-5">[All Projects available on GitHub.]</p>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

      {/* Travel and Tourism Platform */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/places-to-visit-in-north-india.jpg" 
            alt="Travel Platform"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Travel and Tourism Platform</h3>
          <p className="text-gray-300 mb-4">
            Transforming Travel Experiences with Cutting-Edge E-Commerce Solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">React.js</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">HTML/CSS</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">SQL</span>
          </div>
          <a 
            href="https://github.com/GauravHandge" 
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
      </div>

      {/* Krishi-Astra */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2021/04/170421_R150-Sparying-Pasture-C-Auto-spray-systems.jpg" 
            alt="Krishi-Astra"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Krishi-Astra</h3>
          <p className="text-gray-300 mb-4">
            A Smart AIML Hardware and Software Model for Fertilizer Recommendation and Artificial Pollination.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">ML Algorithm</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">IoT</span>
          </div>
          <a 
            href="https://github.com/GauravHandge" 
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
      </div>

      {/* Cyber Security Platform */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://media.istockphoto.com/id/682609888/photo/keylogger-eye-looks-at-viewer-concept.jpg?s=612x612&w=0&k=20&c=VCAnbGNh3Cl7B5LdOYsB0htMWU5eZKIGeFabuyMkI1k=" 
            alt="Cyber Security Platform"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Cyber Security Platform</h3>
          <p className="text-gray-300 mb-4">
            The program records keystrokes, demonstrating how easily malware can capture sensitive information using basic Python.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Connectivity</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Security</span>
          </div>
          <a 
            href="https://github.com/GauravHandge"
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
        </div>

      {/* SOBO: The ROBO */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://img.freepik.com/premium-photo/ultrarealistic-robot-praying-ram-mandir-ayodhya_1106493-74245.jpg" 
            alt="SOBO: The ROBO"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">SOBO: The ROBO</h3>
          <p className="text-gray-300 mb-4">
            A robot designed to provide detailed information about the location where it is placed, covering history and structure.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Robotics</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">AI</span>
          </div>
          <a 
            href="https://github.com/GauravHandge" 
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
      </div>

      {/* Smart Echo Hunter */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://hips.hearstapps.com/hmg-prod/images/constellation-frigate-concept-661cc56a1b1fd.jpg" 
            alt="Smart Echo Hunter"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Smart Echo Hunter</h3>
          <p className="text-gray-300 mb-4">
            AI-enabled autonomous bot capable of detecting and eliminating sound-based targets.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">AI</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Python</span>
          </div>
          <a 
            href="https://github.com/GauravHandge" 
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
      </div>

      {/* Blockchain Supply Chain */}
      <div className="group bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-all duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800" 
            alt="Blockchain Supply Chain"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Blockchain Supply Chain</h3>
          <p className="text-gray-300 mb-4">
            Optimizing supply chain management with decentralized blockchain solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Blockchain</span>
            <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">Decentralized</span>
          </div>
          <a 
            href="https://github.com/GauravHandge" 
            target="_blank" 
            className="text-blue-400 hover:underline mt-4 inline-block">View on GitHub
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

      {/*session*/}
   
      <section id="session" className="py-20 bg-black/20">
          
          
        
          <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Session</h2>
          <p className="text-2xl font-bold text-white mt-5">
            Welcome to the Session section.
            </p>
            <div className="flex space-x-4 justify-center">
              {/* Image 1 */}
              <div className="text-center">
                <img 
                  src="session1.jpg" 
                  alt="Image 1" 
                  className="rounded-lg shadow-lg"
                  style={{ width: '530px', height: '350px' }} 
                />
                <p className="text-xl font-bold text-white mt-2">
                    Cyber Security Session [Awareness about phishing attack]
                  </p>

              </div>

              {/* Image 2 */}
              <div className="text-center">
                <img 
                  src="session2.jpg" 
                  alt="Image 2" 
                  className="rounded-lg shadow-lg"
                  style={{ width: '500px', height: '350px' }} 
                />
                <p className="text-xl font-bold text-white mt-2">Cyber Security Session</p>
              </div>

              {/* Image 3 */}
              <div className="text-center">
                <img 
                  src="session 3.jpg" 
                  alt="Image 3" 
                  className="rounded-lg shadow-lg"
                  style={{ width: '500px', height: '350px' }} 
                />
                <p className="text-xl font-bold text-white mt-2">AIML Algorithum and Implementation session</p>
              </div>
            </div>
          </div>
          </section>


      {/* Achievements & Certifications Section */}
      <section id="Participation" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Participation & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-400" />
                Participation
              </h3>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Shodh 2K23</h4>
                  <p className="text-gray-300">National Level Project Competition</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">SNJB Ideation</h4>
                  <p className="text-gray-300">College level competition</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Innovation Award</h4>
                  <p className="text-gray-300">Recognized for Krishi-Astra project implementation</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Medal className="w-6 h-6 text-blue-400" />
                Certifications
              </h3>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">AI/ML For Geo-Data Analysis</h4>
                  <p className="text-gray-300">ISRO</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Geo-Data Sharing and cyber Security</h4>
                  <p className="text-gray-300">ISRO(Dehradun)</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Ethical Hacker Certificate</h4>
                  <p className="text-gray-300">Cisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
<section id="achievements" className="py-20 bg-black/20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
   
      Achievements
    </h2>

    <div className="space-y-12">
      {/* Achievement Item */}
      <div className="flex flex-col md:flex-row items-center bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg">
       {/* Image with Download Link */}
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
              {/* Image */}
              <img
                src="IMG_20250119_131021.jpg"
                alt="Achievement Photo"
                className="rounded-lg shadow-lg w-[300px] h-[500px] object-cover"
              />
              {/* Download Button */}
              <a
                href="/DownloadROC.aspx-1.pdf" // Replace with the actual path to your PDF file
                download="Copyright_Certificate.pdf" // The downloaded file's name
                className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Download Copyright PDF
              </a>
            </div>


        {/* Description */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h4 className="text-4xl font-semibold text-white">
            Successfully Granted Copyright
          </h4>
          <p className="text-gray-300 mt-4">
          <h5 className="text-2xl font-semibold text-white"></h5>
            Team KRISHI-ASTRA : FERTILIZER RECOMMENDATION SYSTEM.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h4 className="text-4xl font-semibold text-white">
           Other Achivements
          </h4>
          <p className="text-gray-300 mt-4">
          <h5 className="text-2xl font-semibold text-white"></h5>
            1.]  Winner of KAVACH competition[ISRO]
            <h6 className="text-2xl font-semibold text-white"></h6>
            2.]  2nd in SNJB Ideation competition
          </p>
          </div>
      </div>
      

      {/* Add More Achievements if needed */}
    </div>
  </div>
</section>

   
      {/* Contact Section */}
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-300">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className={`bg-black/40 backdrop-blur-sm p-8 rounded-xl transform transition-all duration-500 ${showContactDetails ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Details</h3>
                <img 
                  src="/Passport_Photograph (1).jpg" 
                  alt="Passport Photograph" 
                  className="w-17 h-16 rounded-full object-cover"
                />

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>gauravhandge770903@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+91 7709037059</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Nashik, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105 duration-300"
                >
                  Get In Touch
                </button>
                <p className="mt-4 text-gray-400 text-sm">
                  Click to reveal contact details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gaurav Handge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
