import React, { useState } from "react";
import HeroImage from "../assets/hero-image.jpg";
import { Icon } from "@iconify/react";
import adsimg from "../assets/ads.jpg";


// Logos for IT Courses
import eduWorldLogo from "../assets/logos/eduworld.png";
import techGuideLogo from "../assets/logos/techguide.png";
import mapleTechLogo from "../assets/logos/mapletech.png";
import canadaItHubLogo from "../assets/logos/canadaithub.png";
import nextGenItLogo from "../assets/logos/nextgenit.png";
import ukItExpertsLogo from "../assets/logos/ukitexperts.png";
import techBridgeLogo from "../assets/logos/techbridge.png";
import usItSolutionsLogo from "../assets/logos/usitsolutions.png";

// Logos for Business Courses
import businessPathwaysLogo from "../assets/logos/businesspathways.png";
import aussieBizLogo from "../assets/logos/aussiebiz.png";
import globalPathwaysLogo from "../assets/logos/globalpathways.png";
import bizCanadaHubLogo from "../assets/logos/bizcanadahub.png";
import brightFutureLogo from "../assets/logos/brightfuture.png";
import ukBizConnectLogo from "../assets/logos/ukbizconnect.png";
import bizConnectUSALogo from "../assets/logos/bizconnectusa.png";
import usaBizExpertsLogo from "../assets/logos/usabiz.png";

// Logos for Nursing Courses
import healthcareAbroadLogo from "../assets/logos/healthcareabroad.png";
import nurseProLogo from "../assets/logos/nursepro.png";
import nursePathLogo from "../assets/logos/nursepath.png";
import healthBridgeLogo from "../assets/logos/healthbridge.png";
import ukNursingHubLogo from "../assets/logos/uknursinghub.png";
import carePathUKLogo from "../assets/logos/carepathuk.png";
import usNursingSolutionsLogo from "../assets/logos/usnursingsolutions.png";
import nurseConnectUSALogo from "../assets/logos/nurseconnectusa.png";

// Logos for Engineering Courses
import aussieEngineersLogo from "../assets/logos/aussieengineers.png";
import techEngineersLogo from "../assets/logos/techengineers.png";
import engineerCanadaLogo from "../assets/logos/engineercanada.png";
import canadaEngineeringHubLogo from "../assets/logos/canadaengineering.png";
import ukEngineeringHubLogo from "../assets/logos/ukengineering.png";
import nextGenEngineersLogo from "../assets/logos/nextgenengineers.png";
import usaEngineeringSolutionsLogo from "../assets/logos/usaengineers.png";
import techBridgeEngineersLogo from "../assets/logos/techbridgeengineers.png";

// Logos for Arts Courses
import creativeMindsLogo from "../assets/logos/creativeminds.png";
import artsPathwaysLogo from "../assets/logos/artspathways.png";
import artsAbroadLogo from "../assets/logos/artsabroad.png";
import canadaArtHubLogo from "../assets/logos/canadaarthub.png";
import ukArtPathwaysLogo from "../assets/logos/ukartpathways.png";
import creativeUKHubLogo from "../assets/logos/creativeukhub.png";
import usArtConnectLogo from "../assets/logos/usartconnect.png";
import artBridgeUSALogo from "../assets/logos/artbridgeusa.png";

// Helper to create consultancy objects
const createConsultancy = (course, country, name, city, logo, emailDomain, phone) => ({
  course,
  country,
  name,
  address: city,
  logo,
  email: `contact@${emailDomain}`,
  phone,
  website: `https://${emailDomain}`,
});

// Consultancy Data
export const consultancyData = [
  // IT
  createConsultancy("IT", "Australia", "EduWorld IT Consultancy", "Sydney, NSW", eduWorldLogo, "eduworld.com.au", "+61 2 1234 5678"),
  createConsultancy("IT", "Australia", "TechGuide AU", "Melbourne, VIC", techGuideLogo, "techguide.au", "+61 3 9876 5432"),
  createConsultancy("IT", "Canada", "Maple Tech Consultancy", "Toronto, ON", mapleTechLogo, "mapletech.ca", "+1 416 555 1234"),
  createConsultancy("IT", "Canada", "Canada IT Hub", "Vancouver, BC", canadaItHubLogo, "canadaithub.ca", "+1 604 555 5678"),
  createConsultancy("IT", "UK", "NextGen IT Abroad", "London", nextGenItLogo, "nextgenit.uk", "+44 20 1234 5678"),
  createConsultancy("IT", "UK", "UK IT Experts", "Manchester", ukItExpertsLogo, "ukitexperts.uk", "+44 161 555 1234"),
  createConsultancy("IT", "USA", "TechBridge Consultancy", "New York", techBridgeLogo, "techbridge.com", "+1 212 555 9876"),
  createConsultancy("IT", "USA", "US IT Solutions", "San Francisco", usItSolutionsLogo, "usitsolutions.com", "+1 415 555 1234"),

  // Business
  createConsultancy("Business", "Australia", "Business Pathways", "Melbourne, VIC", businessPathwaysLogo, "businesspathways.au", "+61 3 1234 5678"),
  createConsultancy("Business", "Australia", "Aussie Business Experts", "Sydney, NSW", aussieBizLogo, "aussiebiz.au", "+61 2 9876 5432"),
  createConsultancy("Business", "Canada", "Global Pathways", "Toronto, ON", globalPathwaysLogo, "globalpathways.ca", "+1 416 555 2345"),
  createConsultancy("Business", "Canada", "BizCanada Hub", "Ottawa, ON", bizCanadaHubLogo, "bizcanadahub.ca", "+1 613 555 3456"),
  createConsultancy("Business", "UK", "Bright Future Business", "London", brightFutureLogo, "brightfuture.uk", "+44 20 2345 6789"),
  createConsultancy("Business", "UK", "UK Biz Connect", "Manchester", ukBizConnectLogo, "ukbizconnect.uk", "+44 161 555 2345"),
  createConsultancy("Business", "USA", "BizConnect USA", "Chicago, IL", bizConnectUSALogo, "bizconnectusa.com", "+1 312 555 4567"),
  createConsultancy("Business", "USA", "USA Business Experts", "New York", usaBizExpertsLogo, "usabiz.com", "+1 212 555 6789"),

  // Nursing
  createConsultancy("Nursing", "Australia", "HealthCare Abroad", "Sydney, NSW", healthcareAbroadLogo, "healthcareabroad.au", "+61 2 1122 3344"),
  createConsultancy("Nursing", "Australia", "NursePro AU", "Melbourne, VIC", nurseProLogo, "nursepro.au", "+61 3 2233 4455"),
  createConsultancy("Nursing", "Canada", "NursePath Canada", "Vancouver, BC", nursePathLogo, "nursepath.ca", "+1 604 555 6789"),
  createConsultancy("Nursing", "Canada", "HealthBridge Canada", "Toronto, ON", healthBridgeLogo, "healthbridge.ca", "+1 416 555 7890"),
  createConsultancy("Nursing", "UK", "UK Nursing Hub", "Manchester", ukNursingHubLogo, "uknursinghub.uk", "+44 161 555 6789"),
  createConsultancy("Nursing", "UK", "Care Path UK", "London", carePathUKLogo, "carepathuk.uk", "+44 20 555 1234"),
  createConsultancy("Nursing", "USA", "US Nursing Solutions", "Boston, MA", usNursingSolutionsLogo, "usnursingsolutions.com", "+1 617 555 1234"),
  createConsultancy("Nursing", "USA", "NurseConnect USA", "Houston, TX", nurseConnectUSALogo, "nurseconnectusa.com", "+1 713 555 2345"),

  // Engineering
  createConsultancy("Engineering", "Australia", "Aussie Engineers", "Melbourne, VIC", aussieEngineersLogo, "aussieengineers.au", "+61 3 3344 5566"),
  createConsultancy("Engineering", "Australia", "Tech Engineers AU", "Sydney, NSW", techEngineersLogo, "techengineers.au", "+61 2 4455 6677"),
  createConsultancy("Engineering", "Canada", "Engineer Canada", "Toronto, ON", engineerCanadaLogo, "engineercanada.ca", "+1 416 555 3456"),
  createConsultancy("Engineering", "Canada", "Canada Engineering Hub", "Vancouver, BC", canadaEngineeringHubLogo, "canadaengineering.ca", "+1 604 555 4567"),
  createConsultancy("Engineering", "UK", "UK Engineering Hub", "London", ukEngineeringHubLogo, "ukengineering.uk", "+44 20 555 3456"),
  createConsultancy("Engineering", "UK", "NextGen Engineers UK", "Manchester", nextGenEngineersLogo, "nextgenengineers.uk", "+44 161 555 4567"),
  createConsultancy("Engineering", "USA", "USA Engineering Solutions", "Houston, TX", usaEngineeringSolutionsLogo, "usaengineers.com", "+1 713 555 3456"),
  createConsultancy("Engineering", "USA", "TechBridge Engineers", "New York", techBridgeEngineersLogo, "techbridgeengineers.com", "+1 212 555 5678"),

  // Arts
  createConsultancy("Arts", "Australia", "Creative Minds AU", "Sydney, NSW", creativeMindsLogo, "creativeminds.au", "+61 2 5566 7788"),
  createConsultancy("Arts", "Australia", "Arts Pathways AU", "Melbourne, VIC", artsPathwaysLogo, "artspathways.au", "+61 3 6677 8899"),
  createConsultancy("Arts", "Canada", "Arts Abroad Canada", "Montreal, QC", artsAbroadLogo, "artsabroad.ca", "+1 514 555 6789"),
  createConsultancy("Arts", "Canada", "Canada Art Hub", "Toronto, ON", canadaArtHubLogo, "canadaarthub.ca", "+1 416 555 7890"),
  createConsultancy("Arts", "UK", "UK Art Pathways", "London", ukArtPathwaysLogo, "ukartpathways.uk", "+44 20 555 4567"),
  createConsultancy("Arts", "UK", "Creative UK Hub", "Manchester", creativeUKHubLogo, "creativeukhub.uk", "+44 161 555 5678"),
  createConsultancy("Arts", "USA", "US Art Connect", "Los Angeles, CA", usArtConnectLogo, "usartconnect.com", "+1 310 555 1234"),
  createConsultancy("Arts", "USA", "ArtBridge USA", "New York", artBridgeUSALogo, "artbridgeusa.com", "+1 212 555 2345"),
];

export default function HomePage() {
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const courseNames = [...new Set(consultancyData.map((item) => item.course))];
  const filteredSuggestions = courseNames.filter((c) =>
    c.toLowerCase().includes(course.toLowerCase())
  );

  const handleSearch = () => {
    const filtered = consultancyData.filter(
      (item) =>
        item.country.toLowerCase().includes(country.toLowerCase()) &&
        item.course.toLowerCase().includes(course.toLowerCase())
    );
    setResults(filtered);
    setShowSuggestions(false);
  };

  const handleSelectSuggestion = (c) => {
    setCourse(c);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center text-white"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex justify-between items-start max-w-6xl w-full py-6 px-4">
          <div className="text-2xl font-bold text-white pl-2">EduSearch</div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-16 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Find the Best Consultancy for Your Course Abroad
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Search for courses and discover trusted consultancies worldwide.
          </p>

          {/* Search Section */}
          <div className="relative flex flex-col sm:flex-row gap-3 justify-center w-full max-w-3xl sm:justify-end">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search course"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                  setShowSuggestions(true);
                }}
                className="px-4 py-2 rounded-xl w-full sm:w-70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              />
              {showSuggestions && course && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-62 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto z-20">
                  {filteredSuggestions.map((c, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black text-left border-b last:border-b-0"
                      onClick={() => handleSelectSuggestion(c)}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="px-4 py-2 rounded-xl w-full sm:w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="">Select Country</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
            </select>

            <button
              onClick={handleSearch}
              className="px-6 py-2 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Search Results + Single Ad Section */}
      <section className="w-full py-10 flex flex-col sm:flex-row gap-10 justify-between px-6 sm:px-10">
        {/* Results Section */}
        <div className="flex-1">
          {results.length > 0 ? (
            <ul className="flex flex-col w-full max-w-2xl space-y-4">
              {results.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div className="flex flex-col text-left flex-1">
                    <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                    <p className="text-gray-700 text-sm mb-1">
                      {item.course} Course - {item.country}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon icon="mdi:map-marker-outline" className="text-gray-400 text-base" />
                        {item.address}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="mdi:email-outline" className="text-gray-400 text-base" />
                        {item.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon icon="mdi:phone-outline" className="text-gray-400 text-base" />
                        {item.phone}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 font-semibold text-lg text-left">
              Search Result.
            </p>
          )}
        </div>

        {/* Website-Style Ad Section */}
          <aside className="w-full sm:w-[460px] bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition overflow-hidden self-start cursor-pointer">
            {/* Ad Image */}
            <div className="overflow-hidden">
              <img
                src= {adsimg}
                alt="Study Abroad Ad"
                className="w-full h-45 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Ad Content */}
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Study Abroad with Global Scholars 🌍
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Apply now for top universities in Australia, Canada, UK, and the USA.
                Get expert visa guidance and scholarships up to 100%.
              </p>
              <button
                onClick={() => window.open("https://www.globalscholars.com", "_blank")}
                className="w-full px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Learn More
              </button>
            </div>
          </aside>
      </section>
    </div>
  );
}

