import React from 'react'

const projects = [
  {
    title: "PetMatch",
    description:
      "Intelligent pet adoption and management platform with CRUD features, recommendations, authentication, and automated testing. Built using Agile methodology and containerized for deployment.",
    image: "/petmatch.png",
    github: "https://github.com/Fatima-Ezzahra33/petMatch",
    status: "Finished",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Laravel",
      "MySQL"
    ]
  },
  {
    title: "Asylia",
    description:
      "AI-powered platform for autoimmune disease detection combining machine learning pipelines with a web interface for prediction visualization and interpretability.",
    image: "/asylia.png",
    github: "",
    status: "In Progress",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "Flask",
      "React.js"
    ]
  },
  {
    title: "YomogoMed",
    description:
      "Healthcare platform for appointment booking and AI-assisted patient-doctor communication, focusing on scalability, security, and modern UI design.",
    image: "/yomogoMed.png",
    github: "",
    status: "In Progress",
    technologies: [
      "Spring Boot",
      "React.js",
      "MySQL"
    ]
  },
  {
    title: "ImproveU",
    description:
      "Soft skills management platform allowing users to track progress, evaluate competencies, and improve professional development through structured dashboards.",
    image: "/improveu.png",
    github: "https://github.com/akram-projects/ImproveU",
    status: "Finished",
    technologies: [
      "Vue.js",
      "Express.js",
      "postgreSQL",
    ]
  }
];


function Projects() {
  return (
    <section id='projects'>
        
    </section>
  )
}

export default Projects