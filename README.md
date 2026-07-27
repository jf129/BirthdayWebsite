# Happy Birthday Website 🎂

A festive, interactive birthday website that you can send to your wife instead of a card!

## Features

✨ **Interactive Elements:**
- Animated birthday greeting with bouncing text
- Animated birthday cake with flickering candles
- Floating balloons in the background
- Confetti animation that triggers on page load and when clicked
- Birthday music toggle button

🎨 **Design:**
- Beautiful purple gradient background
- Smooth animations and transitions
- Responsive design (works on desktop and mobile)
- Modern, clean card layout

## How to Use

1. **Open the website:** 
   - Simply open `index.html` in any web browser
   - You can also open it by right-clicking `index.html` and selecting "Open with" your preferred browser

2. **Share with your wife:**
   - Move the entire folder to a web server, OR
   - Open the file locally and take a screenshot to send, OR
   - Use a service like [GitHub Pages](https://pages.github.com/) to host it for free

3. **Interact with the page:**
   - Click the "🎉 Make it Festive!" button to trigger confetti
   - Click the "🎵 Birthday Music" button to play birthday music

## Customization

### Change the Message
Open `index.html` and find the `.message` section. Edit the text:

```html
<div class="message">
    <p>Your custom message here!</p>
    <p>Add more paragraphs as needed</p>
    <p class="signature">With all my love ❤️</p>
</div>
```

### Change the Colors
Open `styles.css` and modify the gradient colors:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Or change the button color:

```css
.button {
    background: linear-gradient(135deg, #667eea, #764ba2);
}
```

Color ideas:
- Red/Pink: `#ff1744` and `#ff6b9d`
- Blue/Purple: `#667eea` and `#764ba2`
- Green: `#66BB6A` and `#42c876`
- Orange/Yellow: `#ffd700` and `#ffed4e`

### Add a Photo
Add this code after the greeting:

```html
<img src="path-to-your-photo.jpg" alt="Photo" style="width: 200px; border-radius: 10px; margin: 20px 0;">
```

Replace `path-to-your-photo.jpg` with the actual image file path.

### Change Birthday Music
Replace the audio URL in `index.html`:

```html
<audio id="birthday-music" src="https://your-music-url.mp3"></audio>
```

Find free birthday music at:
- YouTube (download using a converter)
- [Free Music Archive](https://freemusicarchive.org/)
- [Pixabay Music](https://pixabay.com/music/)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Tips

- Open in fullscreen for the best effect
- Test it locally before sending the link
- Works best with fast internet connection for music
- The confetti animation runs automatically when the page loads

Enjoy! 🎉🎂❤️
