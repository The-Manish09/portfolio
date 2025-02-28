const logotext = "GAURI";
const meta = {
    title: "Gauri Shankar Sharma",
    description: "I’m Gauri Finance & Business Strategy Expert with a Passion for Digital Marketing & SEO.",
};

const introdata = {
    title: "I’m Gauri Shankar Sharma",
    animated: {
        first: "I love Financial Analyst",
        second: "I'm good in Search Engine Optimisation",
        third: "Also in Entreprise Planning",
    },
        description: "Finance & Business Strategy Expert with a Passion for Digital Marketing & SEO. 🚀",
    your_img_url: "https://media.licdn.com/dms/image/v2/D5603AQE-NQNmAkGn5w/profile-displayphoto-shrink_800_800/B56ZRETpUoHQAc-/0/1736312789000?e=1746057600&v=beta&t=ds5ZRkc-D_-Bo5CxKrsM6yNVX1K2hda2g6qP9pt6yEc",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "With a passion for business, social media, and all things marketing and accounting I have both the skill set and professional background necessary to dive deep into the marketing world. As an upbeat, self-motivated team player with excellent communication, I envision an exciting future in the industry. Browse my site to see all that I have to offer.",
};
const worktimeline = [{
        jobtitle: "Financial consultancy",
        where: "Acixcom consultancy firm",
        date: "2024",
    },
    {
        jobtitle: "Financial consultancy",
        where: "Intershala",
        date: "2019-20",
    },
    {
        jobtitle: "Financial consultancy",
        where: "Upstop finance",
        date: "2024",
    },
];

const skills = [{
        name: "Accounting",
        value: 95,
    },
    {
        name: "Proficienty in Tally and Finacle",
        value: 85,
    },
    {
        name: "Search Engine Optimisation",
        value: 80,
    },
    {
        name: "Data Analysis",
        value: 80,
    },
    {
        name: "EXCEL",
        value: 85,
    },
];

const services = [{
        title: "Financial consultancy",
        description: "Focuses on providing expert financial advice and solutions.",
    },
    {
        title: "Accounting servises",
        description: "Providing financial record-keeping, bookkeeping, tax preparation, and financial reporting. Ensuring accuracy, compliance, and strategic financial management. 🚀",
    },
    {
        title: "Designing spreedsheet",
        description: "Creating structured, automated, and efficient spreadsheets for data management, analysis, and reporting. 📊",
    },
];

export default function Education() {
    const education = [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science",
        university: "XYZ University",
        year: "2019 - 2023",
      },
      {
        degree: "High School",
        field: "Science (PCM)",
        university: "ABC Senior Secondary School",
        year: "2017 - 2019",
      },
    ];
  
    return (
      <div className="p-5 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index} className="mb-3">
              <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
              <p className="text-gray-700">{edu.university} ({edu.year})</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export { meta, dataabout, worktimeline, skills, services };
    
const contactConfig = {
    YOUR_EMAIL: "gokug8920@gmail.com",
    YOUR_FONE: "(+91) 6397306599",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://www.facebook.com/share/15gE9X2zfJ/",
    linkedin: "https://www.linkedin.com/in/gauri-shankar-sharma-a66582222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};
export {
   // meta,
   // dataabout,
 //   educationData,
  //  worktimeline,
  //  skills,
  //  services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};