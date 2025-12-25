import IPost from "../interfaces/IPost";

const posts: IPost[] = [
  {
    "id": 1,
    "title": "Understanding Async JavaScript",
    "content": "Asynchronous JavaScript allows your application to handle long-running tasks without blocking the main thread.",
    "author": "Paulo Silva",
    "tags": ["javascript", "async", "programming"],
    "type": "post",
    "comments": ["Great explanation!", "This helped me a lot."],
    "postImage": {
      "url": "https://http.cat/200",
      "alt": "HTTP 200 OK"
    }
  },
  {
    "id": 2,
    "title": "Quick tip: CSS Flexbox",
    "content": "Use justify-content and align-items to control layout alignment easily.",
    "author": "Maria Costa",
    "tags": ["css", "flexbox", "frontend"],
    "type": "quick-post",
    "comments": [],
    "postImage": {
      "url": "https://http.cat/206",
      "alt": "HTTP 206 Partial Content"
    }
  },
  {
    "id": 3,
    "title": "Why TypeScript Matters",
    "content": "TypeScript adds static typing to JavaScript, reducing bugs and improving developer experience.",
    "author": "João Pereira",
    "tags": ["typescript", "javascript", "backend"],
    "type": "post",
    "comments": ["I can't code without TS anymore."],
    "postImage": {
      "url": "https://http.cat/418",
      "alt": "HTTP 418 I'm a teapot"
    }
  },
  {
    "id": 4,
    "title": "Daily Dev Thought",
    "content": "Readable code is more important than clever code.",
    "author": "Ana Lima",
    "tags": ["clean-code", "best-practices"],
    "type": "quick-post",
    "comments": ["Totally agree."],
    "postImage": {
      "url": "https://http.cat/304",
      "alt": "HTTP 304 Not Modified"
    }
  },
  {
    "id": 5,
    "title": "State Management Basics",
    "content": "Managing state properly is key to building scalable frontend applications.",
    "author": "Lucas Rocha",
    "tags": ["react", "state", "frontend"],
    "type": "post",
    "comments": ["Very clear explanation.", "Waiting for part 2."],
    "postImage": {
      "url": "https://http.cat/201",
      "alt": "HTTP 201 Created"
    }
  },
  {
    "id": 6,
    "title": "Quick reminder",
    "content": "Commit small changes. Big commits hide bugs.",
    "author": "Paulo Silva",
    "tags": ["git", "productivity"],
    "type": "quick-post",
    "comments": [],
    "postImage": {
      "url": "https://http.cat/409",
      "alt": "HTTP 409 Conflict"
    }
  },
  {
    "id": 7,
    "title": "REST vs GraphQL",
    "content": "Both REST and GraphQL solve API communication problems, but in different ways.",
    "author": "Fernanda Alves",
    "tags": ["api", "graphql", "rest"],
    "type": "post",
    "comments": ["Nice comparison."],
    "postImage": {
      "url": "https://http.cat/202",
      "alt": "HTTP 202 Accepted"
    }
  },
  {
    "id": 8,
    "title": "Dev shortcut",
    "content": "Learn your editor shortcuts. Your hands will thank you.",
    "author": "Carlos Mendes",
    "tags": ["vscode", "tools"],
    "type": "quick-post",
    "comments": ["This is underrated advice."],
    "postImage": {
      "url": "https://http.cat/302",
      "alt": "HTTP 302 Found"
    }
  },
  {
    "id": 9,
    "title": "What is Clean Architecture?",
    "content": "Clean Architecture helps separate concerns and keep your business logic independent.",
    "author": "Rafael Nunes",
    "tags": ["architecture", "backend", "clean-code"],
    "type": "post",
    "comments": ["Hard but worth it."],
    "postImage": {
      "url": "https://http.cat/204",
      "alt": "HTTP 204 No Content"
    }
  },
  {
    "id": 10,
    "title": "End of day thought",
    "content": "If it works but nobody understands it, it will break tomorrow.",
    "author": "Ana Lima",
    "tags": ["software", "mindset"],
    "type": "quick-post",
    "comments": [],
    "postImage": {
      "url": "https://http.cat/500",
      "alt": "HTTP 500 Internal Server Error"
    }
  }
];

export default posts;
