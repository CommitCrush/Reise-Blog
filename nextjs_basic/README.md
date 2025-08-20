This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To start developing locally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can edit the main page by modifying `app/page.tsx`. The page will auto-update as you save changes.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for automatic font optimization and loads [Geist](https://vercel.com/font), a modern font family by Vercel.

## Learn More

Explore these resources to learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) – Features and API reference.
- [Learn Next.js](https://nextjs.org/learn) – Interactive tutorial.

You can also visit the [Next.js GitHub repository](https://github.com/vercel/next.js) to contribute or give feedback.

## Deploy on Vercel

The easiest way to deploy your Next.js app is via the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Roadmap

### 1. Project Structure
- **Closed**
    - Basic frontend structure (`app/`, `_components/`)
    - Basic backend structure (`lib/`, `models/`, `actions/`)
    - TypeScript & Next.js configuration

### 2. Authentication (Register & Login)
- **Open**
    - `registerUser` action with password hashing (bcrypt)
    - `loginUser` action with JWT & cookies
    - `logoutUser` action
    - Pages: `/register` & `/login` with forms

### 3. Blog CRUD (Create, Read, Update, Delete)
- **Open**
    - `createPost` action – Create blog posts
    - `getPosts` action – Fetch all blogs
    - `getPost` action – Blog detail page
    - Update/Delete functionality
    - Pages: `/blog/create`, `/blog/[id]`, `/blog/[id]/edit`

### 4. Comments & Likes
- **Open**
    - `addComment` action – Save comments
    - `toggleLike` action – Like/Unlike blogs
    - `CommentBox` component
    - Display likes & comments in `PostCard` and `blog/[id]`

### 5. Layout & Navigation
- **Open**
    - Navbar with links to Home, Create Blog, Profile
    - `LogoutButton`
    - Footer
    - Global `layout.tsx`

### 6. Profile Page
- **Open**
    - `/profile` page
    - Show all posts by the logged-in user
    - Edit/delete own posts

### 7. Image Upload
- **Open**
    - Cloudinary integration for image uploads
    - Image upload field in `createPost` & `editPost` forms
    - Display uploaded images in `PostCard` and blog detail page

---

**Comments** are managed via an API route (`/api/comments`).  
The `CommentsSection` client component fetches and reloads comments after submission.  
`CommentBox` calls the API and, on success, triggers `onCommentAdded()` to update comments.  
Only logged-in users can comment (since `userId` is only available to authenticated users).