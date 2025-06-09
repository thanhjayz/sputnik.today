Tổ chức thư mục project
my-next-app/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global and module CSS
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # React contexts
│   ├── lib/             # External libraries or API clients
│   ├── data/            # Static data or mock data
│   └── api/             # API routes (Serverless functions)
├── public/              # Static assets (images, fonts, etc.)
├── tests/               # Test files
├── .env.local           # Environment variables
└── next.config.js       # Next.js configuration


======== Public =======
public/
├── images/
├── fonts/
└── favicon.ico
======== Component ======= Chứa các component có thể tái sử dụng được phân chia theo tính năng hoặc mục đích sử dụng.
components/
├── common/            # Các component chung (Button, Input, Modal, etc.)
├── layout/            # Layout components (Header, Footer, Sidebar)
├── features/          # Component gắn liền với tính năng cụ thể
└── ui/                # UI-specific components (Card, Table, etc.)
======== Styles ======= Chứa các file CSS hoặc SCSS.
styles/
├── globals.css        # Global styles
├── Home.module.css    # Module CSS for specific components/pages
└── theme.css          # Theme variables (colors, fonts, etc.)
======== Contexts ======= Chứa các React contexts để quản lý state toàn cục.    
contexts/
├── AuthContext.js
└── ThemeContext.js
======== Utils ======= Chứa các hàm tiện ích (utility functions) có thể tái sử dụng.


utils/
├── formatDate.js
├── apiHelpers.js
└── validation.js
======== Hooks ======= Chứa các custom React hooks.


hooks/
├── useFetch.js
└── useLocalStorage.
======== Contexts =======
contexts/
├── AuthContext.js
└── ThemeContext.js
========  =======
========  =======
========  =======
========  =======
========  =======
========  =======
========  =======

