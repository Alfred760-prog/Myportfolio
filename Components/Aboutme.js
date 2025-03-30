export default function AboutMe() {
    return (
      <section className="mt-8 flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Section Photo */}
        <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img src="/images/profile.jpg" alt="Alfred Njeukam" className="w-full h-full object-cover" />
        </div>
  
        {/* Section Texte */}
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold">About me</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
          I'm a Medical Informatics graduate with expertise in software testing, SQL, Python and Web development.
          My experience covers functional, integration and performance and performance testing.
          Passionate about process improvement, I work effectively in a team, and I'm always on the lookout for new technologies to explore.
          </p>
        </div>

        {/* Bouton Download Resume */}
        <div className="mt-4">
          <a 
            href="/resume.pdf" // Lien vers le fichier PDF//
             download="Alfred_Njeukam_Resume.pdf" // Nom du fichier lors du téléchargement
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
