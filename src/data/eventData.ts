export interface SectionItem {
  id: string;
  num: string;
  label: string;
}

export const sections: SectionItem[] = [
  { id: "welcome", num: "01", label: "Welcome Message" },
  { id: "overview", num: "02", label: "Event Overview" },
  { id: "venue", num: "03", label: "Venue & Logistics" },
  { id: "day1", num: "04", label: "Day 1 — TechXcelerate" },
  { id: "autobots", num: "05", label: "Rise of Autobots" },
  { id: "drone", num: "06", label: "DroneX" },
  { id: "gamemania", num: "07", label: "Gaming Mania" },
  { id: "conclave-prelims", num: "08", label: "Capital Clash" },
  { id: "expo", num: "09", label: "Discovery Day Expo" },
  { id: "day2", num: "10", label: "Day 2 — AI Conclave" },
  { id: "demos", num: "11", label: "Company AI Demos" },
  { id: "keynotes", num: "12", label: "Keynote Speeches" },
  { id: "ngo", num: "13", label: "NGO & Cultural" },
  { id: "guidelines", num: "14", label: "Guidelines & Deadlines" },
  { id: "judging", num: "15", label: "Judging Framework" },
  { id: "sponsors", num: "16", label: "Sponsorship Tiers" },
  { id: "conduct", num: "17", label: "Code of Conduct" },
  { id: "emergency", num: "18", label: "Emergency & Safety" },
  { id: "faq", num: "19", label: "Frequently Asked" },
  { id: "contact", num: "20", label: "Contact & Handlers" },
];

export const statistics = [
  { label: "Attendees", count: 1000, suffix: "+" },
  { label: "Prize Pool", count: 1.25, prefix: "₹", suffix: " Lakh" },
  { label: "Competitions", count: 5, suffix: "" },
  { label: "AI Demos", count: 10, suffix: "+" },
  { label: "Event Days", count: 2, suffix: "" },
];

export const venueInfo = {
  title: "APJ Abdul Kalam Open Air Theatre",
  details: [
    { label: "Seating Capacity", value: "1,000 max capacity" },
    { label: "Stage Infrastructure", value: "Amphitheater stage with PA system & projection" },
    { label: "Parallel Tracks", value: "4 simultaneous arenas on Day 1 morning" },
    { label: "Power & Utility", value: "Industrial backup generator on standby" },
    { label: "Medical Support", value: "On-site first-aid team present both days" },
    { label: "Connectivity", value: "Full campus Wi-Fi + dedicated 5G node" },
  ],
  logistics: [
    "Day 1 Registration Desk opens at 08:00 AM. Report 45 mins before slot.",
    "Day 2 check-in opens at 08:30 AM. Dedicated entry gates by domain.",
    "Drone pilots must present DGCA-compliant UAV documentation at check-in.",
  ],
  travel: [
    "Outstation participants are responsible for their own accommodation.",
    "MITM Guest House bookings available on request (subject to availability).",
    "Shuttle transportation from Manipal bus stand to MITM campus is arranged both days.",
  ],
};

export const day1Schedule = [
  { time: "08:00 – 09:30", activity: "📋 Registration & Reporting", details: ["Venue: Arambha"] },
  { time: "10:00 – 11:30", activity: "🎤 Opening Ceremony", details: ["Venue: APJ Abdul Kalam Theatre"] },
  { time: "11:30 – 01:30", activity: "🤖 Robotics Competition", details: ["Venue: APJ Abdul Kalam Theatre", "Duration: 120 min"] },
  { time: "10:30 – 01:30", activity: "🎮 Game Mania", details: ["Duration: 180 min"] },
  { time: "11:30 – 01:30", activity: "🚁 Dronex", details: ["Venue: Library Entrance", "Duration: 120 min"] },
  { time: "10:30 – 04:25", activity: "💡 Capital Clash", details: ["Duration: 235 min"] },
  { time: "01:30 – 02:15", activity: "🍽️ Lunch Break", details: ["Duration: 45 min"] },
  { time: "02:15 – 05:00", activity: "🔬 Student Project Expo", details: ["Venue: APJ Abdul Kalam Theatre", "Duration: 165 min"] },
  { time: "05:00 – 05:40", activity: "🌍 NGO Sessions", details: ["Venue: APJ Abdul Kalam Theatre", "Duration: 40 min"] },
  { time: "05:40 – 06:30", activity: "🏅 Prize Distribution & Closing – Day 1", details: ["Venue: APJ Abdul Kalam Theatre", "Duration: 50 min"] },
];

export const day2Schedule = [
  { time: "08:30 – 09:30", activity: "📋 Registration & Check-in", details: ["Duration: 60 min"] },
  { time: "10:00 – 10:30", activity: "🎤 Inauguration Ceremony", details: ["Duration: 30 min"] },
  { time: "10:30 – 01:30", activity: "⚡ Parallel Morning Tracks", details: ["Track A: Company AI Product Demos", "Track B: Capital Clash Finals", "Duration: 180 min"] },
  { time: "01:00 – 01:45", activity: "🍽️ Lunch Break", details: ["Duration: 45 min"] },
  { time: "01:45 – 02:45", activity: "🎙️ Industry Keynote Speeches", details: ["Duration: 60 min"] },
  { time: "02:45 – 03:25", activity: "🌍 NGO Session", details: ["Duration: 40 min"] },
  { time: "03:25 – 04:30", activity: "🏅 Valedictory & Prize Distribution", details: ["Duration: 65 min"] },
  { time: "04:30 – 05:30", activity: "🎭 Cultural Programme", details: ["Duration: 60 min"] },
  { time: "05:30 – 06:00", activity: "🤝 Networking & Farewell", details: ["Duration: 30 min"] },
  { time: "06:00 – 06:30", activity: "🔚 Closing Ceremony – Day 2", details: ["Duration: 30 min"] },
];


export const competitionData = {
  autobots: {
    title: "RISE OF AUTOBOTS",
    sub: "Robotics & Automation Challenge",
    theme: "Dark Metallic Grey",
    primary: "#B5B5C2",
    secondary: "#6D6D79",
    logoPath: "/assets/riseofautobots.png",
    overview: "Design, build, and demonstrate autonomous or semi-autonomous robotic systems that address a real-world problem. Focus on hardware design, software intelligence, and practical application. Teams present a live working demonstration to a judge panel.",
    focusAreas: ["Industrial Automation", "Agricultural Robotics", "Healthcare & Assistive Tech", "Search & Rescue", "Open Innovation"],
    techReqs: [
      "Any programming language or microcontroller permitted (Arduino, Raspberry Pi, ROS, etc.).",
      "Battery-powered only — no mains connection during live demonstration.",
      "Max dimensions: 60×60×80 cm (stationary). No flying robots in this category.",
      "Max weight: 5 kg (heavier builds need prior written approval).",
      "Remote-controlled allowed; full autonomy scores higher.",
      "Bring your own tools, spare parts, and charging equipment.",
    ],
    scoring: [
      { criteria: "Innovation & Originality", max: 25 },
      { criteria: "Technical Complexity", max: 20 },
      { criteria: "Functionality & Live Demo", max: 25 },
      { criteria: "Real-World Relevance", max: 15 },
      { criteria: "Presentation & Communication", max: 15 },
    ],
    restrictions: "No pre-built commercial robots or paid commercial software. Any robot causing arena damage results in immediate disqualification. No re-runs once slot is over.",
  },
  drone: {
    title: "DRONEX",
    sub: "Drone Technology Challenge",
    theme: "Futuristic Green",
    primary: "#3FAF73",
    secondary: "#1F6D4D",
    logoPath: "/assets/dronefare.png",
    overview: "Design, build, and demonstrate UAV-based systems that solve an identified problem or complete a defined aerial mission. Evaluated on engineering design, flight stability, payload management, autonomous capabilities, and safety compliance.",
    focusAreas: ["Precision Agriculture", "Search & Rescue", "Infrastructure Inspection", "Surveillance & Mapping", "Payload Delivery", "Open Innovation"],
    safety: [
      "Drones must comply with DGCA guidelines for educational/hobbyist UAVs.",
      "Drones above 250g must carry valid DGCA registration (present at check-in).",
      "Safety officer inspects each drone before flight clearance.",
      "Flight arena is cordoned with safety nets — no flying outside the designated zone.",
      "Physical kill-switch must be functional and tested before slot.",
      "LiPo batteries must be kept in safe bags; charge only in designated zones.",
      "Max altitude within arena: 30 metres.",
      "No FPV goggles allowed during public demonstrations.",
    ],
    scoring: [
      { criteria: "Mission Achievement & Flight Performance", max: 25 },
      { criteria: "Technical Design & Build Quality", max: 20 },
      { criteria: "Autonomy & Intelligence", max: 20 },
      { criteria: "Safety Compliance", max: 15 },
      { criteria: "Innovation & Application Relevance", max: 10 },
      { criteria: "Presentation & Q&A", max: 10 },
    ],
    dos: ["Perform full pre-flight checks", "Carry spare batteries & propellers", "Inform safety officers of issues"],
    donts: ["No FPV goggles in demo", "No flight if kill-switch fails", "No hardware mods after check-in"],
  },
  gamemania: {
    title: "GAMING MANIA",
    sub: "Gaming Tournament & AI Development",
    theme: "Purple Blue Energy",
    primary: "#6D5CFF",
    secondary: "#302580",
    logoPath: "/assets/gamingmania.png",
    overview: "Build intelligent game environments, AI-driven game agents, or interactive simulation platforms. The focus is on how AI is integrated into gameplay — as an opponent, simulation engine, or adaptive system. This is a development and demonstration competition, not a gaming tournament.",
    focusAreas: ["AI Game Agents & NPCs", "Simulation Environments", "Educational Games with AI", "AI for Accessibility", "Generative AI in Games", "Open Innovation"],
    techReqs: [
      "Game must be entirely built by the team. Asset packs and open-source engines (Unity, Godot, Unreal, Pygame) are permitted.",
      "AI components must be custom-coded — plug-in LLMs without modification are not allowed.",
      "Present on your own laptop — no cloud streaming.",
      "Minimum resolution: 720p. Standalone mode (no active internet) required.",
    ],
    scoring: [
      { criteria: "AI Depth & Intelligence", max: 30 },
      { criteria: "Gameplay Innovation", max: 20 },
      { criteria: "Technical Execution", max: 20 },
      { criteria: "User Experience", max: 15 },
      { criteria: "Presentation & Q&A", max: 15 },
    ],
  },
  capital: {
    title: "CAPITAL CLASH",
    sub: "Business & Finance Pitch",
    theme: "Gold",
    primary: "#FFD25F",
    secondary: "#9A7412",
    logoPath: "/assets/capitalclash.png",
    overview: "The flagship entrepreneurship platform of Innovotsava 2026. Teams conceptualize, design, and pitch AI-powered business ventures addressing real-world problems. Top 10 teams from Day 1 prelims advance to Day 2 Finals judged by industry investors.",
    domains: [
      { num: "01", name: "AI for Healthcare & MedTech", desc: "AI diagnostics, drug discovery, patient monitoring, telemedicine, assistive health tools." },
      { num: "02", name: "AI for Sustainable Development", desc: "Climate tech, energy optimization, smart agriculture, waste management, water conservation." },
      { num: "03", name: "AI for Education & Skills", desc: "Personalized learning, intelligent tutoring, career guidance, bridging rural education gaps." },
      { num: "04", name: "AI for Fintech & Smart Economy", desc: "Fraud detection, credit scoring, financial inclusion, micro-lending, automated trading." },
      { num: "05", name: "AI for Smart Cities & Mobility", desc: "Smart cities, traffic prediction, transport optimization, disaster response systems." },
    ],
    pitchStructure: [
      { section: "Problem Statement", time: "1–2 min", desc: "Define the real-world problem clearly." },
      { section: "Solution Overview", time: "2–3 min", desc: "The AI-powered solution and how it operates." },
      { section: "Market & Impact", time: "2 min", desc: "Target market, users, social/economic impact." },
      { section: "Business Model", time: "2 min", desc: "Revenue streams, go-to-market strategy." },
      { section: "Technology Stack", time: "2 min", desc: "AI/ML methods, data sources, architecture." },
      { section: "Traction & Roadmap", time: "1 min", desc: "Current progress, prototype, future milestones." },
    ],
    scoringPrelims: [
      { criteria: "Problem Clarity & Relevance", max: 15 },
      { criteria: "AI Innovation & Technical Depth", max: 25 },
      { criteria: "Business Viability", max: 20 },
      { criteria: "Social / Environmental Impact", max: 15 },
      { criteria: "Presentation & Communication", max: 15 },
      { criteria: "Q&A Performance", max: 10 },
    ],
    scoringFinals: [
      { criteria: "Problem Clarity & Relevance", max: 10 },
      { criteria: "AI Innovation & Technical Depth", max: 25 },
      { criteria: "Business Viability & Model", max: 25 },
      { criteria: "Social / Environmental Impact", max: 15 },
      { criteria: "Scalability & Roadmap", max: 10 },
      { criteria: "Presentation & Stage Presence", max: 10 },
      { criteria: "Q&A Performance", max: 5 },
    ],
    prizes: [
      { pos: "1st Place", prize: "Winner Trophy + Cash Prize + Industry Mentorship + Certificate of Excellence" },
      { pos: "2nd Place", prize: "Runner-Up Trophy + Certificate of Merit" },
      { pos: "3rd Place", prize: "2nd Runner-Up + Certificate of Merit" },
    ],
  },
  discovery: {
    title: "DISCOVERY DAY",
    sub: "The Student Project Expo",
    theme: "Future Innovation Red",
    primary: "#E95555",
    secondary: "#7D2222",
    logoPath: "/assets/discoveryday.png",
    overview: "A curated showcase of the most innovative student projects from across MITM. Open innovation — teams may present any original technology project solving a meaningful problem. Top 10 pre-screened teams present directly in front of industry dignitaries and company delegates.",
    selection: [
      { step: "Stage 1", desc: "Online registration + 500-word project synopsis + 2-min video." },
      { step: "Stage 2", desc: "Technical Committee reviews originality, feasibility & impact." },
      { step: "Stage 3", desc: "Top 10 notified at least 2 weeks before event day." },
      { step: "Stage 4", desc: "Selected teams confirm attendance (Registration is Free)." },
      { step: "Stage 5", desc: "Top 10 present to industry dignitaries on Day 1 afternoon." },
    ],
    format: [
      "12 minutes for demonstration and presentation.",
      "3 minutes for Q&A with industry dignitaries.",
      "Slides, live demo, or working prototype — any combination acceptable.",
      "Teams must set up in designated Expo arena before 13:45.",
    ],
    scoring: [
      { criteria: "Innovation & Originality", max: 25 },
      { criteria: "Technical Merit & Complexity", max: 25 },
      { criteria: "Feasibility & Real-World Applicability", max: 20 },
      { criteria: "Impact & Relevance", max: 15 },
      { criteria: "Presentation & Communication", max: 15 },
    ],
  },
};

export const keynoteSpeakers = [
  { name: "Dr. Sandeep Ananth", role: "CTO, NeuralCraft AI", topic: "The Next Decades of Applied Agentic Systems", bio: "Former principal AI researcher at OpenAI, focusing on deploying autonomous systems to industrial settings.", avatar: "nishanth" },
  { name: "Meera Krishnan", role: "VP of Engineering, VeloScale", topic: "Building Scalable AI Infrastructure for India", bio: "Specialist in large-scale cloud distributions, managing infrastructure that handles 10M+ daily events.", avatar: "pranamya" },
  { name: "Rohan Sen", role: "Founder, Peak Ventures", topic: "What Investors Look For in AI Startups", bio: "VC investor who has backed over 15 tech unicorns across Asia-Pacific during early seed stages.", avatar: "balaram" }
];

export const companyDemos = [
  { name: "Apex Robotics", product: "Autonobot Gen-3", desc: "An intelligent autonomous arm for sorting and industrial assembly lines." },
  { name: "GreenPulse", product: "AgriVision Drone", desc: "UAV solution scanning crop yields and assessing plant health with multispectral cameras." },
  { name: "CyberNode", product: "Aegis Shield", desc: "Next-gen enterprise network security employing real-time adaptive AI threat detection." },
  { name: "Synthetix Labs", product: "Avatar Creator", desc: "Generate highly expressive 3D avatars with custom clothing dynamics in under 60 seconds." },
  { name: "FinFlow", product: "MicroCred Engine", desc: "Alternative credit scoring platform deploying graph neural networks for underbanked regions." },
];

export const ngos = [
  { name: "CodeForChange", mission: "Providing free digital literacy and tech education to rural schools.", location: "Mysore district hubs" },
  { name: "EcoRestore", mission: "Leveraging technology for clean water access and community reforestation monitoring.", location: "Western Ghats projects" },
];

export const guidelines = {
  registration: [
    "Register on the official Innovotsava 2026 portal before the deadline.",
    "Late registrations will not be accepted under any circumstance.",
    "Exactly 4 members per team with at least 1 from a different department.",
    "A student may not register in more than one competition team.",
    "All members must be currently enrolled students of MITM.",
    "Registration is free for all competitions.",
  ],
  conduct: [
    "Report to assigned track/arena at least 45 minutes before your slot.",
    "Carry valid college ID and confirmation email at all times.",
    "Dress code: Business casual. No sleeveless tops, shorts, or open footwear in presentation arenas.",
    "Mobile phones on silent mode during presentations and judging.",
    "No loud music, aggressive behavior, or interference with other teams.",
  ],
  equipment: [
    "Participants are responsible for their own equipment — MITM is not liable for damage or theft.",
    "All work must be original — plagiarism is strictly prohibited.",
    "By participating, teams grant rights to photograph and document for official publications.",
    "Teams retain full intellectual property rights over their submitted work.",
  ],
  advisor: [
    "Every team is assigned a faculty advisor post-registration.",
    "The advisor guides but does not contribute to or co-author the work.",
    "Meet your advisor at least twice before Event Day for progress verification.",
    "The Faculty Advisor Sign-Off Form must be submitted at Day 1 check-in.",
  ],
  deadlines: [
    { item: "Team Registration + Initial Abstract", date: "TBA", destination: "Official Portal" },
    { item: "Project Expo Synopsis (500 words + 2 min video)", date: "TBA", destination: "Official Portal" },
    { item: "CAPITAL CLASH Pitch Deck (PDF)", date: "TBA", destination: "Official Portal" },
    { item: "Drone DGCA Compliance Documentation", date: "TBA", destination: "Email to Tech Team" },
    { item: "Faculty Advisor Sign-Off Form", date: "Day 1 Check-in", destination: "Registration Desk" },
    { item: "Company AV Requirements", date: "7 days before event", destination: "Email to Logistics Team" },
  ],
};

export const codeOfConduct = {
  dos: [
    "Treat all individuals with respect regardless of gender, department, or institution.",
    "Engage in fair, honest competition — present only original work.",
    "Follow all instructions from organizing staff, marshals, and safety officers.",
    "Maintain cleanliness and orderliness in all arenas and common spaces.",
    "Represent MITM and the Stack Forge Club with professionalism.",
  ],
  donts: [
    "Submitting or presenting plagiarized work as original.",
    "Attempting to bribe or make unsolicited contact with judges.",
    "Physical altercation, threatening behavior, or verbal abuse.",
    "Tampering with another team's equipment or presentation.",
    "Violating drone safety protocols.",
    "Using AI generation tools for content claimed as original team work (Discovery Day and Capital Clash).",
  ],
};

export const emergencyProtocols = [
  {
    title: "🏥 Medical Emergencies",
    items: [
      "First-aid station at main venue entrance & near DRONEX arena.",
      "Trained first-aid responders on-site full duration of both days.",
      "Contact nearest marshal immediately for serious emergencies.",
      "Do not move the individual unless directed by medical personnel.",
    ],
  },
  {
    title: "🔥 Fire & Evacuation",
    items: [
      "Fire exits clearly marked — must not be obstructed at any time.",
      "On fire alarm: evacuate immediately via nearest marked exit.",
      "Assembly point: Designated open ground (marked on Day 1 briefing map).",
      "Do not attempt to retrieve equipment during evacuation.",
    ],
  },
  {
    title: "⚡ Electrical Safety",
    items: [
      "Only authorized personnel handle stage electrical equipment, PA systems, and lighting.",
      "Participants may not use venue power outlets without Logistics Team approval.",
      "Drone battery charging only at designated LiPo-safe charging stations.",
    ],
  },
  {
    title: "👥 Crowd Management",
    items: [
      "Max capacity of Open Air Theatre: 1,000 — strictly enforced.",
      "Volunteer marshals stationed at all entry/exit points.",
      "Barricaded audience zones in effect during DRONEX flight demos.",
    ],
  },
];

export const faqs = [
  { q: "Can I register in more than one competition?", a: "No. A student may not be part of more than one competition team across all events at Innovotsava 2026. Each student can only register in a single competition category in one day." },
  { q: "What is the cross-departmental requirement?", a: "Every team of 4 must include at least 1 member from a department other than their primary department. This rule applies to all competitions — RISE OF AUTOBOTS, DRONEX, GAMING MANIA, CAPITAL CLASH, and DISCOVERY DAY." },
  { q: "Who is eligible to participate?", a: "All team members must be currently enrolled students of Maharaja Institute of Technology Mysore (MITM). The event is internal to MITM students only; external participants from other colleges are not eligible for the competitions." },
  { q: "When are the Day 1 competition results announced?", a: "Results for RISE OF AUTOBOTS, DRONEX, and GAMING MANIA are announced during the Networking Session at 5:00 PM on Day 1. Top 10 CAPITAL CLASH teams advancing to Finals are also announced at this time. Formal prize distribution happens at the Day 2 Valedictory Ceremony." },
  { q: "Is accommodation provided for outstation participants?", a: "Outstation participants are responsible for their own accommodation. MITM Guest House bookings may be facilitated on prior request to the organizing committee, subject to availability. Transportation from the Manipal bus stand to MITM campus will be arranged on both event days." },
  { q: "Is food provided at the event?", a: "No, food is not provided." },
  { q: "What documents do I need to bring on Day 1?", a: "Bring your valid college ID, your registration confirmation email (digital or printed), and the Faculty Advisor Sign-Off Form. Drone participants must additionally carry DGCA-compliant documentation for their UAV. Report at least 45 minutes before your scheduled slot." },
  { q: "Will certificates be provided?", a: "Certificates are distributed at the Valedictory Ceremony to all finalists and special mention awardees across all competitions. CAPITAL CLASH finalists also receive a Finalists' Certificate and will be listed in the Innovotsava 2026 official publication." },
  { q: "Can I switch my faculty advisor?", a: "Teams may not switch advisors once assigned without written approval from the Core Committee. The advisor is assigned by the Technical Team during the registration confirmation phase." },
  { q: "Do the CAPITAL CLASH Finals teams need to prepare new slides?", a: "Teams should incorporate feedback received informally after their Day 1 presentation where possible. The audience on Day 2 includes the full crowd of 1,000, so presentations must be clear to a non-technical audience as well. A 2-minute setup window is provided before each team's slot." },
];

export const organizers = [
  { name: "Dr. Murali S", role: "Principal, MITM (Patron & Mentor)", phone: "N/A", avatar: "principal" },
  { name: "Dr. Shivamurthy R C", role: "Head of Department, CSE (Convenor)", phone: "N/A", avatar: "hod" },
  { name: "Prof. Prakruthi S", role: "Faculty Head", phone: "N/A", avatar: "prakruthi" },
  { name: "Nishanth S", role: "Event Core Committee Head", phone: "7975057085", avatar: "nishanth" },
  { name: "Pranamya V", role: "Event Core Committee Head", phone: "7483206176", avatar: "pranamya" },
  { name: "Balaram B", role: "Club Head", phone: "94491 14920", avatar: "balaram" },
  { name: "Aditya D", role: "Club Head", phone: "9972609711", avatar: "aditya" },
  { name: "Monisha Vinayak C", role: "Club Head", phone: "8618718486", avatar: "monisha" },
];
