export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops';
  level: number; // 1-5 rating
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'frontend' | 'backend' | 'fullstack';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  details: {
    problem: string;
    solution: string;
    architecture: string[];
    apis?: string[];
    databaseModel?: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skillsUsed: string[];
}

export const skillsData: Skill[] = [
  // Backend
  { name: 'C# / .NET 8', category: 'backend', level: 5, iconName: 'Terminal' },
  { name: 'ASP.NET Core Web API', category: 'backend', level: 5, iconName: 'Cpu' },
  { name: 'Entity Framework Core', category: 'backend', level: 5, iconName: 'Layers' },
  { name: 'Microservices & REST APIs', category: 'backend', level: 4, iconName: 'Network' },
  { name: 'SignalR (Real-time)', category: 'backend', level: 4, iconName: 'Zap' },
  { name: 'Clean Architecture & CQRS', category: 'backend', level: 5, iconName: 'Compass' },
  
  // Frontend
  { name: 'React', category: 'frontend', level: 5, iconName: 'Atom' },
  { name: 'TypeScript', category: 'frontend', level: 5, iconName: 'FileCode' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 5, iconName: 'Code' },
  { name: 'HTML5 & Vanilla CSS3', category: 'frontend', level: 5, iconName: 'Palette' },
  { name: 'State Management (Zustand/Redux)', category: 'frontend', level: 4, iconName: 'GitBranch' },
  
  // Database
  { name: 'SQL Server', category: 'database', level: 5, iconName: 'Database' },
  { name: 'PostgreSQL', category: 'database', level: 4, iconName: 'Database' },
  { name: 'Redis Caching', category: 'database', level: 4, iconName: 'HardDrive' },
  
  // DevOps & Cloud
  { name: 'Docker / Containers', category: 'devops', level: 4, iconName: 'Container' },
  { name: 'Git & GitHub Actions', category: 'devops', level: 5, iconName: 'Github' },
  { name: 'Azure App Services', category: 'devops', level: 4, iconName: 'Cloud' }
];

export const projectsData: Project[] = [
  {
    id: 'cleancommerce-engine',
    title: 'CleanCommerce Engine',
    subtitle: 'Enterprise ASP.NET Core e-Commerce API',
    description: 'An enterprise-grade shopping API designed on Clean Architecture, featuring MediatR CQRS patterns, Redis distributed caching, PostgreSQL data store, and secure JWT identity integrations.',
    category: 'backend',
    tags: ['C#', '.NET 8', 'EF Core', 'PostgreSQL', 'CQRS', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/satyajit-senapati',
    details: {
      problem: 'Building standard monolithic APIs often couples business rules with database access, making scaling, upgrading database structures, or running parallel unit tests difficult.',
      solution: 'Decoupled domain models entirely from external frameworks. Created separated Domain, Application, Infrastructure, and Web API assembly projects. Managed workflow dependencies using MediatR requests/handlers for commands and queries.',
      architecture: [
        'Domain Layer: Contains pure entities, domain exceptions, and specifications.',
        'Application Layer: Defines interfaces, DTOs, MediatR handlers, and FluentValidation rules.',
        'Infrastructure Layer: Holds database context, EF Core repositories, Redis cache stores, and external service clients.',
        'Web API Layer: Minimal APIs serving endpoints with global error filter handling.'
      ],
      apis: [
        'POST /api/v1/auth/register - Register new account',
        'POST /api/v1/orders - Submit basket (creates SQL transaction & notifies inventory)',
        'GET /api/v1/products - Returns paginated, Redis-cached catalog lists'
      ],
      databaseModel: [
        'Users (1 : N) Orders (N : M) Products',
        'Orders (1 : 1) Payments (with status track state machine)',
        'PostgreSQL indexes added to SearchVector columns for fast catalog lookup'
      ]
    }
  },
  {
    id: 'agileflow-dashboard',
    title: 'AgileFlow Dashboard',
    subtitle: 'Real-time Project Kanban Workspace',
    description: 'A React & TypeScript frontend application showcasing seamless drag-and-drop mechanics, interactive metrics boards, and live WebSockets socket integration built with SignalR.',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'SignalR', 'CSS Modules', 'Zustand', '.NET Core'],
    githubUrl: 'https://github.com/satyajit-senapati',
    liveUrl: '#',
    details: {
      problem: 'Project coordination dashboards require high responsiveness and immediate client updates when columns are updated, without forcing users to manual reload.',
      solution: 'Developed a custom drag-and-drop hook in TypeScript to support layout shifts. Established a background WebSockets connection utilizing a .NET SignalR Hub, triggering notifications of card reorders to all active clients.',
      architecture: [
        'React Client: Manages frontend layout states using Zustand store and HTML5 Drag-Drop API.',
        'SignalR WebSocket Hub: Handles real-time client groups (grouped by project workspace ID).',
        'State persistence: Auto-saves layout orders using an API debounced repository push.'
      ],
      apis: [
        'SignalR Broadcast: SendCardMoved(cardId, targetColumnId, order)',
        'GET /api/workspaces/{id}/board - Pull workspace details with column arrays',
        'PUT /api/cards/{id} - Persistent DB update coordinates'
      ],
      databaseModel: [
        'Workspaces (1 : N) Columns (1 : N) Cards',
        'Cards (N : M) AssignedUsers',
        'Audit logs stored in a lightweight JSONB column for custom event history'
      ]
    }
  },
  {
    id: 'nexus-microservices',
    title: 'Nexus Microservices Gateway',
    subtitle: 'Containerized Microservice Ecosystem',
    description: 'A cluster of microservices using RabbitMQ messaging, Ocelot Gateway, JWT validation, and Docker Compose configurations for local service running.',
    category: 'backend',
    tags: ['ASP.NET Core', 'Ocelot Gateway', 'RabbitMQ', 'Docker', 'Kubernetes', 'gRPC'],
    githubUrl: 'https://github.com/satyajit-senapati',
    details: {
      problem: 'Coordinating multiple internal APIs (Catalog, Basket, Discount, Ordering) under a single UI request structure without making public endpoints vulnerable.',
      solution: 'Implemented Ocelot API Gateway as a single reverse proxy entry point. Configured RabbitMQ using MassTransit for asynchronous event-driven communications (e.g. Basket Checkout -> Ordering processing). Used gRPC for quick internal Catalog validation checks.',
      architecture: [
        'Ocelot Gateway: Receives public HTTPS calls, validates JWT claims, routes downstream.',
        'Catalog Microservice: gRPC service answering internal validation requests.',
        'Basket Microservice: Stores draft selections in Redis cache.',
        'Ordering Microservice: Processes final transactions asynchronously via RabbitMQ consumer.'
      ],
      apis: [
        'Gateway: GET /catalog/items -> Downstream Catalog REST API',
        'Gateway: POST /basket/checkout -> Triggers OrderSubmittedEvent rabbit queue',
        'Internal: grpc.CatalogService/GetItemInfo -> Fast binary lookup'
      ]
    }
  },
  {
    id: 'entityhub-admin',
    title: 'EntityHub Admin Console',
    subtitle: 'Dynamic Database & Client Management Panel',
    description: 'A React & C# dashboard utilizing custom CSS variables, pagination grids, dynamic graph rendering, and data extraction engines for exporting complex Excel sheets.',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'ASP.NET Web API', 'SQL Server', 'Chart.js', 'EPPlus'],
    githubUrl: 'https://github.com/satyajit-senapati',
    liveUrl: '#',
    details: {
      problem: 'Company staff needed a fast-loading, filterable, and editable table grid linked with complex SQL Server relations, alongside instant Excel exports without crashing database pools.',
      solution: 'Engineered an cursor-paginated API endpoint utilizing C# Expression Trees for dynamic filtering. Implemented EPPlus on the server to stream heavy spreadsheets directly to user browser buffers.',
      architecture: [
        'Frontend Grid: Dynamic column selections, scroll indicators, and instant search inputs.',
        'ASP.NET Backend: Dynamic linq query parser translating inputs directly to SQL server queries.',
        'Export stream: Server-side memory stream of Excel files without local disk writing.'
      ],
      apis: [
        'POST /api/admin/query - Query rows using complex filter arrays',
        'POST /api/admin/export - Streams XLSX spreadsheet file download',
        'PATCH /api/admin/clients/{id} - In-line metadata updates'
      ],
      databaseModel: [
        'Client Profiles (1 : N) Transaction History (1 : 1) Tier Details',
        'Covering indexes applied to client names and sign-up dates'
      ]
    }
  }
];

export const experienceData: Experience[] = [
  {
    id: 'fullstack-engineer',
    role: 'Senior Full-Stack Developer (.NET & React)',
    company: 'Enterprise Tech Solutions',
    period: '2024 - Present',
    description: [
      'Architected and deployed highly scalable ASP.NET Core REST APIs following Clean Architecture and DDD principles, reducing codebase maintenance issues by 30%.',
      'Developed state-of-the-art interactive frontends in React and TypeScript, incorporating modern state management (Zustand) and custom CSS layouts.',
      'Optimized SQL Server query performance, database index configurations, and EF Core structures, leading to a 40% reduction in API response latency.',
      'Built automated CI/CD pipelines with GitHub Actions to test and push services to Docker containers on Azure App Services.'
    ],
    skillsUsed: ['C#', '.NET 8', 'React', 'TypeScript', 'EF Core', 'SQL Server', 'Docker', 'Azure']
  },
  {
    id: 'dotnet-developer',
    role: 'Full-Stack .NET Developer',
    company: 'InnoSystems Software',
    period: '2022 - 2024',
    description: [
      'Designed backend database structures and APIs for multi-tenant SaaS applications using ASP.NET Core and Entity Framework Core.',
      'Implemented real-time dashboard notifications utilizing SignalR WebSocket hubs, improving user engagement and updating board widgets instantly.',
      'Created cross-browser responsive layouts in HTML5/CSS3 and JavaScript, linking frontends with Web APIs through clean Axios requests.',
      'Collaborated closely with agile teams to implement automated unit tests (xUnit, Moq) for REST services.'
    ],
    skillsUsed: ['C#', 'ASP.NET Core', 'SignalR', 'JavaScript', 'HTML5/CSS', 'SQL Server', 'xUnit', 'Git']
  }
];
