# 🚀 GitHub Pages Deployment Steps

## Follow these steps to deploy your website:

### Step 1: Create Repository
1. Go to **https://github.com/new**
2. Repository name: `bluebirdfarmhouse`
3. Description: `Blue Bird Farmhouse - Luxury Farmhouse in Hyderabad`
4. Select: **Public**
5. Click **"Create repository"**

### Step 2: Upload Files

**Option A - Via GitHub Website (Easiest):**
1. Click **"uploading an existing file"** link
2. Drag ALL files from: `C:\Users\Admin\Desktop\2025\CLIENTS\bluebirdfarmhouse`
3. Include ALL folders: css, js, images
4. Click **"Commit changes"**

**Option B - Via Git Command Line:**
```bash
cd "C:\Users\Admin\Desktop\2025\CLIENTS\bluebirdfarmhouse"
git init
git add .
git commit -m "Initial commit - Blue Bird Farmhouse website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bluebirdfarmhouse.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository: `https://github.com/YOUR-USERNAME/bluebirdfarmhouse`
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under "Branch":
   - Select: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

### Step 4: Wait & Get URL
- Wait 2-3 minutes for deployment
- Your site will be live at:
  ```
  https://YOUR-USERNAME.github.io/bluebirdfarmhouse
  ```
- A green box will show with your URL

### Step 5: Share with Client
Send them the URL:
```
https://YOUR-USERNAME.github.io/bluebirdfarmhouse
```

---

## ✅ What to Upload

Make sure to upload ALL these files:
- ✅ index.html
- ✅ about.html
- ✅ amenities.html
- ✅ gallery.html
- ✅ location.html
- ✅ booking.html
- ✅ contact.html
- ✅ css/ folder (with styles.css)
- ✅ js/ folder (with script.js)
- ✅ images/ folder (all .jpg and .mp4 files)
- ✅ README.md (optional)

**⚠️ Important:** Upload the FOLDER CONTENTS, not the folder itself!

---

## 🎯 Quick Checklist

- [ ] Created GitHub repository named `bluebirdfarmhouse`
- [ ] Set repository to Public
- [ ] Uploaded all files and folders
- [ ] Enabled GitHub Pages in Settings
- [ ] Selected branch: main, folder: / (root)
- [ ] Waited 2-3 minutes
- [ ] Verified site is live
- [ ] Shared URL with client

---

## 🔧 Troubleshooting

**If images don't show:**
- Make sure the `images` folder was uploaded
- Check that file names match (case-sensitive)

**If CSS doesn't load:**
- Make sure the `css` folder was uploaded
- Check file paths in HTML files

**If video doesn't play:**
- GitHub Pages has 100MB file size limit
- If video is larger, use YouTube embed instead

---

## 📞 Need Help?

If you encounter any issues:
1. Check that all files uploaded successfully
2. Verify GitHub Pages is enabled
3. Wait a few minutes for deployment
4. Clear browser cache and try again

---

## 🎉 Your URL Format

```
https://YOUR-USERNAME.github.io/bluebirdfarmhouse
```

Replace `YOUR-USERNAME` with your GitHub username.

Example:
- Username: `johnsmith`
- URL: `https://johnsmith.github.io/bluebirdfarmhouse`
