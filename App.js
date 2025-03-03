import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="bg-gray-100 min-h-screen text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Hero Section (Personal Statement)
export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Jacob Anthony Rosales</h1>
      <h2 className="text-2xl mt-4">Aspiring Mechanical Engineer | Robotics & Manufacturing Enthusiast</h2>
      <p className="mt-4 max-w-2xl text-lg">
        I am a **Junior at San Jose State University** with a passion for **robotics, automation, and precision manufacturing**. My expertise spans **mechanical design, fabrication, and system optimization**, where I apply engineering principles to create **functional and efficient solutions**. I thrive in **collaborative, hands-on environments**, constantly pushing the boundaries of innovation in **robotics, CAD modeling, and machining**. My goal is to contribute to **cutting-edge technologies that enhance automation and mechanical efficiency**.
      </p>
      <p className="mt-4 max-w-2xl text-lg">
        **Let's connect!** Whether you're interested in my work, potential collaborations, or industry opportunities, feel free to reach out.
      </p>
      <a href="/resume.pdf" download className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Download Resume</a>
      <a href="mailto:Jacob.rosales21@gmail.com" className="mt-4 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition">Email Me</a>
      <a href="tel:+15108333688" className="mt-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">Call Me</a>
    </div>
  );
}

// Projects Section (Expanded & Concise)
export function Projects() {
  return (
    <div className="py-16 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold">Featured Engineering Projects</h2>
      <div className="mt-6 max-w-3xl mx-auto text-lg">
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Precision Machined Component</strong>
            <p>Designed and machined a **custom aluminum mounting bracket** using a lathe and mill. Applied **countersinking, chamfering, facing, peck drilling, end cutting, edge cutting, and climb milling** to meet **specified tolerances** and validate accuracy with calipers.</p>
            <img src="/images/IMG_1837.JPG" alt="Machined Component - Top View" className="mt-2 rounded-lg" />
            <img src="/images/IMG_1838.JPG" alt="Machined Component - Assembled" className="mt-2 rounded-lg" />
          </li>
          <li>
            <strong>Autonomous Robot for Obstacle Detection</strong>
            <p>Developed a robot capable of detecting and maneuvering around obstacles using **ultrasonic sensors and IR detection**. Integrated **linear actuators** to dynamically adjust height for **autonomous material transport**. Proposed **an improved axle adjustment system** for better navigation.</p>
            <img src="/images/autonomous_robot.jpg" alt="Autonomous Robot Project" className="mt-2 rounded-lg" />
          </li>
          <li>
            <strong>Steam Turbine Performance Testing</strong>
            <p>Analyzed a **single-stage impulse steam turbine** by measuring **temperature, pressure, and speed** to evaluate **isentropic efficiency, power output, and heat losses**. Found efficiency varied from **54% to 83%**, with peak output at **16 HP and 2200 RPM**.</p>
            <img src="/images/steam_turbine.jpg" alt="Steam Turbine Experiment" className="mt-2 rounded-lg" />
          </li>
          <li>
            <strong>Wind Turbine Power Generation</strong>
            <p>Designed and tested a **3-blade wind turbine** in **SolidWorks**, optimizing **aerodynamics and efficiency**. Experimentally achieved **2.11W power output at 25mph wind speed** with an efficiency of **34%**.</p>
            <img src="/images/wind_turbine.jpg" alt="Wind Turbine CAD Model" className="mt-2 rounded-lg" />
          </li>
          <li>
            <strong>Structural Component Optimization (FEA Analysis)</strong>
            <p>Applied **Finite Element Analysis (FEA)** to optimize **stress distribution** and weight in a structural component. Conducted **load testing and simulation** to maximize strength-to-weight ratio.</p>
            <img src="/images/fea_analysis.jpg" alt="FEA Structural Optimization" className="mt-2 rounded-lg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
