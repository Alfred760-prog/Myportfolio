import Skills from "./skills";

export default function Header() {
  return (
 
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <h1 className="text-2xl font-semibold">Alfred Njeukam Soppa</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#Aboutme">Aboutme</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
         
          </ul>
          
      </nav>
    </header>
  );
}