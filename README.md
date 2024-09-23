# 🚀 Next.js Project Template

This is a **Next.js** project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Features:

- ⚡ **TypeScript**
- ✨ **[clsx](https://github.com/lukeed/clsx)** – utility for constructing `className` strings
- 🎨 **SASS (SCSS)** – for styling
- 🛠️ **Prettier** – code formatting
- 🐙 **Husky** – Git hooks

### 📦 Contains Base Components:

- **Button** – reusable button component
- **Icon** – component with `enum` constants for icons
- **ImageWrapper** – wrapper component for Next.js `Image`

> The project includes `.gitkeep` files to illustrate folder structure and organization.

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### 📋 Scripts

| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts a production server    |
| `npm run lint`  | Runs ESLint checks            |

---

## 🖼️ Optimized Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load the **Inter** Google Font.

---

## 📚 Learn More

To learn more about **Next.js**, take a look at the following resources:

- 📘 [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
- 🎓 [Interactive Next.js Tutorial](https://nextjs.org/learn) – a hands-on way to learn Next.js.
- 👾 [Next.js GitHub Repository](https://github.com/vercel/next.js) – feedback and contributions are welcome!

---

## 🛠️ Project Structure

This template organizes the front-end architecture in a clean and simple way:

- `components/`: Reusable UI components.
- `styles/`: Global and component-specific styles.
- `utils/`: Helper functions and utilities.

Each folder contains a `.gitkeep` file to ensure a clear folder structure from the start.

---

## 🐙 Git Hooks with Husky

This project uses **Husky** to manage Git hooks. For example, a `pre-push` hook ensures that the project builds
successfully before pushing code to the repository.

---

Now you're ready to start building! 🚀✨
