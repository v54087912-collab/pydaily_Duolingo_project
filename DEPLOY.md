# How to Deploy PyDaily to Netlify

This project is configured as a static site and is ready for immediate deployment on Netlify. A `netlify.toml` file is included to automatically handle the build settings.

## Option 1: Continuous Deployment via Git (Recommended)

This method connects your repository to Netlify, automatically deploying updates whenever you push code changes.

1.  **Push to Git:**
    Ensure your project (including the `netlify.toml` file) is pushed to a Git provider like GitHub, GitLab, or Bitbucket.

2.  **Log in to Netlify:**
    Go to [app.netlify.com](https://app.netlify.com) and log in.

3.  **Create a New Site:**
    *   Click **"Add new site"**.
    *   Select **"Import an existing project"**.

4.  **Connect to Git:**
    *   Choose your Git provider (e.g., GitHub).
    *   Search for and select your repository: `pydaily_Duolingo_project`.

5.  **Configure Build Settings:**
    *   Netlify will detect the `netlify.toml` file and automatically fill in the settings.
    *   **Build command:** *(Leave empty)*
    *   **Publish directory:** `.`
    *   Click **"Deploy site"**.

6.  **Done!**
    Your site will be live in a few seconds. Netlify will provide a URL (e.g., `random-name.netlify.app`) which you can customize in "Site settings".

---

## Option 2: Drag & Drop (Manual)

If you don't want to use Git, you can deploy manually.

1.  Log in to [app.netlify.com](https://app.netlify.com).
2.  Go to the **"Sites"** tab.
3.  Drag your entire project folder (`pydaily_Duolingo_project`) into the **"Drag and drop your site output folder here"** area at the bottom of the page.
4.  Netlify will upload and deploy the files immediately.

---

## Configuration Details

The project includes a `netlify.toml` file in the root directory:

```toml
[build]
  publish = "."
  command = ""
```

*   `publish = "."`: Tells Netlify that the `index.html` file is in the root directory.
*   `command = ""`: Indicates that this is a static site with no build process (no `npm run build` required).
