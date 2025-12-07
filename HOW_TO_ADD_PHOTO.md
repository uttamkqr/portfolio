# How to Add Your Photo to Portfolio

## Method 1: Using Local Image File (Recommended)

1. **Save your photo**:
    - Name it `profile.jpg` or `profile.png`
    - Place it in the same folder as `index.html`

2. **Update the image source in `index.html`**:
    - Find line 70 (in the hero section)
    - Change:
      ```html
      <img src="https://i.imgur.com/placeholder.jpg" alt="Uttam Kumar" id="profileImg"
      ```
    - To:
      ```html
      <img src="profile.jpg" alt="Uttam Kumar" id="profileImg"
      ```

## Method 2: Using Image Hosting Service

### Option A: Using Imgur

1. Go to https://imgur.com/upload
2. Upload your photo
3. Right-click on the uploaded image → Copy Image Address
4. Paste the URL in `index.html` at line 70

### Option B: Using GitHub

1. Upload your photo to GitHub repository
2. Get the raw image URL
3. Use that URL in `index.html`

### Option C: Using Cloudinary

1. Sign up at https://cloudinary.com/
2. Upload your image
3. Copy the URL
4. Use it in `index.html`

## Example Code

Replace line 70 in `index.html` with one of these:

```html
<!-- Local file -->
<img src="profile.jpg" alt="Uttam Kumar" id="profileImg">

<!-- Online URL -->
<img src="YOUR_IMAGE_URL_HERE" alt="Uttam Kumar" id="profileImg">
```

## Tips for Best Results

- **Image Size**: 500x500 pixels or larger (square format works best)
- **File Format**: JPG or PNG
- **File Size**: Keep under 500KB for faster loading
- **Background**: Professional photo with clean background
- **Quality**: High resolution, well-lit photo

## Current Photo Location

The image you provided is already saved. To use it:

1. Save your photo as `profile.jpg` in the portfolio folder
2. The CSS is already configured to display it in a circular frame with nice effects!

Your photo will automatically show with:

- Circular border
- Glowing effect
- Floating animation
- Professional styling
