export const bio = [
  "Hello ! I'm Raphael. I was a combat team leader in the French Army for over 5 years before pursuing a management degree from a top 10 French business school. I aspire to work in the cybersecurity sector, despite having a background that is not specifically focused on cybersecurity.",
  "I have been coding all types of malware for over 10 years for understanding purposes since I was in high school. From this base, I became interested in everything that revolves around this subject : reverse engineering, OSINT, pentesting, red teaming, social engineering, etc ... I am currently developing my knowledge in pentesting. I love coding my own pentest, OSINT tools or malwares and find it incredibly satisfying.",
  "During my management studies, I focused my final thesis on a technical and managerial topic, attempting to combine these two elements through accessible simplification :",
];

export const skills = [
  {
    title: "Languages",
    skillName: ".NET",
    color: "1",
    percentage: "75",
  },
  {
    title: "Languages",
    skillName: "Python / Bash / Scripting",
    color: "1",
    percentage: "85",
  },  


  
  {
    title: "Os",
    skillName: "Kali / Parrot / Linux",
    color: "2",
    percentage: "75",
  },
  {
    title: "Os",
    skillName: "Windows / WSL / VM",
    color: "2",
    percentage: "80",
  },



  {
    title: "Knowledge",
    skillName: "Pentest AD",
    color: "3",
    percentage: "45",
  },
  {
    title: "Knowledge",
    skillName: "Pentest web",
    color: "3",
    percentage: "70",
  },
  {
    title: "Knowledge",
    skillName: "Pentest wireless",
    color: "3",
    percentage: "85",
  },
  {
    title: "Knowledge",
    skillName: "Physical pentesting",
    color: "3",
    percentage: "60",
  },



  {
    title: "Reverse",
    skillName: "Reverse engineering",
    color: "4",
    percentage: "35",
  },
  
  
  
  {
    title: "Social",
    skillName: "Social engineering",
    color: "5",
    percentage: "90",
  },
  

 
  {
    title: "OSINT",
    skillName: "OSINT",
    color: "6",
    percentage: "85",
  },
];


export const projects = {
  pentestProjects: [ // Pentest Projects
    {
      projectName: "thiefhunter",
      image: "images/projects/thiefhunter.JPG",
      summary:
        "ThiefHunter is a bug hunting and penetration testing tool designed to identify security vulnerabilities efficiently. It combines advanced crawling, URL analysis, and vulnerability exploitation techniques, making it a versatile tool.",
      preview: "https://github.com/raphaelthief/thiefhunter",
      techStack: ["Python", "bug hunting", "web app", "cve", "pentest"],
    },	
    {
      projectName: "Airodump-ng_scanner",
      image: "images/projects/Airodump-ng_scanner.jpg",
      summary:
        "Airodump-ng_scanner : This Python script builds upon the functionality of Airodump-ng, introducing advanced features that enhance usability and provide more insights during wireless network scanning and analysis.",
      preview: "https://github.com/raphaelthief/airodump-ng_scanner",
      techStack: ["Python", "airodump-ng", "airgraph-ng", "wps", "wpa", "wep", "wireshark"],
    },	
    {
      projectName: "WebBrowserVuln",
      image: "images/projects/WebBrowserVuln.jpg",
      summary:
        "WebBrowserVuln : Explanation and demonstration of how infostealers operate on Chromium browser data in detail.",
      preview: "https://github.com/raphaelthief/WebBrowserVuln",
      techStack: ["SQL", "chromium", "infostealer"],
    },	
    {
      projectName: "Navkiller",
      image: "images/projects/navkiller.jpg",
      summary:
        "NavKiller is a browser data decryption tool. It aims to decrypt, organize and extract sensitive information from SQL databases stored locally by the browser.",
      preview: "https://github.com/raphaelthief/NavKiller",
      techStack: ["Python", "SQL", "chromium", "infostealer"],
    },	
    {
      projectName: "WinChecker & WinAuditer",
      image: "images/projects/winchecker.jpg",
      summary:
        "WinChecker & WinAuditer : Theses scripts aims to scan any Windows environment for potential vulnerabilities related to misconfigurations that could lead to password extraction, privilege escalations, or installation backdoors. While creating this tool, I am not reinventing the wheel. However, I am bringing a different perspective to the execution of these tools through specific additions and a different presentation of the extracted results.",
      preview: "https://github.com/raphaelthief/WinChecker",
      techStack: ["Batch", "privesc"],
    },	
    {
      projectName: "Lets_wp",
      image: "images/projects/Lets_wp.jpg",
      summary:
        "Let's WP is a lightweight tool designed to assist penetration testers in identifying vulnerabilities on WordPress sites. It simplifies common tasks like discovering default files and directories and performing brute force attacks via the xmlrpc.php API. This tool aims to be a streamlined alternative to more comprehensive tools like WPScan.",
      preview: "https://github.com/raphaelthief/lets-wp",
      techStack: ["Python", "wordpress", "xmlrpc", "bruteforce"],
    },		
    {
      projectName: "Linkedin_extractor",
      image: "images/projects/Linkedin_extractor.jpg",
      summary:
        "Linkedin_extractor : This Python script is designed to automate the extraction of employee profiles from LinkedIn-like webpages and to generate potential email addresses based on the extracted names. The tool is primarily intended for mass attack simulations or phishing campaigns where you can create bulk email addresses by guessing employees' email formats. It can also be used to generate identifiers from employee data for brute force attacks on poorly configured APIs or login pages.",
      preview: "https://github.com/raphaelthief/Linkedin_Extractor",
      techStack: ["Python", "LinkedIn", "emails", "OSINT", "reco", "social engineering"],
    },	
    {
      projectName: "Arscreator",
      image: "images/projects/Arscreator.jpg",
      summary:
        "Arscreator is a command-line utility designed to streamline the process of creating custom .md files for your personal cheatsheets within the Arsenal toolkit by Orange Cyberdefense (https://github.com/Orange-Cyberdefense/arsenal). Arsenal is a powerful resource to store and retrieve valuable command snippets and tips, and arscreator ensures you can easily generate new, organized .md files to expand your my_cheats folder.",
      preview: "https://github.com/raphaelthief/Arscreator",
      techStack: ["Python", "arsenal", "OCD", "cheatsheet", "pentest commands"],
    },	
  ],
  
  
  ctiProjects: [ // Cyber Threat Intelligence Projects
    {
      projectName: "CTI_Notifier",
      image: "images/projects/CTI_Notifier.jpg",
      summary:
        "CTI Notifier is a lightweight Windows application that monitors a list of RSS feeds for cybersecurity-related updates or any other topics you choose. It periodically fetches news from the configured RSS feeds, checks for newly published content, and displays notifications in the system tray.",
      preview: "https://github.com/raphaelthief/CTI_Notifier",
      techStack: [".NET", "exploit-db", "HaveIBeenPwned", "flagdomains", "zerodayinitiative", "msrc", "cert"],
    },
    {
      projectName: "Google-Dorker",
      image: "images/projects/Google-Dorker.jpg",
      summary:
        "This program aims to help businesses monitor the exposure of their infrastructures on the internet.",
      preview: "https://github.com/raphaelthief/Google-Dorker",
      techStack: ["Python", "G-Dorks", "Leaks", "Datas exposure"],
    },
  ],
  
  
  redteamProjects: [ // Red Team Implants Projects
    {
      projectName: "Windows_reverse_shell_tor",
      image: "images/projects/tor_reverse.jpg",
      summary:
        "Creating a reverse shell compatible with all windows versions using the Tor network (standalone and fully undetectable by Windows Defender). This is a private project that I maintain as Fully Undetectable (FUD).",
      preview: "https://github.com/raphaelthief/FUD-Tor-reverse-shell-PoC",
      techStack: ["Python", "Windows", "PE", "reverse shel", "Backdoor", "FUD"],
    },
    {
      projectName: "DuckyLoader",
      image: "images/projects/DuckyLoad.jpg",
      summary:
        "The interest of this program is primarily aimed at red team or pentesting activities on device security where the code will be injected using Rubber Ducky techniques. The primary goal of this program is to facilitate payload generation by customizing certain information and functionalities while maintaining a library of these payloads.",
      preview: "https://github.com/raphaelthief/DuckyLoad",
      techStack: ["Python", "RubberDucky", "FlipperZero", "Backdoor", "Stealer"],
    },
  ],
  
  
  osintProjects: [ // Open Source Intelligence Projects
    {
      projectName: "Searchx",
      image: "images/projects/SearchX.jpg",
      summary:
        "SearchX is a Python-based script designed for keyword searches, data analysis, and penetration testing tasks within large databases, directories, or specific files. It supports various data formats and search methods, making it highly versatile for cybersecurity, OSINT, and investigative purposes.",
      preview: "https://www.snylloair.com/",
      techStack: ["subdomains", "breaches", "emails", "dorks", "keyword search", "phone"],
    },
    {
      projectName: "JailBreak_IA",
      image: "images/projects/JailBreak_IA.jpg",
      summary:
        "Many people in the professional world believe that AI without ethical systems for sale will soon enable the mass generation of malicious code or phishing emails. Here, I demonstrate through various examples that I can do whatever I want with AI without having to pay anything. Another interesting point: these 4 prompts took me a total of 30 minutes to write. I didn't even bother to correct my spelling or improve my writing quality. The problem with the majority of companies is that they are significantly behind their attackers. Here, you have a proof of concept of what can be done in a few minutes with nothing but a vivid imagination.",
      preview: "https://github.com/raphaelthief/JailBreakIA",
      techStack: ["IA", "JailBreak", "malwares", "OSINT", "social engineering"],
    },
  ],
};

export const experience = [
  {
    title: "Advanced analytics firm",
    duration: "2024",
    subtitle: "1 vulnerabilitie found",
    details: [
      `It is possible to send a multitude of login requests to the application without being blocked. The user format is easily accessible from the company's LinkedIn page, allowing the enumeration of different users.<br><br>
      The request is done in two steps. The first step is to check if the user has the 2MFA option enabled, followed by the login request. This information allows us to prioritize the accounts to target.`,
    ],
    tags: ["Bruteforce", "Rate Limiting Absence", "OSINT"],
    icon: "puzzle-piece",
  },
  
  
  {
    title: "e-commerce chain firm",
    duration: "2024",
    subtitle: "1 vulnerabilitie found",
    details: [
      `The chatbot on the site is not secured against XSS injections (no encoding is required). These XSS remain stored in the browser's memory through session cookies, which reload the chatbot conversations every time the user logs into the site. This chatbot is present on all pages of the site :<br>
	  <span style="color: #8B0000; font-weight: bold;">&quot;&gt;&lt;xmp&gt;&lt;p title=&quot;&lt;/xmp&gt;&lt;img src=q onerror=prompt(8)&gt;</span>`,
    ],
    tags: ["XSS", "Chatbot", "Persistent XSS with Cookie Persistence"],
    icon: "tag",
  },  
  
  
  {
    title: "University",
    duration: "2024",
    subtitle: "2 vulnerabilities found",
    details: [
      `Through one of the subdomains, I was able to find an authentication page for teaching staff to input student grades. The authentication page was outdated, allowing an SQL injection on its vulnerable version, granting access to student data.<br><br>`,
      `The server is vulnerable to a DDoS attack due to improper server configuration. A user, with just their connection, can send multiple XSS requests on a single parameter that the server attempts to interpret, causing memory saturation and ultimately leading to the server shutting down.`,
    ],
    tags: ["SQLi", "DoS", "XSS"],
    icon: "graduation-cap",
  },
  
  
  {
    title: "Porn website",
    duration: "2024",
    subtitle: "3 vulnerabilities found",
  details: [
	`Discovery of GraphQL queries on one of the subdomains of the site. Initially, I conducted a detailed analysis of the GraphQL schema in use by leveraging an introspection query.<br>
	Next, I enumerated users with the <span style="color: #8B0000; font-weight: bold;">isAdmin</span> information.<br><br>`,
	
	`Since the queries were not strictly limited on GraphQL calls within this subdomain of the site, which had direct access to the user database, I was able to brute-force the various site administrators using a dictionary attack expanded to include porn-related categories and vocabulary specific to practices described on the site with ffuf.<br><br>
	
	As a result, I gained administrator access, which provided the ability to review and approve new uploads (videos, photos) as well as the capability to impersonate any user on the site (a functionality granted to admins by the site).<br><br>`,
	`Discovery of an XSS vulnerability on the site with the following payload :<br>

	<span style="color: #8B0000; font-weight: bold;">&quot;&gt;&lt;xmp&gt;&lt;p title=&quot;&lt;/xmp&gt;&lt;svg/onload=confirm(1) class=xxxxx&gt;</span><br><br>

	This XSS demonstrates the injection of malicious HTML/JavaScript, exploiting improper sanitization of user inputs in the type parameter.`,
  ],
    tags: ["GraphQL Abuse", "Rate Limiting Absence", "XSS"],
    icon: "heart",
  },
  
  
  {
    title: "Herotic shop website",
    duration: "2024",
    subtitle: "3 vulnerabilities found",
    details: [
      `Multiple XSS vulnerabilities across the entire infrastructure of the web application. These vulnerabilities affect both unauthenticated users and authenticated users with accounts, such as through the site's messaging system.<br><br>`,
      `SQL injections leading to full access to user and admin data, conversations, and other sensitive information across the entire site :<br>
	  <span style="color: #8B0000; font-weight: bold;">Union-based SQL Injection (concatenation of data)</span><br><br>`,
      `The password reset system sends a reset code to the user, but this code is stored in clear text on the web page (frontend) through a hidden input field.`,
    ],
    tags: ["SQLi", "XSS", "exposure of sensitive data"],
    icon: "heart",
  },
  
  
  {
    title: "City Hall",
    duration: "2024",
    subtitle: "2 vulnerabilities found",
    details: [
      `Discovery of authentication data for certain elected officials and the mayor.<br><br>`,
      `Discovery of a reflected XSS vulnerability on a ticketing system belonging to the city hall.`,
    ],
    tags: ["XSS", "exposure of sensitive data", "OSINT"],
    icon: "building",
  },
  
  
  {
    title: "Cybersecurity-focused company",
    duration: "2024",
    subtitle: "1 vulnerabilitie found",
    details: [
      `A cybersecurity company had a misconfigured DMARC, which allowed any email account (admin, support, helpdesk, etc.) to be spoofed without it ending up in the spam folder or being flagged as suspicious :<br> 
	  <span style="color: #8B0000; font-weight: bold;">p=none;</span><br><br>`,
      `The company had changed its name and, consequently, its domain name. The new domain name was properly configured, but the old domain name was not. As a result, emails sent from the old domain were redirected without verification, potentially leading to advanced email-based social engineering campaigns.`,
    ],
    tags: ["DMARC missconfiguration"],
    icon: "shield",
  }, 
  
  
  {
    title: "Tech consulting group",
    duration: "2024",
    subtitle: "3 vulnerabilities found",
    details: [
      `Critical vulnerability with Wi-Fi access. One Wi-Fi network allowed authenticated access only from the MAC address of computers. By spoofing the MAC address, we were able to gain direct access to the network, which contained... access to the Active Directory (AD).<br>
	  The AD was susceptible to multiple vulnerabilities, such as EternalBlue.<br><br>`,
      `IoT devices were configured with default settings and passwords, allowing for version downgrades that led to the exploitation of critical vulnerabilities.<br><br>`,
	  `XSS vulnerability on the search parameter injected directly into the URL. Inputs were sanitized from the site's textbox, but the direct insertion of the payload in the URL parameters was not considered :<br>
	  <span style="color: #8B0000; font-weight: bold;">https://exemple.com/resultat-de-recherche#stq=&lt;script&gt;alert(1)&lt;/script&gt;</span><br><br>`,
	  `The server is vulnerable to a DDoS attack due to improper server configuration. A user, with just their connection, can send multiple XSS requests on a single parameter that the server attempts to interpret, causing memory saturation and ultimately leading to the server shutting down.`,
    ],
    tags: ["XSS", "MAC Spoofer", "Wifi MGT", "DoS"],
    icon: "microchip",
  },
];

export const education = [
  {
    title: "Monitoring leaks related to ransomware",
    duration: "",
    subtitle: "Research and exploitation of ransomware actors",
    details: [
	
	`I regularly conduct my monitoring through the official websites of these ransomware groups via their .onion links. To discover emerging ransomware groups, I use several online platforms without resorting to leak platforms, where activities related to ransomware are, most of the time, prohibited.<br><br>
	My two preferred sites for discovering new threat actors are :<br>
	<span style="color: #8B0000; font-weight: bold;">https://www.watchguard.com/fr/wgrd-security-hub/ransomware-tracker</span><br>
	<span style="color: #8B0000; font-weight: bold;">https://www.ransomlook.io/</span><br><br>`,
	`If I must (legally) conduct an introspection of an organization's or client's leaked data, I will be able to find the 'publicly' exposed data and search thoroughly through these files using my SearchX tool (see OSINT projects).`,
	],
    tags: ["Tor",  "Onion", "RaaS", "ransomwares", "SearchX"],
    icon: "bug",
  },
  {
    title: "Datas leaks",
    duration: "",
    subtitle: "Targeted research and exploitations",
    details: [
	`In order to target a company or a person of significance, always within a legal framework, I start with a research element such as an email address or a phone number, ideally, or just a pseudonym or name if nothing else is available. From this information, I can cross-reference various details using OSINT methodologies.<br><br>
	Online leaks often reveal password breaches, but this is just a small fraction of the data that may have been exposed. These leaks typically include more personal information such as addresses, family situations, dates of birth, pseudonyms, family details, social security numbers, and more. Using this information, we can create a persona of the target and develop tailored attack dictionaries.<br><br>
	The compromise of a company doesn't necessarily involve the breach of a professional account but can also stem from access to personal accounts, such as social media. This allows one to immerse themselves in the target's habits and language quirks, ultimately exploiting this new identity to compromise the organization.<br><br>`,
	`To address these needs, I use my own OSINT tool, <span style="color: #8B0000; font-weight: bold;">SearchX</span>, which I update regularly. During the exploitation phase, I rely on basic knowledge of wordlist creation using specific tools.<br><br>
	However, for the social engineering phase, I provide a purely theoretical perspective, as impersonating an existing individual is prohibited under French law, even in the context of an organized and planned exercise.<br><br>`,
	`I have also created a tool <span style="color: #8B0000; font-weight: bold;">CTI Notifier</span> that allows me to centralize all the RSS feeds I find relevant and receive them as Windows notifications. RSS feeds such as FlagDomains or Have I Been Pwned are among those included.`,
	],
    tags: ["Breached", "Onion", "Dorks", "SearchX", "CTI_Notifier"],
    icon: "database",
  },
  {
    title: "Underground forums",
    duration: "",
    subtitle: "Monitoring across various forums (marketplaces on the clear/dark web, breached forums, scam forums, etc.)",
    details: [
	`For my monitoring on various forums, I mainly use searches through dorks as :<br>
	<span style="color: #8B0000; font-weight: bold;">"search_query" (site:breachforums.st or site:cracking.org or site:nulled.io or site:cracked.io or site:patched.to or site:crackingx.com or etc ...)</span><br><br>`,
	`These forums are useful after an initial pass on leaks related to an email and allow for correlating various pieces of information with one another. Typically, this is the same methodology used by some large-scale scammers to impersonate certain identities.`,
	],
    tags: ["Tor",  "Onion", "Scam", "Stealers", "Forums", "Dorks"],
    icon: "users",
  },  
];
 
export const footer = [
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
    ],
  },
  {
    label: "Links",
    data: [
      {
        text: "Github",
        link: "https://github.com/raphaelthief",
      },
      {
        text: "Medium",
        link: "https://medium.com/@raphaelthief",
      },
      {
        text: "Startme",
        link: "https://start.me/p/kvvGLO/cti-osint",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Most of the template is by Vinay Somawat, with some modifications by me.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
