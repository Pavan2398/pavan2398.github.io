# Deploy a Static Website Using GitHub Pages

**Objective:**  
Host a simple static website on GitHub Pages for free.

**Tools Needed:**  
- GitHub account  
- Git CLI or GitHub Desktop  
- Static website files (HTML, CSS, JS)

**Deliverables:**  
- Public GitHub repository with your website live at:  
  [https://pavan2398.github.io/](https://pavan2398.github.io/)

---

## Steps to Deploy

1. **Create a Repository**  
   - Go to GitHub and create a new repository named:  
     `yourusename.github.io`

2. **Clone the Repository Locally**  
   - Use Git CLI or GitHub Desktop to clone the repo to your computer.

3. **Add Your Website Files**  
   - Copy your static website files (HTML, CSS, JS, images, etc.) into the cloned repo folder.

4. **Commit and Push Changes**  
   - Use the following commands in your terminal:
     ```sh
     git add .
     git commit -m "Initial website files"
     git push origin main
     ```

5. **Enable GitHub Pages**  
   - Go to your repo's **Settings** > **Pages**.
   - Under "Source", select the `main` branch and `/ (root)` folder.
   - Save the settings.

6. **Access Your Website**  
   - Wait a few minutes for deployment.
   - Visit: [https://pavan2398.github.io/](https://pavan2398.github.io/)

7. **Update Your Site**  
   - Make changes locally, commit, and push to update your live site.

8. **Share Your URL**  
   - Use your GitHub Pages URL for your portfolio or demos.

---

**Tip:**  
Every time you push new commits to the `main` branch, your site will automatically update!