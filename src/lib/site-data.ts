export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  capabilities: string[];
};

export const services: Service[] = [
  { slug: "custom-software-development", title: "Custom software development", summary: "Purpose-built platforms shaped around the way your business works.", icon: "code", capabilities: ["Product discovery and architecture", "Web application engineering", "Legacy platform modernization", "Quality, security, and ongoing evolution"] },
  { slug: "web-development", title: "Web development", summary: "Fast, accessible web experiences built for real-world scale.", icon: "globe", capabilities: ["Web applications and portals", "Commerce experiences", "Frontend platforms", "Performance and accessibility"] },
  { slug: "mobile-app-development", title: "Mobile app development", summary: "Thoughtful native and cross-platform apps for people on the move.", icon: "smartphone", capabilities: ["iOS and Android products", "Cross-platform application engineering", "Mobile design systems", "Release and lifecycle support"] },
  { slug: "enterprise-software-development", title: "Enterprise software", summary: "Connected systems that help large organizations move with clarity.", icon: "layers", capabilities: ["Enterprise platforms", "Workflow and process software", "System integration", "Modernization programs"] },
  { slug: "ai-machine-learning", title: "AI and machine learning", summary: "Practical intelligence, designed around useful work and trusted data.", icon: "brain", capabilities: ["AI product strategy", "Applied machine learning", "Knowledge assistants", "Model evaluation and guardrails"] },
  { slug: "cybersecurity-solutions", title: "Cybersecurity solutions", summary: "Security-minded engineering that protects products and operations.", icon: "shield", capabilities: ["Security architecture", "Application risk reviews", "Identity and access patterns", "Secure development practices"] },
  { slug: "cloud-solutions", title: "Cloud solutions", summary: "Resilient cloud foundations made for changing business needs.", icon: "cloud", capabilities: ["Cloud-native architecture", "Migration planning", "Platform engineering", "Reliability and cost visibility"] },
  { slug: "iot-development", title: "IoT development", summary: "Connected products that bring device data into useful workflows.", icon: "radio", capabilities: ["Connected device platforms", "Edge and cloud integration", "Telemetry pipelines", "Fleet and device management"] },
  { slug: "it-staff-augmentation", title: "IT staff augmentation", summary: "Specialist engineering talent that fits your team and delivery rhythm.", icon: "users", capabilities: ["Embedded product teams", "Specialist engineering roles", "Flexible team extensions", "Knowledge transfer"] },
  { slug: "salesforce-development", title: "Salesforce development", summary: "Customer and operations workflows tailored to your organization.", icon: "sparkles", capabilities: ["Salesforce customization", "CRM integration", "Experience Cloud", "Platform automation"] },
  { slug: "blockchain-development", title: "Blockchain development", summary: "Carefully scoped distributed systems for appropriate use cases.", icon: "blocks", capabilities: ["Distributed application strategy", "Smart contract engineering", "Tokenization concepts", "Security reviews"] },
  { slug: "managed-it-services", title: "Managed IT services", summary: "Steady technical operations that keep critical systems moving.", icon: "settings", capabilities: ["Application maintenance", "Cloud operations support", "Monitoring and incident readiness", "Ongoing improvement"] },
];

export type Industry = { slug: string; title: string; summary: string; icon: string; focus: string[] };

export const industries: Industry[] = [
  { slug: "healthcare-life-sciences", title: "Healthcare & life sciences", summary: "Secure digital experiences for care teams, patients, and research.", icon: "heart", focus: ["Patient and provider experiences", "Clinical workflow software", "Interoperability-minded platforms"] },
  { slug: "banking-fintech", title: "Banking & FinTech", summary: "Dependable financial products with thoughtful data and risk controls.", icon: "landmark", focus: ["Digital banking journeys", "Payment and account workflows", "Financial data platforms"] },
  { slug: "logistics-supply-chain", title: "Logistics & supply chain", summary: "Connected systems for visibility across complex operations.", icon: "truck", focus: ["Shipment and fleet visibility", "Warehouse workflows", "Planning and analytics"] },
  { slug: "retail-ecommerce", title: "Retail & e-commerce", summary: "Commerce experiences that connect discovery, purchase, and service.", icon: "shopping-bag", focus: ["Digital commerce platforms", "Catalog and order experiences", "Customer engagement"] },
  { slug: "real-estate", title: "Real estate", summary: "Digital tools for property discovery, management, and transactions.", icon: "building", focus: ["Property marketplaces", "Tenant and resident portals", "Operations and portfolio tools"] },
  { slug: "manufacturing", title: "Manufacturing", summary: "Software that helps teams coordinate production and insight.", icon: "factory", focus: ["Production operations", "Connected equipment", "Quality and supply workflows"] },
  { slug: "travel-hospitality", title: "Travel & hospitality", summary: "Connected guest journeys from planning through the stay.", icon: "plane", focus: ["Booking and itinerary tools", "Guest experiences", "Operations software"] },
  { slug: "education", title: "Education", summary: "Accessible learning and administration tools for modern institutions.", icon: "graduation-cap", focus: ["Learning platforms", "Student and family portals", "Academic operations"] },
  { slug: "automotive", title: "Automotive", summary: "Digital experiences for vehicles, ownership, and mobility services.", icon: "car", focus: ["Connected mobility products", "Customer and dealer portals", "Service workflows"] },
  { slug: "telecommunications", title: "Telecommunications", summary: "Scalable platforms for customer, network, and service operations.", icon: "radio", focus: ["Customer self-service", "Service operations", "Data and network tooling"] },
  { slug: "gaming", title: "Gaming", summary: "Player-first products and services supported by robust platforms.", icon: "gamepad", focus: ["Player communities", "Live operations tooling", "Cross-platform experiences"] },
  { slug: "fitness-wellness", title: "Fitness & wellness", summary: "Helpful digital products for movement, health, and everyday habits.", icon: "activity", focus: ["Member experiences", "Coaching and content tools", "Connected wellness products"] },
];

export const emergingTechnologies = [
  { title: "Artificial intelligence", icon: "brain", summary: "Useful assistants, prediction, and automation grounded in your data." },
  { title: "Data & business intelligence", icon: "chart", summary: "Clearer decisions with trusted data products and analytics." },
  { title: "Internet of Things", icon: "radio", summary: "Connect devices, operations, and insight in real time." },
  { title: "Robotic process automation", icon: "workflow", summary: "Reduce repetitive work with governed automation flows." },
  { title: "Blockchain", icon: "blocks", summary: "Explore distributed systems where they solve a real problem." },
  { title: "Cybersecurity", icon: "shield", summary: "Design resilient products with privacy and security in mind." },
  { title: "Salesforce", icon: "sparkles", summary: "Bring customer processes together across the Salesforce platform." },
  { title: "SAP solutions", icon: "database", summary: "Extend enterprise operations through connected SAP experiences." },
];

export const technologyGroups = [
  { name: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "JavaScript", "TypeScript"] },
  { name: "Backend", items: ["Java", "Spring Boot", "Python", "Node.js", "PHP", ".NET"] },
  { name: "Mobile", items: ["Flutter", "React Native", "Kotlin", "Swift", "Android", "iOS"] },
  { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis"] },
  { name: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { name: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] },
  { name: "AI / ML", items: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI"] },
];

export const partnerNames = ["ISO 27001", "ISO 9001", "AWS", "Microsoft", "Adobe", "Salesforce", "Cisco", "Google Cloud"];

export const sampleMetrics = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 250, suffix: "+", label: "Technology professionals" },
  { value: 30, suffix: "+", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export const deliverySteps = [
  { number: "01", title: "Discovery", description: "Align on the people, needs, constraints, and outcomes that matter." },
  { number: "02", title: "Strategy", description: "Shape a practical roadmap, technical direction, and delivery plan." },
  { number: "03", title: "Experience design", description: "Map key journeys and test a clear, accessible product experience." },
  { number: "04", title: "Engineering", description: "Build in focused increments with close product collaboration." },
  { number: "05", title: "Quality assurance", description: "Validate behavior, performance, security, and usability." },
  { number: "06", title: "Launch", description: "Prepare a confident release and support the transition to production." },
  { number: "07", title: "Care & improvement", description: "Learn from real usage and evolve the product over time." },
];

export const engagementModels = [
  { title: "Fixed scope", icon: "target", description: "A defined outcome, milestones, and delivery plan for well-understood work." },
  { title: "Dedicated developers", icon: "users", description: "Specialist contributors working alongside your in-house team." },
  { title: "Hourly engagement", icon: "clock", description: "Flexible support for evolving priorities and focused technical needs." },
  { title: "Capacity hours", icon: "calendar", description: "A reserved pool of engineering time for steady improvements." },
  { title: "Discovery phase", icon: "compass", description: "A short, structured first step to reduce uncertainty before a build." },
];

export type WorkSample = {
  slug: string;
  title: string;
  industry: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  approach: string[];
  technologies: string[];
  icon: string;
  art: string;
};

export const workSamples: WorkSample[] = [
  { slug: "carepath", title: "CarePath", industry: "Healthcare", category: "Healthcare", summary: "An illustrative care-coordination concept for connecting patient tasks and clinical teams.", challenge: "Care teams need a clearer view of patient journeys and the next action across fragmented tools.", solution: "A fictional care-coordination workspace concept bringing tasks, updates, and patient context into one flow.", approach: ["Map the care journey", "Prototype the role-based workspace", "Plan a privacy-conscious integration layer"], technologies: ["React", "TypeScript", "Cloud", "Analytics"], icon: "heart", art: "health", },
  { slug: "northline-pay", title: "Northline Pay", industry: "FinTech", category: "FinTech", summary: "A fictional small-business payment dashboard concept with clearer cash-flow visibility.", challenge: "Small teams need a simple way to review incoming payments and understand cash movement.", solution: "A demo dashboard concept that brings payment activity, reconciliation cues, and account views together.", approach: ["Clarify core merchant tasks", "Design a secure account experience", "Prototype payment and reconciliation flows"], technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud"], icon: "landmark", art: "finance", },
  { slug: "cartograph-commerce", title: "Cartograph", industry: "E-commerce", category: "E-commerce", summary: "A sample commerce experience concept focused on product discovery and thoughtful checkout.", challenge: "A growing catalog can make it harder for customers to compare products and complete a purchase.", solution: "A fictional storefront concept with guided discovery, accessible product details, and a streamlined checkout flow.", approach: ["Review discovery journeys", "Prototype product comparison", "Plan a flexible commerce foundation"], technologies: ["React", "Commerce API", "TypeScript", "Analytics"], icon: "shopping-bag", art: "commerce", },
  { slug: "relay-ops", title: "RelayOps", industry: "Logistics", category: "Logistics", summary: "An illustrative operations console concept for shipment status and exception handling.", challenge: "Distributed teams need a shared view of shipment events and operational exceptions.", solution: "A fictional logistics workspace concept combining fleet signals, alerts, and delivery milestones.", approach: ["Map operational handoffs", "Define key exception states", "Prototype a role-based control view"], technologies: ["Vue.js", "Python", "IoT", "PostgreSQL"], icon: "truck", art: "logistics", },
  { slug: "aurelia-erp", title: "Aurelia ERP", industry: "Enterprise software", category: "Enterprise software", summary: "A sample enterprise planning concept connecting teams, processes, and operational data.", challenge: "Complex internal workflows often span separate systems and leave teams without a shared picture.", solution: "A fictional modular operations platform concept designed around connected workflows and clear permissions.", approach: ["Prioritize high-friction workflows", "Model system boundaries", "Plan a phased modernization"], technologies: ["Java", "Spring Boot", "React", "Microsoft Azure"], icon: "layers", art: "enterprise", },
  { slug: "signal-forge", title: "SignalForge", industry: "AI solutions", category: "AI solutions", summary: "An illustrative AI knowledge assistant concept with human review and source visibility.", challenge: "A large knowledge base can be difficult for teams to search and keep current.", solution: "A fictional assistant concept that surfaces grounded answers with citations and review steps.", approach: ["Identify trusted knowledge sources", "Design grounded retrieval", "Evaluate answers with human review"], technologies: ["Python", "AI / ML", "PostgreSQL", "Cloud"], icon: "brain", art: "ai", },
  { slug: "lumen-mobile", title: "Lumen Mobile", industry: "Mobile applications", category: "Mobile applications", summary: "A sample mobile companion concept for managing everyday membership and activity.", challenge: "People need a simple way to manage their memberships and upcoming activities on the go.", solution: "A fictional cross-platform app concept with a focused home screen and accessible service flows.", approach: ["Prioritize the mobile journey", "Prototype key interactions", "Prepare a reusable cross-platform foundation"], technologies: ["React Native", "TypeScript", "iOS", "Android"], icon: "smartphone", art: "mobile", },
];

export const testimonialSamples = [
  { quote: "The sample team brought structure to a complex brief and made the next steps feel clear.", role: "Illustrative product leader", company: "Fictional organization" },
  { quote: "The workshop helped us focus on the right problem before committing to a build.", role: "Illustrative technology director", company: "Fictional organization" },
  { quote: "A thoughtful example of how design, engineering, and delivery can work together.", role: "Illustrative operations lead", company: "Fictional organization" },
];

export const articles = [
  { slug: "modernizing-enterprise-platforms", category: "Engineering", title: "A practical path to modernizing enterprise platforms", date: "Perspective", readTime: "6 min read", summary: "A useful starting point for teams planning to evolve critical systems without disrupting day-to-day work.", body: ["Modernization is most effective when it starts with the work people need to do, not a technology checklist. A clear view of users, dependencies, and operational constraints helps teams choose a safer first step.", "A phased plan can make progress visible while reducing unnecessary risk. Start with a defined workflow, establish boundaries around the systems it touches, and validate the new experience with the people who use it.", "Teams can then build on that foundation with stronger observability, clearer ownership, and a roadmap that connects technical change to business needs."] },
  { slug: "responsible-ai-in-products", category: "Artificial intelligence", title: "Making AI useful, understandable, and accountable", date: "Perspective", readTime: "5 min read", summary: "Practical questions product teams can ask before introducing AI into a customer or employee workflow.", body: ["Good AI product work begins with a useful task and a clear definition of what a person still needs to decide. Teams should identify the source material, expected failure modes, and the point where human judgment matters.", "Evaluation needs to reflect real use. Test representative questions, show where answers come from, and make it easy for people to flag an issue or take another path.", "A responsible rollout treats monitoring and iteration as part of the product, not an afterthought. Clear boundaries help users understand what the system can and cannot do."] },
  { slug: "designing-for-connected-operations", category: "Digital products", title: "Designing software for connected operations", date: "Perspective", readTime: "4 min read", summary: "How shared workflows and dependable data can help distributed teams act with more confidence.", body: ["Operations software often needs to make a complicated situation understandable at a glance. The interface should show what changed, what needs attention, and which action is available to each role.", "A useful design process follows the handoffs between people and systems. Mapping those transitions often reveals where information is delayed or repeated.", "When teams pair that understanding with a reliable technical foundation, they can improve one decision point at a time and keep the product adaptable."] },
];

export const frequentlyAskedQuestions = [
  { question: "What happens after I share a project idea?", answer: "Your inquiry is saved securely so the Nexora team can review the details. A consultation can then focus on goals, constraints, and a useful next step." },
  { question: "Can I start with a discovery engagement?", answer: "Yes. A focused discovery phase can help clarify scope, technical options, and delivery priorities before a larger commitment." },
  { question: "Can your team work with our existing engineers?", answer: "Engagements can be shaped around your team, from a focused specialist role to a collaborative product squad." },
];