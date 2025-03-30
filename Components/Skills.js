export default function Skills() {
    return (
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-center">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          {/* Développement */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-3">Développement</h4>
            <ul className="space-y-2">
              <li>✅ Java, C/C++, C#, Python</li>
              <li>✅ HTML, CSS, JavaScript, Tailwind</li>
              <li>✅ MySQL, PostgreSQL, ASP.NET</li>
            </ul>
          </div>
  
          {/* Outils & Technologies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-3">Tools & Technology</h4>
            <ul className="space-y-2">
              <li>✅ Git, Docker, Kubernetes</li>
              <li>✅ Azure, AWS, Edge Computing</li>
              <li>✅ UML, MVC, MVVM</li>
            </ul>
          </div>
  
          {/* Méthodologies */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-3">Methodology</h4>
            <ul className="space-y-2">
              <li>✅ Agile, SCRUM, Kanban</li>
              <li>✅ JIRA, Trello, CRM System</li>
              <li>✅ OOP, OOA, POP</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  