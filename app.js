const courses = [
  {
    id: "rmit-cyber",
    university: "RMIT University",
    course: "Bachelor of Cyber Security",
    field: "Cyber Security",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 72,
    duration: "3 years",
    feeBand: "CSP computing band",
    practical: 96,
    rank: 86,
    url: "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-cyber-security-bp355",
    outcomes: ["Cyber security analyst", "Incident responder", "Penetration tester"],
    pathway: "Certificate IV or Foundation Studies can help build a route into further study.",
  },
  {
    id: "deakin-cyber",
    university: "Deakin University",
    course: "Bachelor of Cyber Security",
    field: "Cyber Security",
    location: "Online",
    campus: "Cloud / Burwood options",
    level: "Bachelor degree",
    indicativeAtar: 65,
    duration: "3 years",
    feeBand: "CSP computing band",
    practical: 88,
    rank: 82,
    url: "https://www.deakin.edu.au/course/bachelor-cyber-security",
    outcomes: ["Security consultant", "Digital forensics analyst", "Risk analyst"],
    pathway: "Diploma of IT or related study can support credit and transfer conversations.",
  },
  {
    id: "swinburne-cyber",
    university: "Swinburne University",
    course: "Bachelor of Cyber Security",
    field: "Cyber Security",
    location: "Melbourne",
    campus: "Hawthorn",
    level: "Bachelor degree",
    indicativeAtar: 62,
    duration: "3 years",
    feeBand: "CSP computing band",
    practical: 94,
    rank: 78,
    url: "https://www.swinburne.edu.au/course/undergraduate/bachelor-of-cyber-security/",
    outcomes: ["Security engineer", "Network security specialist", "Cloud security analyst"],
    pathway: "TAFE or diploma-level IT study may support entry or credit pathways.",
  },
  {
    id: "latrobe-it",
    university: "La Trobe University",
    course: "Bachelor of Information Technology",
    field: "Information Technology",
    location: "Melbourne",
    campus: "Bundoora",
    level: "Bachelor degree",
    indicativeAtar: 58,
    duration: "3 years",
    feeBand: "CSP computing band",
    practical: 82,
    rank: 74,
    url: "https://www.latrobe.edu.au/courses/bachelor-of-information-technology",
    outcomes: ["Software developer", "Systems analyst", "IT support specialist"],
    pathway: "A strong backup for students who want cyber later through electives or postgraduate study.",
  },
  {
    id: "vu-diploma-it",
    university: "Victoria University",
    course: "Diploma of Information Technology pathway",
    field: "Information Technology",
    location: "Melbourne",
    campus: "Footscray / City",
    level: "Diploma pathway",
    indicativeAtar: 45,
    duration: "8-12 months",
    feeBand: "VET / pathway fees vary",
    practical: 90,
    rank: 62,
    url: "https://www.vu.edu.au/courses/diploma-of-information-technology-vdit",
    outcomes: ["Junior IT support", "Pathway to bachelor", "Web support officer"],
    pathway: "Complete a diploma first, then apply for bachelor entry with possible credit.",
  },
  {
    id: "monash-nursing",
    university: "Monash University",
    course: "Bachelor of Nursing",
    field: "Nursing",
    location: "Melbourne",
    campus: "Clayton / Peninsula",
    level: "Bachelor degree",
    indicativeAtar: 70,
    duration: "3 years",
    feeBand: "CSP nursing band",
    practical: 92,
    rank: 94,
    url: "https://www.monash.edu/study/courses/find-a-course/nursing-m2006",
    outcomes: ["Registered nurse", "Clinical nurse", "Community health nurse"],
    pathway: "Diploma of Nursing can be a practical pathway into registered nursing study.",
  },
  {
    id: "westernsyd-nursing",
    university: "Western Sydney University",
    course: "Bachelor of Nursing",
    field: "Nursing",
    location: "Sydney",
    campus: "Parramatta / Campbelltown",
    level: "Bachelor degree",
    indicativeAtar: 62,
    duration: "3 years",
    feeBand: "CSP nursing band",
    practical: 91,
    rank: 72,
    url: "https://www.westernsydney.edu.au/future/study/courses/undergraduate/bachelor-of-nursing",
    outcomes: ["Registered nurse", "Aged care nurse", "Mental health nurse"],
    pathway: "TAFE health study and mature-age entry can support alternative applications.",
  },
  {
    id: "rmit-business",
    university: "RMIT University",
    course: "Bachelor of Business",
    field: "Business",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 60,
    duration: "3 years",
    feeBand: "CSP business band",
    practical: 86,
    rank: 84,
    url: "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-business-accountancy-bp254",
    outcomes: ["Business analyst", "Marketing coordinator", "Operations officer"],
    pathway: "Diploma of Business can lead into bachelor-level business study.",
  },
  {
    id: "unsw-commerce",
    university: "UNSW Sydney",
    course: "Bachelor of Commerce",
    field: "Business",
    location: "Sydney",
    campus: "Kensington",
    level: "Bachelor degree",
    indicativeAtar: 88,
    duration: "3 years",
    feeBand: "CSP business band",
    practical: 79,
    rank: 97,
    url: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-commerce",
    outcomes: ["Consultant", "Financial analyst", "Product manager"],
    pathway: "A higher option to try if selection rank adjustments or alternative entry apply.",
  },
  {
    id: "deakin-engineering",
    university: "Deakin University",
    course: "Bachelor of Engineering Honours",
    field: "Engineering",
    location: "Melbourne",
    campus: "Burwood / Waurn Ponds",
    level: "Bachelor degree",
    indicativeAtar: 70,
    duration: "4 years",
    feeBand: "CSP engineering band",
    practical: 93,
    rank: 80,
    url: "https://www.deakin.edu.au/course/bachelor-engineering-honours",
    outcomes: ["Civil engineer", "Mechanical engineer", "Project engineer"],
    pathway: "Diploma or associate engineering study can provide a staged route.",
  },
  {
    id: "uts-engineering",
    university: "University of Technology Sydney",
    course: "Bachelor of Engineering (Honours) (Electrical)",
    field: "Engineering",
    location: "Sydney",
    campus: "City campus",
    level: "Bachelor degree",
    indicativeAtar: 78,
    duration: "4 years",
    feeBand: "CSP engineering band",
    practical: 95,
    rank: 88,
    url: "https://www.uts.edu.au/courses/bachelor-of-engineering-honours-electrical",
    outcomes: ["Systems engineer", "Design engineer", "Infrastructure consultant"],
    pathway: "Aspirational option if maths prerequisites and adjustment factors are strong.",
  },
  {
    id: "rmit-accounting",
    university: "RMIT University",
    course: "Bachelor of Business (Accountancy)",
    field: "Accounting",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 60,
    duration: "3 years",
    feeBand: "CSP business band",
    practical: 86,
    rank: 82,
    url: "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-business-accountancy-bp254",
    outcomes: ["Accountant", "Auditor", "Tax adviser"],
    pathway: "A Diploma of Business or accounting-related VET study can support a staged entry route.",
  },
  {
    id: "rmit-architecture",
    university: "RMIT University",
    course: "Bachelor of Architectural Design",
    field: "Architecture",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 75,
    duration: "3 years",
    feeBand: "CSP built environment band",
    practical: 89,
    rank: 88,
    url: "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-architectural-design-bp250",
    outcomes: ["Architectural graduate", "Urban design assistant", "Design modeller"],
    pathway: "Portfolio preparation, design diplomas and foundation studies can help students build a pathway.",
  },
  {
    id: "unimelb-arts",
    university: "University of Melbourne",
    course: "Bachelor of Arts",
    field: "Arts",
    location: "Melbourne",
    campus: "Parkville",
    level: "Bachelor degree",
    indicativeAtar: 85,
    duration: "3 years",
    feeBand: "CSP society and culture band",
    practical: 72,
    rank: 96,
    url: "https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-arts/",
    outcomes: ["Policy officer", "Research assistant", "Communications adviser"],
    pathway: "Diploma, foundation studies or another bachelor with strong results may support future transfer.",
  },
  {
    id: "monash-biomed",
    university: "Monash University",
    course: "Bachelor of Biomedical Science",
    field: "Biomedical Science",
    location: "Melbourne",
    campus: "Clayton",
    level: "Bachelor degree",
    indicativeAtar: 82,
    duration: "3 years",
    feeBand: "CSP science band",
    practical: 86,
    rank: 94,
    url: "https://www.monash.edu/study/courses/find-a-course/biomedical-science-m2003",
    outcomes: ["Biomedical scientist", "Research assistant", "Laboratory officer"],
    pathway: "A science diploma, foundation year or related bachelor can support a later health-science route.",
  },
  {
    id: "rmit-data-science",
    university: "RMIT University",
    course: "Bachelor of Data Science",
    field: "Data Science",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 70,
    duration: "3 years",
    feeBand: "CSP computing band",
    practical: 90,
    rank: 84,
    url: "https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/bachelor-degrees/bachelor-of-data-science-bp340",
    outcomes: ["Data analyst", "Machine learning assistant", "Business intelligence analyst"],
    pathway: "Diploma of IT or analytics-related study can build a transfer pathway.",
  },
  {
    id: "swinburne-design",
    university: "Swinburne University",
    course: "Bachelor of Design",
    field: "Design",
    location: "Melbourne",
    campus: "Hawthorn",
    level: "Bachelor degree",
    indicativeAtar: 60,
    duration: "3 years",
    feeBand: "CSP design band",
    practical: 91,
    rank: 76,
    url: "https://www.swinburne.edu.au/course/undergraduate/bachelor-of-design/",
    outcomes: ["UX designer", "Visual designer", "Brand designer"],
    pathway: "A design diploma, portfolio and related creative work can strengthen alternative entry.",
  },
  {
    id: "deakin-education",
    university: "Deakin University",
    course: "Bachelor of Education",
    field: "Education",
    location: "Melbourne",
    campus: "Burwood",
    level: "Bachelor degree",
    indicativeAtar: 70,
    duration: "4 years",
    feeBand: "CSP education band",
    practical: 92,
    rank: 82,
    url: "https://www.deakin.edu.au/study/find-a-course/education-and-teaching",
    outcomes: ["Primary teacher", "Secondary teacher", "Learning designer"],
    pathway: "Diploma, foundation study and education support experience can help build an entry pathway.",
  },
  {
    id: "latrobe-health",
    university: "La Trobe University",
    course: "Bachelor of Health Sciences",
    field: "Health Science",
    location: "Melbourne",
    campus: "Bundoora",
    level: "Bachelor degree",
    indicativeAtar: 60,
    duration: "3 years",
    feeBand: "CSP health band",
    practical: 85,
    rank: 76,
    url: "https://www.latrobe.edu.au/courses/bachelor-of-health-sciences",
    outcomes: ["Health promotion officer", "Community health worker", "Health project officer"],
    pathway: "VET health study or a diploma can support entry into health-related bachelor programs.",
  },
  {
    id: "monash-law",
    university: "Monash University",
    course: "Bachelor of Laws (Honours)",
    field: "Law",
    location: "Melbourne",
    campus: "Clayton",
    level: "Bachelor degree",
    indicativeAtar: 90,
    duration: "4 years",
    feeBand: "CSP law band",
    practical: 78,
    rank: 95,
    url: "https://www.monash.edu/study/courses/find-a-course/laws-l3001",
    outcomes: ["Solicitor pathway", "Policy adviser", "Legal researcher"],
    pathway: "Students can start in arts, business or criminology, then apply to transfer if results are strong.",
  },
  {
    id: "rmit-media",
    university: "RMIT University",
    course: "Bachelor of Communication",
    field: "Media and Communication",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 65,
    duration: "3 years",
    feeBand: "CSP communications band",
    practical: 88,
    rank: 84,
    url: "https://www.rmit.edu.au/study-with-us/communication",
    outcomes: ["Content producer", "Journalist", "Digital communications officer"],
    pathway: "Diploma-level media, portfolio work or related creative study can support a pathway.",
  },
  {
    id: "monash-medicine",
    university: "Monash University",
    course: "Bachelor of Medical Studies / Doctor of Medicine",
    field: "Medicine",
    location: "Melbourne",
    campus: "Clayton",
    level: "Bachelor degree",
    indicativeAtar: 95,
    duration: "5 years",
    feeBand: "CSP medicine band",
    practical: 96,
    rank: 97,
    url: "https://www.monash.edu/study/courses/find-a-course/medical-studies-and-doctor-of-medicine-m6011",
    outcomes: ["Doctor", "Medical researcher", "Clinical trainee"],
    pathway: "Medicine is highly competitive; biomedical science, science or health science can be related backup routes.",
  },
  {
    id: "deakin-psychology",
    university: "Deakin University",
    course: "Bachelor of Psychological Science",
    field: "Psychology",
    location: "Melbourne",
    campus: "Burwood",
    level: "Bachelor degree",
    indicativeAtar: 65,
    duration: "3 years",
    feeBand: "CSP psychology band",
    practical: 82,
    rank: 80,
    url: "https://www.deakin.edu.au/course/bachelor-psychological-science",
    outcomes: ["Mental health support worker", "Research assistant", "Behavioural analyst"],
    pathway: "Diploma or related health and social science study can support later psychology applications.",
  },
  {
    id: "unimelb-science",
    university: "University of Melbourne",
    course: "Bachelor of Science",
    field: "Science",
    location: "Melbourne",
    campus: "Parkville",
    level: "Bachelor degree",
    indicativeAtar: 85,
    duration: "3 years",
    feeBand: "CSP science band",
    practical: 84,
    rank: 96,
    url: "https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-science/",
    outcomes: ["Laboratory scientist", "Research assistant", "Environmental analyst"],
    pathway: "Foundation studies, diploma study or another science-related bachelor can support transfer options.",
  },
  {
    id: "rmit-social-work",
    university: "RMIT University",
    course: "Bachelor of Social Work",
    field: "Social Work",
    location: "Melbourne",
    campus: "Melbourne City",
    level: "Bachelor degree",
    indicativeAtar: 65,
    duration: "4 years",
    feeBand: "CSP society and culture band",
    practical: 93,
    rank: 78,
    url: "https://www.rmit.edu.au/study-with-us/community-services-and-social-work",
    outcomes: ["Social worker", "Case manager", "Community development officer"],
    pathway: "Community services VET study, mature-age entry and relevant work experience can support entry.",
  },
];

const fieldRelations = {
  Accounting: ["Business"],
  Architecture: ["Design"],
  Arts: ["Media and Communication", "Social Work"],
  "Biomedical Science": ["Science", "Health Science", "Medicine"],
  Business: ["Accounting", "Media and Communication"],
  "Cyber Security": ["Information Technology", "Data Science"],
  "Data Science": ["Information Technology", "Science", "Cyber Security"],
  Design: ["Architecture", "Media and Communication"],
  Education: ["Arts", "Science"],
  Engineering: ["Science", "Data Science"],
  "Health Science": ["Nursing", "Biomedical Science", "Social Work"],
  "Information Technology": ["Cyber Security", "Data Science"],
  Law: ["Arts", "Business", "Social Work"],
  "Media and Communication": ["Arts", "Design", "Business"],
  Medicine: ["Biomedical Science", "Health Science", "Science"],
  Nursing: ["Health Science", "Social Work"],
  Psychology: ["Health Science", "Social Work", "Science"],
  Science: ["Biomedical Science", "Data Science", "Engineering"],
  "Social Work": ["Health Science", "Psychology", "Arts"],
};

let currentMode = "atar";
let currentRecommendations = [];
const saved = new Map(JSON.parse(localStorage.getItem("unipathSaved") || "[]"));

const form = document.querySelector("#advisorForm");
const modeButtons = document.querySelectorAll(".segmented__button");
const resultTitle = document.querySelector("#resultTitle");
const confidencePill = document.querySelector("#confidencePill");
const spotlight = document.querySelector("#spotlight");
const grid = document.querySelector("#recommendationGrid");
const comparisonRows = document.querySelector("#comparisonRows");
const savedList = document.querySelector("#savedList");
const timelineTrack = document.querySelector("#timelineTrack");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatLog = document.querySelector("#chatLog");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-section='atar']").forEach((item) => {
      item.hidden = currentMode !== "atar";
    });
    document.querySelectorAll("[data-section='noatar']").forEach((item) => {
      item.hidden = currentMode !== "noatar";
    });
    render();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  document.querySelector(".results").scrollIntoView({ behavior: "smooth", block: "start" });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addChat(question, "user");
  addChat(answerQuestion(question), "ai");
  chatInput.value = "";
});

function getProfile() {
  const data = new FormData(form);
  return {
    atar: Number(data.get("atarScore") || 0),
    field: data.get("field"),
    location: data.get("location"),
    level: data.get("level"),
    preference: data.get("preference"),
    education: data.get("education"),
    experience: data.get("experience"),
    ageStatus: data.get("ageStatus"),
    english: data.get("english"),
  };
}

function scoreCourse(course, profile) {
  let score = 0;
  if (course.field === profile.field) score += 34;
  if (fieldRelations[profile.field]?.includes(course.field)) score += 18;
  if (course.location === profile.location) score += 22;
  if (profile.location === "Melbourne" && course.location === "Online") score += 10;
  if (course.level === profile.level) score += 16;
  if (profile.preference === "Practical course") score += course.practical / 8;
  if (profile.preference === "Higher ranking") score += course.rank / 8;
  if (profile.preference === "Online flexibility" && course.location === "Online") score += 18;
  if (profile.preference === "Closer" && course.location === profile.location) score += 14;
  if (profile.preference === "Cheaper" && course.feeBand.includes("nursing")) score += 8;
  if (currentMode === "atar") {
    const gap = profile.atar - course.indicativeAtar;
    if (gap >= 0) score += 24 - Math.min(gap, 18) * 0.45;
    if (gap < 0 && gap >= -8) score += 10 + gap;
    if (gap < -8) score -= 12;
  } else {
    if (course.level !== "Bachelor degree") score += 18;
    if (profile.education?.includes("Diploma") && course.level === "Bachelor degree") score += 12;
    if (profile.ageStatus === "Mature-age applicant") score += 8;
  }
  return score;
}

function classify(course, profile) {
  if (currentMode === "noatar") {
    if (course.level !== "Bachelor degree") return "Pathway option";
    if (profile.education === "Diploma" || profile.experience !== "None yet") return "Potential direct option";
    return "After pathway";
  }
  const gap = profile.atar - course.indicativeAtar;
  if (gap >= 4) return "Likely fit";
  if (gap >= -3) return "Close option";
  if (gap >= -8) return "Higher option";
  return "Backup pathway";
}

function getRecommendations(profile) {
  return courses
    .map((course) => ({ ...course, score: scoreCourse(course, profile), fit: classify(course, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function render() {
  const profile = getProfile();
  currentRecommendations = getRecommendations(profile);
  const best = currentRecommendations[0];
  const backup =
    currentRecommendations.find((item) => item.fit.includes("Backup") || item.fit.includes("Pathway")) ||
    currentRecommendations.at(-1);
  const stretch =
    currentRecommendations.find((item) => item.fit.includes("Higher") || item.indicativeAtar > profile.atar) ||
    currentRecommendations[1];

  resultTitle.textContent =
    currentMode === "atar"
      ? `Your ${profile.field} options in ${profile.location}`
      : `No-ATAR pathways for ${profile.field}`;
  confidencePill.textContent = currentMode === "atar" ? `ATAR ${profile.atar || "not set"}` : "No-ATAR mode";

  spotlight.innerHTML =
    currentMode === "atar"
      ? `<h3>Best match: ${best.course} at ${best.university}</h3>
         <p>Your ATAR is ${profile.atar}, and you want ${profile.field} in ${profile.location}. You may be eligible for close-fit bachelor options, safer backup programs like ${backup.course}, and higher options such as ${stretch.course} if adjustment factors, subject prerequisites, or alternate entry apply.</p>`
      : `<h3>Best pathway: ${backup.course} at ${backup.university}</h3>
         <p>Since you do not have an ATAR, start with the strongest alternative entry route: diploma, TAFE, foundation studies, mature-age entry, SEAS or online/open-entry study. After completing the pathway, apply for bachelor entry and ask about credit transfer.</p>`;

  grid.innerHTML = currentRecommendations.map(renderCard).join("");
  comparisonRows.innerHTML = currentRecommendations.map(renderComparisonRow).join("");
  renderTimeline(profile, best, backup);
  wireSaveButtons();
}

function renderCard(course) {
  return `
    <article class="course-card">
      <div class="course-card__top">
        <div>
          <h3>${course.course}</h3>
          <p>${course.university}</p>
        </div>
        <span class="tag">${course.fit}</span>
      </div>
      <div class="meta">
        <span><strong>Indicative ATAR:</strong> ${course.indicativeAtar}</span>
        <span><strong>Campus:</strong> ${course.campus}</span>
        <span><strong>Duration:</strong> ${course.duration}</span>
        <span><strong>Careers:</strong> ${course.outcomes.join(", ")}</span>
      </div>
      <p>${course.pathway}</p>
      <div class="card-actions">
        <a class="link-button" href="${course.url}" target="_blank" rel="noreferrer">Official page</a>
        <button class="save-button" type="button" data-save="${course.id}">Save</button>
      </div>
    </article>
  `;
}

function renderComparisonRow(course) {
  return `
    <tr>
      <td><strong>${course.course}</strong><br><span class="meta">${course.outcomes[0]}</span></td>
      <td>${course.university}</td>
      <td><span class="tag">${course.fit}</span></td>
      <td>${course.campus}</td>
      <td>${course.duration}</td>
      <td><a href="${course.url}" target="_blank" rel="noreferrer">Open link</a></td>
    </tr>
  `;
}

function renderTimeline(profile, best, backup) {
  const steps =
    currentMode === "atar"
      ? [
          ["Now", `Check prerequisites for ${best.course} and confirm official entry requirements.`],
          ["This week", `List ${best.university}, ${backup.university}, and one higher option in preference order.`],
          ["Before offers", "Apply for adjustment factors, SEAS or equity schemes if eligible."],
          ["Offer round", "Accept the best offer, or start the backup pathway and transfer later."],
        ]
      : [
          ["Now", `Choose a ${profile.field} diploma, TAFE, foundation or open-entry starting point.`],
          ["1-2 months", "Prepare evidence: transcripts, work experience, English results, portfolio or STAT."],
          ["First study period", "Complete core units and ask universities about credit transfer."],
          ["After pathway", `Apply for ${best.course} or a related bachelor with credit.`],
        ];

  timelineTrack.innerHTML = steps
    .map(
      ([time, text]) => `
        <article class="timeline-step">
          <span>${time}</span>
          <h3>${time === "Now" ? "Start" : time}</h3>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function wireSaveButtons() {
  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const course = courses.find((item) => item.id === button.dataset.save);
      saved.set(course.id, course);
      localStorage.setItem("unipathSaved", JSON.stringify([...saved.entries()]));
      renderSaved();
      button.textContent = "Saved";
    });
  });
}

function renderSaved() {
  if (!saved.size) {
    savedList.innerHTML = `<p class="meta">Saved courses will appear here after you shortlist an option.</p>`;
    return;
  }
  savedList.innerHTML = [...saved.values()]
    .map(
      (course) => `
        <article class="saved-item">
          <strong>${course.course}</strong>
          <span class="meta">${course.university} • ${course.campus}</span>
        </article>
      `,
    )
    .join("");
}

function addChat(message, type) {
  const bubble = document.createElement("div");
  bubble.className = `chat__bubble chat__bubble--${type}`;
  bubble.textContent = message;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function answerQuestion(question) {
  const profile = getProfile();
  const best = currentRecommendations[0];
  const lower = question.toLowerCase();

  if (lower.includes("backup") || lower.includes("safe")) {
    const backup =
      currentRecommendations.find((item) => item.fit.includes("Backup") || item.level !== "Bachelor degree") ||
      currentRecommendations.at(-1);
    return `${backup.course} at ${backup.university} is the safest backup in this shortlist. It gives you a realistic starting point while keeping a path toward ${profile.field}.`;
  }

  if (lower.includes("diploma") || lower.includes("pathway") || lower.includes("no atar")) {
    return `A diploma-to-bachelor pathway means you study a lower-entry course first, build results, then apply for the bachelor. If approved, some completed units may count as credit so you do not always start from zero.`;
  }

  if (lower.includes("career") || lower.includes("job")) {
    return `${best.course} can lead toward roles such as ${best.outcomes.join(", ")}. A practical course, internship, portfolio, and certifications can make the pathway stronger.`;
  }

  if (lower.includes("higher") || lower.includes("try")) {
    const higher = currentRecommendations.find((item) => item.indicativeAtar > profile.atar) || currentRecommendations[1];
    return `${higher.course} at ${higher.university} is worth trying as a higher option. Put it above safer options if it is your dream course, then keep a backup underneath.`;
  }

  return `In simple terms: your strongest current match is ${best.course} at ${best.university}. Keep one close-fit option, one safer backup, and one pathway option so you have choices when offers come out.`;
}

renderSaved();
render();
