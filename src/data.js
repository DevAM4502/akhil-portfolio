// EDIT THIS FILE to change/add content (jobs, projects, skills...)
export const DATA = {
  name: "Akhil Malap",
  roles: ["Software Developer", "Full-Stack Web Developer", "Angular + .NET Engineer"],
  email: "malapakhil45@gmail.com",
  phone: "+91 9326096377",
  linkedin: "https://linkedin.com/in/akhilmalap45",
  about: "Software Developer with 1+ year of experience building full-stack web apps with Angular, C# .NET Web API and MS SQL Server. I build RESTful APIs, dynamic frontend modules for a low-code platform, optimise database operations and automate backend workflows to remove manual effort.",
  stats: [["1+", "Years experience"], ["2", "Live client projects"], ["8.0", "B.E. CGPA"]],
  skills: {
    Frontend: ["Angular", "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
    Backend: ["C# .NET Web API", "REST APIs", "Core Java", "JDBC", "Hibernate", "OOP"],
    Database: ["MS SQL Server", "MySQL", "SSMS", "Stored Procedures", "Query Optimisation"],
    Tools: ["Git", "GitHub", "Jenkins CI/CD", "Postman", "FTP", "Visual Studio", "VS Code", "Claude Code"]
  },
  jobs: [
    { role: "Software Developer", co: "Inquizity Metanoia OPC Pvt. Ltd.", when: "Nov 2025 – Sep 2026", pts: [
      "Built Angular modules for DataSavi, a low-code platform: role-based dynamic menus and auto-generated screens.",
      "Designed C# .NET Web APIs with validation and SQL Server stored procedures for faster processing.",
      "Automated email data ingestion with a C# console app: attachments to FTP to SQL Server.",
      "Delivered screens and fixes across two live client projects, APAR and PMJ.",
      "Configured Jenkins CI/CD pipelines for dev and production deployments."] },
    { role: "Software Developer Intern", co: "Inquizity Metanoia OPC Pvt. Ltd.", when: "May 2025 – Oct 2025", pts: [
      "Developed Angular components for DataSavi and integrated them with .NET Web APIs.",
      "Wrote SQL queries and stored procedures; helped with debugging and testing in an Agile team."] }
  ],
  projects: [
    { t: "Car Rental System", d: "Core Java OOP app with booking, rental and return logic persisted in MS SQL Server via JDBC.", s: ["Core Java", "OOP", "JDBC", "MS SQL"] },
    { t: "I-Voting System", d: "Full-stack online voting platform with Voter ID eligibility checks, secure auth and a normalised database. B.E. final year project.", s: ["Python", "Django", "MySQL", "JavaScript"] }
  ],
  edu: [
    ["B.E. Computer Engineering", "CSMIT Panvel, Mumbai University", "2020 – 2024 · CGPA 8.0"],
    ["Java Full Stack Development", "Certification, Vashi", "2024 – 2025"],
    ["Basic Python", "BloomZen Infosolutions, Thane", "2023"]
  ]
};
