import React from "react";
import { ExternalLink } from "react-external-link";
import { FaLinkedinIn } from "react-icons/fa";
import namrata from "./images1/aa/namrata.jpg";
import jatin from "./images1/aa/JATIN SHARMA (1).jpg";
import yashaswini from "./images1/aa/YashaswiniK_1.jpg";
import sharanya from "./images1/aa/SharanyaBhat.jpg";
import suraj from "./images1/aa/Suraj Aribenchi.jpg";
import aadarsh from "./images1/aa/Aadarsh Shriniwas.jpg";
import ujjwal from "./images1/aa/UJJAWAL(jpeg).jpg";
import ketakl from "./images1/aa/_Ketaki.jpg";
import ashutosh from "./images1/aa/Ashutosh Malviya.jpg";
import ananya from "./images1/aa/Ananya.jpg";
import varsha from "./images1/aa/varsha.jpg";

const people = [
  {
    id: 1,
    name: "OJAS SANGRA",
    linkedin: "https://www.linkedin.com/in/ojas-sangra-942351220",
    image: "./img/IMG_20230210_200320.jpg",
    role: "Chairman",
  },
  {
    id: 2,
    name: "ASHISH MAHANTH",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b",
    image: "./img/Ashish.jpg",
    role: "Vice Chairman",
  },
  {
    name: "ADITYA DUBEY",
    linkedin: "https://www.linkedin.com/in/aditya-dubey-18927b152/",
    image: "./img/1SI20ET002.jpg",
    role: "Treasurer",
  },

  {
    name: "SAMEER KUMAR",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217",
    image: "./img/Sameer.jpg",
    role: "Tech Lead",
  },

  {
    name: "KUNAL",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226",
    image: "./img/Kunal.jpg",
    role: "Third Year",
  },
  {
    name: "TANNISHTHA NANDY",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-22b8401b9",
    image: "./img/Tannistha Nandy .jpg",
    role: "Third Year",
  },

  {
    name: "YASHASWINI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: yashaswini,
    role: "Third Year",
  },
  {
    name: "AYUSHMAN SHARMA",
    linkedin: "https://www.linkedin.com/in/ayushman-sharma-b43623213/",
    image: "./img/Ayushman Sharma.jpeg",
    role: "Third Year",
  },
  {
    name: "JEEVITHA",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229",
    image: "./img/1si20ec039_jeevitha.jpg",
    role: "Third Year",
  },
  {
    name: "UJJAWAL SINGH ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: ujjwal,
    role: "Treasurer",
  },
  {
    name: "SHARANYA BHAT",
    linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
    image: sharanya,
    role: "Second Year",
  },
  {
    name: "ASHUTOSH MALVIYA",
    linkedin: "https://www.linkedin.com/in/ashumalviya",
    image: ashutosh,
    role: "Second Year",
  },
  {
    name: "KUMAR HARSH",
    linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
    image: "./img/Kumar Harsh.jpg",
    role: "Second Year",
  },
  {
    name: "RISHAV SHEKHAR",
    linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
    image: "./img/IMG-20221119-WA0000.jpg",
    role: "Second Year",
  },
  {
    name: "HARSH GAURAV",
    linkedin: "https://www.linkedin.com/in/harsh-gaurav-1434b624b",
    image: "./img/Harsh Gaurav.jpg",
    role: "Second Year",
  },
  {
    name: "LEKHANA PATEL",
    linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
    image: "./img/IMG_20230216_144211.jpg",
    role: "Second Year",
  },
  {
    name: "NAMRATA BHARADWAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: namrata,
    role: "Second Year",
  },
  {
    name: "SIDDHANT RAJ",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/SIDDHANT RAJ.jpg",
    role: "Second Year",
  },
  {
    name: "JATIN SHARMA",
    linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
    image: jatin,
    role: "Second Year",
  },
  {
    name: "SURAJ ARIBENCHI",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: suraj,
    role: "Second Year",
  },
  {
    name: "VIVEK M",
    linkedin: "https://www.linkedin.com/in/vivekinnovator",
    image: "./img/Vivek M (EEE).jpg",
    role: "Second Year",
  },
  {
    name: "AADARSH SHRINIWAS",
    linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
    image: aadarsh,
    role: "Second Year",
  },
  {
    name: "VAISHALI CHOUDHARY",
    linkedin: "https://www.linkedin.com/in/b-vaishali-choudhary-671075239",
    image: "./img/B Vaishali Choudhary .jpg",
    role: "Second Year",
  },
  {
    name: "ADITI JOSHI",
    linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
    image: "./img/Aditi Joshi ECE.jpg",
    role: "Second Year",
  },
  {
    name: "MAYANK PANDEY",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-1a16b7240",
    image: "./img/Mayank Pandey .jpg",
    role: "Second Year",
  },

  {
    name: "BADAL",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/BADAL.jpg",
    role: "Second Year",
  },
  {
    name: "ARYAN",
    linkedin: "https://www.linkedin.com/in/aryan-kapoor-86535724b",
    image: "./img/Aryan.jpg",
    role: "Second Year",
  },
  {
    name: "CHAITHRA H R",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/_Chaithra HR , AIML.jpg",
    role: "First Year",
  },
  {
    name: "KETAKI JOJANE",
    linkedin: "https://www.linkedin.com/in/ketaki-jojane-a030a7265",
    image: ketakl,
    role: "First Year",
  },
  {
    name: "OM",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/_Om .jpg",
    role: "First Year",
  },
  {
    name: "AISHWARYA ACHARYA P K",
    linkedin: "https://www.linkedin.com/in/aishwarya-acharya-pk-a9b661258",
    image: "./img/Aishwarya Acharya PK ,ISE.jpg",
    role: "First Year",
  },
  {
    name: "MUDIT SHEKHAR",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/Mudit shekhar , EEE.jpg",
    role: "First Year",
  },
  {
    name: "NEETHU",
    linkedin: "https://www.linkedin.com/in/neethu-546b23264",
    image: "./img/Neethu.jpg",
    role: "First Year",
  },
  {
    name: "NM SAI LIKHITHA",
    linkedin: "https://www.linkedin.com/in/sailikhithanm",
    image: "./img/NM Sai Likhitha.jpg",
    role: "First Year",
  },
  {
    name: "VARSHA",
    linkedin: "https://www.linkedin.com/in/varsha-t-k-415b25264",
    image: varsha,
    role: "First Year",
  },
  {
    name: "YATIN BHATIA",
    linkedin: "https://www.linkedin.com/company/corsit/",
    image: "./img/YATIN BHATIA.jpg",
    role: "First Year",
  },
  {
    name: "GURU SRISHA",
    linkedin: "https://www.linkedin.com/in/guru-srisha-45a699263/",
    image: "./img/Guru Srisha.jpg",
    role: "First Year",
  },
  {
    name: "ANANYA C R",
    linkedin: "https://www.linkedin.com/in/c-r-ananya-71a052259",
    image: ananya,
    role: "First Year",
  },
];

const Team = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Team
      </h2>
      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        {people.map((person, i) => (
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              key={i}
              className="aspect-square obje w-70 h-56 rounded-xl mx-auto mt-[-3rem] bg-white object-cover "
              src={person.image}
              alt="/"
            />
            <h2 className="text-xl font-semibold text-center py-6">
              {person.name}
            </h2>
            <ExternalLink
              className="flex text-blue-700 justify-center"
              href={person.linkedin}
            >
              <FaLinkedinIn size={30} />
            </ExternalLink>
            <div className="text-center font-medium">
              <p className="  py-2 border-b mx-8 mt-3">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
