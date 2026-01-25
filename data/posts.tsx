import IPost from "../interfaces/IPost";
import { v4 as uuid } from "uuid";

export const posts: IPost[] = [
  {
    id: 1,
    title: "Understanding React Server Components",
    content: "Server Components allow you to move rendering logic to the server and reduce client-side JavaScript.",
    author: "Paulo",
    tags: ["react", "nextjs", "server-components"],
    type: "post",
    comments: ["Great explanation!", "This helped a lot."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/1/800/400",
      alt: "React Server Components illustration"
    },
    videos: [
      {
        id: uuid(),
        url: "https://giffiles.alphacoders.com/114/thumb-440-114951.mp4",
        alt: "Mikasa preparing herself to fight against the Female Titan"
      }
    ]
  },
  {
    id: 2,
    title: "Quick tip: useCallback",
    content: "Use useCallback to memoize functions and avoid unnecessary re-renders.",
    author: "Ana",
    tags: ["react", "hooks"],
    type: "quick-post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/2/800/400",
      alt: "React hooks concept"
    },
    videos: [
      {
        id: uuid(),
        url: "https://giffiles.alphacoders.com/222/thumb-440-222022.mp4",
        alt: "Isagi thinking on the field"
      }
    ]
  },
  {
    id: 3,
    title: "Why TypeScript is worth it",
    content: "Type safety helps catch bugs early and improves developer experience.",
    author: "Lucas",
    tags: ["typescript", "javascript"],
    type: "post",
    comments: ["Totally agree."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/3/800/400",
      alt: "TypeScript logo"
    },
    videos: [
      {
        id: uuid(),
        url: "https://giffiles.alphacoders.com/223/thumb-440-223139.mp4",
        alt: "A few seconds of Dan Da Dan's opening"
      }
    ]
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    content: "Both are powerful layout systems, but each shines in different scenarios.",
    author: "Marina",
    tags: ["css", "layout"],
    type: "post",
    comments: ["Nice comparison!", "Very clear."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/4/800/400",
      alt: "CSS layout comparison"
    },
    videos: [
      {
        id: uuid(),
        url: "https://giffiles.alphacoders.com/222/thumb-440-222812.mp4",
        alt: "Makima's scene on Chainsaw Man's opening"
      }
    ]
  },
  {
    id: 5,
    title: "Quick note on semantic HTML",
    content: "Using semantic tags improves accessibility and SEO.",
    author: "Paulo",
    tags: ["html", "accessibility"],
    type: "quick-post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/5/800/400",
      alt: "Semantic HTML structure"
    },
    videos: [
      {
        id: uuid(),
        url: "https://giffiles.alphacoders.com/223/thumb-440-223101.mp4",
        alt: "Gyomei fighting against Muzan's blood technique"
      }
    ]
  },
  {
    id: 6,
    title: "What is hydration in Next.js?",
    content: "Hydration is the process of attaching event listeners to server-rendered HTML.",
    author: "Renata",
    tags: ["nextjs", "react"],
    type: "post",
    comments: ["This was confusing before.", "Thanks!"],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/6/800/400",
      alt: "Next.js hydration process"
    }
  },
  {
    id: 7,
    title: "Quick post: clean commits",
    content: "Write clear commit messages. Your future self will thank you.",
    author: "João",
    tags: ["git", "best-practices"],
    type: "quick-post",
    comments: ["So true."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/7/800/400",
      alt: "Git commit history"
    }
  },
  {
    id: 8,
    title: "Understanding REST APIs",
    content: "REST is an architectural style based on stateless communication.",
    author: "Camila",
    tags: ["api", "backend"],
    type: "post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/8/800/400",
      alt: "REST API diagram"
    }
  },
  {
    id: 9,
    title: "Quick thought: dark mode",
    content: "Dark mode is nice, but accessibility should come first.",
    author: "Paulo",
    tags: ["ui", "ux"],
    type: "quick-post",
    comments: ["Good point."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/9/800/400",
      alt: "Dark mode interface"
    }
  },
  {
    id: 10,
    title: "State management in 2025",
    content: "You probably don't need Redux for most apps anymore.",
    author: "Felipe",
    tags: ["react", "state-management"],
    type: "post",
    comments: ["Based take.", "Agree 100%."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/10/800/400",
      alt: "State management flow"
    }
  },
  {
    id: 11,
    title: "Quick tip: keys in lists",
    content: "Never use array index as key unless you really know what you're doing.",
    author: "Ana",
    tags: ["react"],
    type: "quick-post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/11/800/400",
      alt: "React list rendering"
    }
  },
  {
    id: 12,
    title: "What makes code readable?",
    content: "Clear naming beats clever logic every time.",
    author: "Lucas",
    tags: ["clean-code"],
    type: "post",
    comments: ["This should be a rule."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/12/800/400",
      alt: "Readable code example"
    }
  },
  {
    id: 13,
    title: "Quick post: debounce",
    content: "Debounce limits how often a function runs.",
    author: "Marina",
    tags: ["javascript", "performance"],
    type: "quick-post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/13/800/400",
      alt: "Debounce concept"
    }
  },
  {
    id: 14,
    title: "How browsers render a page",
    content: "HTML, CSS, and JS go through several steps before pixels appear.",
    author: "Renata",
    tags: ["browser", "performance"],
    type: "post",
    comments: ["Super informative."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/14/800/400",
      alt: "Browser rendering pipeline"
    }
  },
  {
    id: 15,
    title: "Quick reminder: accessibility",
    content: "If it's not accessible, it's not finished.",
    author: "Paulo",
    tags: ["a11y", "frontend"],
    type: "quick-post",
    comments: ["Needed this reminder."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/15/800/400",
      alt: "Accessibility icons"
    }
  },
  {
    id: 16,
    title: "Understanding JWT",
    content: "JWTs are a compact way to securely transmit information.",
    author: "João",
    tags: ["auth", "security"],
    type: "post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/16/800/400",
      alt: "JWT authentication flow"
    }
  },
  {
    id: 17,
    title: "Quick post: environment variables",
    content: "Never commit your .env file to the repo.",
    author: "Camila",
    tags: ["security", "devops"],
    type: "quick-post",
    comments: ["Learned the hard way."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/17/800/400",
      alt: "Environment variables concept"
    }
  },
  {
    id: 18,
    title: "Frontend performance basics",
    content: "Smaller bundles and fewer requests make a big difference.",
    author: "Felipe",
    tags: ["performance", "frontend"],
    type: "post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/18/800/400",
      alt: "Performance optimization"
    }
  },
  {
    id: 19,
    title: "Quick thought: design systems",
    content: "A good design system saves time and avoids inconsistency.",
    author: "Ana",
    tags: ["design-system", "ui"],
    type: "quick-post",
    comments: [],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/19/800/400",
      alt: "Design system components"
    }
  },
  {
    id: 20,
    title: "Why testing matters",
    content: "Tests give you confidence to refactor without fear.",
    author: "Lucas",
    tags: ["testing", "quality"],
    type: "post",
    comments: ["Well said.", "Needed this."],
    postImage: {
      id: uuid(),
      url: "https://picsum.photos/seed/20/800/400",
      alt: "Testing workflow"
    }
  }
];
;

export default posts;
