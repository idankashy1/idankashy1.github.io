// Knowledge base for the "Ask Idan AI" chat. Each entry has language-specific
// keywords (used by the matcher) and a response in Idan's voice.
//
// The matcher (in AskMeChat.tsx) scores entries by counting keyword-substring
// matches in the user's question and picks the highest-scoring entry. Longer
// keywords carry more weight (more specific match).

export type KnowledgeEntry = {
  id: string
  keywords: string[]
  response: string
}

/* ----------------------------- ENGLISH ----------------------------- */
export const KNOWLEDGE_EN: KnowledgeEntry[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'sup', 'shalom', 'greetings'],
    response: "Hi there 👋 I'm an AI version of Idan. Ask me about his projects, stack, AI workflow, experience at Bank Leumi, or anything else you're curious about.",
  },
  {
    id: 'intro',
    keywords: ['who are you', 'about you', 'about idan', 'about yourself', 'introduce', 'tell me about', 'background'],
    response: "Idan Kashy is a Full-Stack Developer with 4+ years in tech, currently at Bank Leumi where he also leads internal AI adoption. B.Sc. in Computer Science from H.I.T., with a track record of leading teams, founding a tech operation, and shipping real production software. Architecture-first, AI-accelerated, ships clean code.",
  },
  {
    id: 'projects-overview',
    keywords: ['projects', 'work', 'portfolio', 'what have you built', 'what do you build'],
    response: "Six projects across full-stack territory. The flagship is the AI-Powered Developer Workflow (a methodology Idan codified for using AI across the entire dev lifecycle). The other five are real production systems: Enterprise Notification Automation (SSIS + .NET + MQ + ControlM), Banking Reports & Insights (Power BI + Oracle + DAX), a Cross-Environment Data Pipeline bridging mainframe and open systems (the most architecturally complex one), a Domain Knowledge Platform that cut onboarding from months to days, and Real-Time API Services running in production with Elastic observability.",
  },
  {
    id: 'stack',
    keywords: ['stack', 'technologies', 'tech', 'languages', 'frameworks', 'what do you use'],
    response: "Backend: .NET Core, C#, ASP.NET Web API, Entity Framework, REST. Frontend: Angular, React, TypeScript, HTML, CSS. Databases: Oracle, SQL Server, with SSMS and SQL Developer as daily tools. Data/Enterprise: SSIS, ControlM, MQ, Power BI, DAX. DevOps: Git, GitHub, Azure DevOps, IIS, Elastic Stack. AI tools: Claude Code, Amazon Q, Codex, ChatGPT — used as production infrastructure, not toys.",
  },
  {
    id: 'ai-workflow',
    keywords: ['ai workflow', 'how do you use ai', 'ai usage', 'ai process', 'ai tools', 'use ai', 'workflow'],
    response: "AI is real production infrastructure in Idan's workflow, embedded across 9 phases: (1) Requirements analysis, (2) Architecture planning, (3) AI infrastructure setup — agents, skills, working-rules file, (4) Docs & sprint organization, (5) Code generation, (6) Code review, (7) Documentation, (8) Debug & QA, (9) Ongoing maintenance. Each phase has specific AI patterns. He drives this approach across teams at Bank Leumi and trains other developers to use AI without sacrificing code quality.",
  },
  {
    id: 'architecture',
    keywords: ['architecture', 'clean code', 'structure', 'patterns', 'design', 'layered', 'philosophy'],
    response: "Idan's core belief: AI velocity doesn't excuse architectural sloppiness. He writes clean, organized code with proper structure across backend and frontend — because shortcuts compound into tech debt that AI can't undo later. Layered architectures, proper separation of concerns, tested code, documented decisions — these are non-negotiable, even when AI generates 80% of the code. The discipline of structured development at the speed of modern AI is where he delivers the most value.",
  },
  {
    id: 'bank-leumi',
    keywords: ['bank leumi', 'leumi', 'current job', 'current role', 'where do you work', 'bank'],
    response: "Idan joined Bank Leumi in December 2024 as a Back-End Developer. In practice he works full-stack across .NET, Angular/React, and dual-database environments (SQL Server + Oracle). His distinctive role: he's one of the internal AI leaders — drives AI adoption across teams, defines best practices, solves real engineering problems with AI, and trains developers on how to use AI tools effectively without compromising code quality.",
  },
  {
    id: 'ai-lead',
    keywords: ['ai lead', 'ai leader', 'ai mentor', 'training', 'teach', 'lead', 'mentor', 'how do you teach'],
    response: "Idan is one of the internal AI leaders at Bank Leumi. He drives adoption across teams, defines best practices (what's in/out of bounds, what AI does well/badly), solves real engineering problems with AI, and trains developers — from prompt design to code review patterns to architecting with AI. He treats it as a real discipline, with the same rigor as any other engineering practice.",
  },
  {
    id: 'years-experience',
    keywords: ['years', 'experience', 'how long', 'how many years', 'when started'],
    response: "4+ years in tech. B.Sc. in Computer Science from H.I.T. (Holon Institute of Technology), graduated 2020. Software development has been his full-time professional focus since 2023 (SQLink Group → Bank Leumi). Before that he founded a tech operation, served in IDF Intelligence Corps Unit 81 (received an excellence award), and led teams in operations.",
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'college', 'studied', 'school', 'bsc', 'computer science', 'hit', 'holon'],
    response: "B.Sc. in Computer Science from H.I.T. (Holon Institute of Technology), 2017–2020. He's a computer scientist by training — not an engineer by certification — which is why he describes himself as a Developer, not an Engineer.",
  },
  {
    id: 'previous-jobs',
    keywords: ['previous', 'past job', 'before bank', 'sqlink', 'blockchain', 'history', 'career path'],
    response: "2023–2024: Full-Stack Developer at SQLink Group, building .NET Core + Angular applications with SQL Server. 2020–2023: A.I. Technology Founder at a blockchain company — built and ran an end-to-end cryptocurrency mining operation, managed a team of 5, handled international procurement, and owned the full project lifecycle. Earlier: technician/team lead roles, IDF Intelligence Corps Unit 81.",
  },
  {
    id: 'project-pipeline',
    keywords: ['pipeline', 'mainframe', 'mf', 'cross-environment', 'cross env', 'ssis', 'framework'],
    response: "The Cross-Environment Data Pipeline is probably the most architecturally interesting project. It bridges legacy mainframe systems with modern open environments — one-way data flow. Idan built a .NET Core framework with a React control panel that watches incoming files, identifies them precisely, and routes each one to its matching SSIS package — packages migrated from legacy versions with surgical precision. Data lands in Oracle. Used today by QA teams for end-to-end automation that simply didn't exist before. Required deep architectural thinking for two heterogeneous database layers, format conversions, edge cases and strict operational constraints.",
  },
  {
    id: 'project-knowledge',
    keywords: ['knowledge platform', 'wiki', 'onboarding', 'domain knowledge', 'documentation platform', 'months to days'],
    response: "The Domain Knowledge Platform consolidates project specifications, system documentation, configuration registries and version history — content that previously lived in scattered folders and tribal knowledge. New-developer onboarding used to take months; now it takes days. Full-text search, polished UI/UX, structured navigation across hundreds of entries. Idan architected it with AI-driven planning and shipped it to production fast, without compromising code quality. Stack: Angular, C#, .NET, Oracle, full-text search.",
  },
  {
    id: 'project-notifications',
    keywords: ['notification', 'sms', 'messaging', 'mq', 'controlm', 'batch'],
    response: "Enterprise Notification Automation is an end-to-end pipeline that processes data and dispatches structured notifications to customers based on defined patterns. Built as two integrated systems: an SSIS pipeline that ingests/normalizes/validates against SQL Server staging, and a custom .NET batch process that picks up validated payloads and dispatches messages via enterprise MQ. Orchestrated by ControlM with daily scheduling against an Oracle data layer. Has been running unattended in production at scale.",
  },
  {
    id: 'project-reports',
    keywords: ['report', 'power bi', 'dashboard', 'analytics', 'insights', 'dax', 'visualization'],
    response: "Banking Reports & Insights are Power BI dashboards built for managers and operations teams, backed by Oracle data models with creative data shaping. Designed for visual clarity, fast comprehension, and trustworthy lineage — turning fragmented operational data into clean, actionable signals. Stack: Power BI, Oracle, SQL, DAX, SSIS for the prep layer.",
  },
  {
    id: 'project-api',
    keywords: ['api', 'rest', 'services', 'iis', 'elastic', 'kibana', 'production', 'observability'],
    response: "Real-Time API Services are production-grade REST APIs serving real-time request/response traffic between internal systems and external consumers. Hosted on IIS with structured logging and end-to-end observability via the Elastic Stack — every request is searchable, alertable and analyzable. Reliability, monitoring and operational visibility were treated as first-class concerns from day one, not bolted on afterwards.",
  },
  {
    id: 'project-ai-workflow',
    keywords: ['ai-powered', 'ai powered workflow', 'claude code', 'amazon q', 'codex', 'flagship'],
    response: "The flagship project is Idan's AI-Powered Developer Workflow — an end-to-end methodology combining Claude Code, Amazon Q, Codex and other tools to accelerate the full software lifecycle. Not just 'use AI', but a structured 9-phase process he uses personally and teaches to other developers. It cuts feature delivery time, improves code quality through AI review, and lets a single developer ship at team scale — without sacrificing rigor.",
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'hire', 'connect', 'message', 'get in touch', 'phone'],
    response: "Best ways to reach Idan: email at idankashy123@gmail.com, LinkedIn at linkedin.com/in/idan-kashy, or GitHub at github.com/idankashy1. All listed at the bottom of the page. He's especially happy to talk AI-in-enterprise-dev, architecture, or product ideas.",
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'based', 'live', 'country', 'remote', 'israel'],
    response: "Based in Rishon LeZion, Israel. Currently working hybrid (in office + remote). Open to remote-friendly opportunities.",
  },
  {
    id: 'military',
    keywords: ['military', 'idf', 'army', 'service', 'unit 81', 'intelligence'],
    response: "Idan served in IDF Intelligence Corps Unit 81 (2011–2014). Led a unit project for six months and received a unit excellence award. Also spearheaded national marketing for the Atidim program and implemented its CRM. The military background shaped his comfort with structured, mission-critical work.",
  },
]

/* ----------------------------- HEBREW ----------------------------- */
export const KNOWLEDGE_HE: KnowledgeEntry[] = [
  {
    id: 'greeting',
    keywords: ['היי', 'שלום', 'הי', 'ערב טוב', 'בוקר טוב', 'שלומ'],
    response: 'היי 👋 אני גרסת AI של עידן. שאל אותי על הפרויקטים שלו, הסטאק, זרימת ה-AI, התפקיד בבנק לאומי, או כל דבר אחר שמעניין אותך.',
  },
  {
    id: 'intro',
    keywords: ['מי אתה', 'ספר על עצמך', 'מי זה עידן', 'על עידן', 'ספר לי', 'רקע'],
    response: 'עידן קאשי הוא מפתח Full-Stack עם למעלה מ-4 שנים בעולם הטק, כיום בבנק לאומי שם הוא גם מוביל את אימוץ ה-AI הפנימי. תואר B.Sc. במדעי המחשב מ-H.I.T., עם רקע של הובלת צוותים, הקמת פעילות טכנולוגית עצמאית, ושליחת תוכנה לייצור אמיתי. ארכיטקטורה תחילה, מואץ AI, מספק קוד נקי.',
  },
  {
    id: 'projects-overview',
    keywords: ['פרויקטים', 'עבודות', 'פורטפוליו', 'מה בנית', 'מה אתה בונה'],
    response: 'שישה פרויקטים על פני כל המרחב של Full-Stack. הפרויקט הדגל הוא תהליך פיתוח מואץ AI (מתודולוגיה שעידן קודד לשימוש ב-AI לאורך כל מחזור החיים של הפיתוח). חמשת האחרים הם מערכות ייצור אמיתיות: אוטומציית התראות (SSIS + .NET + MQ + ControlM), דוחות ותובנות בנקאיים (Power BI + Oracle + DAX), צינור נתונים בין סביבות שמגשר mainframe ל-open (הכי מורכב ארכיטקטונית), פלטפורמת ידע ארגונית שקיצרה onboarding מחודשים לימים, ושירותי API בזמן אמת שרצים בייצור עם Elastic.',
  },
  {
    id: 'stack',
    keywords: ['סטאק', 'טכנולוגיות', 'מה אתה משתמש', 'שפות', 'frameworks'],
    response: 'Backend: .NET Core, C#, ASP.NET Web API, Entity Framework, REST. Frontend: Angular, React, TypeScript, HTML, CSS. בסיסי נתונים: Oracle ו-SQL Server, עם SSMS ו-SQL Developer ככלי עבודה יומיומיים. נתונים/ארגוני: SSIS, ControlM, MQ, Power BI, DAX. DevOps: Git, GitHub, Azure DevOps, IIS, Elastic Stack. כלי AI: Claude Code, Amazon Q, Codex, ChatGPT — בשימוש כתשתית ייצור, לא כצעצועים.',
  },
  {
    id: 'ai-workflow',
    keywords: ['איך אתה משתמש ב-ai', 'תהליך ai', 'איך עובד עם ai', 'workflow', 'זרימת ai'],
    response: 'AI הוא תשתית ייצור אמיתית בזרימת העבודה של עידן, משולב על פני 9 שלבים: (1) ניתוח דרישות, (2) תכנון ארכיטקטורה, (3) הקמת תשתית AI – סוכנים, סקילים, קובץ הוראות עבודה, (4) ארגון מסמכים וספרינטים, (5) יצירת קוד, (6) סקירת קוד, (7) תיעוד, (8) Debug ו-QA, (9) תחזוקה שוטפת. לכל שלב יש דפוסי AI ספציפיים. עידן מוביל את הגישה הזו בצוותים בבנק לאומי ומדריך מפתחים אחרים להשתמש ב-AI מבלי לוותר על איכות הקוד.',
  },
  {
    id: 'architecture',
    keywords: ['ארכיטקטורה', 'קוד נקי', 'מבנה', 'דפוסים', 'עיצוב', 'פילוסופיה'],
    response: 'האמונה המרכזית של עידן: מהירות AI לא מצדיקה התרשלות ארכיטקטונית. הוא כותב קוד נקי ומאורגן עם מבנה נכון ב-backend וב-frontend – כי קיצורי דרך הופכים לחובות טכניים ש-AI לא יוכל לתקן אחר כך. ארכיטקטורה שכבתית, הפרדת תחומים נכונה, קוד מבוקר, החלטות מתועדות – אלה דברים שלא מתפשרים עליהם, גם כאשר AI מייצר 80% מהקוד. המשמעת של פיתוח מובנה במהירות של AI מודרני – שם הוא מספק את הערך הכי גדול.',
  },
  {
    id: 'bank-leumi',
    keywords: ['בנק לאומי', 'לאומי', 'תפקיד נוכחי', 'איפה אתה עובד', 'בנק'],
    response: 'עידן הצטרף לבנק לאומי בדצמבר 2024 כמפתח Back-End. בפועל הוא עובד Full-Stack על פני .NET, Angular/React, וסביבות עם שני בסיסי נתונים (SQL Server + Oracle). תפקידו הייחודי: הוא אחד ממובילי ה-AI הפנימיים – מקדם הטמעה רוחבית בצוותים, מגדיר best practices, פותר בעיות הנדסיות אמיתיות בעזרת AI, ומדריך מפתחים איך לנצל כלי AI ביעילות מבלי לפגוע באיכות הקוד.',
  },
  {
    id: 'ai-lead',
    keywords: ['ai lead', 'מוביל ai', 'מדריך', 'הוראה', 'הדרכה', 'אחראי ai'],
    response: 'עידן הוא אחד ממובילי ה-AI הפנימיים בבנק לאומי. הוא מקדם הטמעה רוחבית בצוותים, מגדיר best practices (מה בתחום ומה מחוץ, מה AI עושה טוב ומה רע), פותר בעיות הנדסיות אמיתיות בעזרת AI, ומדריך מפתחים – מעיצוב prompts ועד דפוסי code review וארכיטקטורה עם AI. הוא מתייחס לזה כאל דיסציפלינה אמיתית, עם אותה קפדנות כמו כל פרקטיקה הנדסית אחרת.',
  },
  {
    id: 'years-experience',
    keywords: ['שנות ניסיון', 'כמה שנים', 'ניסיון', 'מתי התחלת', 'ותק'],
    response: 'למעלה מ-4 שנים בעולם הטק. תואר B.Sc. במדעי המחשב מ-H.I.T. (המכון הטכנולוגי חולון), בוגר 2020. פיתוח תוכנה הוא העיסוק המקצועי המלא שלו מאז 2023 (SQLink ואז בנק לאומי). לפני כן הקים פעילות טכנולוגית עצמאית, שירת ביחידה 81 של חיל המודיעין (קיבל אות הצטיינות יחידתי), והוביל צוותים בתפעול ושירות.',
  },
  {
    id: 'education',
    keywords: ['השכלה', 'תואר', 'אוניברסיטה', 'מכללה', 'למדת', 'מדעי המחשב', 'hit', 'חולון'],
    response: 'תואר B.Sc. במדעי המחשב מ-H.I.T. (המכון הטכנולוגי חולון), 2017–2020. הוא מדען מחשב בהכשרה – לא מהנדס בהסמכה – ולכן הוא מציג עצמו כמפתח (Developer), לא כמהנדס.',
  },
  {
    id: 'previous-jobs',
    keywords: ['תפקידים קודמים', 'לפני הבנק', 'sqlink', 'בלוקצ\'יין', 'היסטוריה', 'קריירה'],
    response: '2023–2024: מפתח Full-Stack ב-SQLink Group, בניית אפליקציות .NET Core + Angular עם SQL Server. 2020–2023: A.I. Technology Founder בחברת בלוקצ\'יין – הקים וניהל פעילות כריית קריפטו מקצה-לקצה, ניהל צוות של 5, טיפל ביבוא בינלאומי, וניהל את כל מחזור החיים של הפרויקט. לפני כן: טכנאי וראש צוות, יחידה 81 של חיל המודיעין.',
  },
  {
    id: 'project-pipeline',
    keywords: ['צינור', 'mainframe', 'בין סביבות', 'ssis', 'framework'],
    response: 'צינור הנתונים בין סביבות הוא ככל הנראה הפרויקט המורכב ביותר ארכיטקטונית. הוא מגשר בין מערכות mainframe מסורתיות לסביבות open מודרניות – זרימה חד-כיוונית. עידן בנה framework מבוסס .NET Core עם פאנל בקרה ב-React שמשגיח על קבצים נכנסים, מזהה אותם בדיוק, ומנתב כל אחד לחבילת SSIS המתאימה לו – חבילות שעברו מודרניזציה מגרסאות ישנות בדיוק כירורגי. הנתונים זורמים ל-Oracle. כיום בשימוש של צוותי QA לאוטומציה מקצה-לקצה שפשוט לא הייתה קודם. דרש חשיבה ארכיטקטונית עמוקה לשתי שכבות נתונים הטרוגניות, המרות פורמטים, מקרי קצה ומגבלות תפעוליות.',
  },
  {
    id: 'project-knowledge',
    keywords: ['פלטפורמת ידע', 'ויקיפדיה', 'onboarding', 'מאגר ידע', 'תיעוד', 'חודשים לימים'],
    response: 'פלטפורמת הידע הארגונית מרכזת מפרטי פרויקטים, תיעוד מערכות, רישומי קונפיגורציה והיסטוריית גרסאות – תוכן שבעבר חי בתיקיות מפוזרות ובידע שבטי. תהליך onboarding של מפתחים חדשים נמשך פעם חודשים; כעת הוא לוקח ימים. חיפוש full-text, UI/UX מלוטש, ניווט מובנה על פני מאות רשומות. עידן תכנן את הארכיטקטורה תוך שימוש ב-AI ועלה לאוויר מהר, מבלי לוותר על איכות הקוד. סטאק: Angular, C#, .NET, Oracle, חיפוש full-text.',
  },
  {
    id: 'project-notifications',
    keywords: ['התראות', 'sms', 'הודעות', 'mq', 'controlm', 'batch'],
    response: 'אוטומציית ההתראות הארגונית היא צינור מקצה-לקצה שמעבד נתונים ושולח התראות מובנות ללקוחות לפי דפוסים מוגדרים. בנוי כשתי מערכות משולבות: צינור SSIS שקולט/מנרמל/מאמת מול staging ב-SQL Server, ותהליך .NET רץ batch שאוסף את ה-payloads המאומתים ושולח הודעות דרך MQ ארגוני. תזמור ב-ControlM להרצות יומיות מעל שכבת נתונים ב-Oracle. רץ באוטומציה מלאה בייצור בנפחים גבוהים.',
  },
  {
    id: 'project-reports',
    keywords: ['דוחות', 'power bi', 'דשבורד', 'אנליטיקה', 'תובנות', 'dax', 'ויזואליזציה'],
    response: 'דוחות ותובנות בנקאיים הם דשבורדים ב-Power BI שנבנו עבור מנהלים וצוותי תפעול, מבוססים על מודלי נתונים ב-Oracle עם עיצוב יצירתי. מתוכננים לבהירות ויזואלית, הבנה מהירה ושרשרת מקורות אמינה – הופכים נתונים תפעוליים מפוצלים לאותות נקיים שניתן לפעול לפיהם. סטאק: Power BI, Oracle, SQL, DAX, SSIS לשכבת הכנת הנתונים.',
  },
  {
    id: 'project-api',
    keywords: ['api', 'שירותים', 'iis', 'elastic', 'kibana', 'ייצור', 'נראות'],
    response: 'שירותי API בזמן אמת הם REST API ברמת ייצור שמטפלים בתעבורת request/response בזמן אמת בין מערכות פנימיות לצרכנים חיצוניים. מאוחסנים ב-IIS עם logging מובנה ונראות מלאה מקצה-לקצה דרך Elastic Stack – כל בקשה ניתנת לחיפוש, להתראה ולניתוח. אמינות, ניטור ונראות תפעולית טופלו כמרכיב מרכזי מהיום הראשון, לא כתוספת מאוחרת.',
  },
  {
    id: 'project-ai-workflow',
    keywords: ['ai-powered', 'מואץ ai', 'claude code', 'amazon q', 'codex', 'דגל'],
    response: 'פרויקט הדגל הוא תהליך הפיתוח המואץ AI של עידן – מתודולוגיה מקצה-לקצה שמשלבת Claude Code, Amazon Q, Codex וכלים נוספים להאצת מחזור החיים המלא של התוכנה. לא רק "להשתמש ב-AI", אלא תהליך מובנה של 9 שלבים שהוא משתמש בו אישית ומלמד מפתחים אחרים. הוא מקצר זמני אספקה, משפר איכות קוד דרך סקירת AI, ומאפשר למפתח יחיד לספק בקצב של צוות – מבלי לוותר על קפדנות.',
  },
  {
    id: 'contact',
    keywords: ['צור קשר', 'לדבר', 'מייל', 'אימייל', 'לגייס', 'טלפון', 'איך ליצור קשר'],
    response: 'הדרכים הטובות ביותר ליצור קשר עם עידן: אימייל ב-idankashy123@gmail.com, LinkedIn ב-linkedin.com/in/idan-kashy, או GitHub ב-github.com/idankashy1. הכל רשום בתחתית הדף. הוא ישמח במיוחד לדבר על AI בעולם הארגוני, ארכיטקטורה, או רעיונות מוצר.',
  },
  {
    id: 'location',
    keywords: ['איפה', 'מיקום', 'גר', 'מדינה', 'מרחוק', 'remote', 'ישראל'],
    response: 'מבוסס בראשון לציון, ישראל. כיום עובד היברידי (במשרד + מרחוק). פתוח להזדמנויות עם גמישות לעבודה מרחוק.',
  },
  {
    id: 'military',
    keywords: ['צבא', 'צה"ל', 'מילואים', 'שירות', 'יחידה 81', 'מודיעין'],
    response: 'עידן שירת ביחידה 81 של חיל המודיעין (2011–2014). הוביל פרויקט יחידתי במשך שישה חודשים וקיבל אות הצטיינות יחידתי. כמו כן הוביל את השיווק הארצי של תוכנית עתידים והטמיע את ה-CRM שלה. הרקע הצבאי עיצב אצלו את הנוחות בעבודה מובנית ומשימתית-קריטית.',
  },
]
