1. Follow 'pildoras de programacion' tutorial for developing the Django project.
2. Install the django-compressor for compressing correctly static files [django-compressor](https://django-compressor.readthedocs.io/en/stable/) and installing the tailwinds lastest version to the django project [tailwinds in Django](https://www.geeksforgeeks.org/how-to-use-tailwind-css-with-django/). 
- I here I should said that there is no way to add the "templates" configuration. It is enough to:

* Add the following in the `settings.py` file:

```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

* If you are working with several apps in the Django project the variable paths must be change due to the new apps you have available. For instance:

```python
npx tailwindcss -i ./app1/static/src/input.css -o ./app1/static/src/output.css

```

Nevertheless, the most advisable is setting the static folder not within the app or project folder but in the same level they are located. That's the strategy I followed.


* If you are using the most updated Path module version from the --- package there is no need (in my case) to add this step:

```python
COMPRESS_ROOT = BASE_DIR / 'static'
COMPRESS_ENABLED = True
STATICFILES_FINDERS = ('compressor.finders.CompressorFinder',)
```


**Note**: the tutorial is basically following the [regular installation installation](https://tailwindcss.com/docs/installation) but adding the compression step in the Django project to include the static files.


## DJango structure

I decided to add summary variable to the post structure.

```Bash
project-django/
├── manage.py
├── static/  <-- Static folder outside the app
│   └── style.css
├── templates/  (Optional, for base templates)
│   └── base.html
└── websitedjango/  (Your app)
    ├── templates/  (App templates)
    │   └── index.html
    └── ...
```



## font

I decided to use the [Noto Sans Display](https://fonts.google.com/noto/specimen/Noto+Sans+Display) font for the project. It is rooted in the app and main project.

## tailwinds

For the tailwinds installation please follow:

```python
npm install tailwindcss@latest
npm install @tailwindcss/forms
npm install @tailwindcss/typography
npm install @tailwindcss/line-clamp
npm install @tailwindcss/aspect-ratio
python manage.py collectstatic --clear
```

Add the dev mode in the package.json:

```json
"scripts": {
  "dev": "tailwindcss -i static/css/tw/tailwind-input.css -o static/css/base/main.css --watch"
},
```

### animation

IN case the animation features want to be used, the moudules in the taiwinds css input must be change from this:


```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

to this:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Django htmls

For extending the scripts, links, css and so on from the main html in the projects directory should be done using the extends tag:

```html
{% extends 'main.html'`%}
```

## child management

Adding a simple string to the context dictionary and rendering it in the template to verify if the issue is related to the post object or the template rendering process itself. For instance,

```python
def post_detail(request, id):
    post = get_object_or_404(Post, id=id, status=Post.Status.PUBLISHED)
    context = {'post': post, 'test_string': 'This is a test string'}
    return render(request, 'blog/post/detail.html', context)
```

## Live dev

Add the `django-livereload-server` package to the Django project to visualize in live changes. Follow this steps:

1. Install the django-livereload-server package:
bash

```Bash
pip install django-livereload-server
```

2. Add the following lines to your project's settings.py file:

```Bash
INSTALLED_APPS = [
    # ...
    'livereload',
]

MIDDLEWARE = [
    # ...
    'livereload.middleware.LiveReloadScript',
]
```

3. Start the livereload server:

```Bash
python3 manage.py livereload
```
 
keep the livereload server running.

4. Start the django development server as usual (in another console):

```Bash
python3 manage.py runserver
```

## html structure

To push the footer to the very bottom:

```html
   <div class="min-h-screen flex flex-col">
      <main class="flex-grow">   
        <!-- Main content -->
      </main>
      <footer class="mt-auto">
         <!-- Footer content -->
      </footer>
   </div>
```

## templatetags

The `templatetags` folder in a Django project is used to store custom template tags and filters, which are Python functions that can be used in Django templates to perform custom logic or generate dynamic content.


## Darkmode

Create the darkmode.js:

```js
// Check if the user has a color theme preference set in local storage
let colorTheme = localStorage.getItem('color-theme');

// If the user has a color theme preference, use that
if (colorTheme) {
  document.body.classList.add(colorTheme);
} else {
  // If the user doesn't have a color theme preference, check if their system prefers dark mode
  const systemPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // If the system prefers dark mode, use dark mode
  if (systemPrefersDarkMode) {
    document.body.classList.add('dark');
  }
}

// Add event listener for toggling dark mode
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  // Toggle the dark mode class on the <body> element
  document.body.classList.toggle('dark');

  // Update the user's color theme preference in local storage
  const colorTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('color-theme', colorTheme);
});
```
2. The previous `darkmode.js`file should be included at the bottom of the <body> section, or at the end of the HTML file before the closing </body> tag.

```html
<script src="{% static 'js/darkmode.js' %}"></script>
```

3. Create a button where you need to place the toggle button:

```html
<button id="dark-mode-toggle">Toggle Dark Mode</button>
```

4. Do not forget to add the `dark` class in the input CSS of the tailwindscss in the django project. In this case, I use:

```css
<button id="dark-mode-toggle">Toggle Dark Mode</button>
```

### icon

1. For any collapse item using bootstrap there is need to activate its visibility using:


```css
.collapse.show {
   visibility: visible;
 }
```

2. The customization of the toggle icon is done by:

```css
/* Custom dark mode styles */
.dark #dark-mode-toggle > i {
  color: #fff; /* Change the icon color in dark mode */
}

#dark-mode-toggle > i {
  color: #333; /* Default icon color in light mode */
}
```

3. The $\LaTeX$ logo font is in black and white. Then, the use of hidden in dark mode is essential.

```html
<li class="flex items-center hidden dark:block">
    <a href="https://www.latex-project.org/">
        <img src="{% static 'media/LaTeX_dark_logo.svg' %}" id="latex-logo" class="img-fluid rounded d-block mx-auto" alt="..." style="height: 37px;">
    </a>
</li>
<li class="flex items-center dark:hidden">
    <a href="https://www.latex-project.org/">
        <img src="{% static 'media/LaTeX_light_logo.svg' %}" id="latex-logo" class="img-fluid rounded d-block mx-auto" alt="..." style="height: 37px;">
    </a>
</li>
```

4. Inherit color for dark mode is important for correct display of hover in the dark mode button:

```html
<button id="dark-mode-toggle" class="border border-gray-700 rounded-md px-4 py-1 hover:bg-black hover:text-white">
  <i class="far fa-moon fa-2x"></i>
</button>
```


```css
#dark-mode-toggle i {
   color: inherit; /* Inherit the text color from the parent button */
}

#dark-mode-toggle:hover i {
   color: inherit; /* Ensure the icon inherits the hover text color */
 }
```

5. Inherit color for tab in darkmode:

```css
.nav-link.active {
   color: inherit;
}
```

**NOTE**: There is another approach that works (it worked in the accordion component).

```html
<i class="fa-solid fa-book-open-reader fa-sm dark:text-white"></i>
```



### Accordion


The accordion case there must be:

```css
.accordion-button, .accordion-button:not(.collapsed), .accordion-item {
   background-color: inherit;
}


.dark .accordion-button:after {
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.dark .accordion-button:not(.collapsed):after{
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

```

## GSAP for animation

GSAP js is one of the top animation javascript libraries. It is being used in this project using this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
```

### scripts:



#### Blinking Cursor Animation and Box Animation with Text Effects

This code snippet uses the GreenSock Animation Platform (GSAP) to create a blinking cursor animation, a box animation with various effects, and a text animation with color and background color changes.

##### Blinking Cursor Animation

```javascript
let cursor = gsap.to('.text-effect .cursor', {
  opacity: 0, // Set cursor opacity to 0
  ease: 'power2.inOut', // Use power2.inOut easing function
  repeat: -1 // Repeat indefinitely
});
```

- This code creates a GSAP animation that targets the element with the class `.text-effect .cursor`.
- The animation sets the opacity of the cursor to 0, effectively making it disappear.
- The `ease` property specifies the easing function used for the animation, in this case, `power2.inOut`.
- The `repeat` property is set to `-1`, which means the animation will repeat indefinitely, creating a blinking effect.

##### Box Animation

```javascript
let boxTl = gsap.timeline();
boxTl
  .to('.box', {
    duration: 1,
    width: '25vw', // Increase width to 25vw
    delay: 0.5, // Delay animation by 0.5 seconds
    ease: 'power4.inOut' // Use power4.inOut easing function
  })
  .from(
    '.hi',
    {
      duration: 1,
      y: '7vw', // Move element 7vw on the y-axis
      ease: 'power3.out', // Use power3.out easing function
      onComplete: () => masterTl.play() // Play master timeline on complete
    },
    '-=1' // Use relative position '-=1' to start 1 second earlier
  )
  .to('.box', {
    duration: 1,
    height: '7vw', // Increase height to 7vw
    ease: 'elastic.out' // Use elastic.out easing function
  })
  .to('.box', {
    duration: 2,
    autoAlpha: 0.5, // Set opacity to 0.5
    yoyo: true, // Use yoyo effect
    repeat: -1, // Repeat indefinitely
    ease: "rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})" // Use rough easing function
  });
```

- This code creates a GSAP timeline for animating a box element with the class `.box`.
- The first animation increases the width of the box to `25vw` (25% of the viewport width) over a duration of 1 second, with a delay of 0.5 seconds and using the `power4.inOut` easing function.
- The second animation moves an element with the class `.hi` by `7vw` on the y-axis over a duration of 1 second, using the `power3.out` easing function. This animation starts 1 second earlier than the first animation (`'-=1'`), and upon completion, it plays the `masterTl` timeline.
- The third animation increases the height of the box to `7vw` over a duration of 1 second, using the `elastic.out` easing function.
- The fourth animation sets the opacity of the box to 0.5, uses a `yoyo` effect (animates back and forth), repeats indefinitely, and applies a custom `rough` easing function with various parameters.

##### Text Animation

```javascript
gsap.to('.hi', {
  duration: 2,
  color: 'white', // Change text color to white
  backgroundColor: 'mediumspringgreen', // Change background color to mediumspringgreen
  yoyo: true, // Use yoyo effect
  repeat: -1, // Repeat indefinitely
  ease: 'power1.inOut' // Use power1.inOut easing function
});
```

- This code creates a GSAP animation that targets an element with the class `.hi`.
- The animation changes the text color to white and the background color to `mediumspringgreen` over a duration of 2 seconds.
- The `yoyo` property is set to `true`, which means the animation will reverse its direction after completion, creating a back-and-forth effect.
- The animation repeats indefinitely using `repeat: -1`.
- The `ease` property specifies the `power1.inOut` easing function for the animation.

This code snippet demonstrates the use of GSAP for creating animations with various effects, easing functions, and timing controls. It combines a blinking cursor animation, a box animation with width and height changes, opacity adjustments, and a custom `rough` easing function, as well as a text animation with color and background color changes.

#### Revealing and Unrevealing Text with Multiple Instances

This code is designed to reveal and unreveal text for multiple instances of text elements on a web page. It uses JavaScript and the GSAP (GreenSock Animation Platform) library for animation effects.

##### Code Structure

The code is structured as follows:

1. **Variable Declarations**

```javascript
let allWords = [];
let currentWordIndices = [];
let currentCharIndices = [];
let isRevealing = true;
```

- `allWords`: An array that stores an array of words for each text element.
- `currentWordIndices`: An array that keeps track of the current word index for each text element.
- `currentCharIndices`: An array that keeps track of the current character index for each text element.
- `isRevealing`: A flag that determines whether the text is being revealed or unrevealed.

2. **Update Words Function**

```javascript
function updateWords() {
  // Get all '.text' elements and iterate over them
  const textElements = document.querySelectorAll('.text');
  allWords = [];
  currentWordIndices = [];
  currentCharIndices = [];

  textElements.forEach((textElement, index) => {
    const textContent = textElement.textContent.trim();
    if (textContent) {
      const words = textContent.split('\n').map(word => word.trim());
      allWords.push(words);
      currentWordIndices.push(0);
      currentCharIndices.push(0);
    }
  });
}
```

This function updates the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays based on the text content of all the `.text` elements on the page. It splits the text content by newline characters (`\n`) and trims any leading or trailing whitespace.

3. **Event Listeners**

```javascript
updateWords();

const textElements = document.querySelectorAll('.text');
textElements.forEach(textElement => {
  textElement.addEventListener('input', updateWords);
});
```

The `updateWords` function is called initially and whenever the text content of any `.text` element changes (through user input or programmatically).

4. **Reveal Text Function**

```javascript
function revealText() {
  const textElements = document.querySelectorAll('.text');
  const cursorElements = document.querySelectorAll('.cursor');

  textElements.forEach((textElement, index) => {
    const currentWord = allWords[index][currentWordIndices[index]];
    const cursor = cursorElements[index];

    if (currentCharIndices[index] <= currentWord.length) {
      textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
      cursor.textContent = '_';
      currentCharIndices[index]++;
    } else {
      textElement.textContent = currentWord;
      cursor.textContent = '';
      isRevealing = false; // Switch to unrevealing mode
    }
  });
}
```

This function reveals the text character by character for each text element. It iterates over all `.text` and `.cursor` elements, and updates their content based on the corresponding indices in the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays. When a word is fully revealed, it switches to the unrevealing mode.

5. **Unreveal Text Function**

```javascript
function unrevealText() {
  const textElements = document.querySelectorAll('.text');
  const cursorElements = document.querySelectorAll('.cursor');

  textElements.forEach((textElement, index) => {
    const currentWord = allWords[index][currentWordIndices[index]];
    const cursor = cursorElements[index];

    if (currentCharIndices[index] >= 0) {
      textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
      cursor.textContent = '_';
      currentCharIndices[index]--;
    } else {
      textElement.textContent = '';
      cursor.textContent = '';
      currentWordIndices[index] = (currentWordIndices[index] + 1) % allWords[index].length;
      currentCharIndices[index] = 0;
      isRevealing = true; // Switch back to revealing mode
    }
  });
}
```

This function unreveals the text character by character for each text element. It iterates over all `.text` and `.cursor` elements, and updates their content based on the corresponding indices in the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays. When a word is fully unrevealed, it moves to the next word and switches back to the revealing mode.

6. **Intervals for Revealing and Unrevealing**

```javascript
setInterval(() => {
  if (isRevealing) {
    textElements.forEach(textElement => {
      TweenMax.to(textElement, 0.1, { opacity: 1, yoyo: true }); // Add yoyo effect to reveal
    });
    revealText();
  }
}, 100); // Update text every 1 second for revealing mode

setInterval(() => {
  if (!isRevealing) {
    textElements.forEach(textElement => {
      TweenMax.to(textElement, 0.2, { opacity: 1, yoyo: true }); // Add yoyo effect to unreveal
    });
    unrevealText();
  }
}, 200); // Update text every 2 seconds for unrevealing mode
```

These two `setInterval` functions control the revealing and unrevealing of text. The first `setInterval` function calls the `revealText` function every 100 milliseconds (10 times per second) when the `isRevealing` flag is true. The second `setInterval` function calls the `unrevealText` function every 200 milliseconds (5 times per second) when the `isRevealing` flag is false.

Each interval also applies a GSAP animation effect (`TweenMax.to`) to the text elements, creating a pulsing effect during the revealing and unrevealing processes.

##### Usage

To use this code, you need to have HTML elements with the `.text` and `.cursor` classes for each instance of text you want to reveal and unreveal. The text content can be separated by newline characters (`\n`) to create multiple words within each instance.

For example:

```html
<div>
  <span class="text"></span>
  <span class="cursor"></span>
</div>

<div>
  <span class="text">Line 1<br>Line 2<br>Line 3</span>
  <span class="cursor"></span>
</div>
```

This code will reveal and unreveal the text in each instance, one character at a time, with a pulsing animation effect.


You're right, my previous explanation didn't include information on how to use this code snippet. Here's an updated version with a "How to Use" section:

### Horizontal Scrolling Animation with GSAP and ScrollTrigger

This code snippet uses the GreenSock Animation Platform (GSAP) and its ScrollTrigger plugin to create a horizontal scrolling animation for elements on the page. The animation is triggered as the user scrolls through the page.

#### Setup

```javascript
gsap.registerPlugin(ScrollTrigger);
const elements = document.querySelectorAll('.horizontal-effect-gsp');
```

- The code starts by registering the ScrollTrigger plugin with GSAP.
- It then selects all elements with the class `.horizontal-effect-gsp` and stores them in the `elements` variable.

#### Animation Loop

```javascript
elements.forEach(element => {
  const content = element.querySelector('.horizontal-content');
  const isReverse = element.classList.contains('reverse');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 100%',
      end: 'bottom 0%',
      scrub: true,
    },
  });

  if (isReverse) {
    tl.fromTo(
      content,
      { x: '0%' },
      { x: '-100%', duration: 3 }
    );
  } else {
    tl.fromTo(
      content,
      { x: '-100%' },
      { x: '0%', duration: 3 }
    );
  }
});
```

- The code loops through each `.horizontal-effect-gsp` element using `forEach`.
- For each element, it selects the `.horizontal-content` child element and stores it in the `content` variable.
- It also checks if the `.horizontal-effect-gsp` element has the `reverse` class and stores the result in the `isReverse` variable.
- A new GSAP timeline (`tl`) is created, and a ScrollTrigger is attached to it.
- The ScrollTrigger is configured to trigger when the top of the `.horizontal-effect-gsp` element is 100% from the top of the viewport (`start: 'top 100%'`), and to end when the bottom of the element is at the bottom of the viewport (`end: 'bottom 0%'`).
- The `scrub` property is set to `true`, which means the animation will be updated continuously as the user scrolls, giving a smooth effect.

#### Animation Direction

```javascript
if (isReverse) {
  tl.fromTo(
    content,
    { x: '0%' },
    { x: '-100%', duration: 3 }
  );
} else {
  tl.fromTo(
    content,
    { x: '-100%' },
    { x: '0%', duration: 3 }
  );
}
```

- The code checks the value of the `isReverse` variable to determine the direction of the animation.
- If `isReverse` is `true`, the animation will move the `.horizontal-content` element from its original position (`x: '0%'`) to the left by 100% of its width (`x: '-100%'`) over a duration of 3 seconds.
- If `isReverse` is `false`, the animation will move the `.horizontal-content` element from the left by 100% of its width (`x: '-100%'`) to its original position (`x: '0%'`) over a duration of 3 seconds.

#### How to Use

To use this code snippet, you need to have the following HTML structure:

```html
<div class="horizontal-effect-gsp">
  <div class="horizontal-content">
    <!-- Your content here -->
  </div>
</div>
```

You can have multiple instances of the `.horizontal-effect-gsp` div, and each one will have its own horizontal scrolling animation.

To reverse the animation direction for a specific instance, add the `reverse` class to the `.horizontal-effect-gsp` div:

```html
<div class="horizontal-effect-gsp reverse">
  <div class="horizontal-content">
    <!-- Your content here -->
  </div>
</div>
```

Make sure to include the GSAP library and the ScrollTrigger plugin in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
```

And don't forget to include the JavaScript code from the code snippet in your project.

With this setup, the horizontal scrolling animation will be triggered as the user scrolls through the page, and the content inside the `.horizontal-content` div will move horizontally across the screen.




## GSAP for animation

GSAP js is one of the top animation javascript libraries. It is being used in this project using this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
```

### scripts:



#### Blinking Cursor Animation and Box Animation with Text Effects

This code snippet uses the GreenSock Animation Platform (GSAP) to create a blinking cursor animation, a box animation with various effects, and a text animation with color and background color changes.

##### Blinking Cursor Animation

```javascript
let cursor = gsap.to('.text-effect .cursor', {
  opacity: 0, // Set cursor opacity to 0
  ease: 'power2.inOut', // Use power2.inOut easing function
  repeat: -1 // Repeat indefinitely
});
```

- This code creates a GSAP animation that targets the element with the class `.text-effect .cursor`.
- The animation sets the opacity of the cursor to 0, effectively making it disappear.
- The `ease` property specifies the easing function used for the animation, in this case, `power2.inOut`.
- The `repeat` property is set to `-1`, which means the animation will repeat indefinitely, creating a blinking effect.

##### Box Animation

```javascript
let boxTl = gsap.timeline();
boxTl
  .to('.box', {
    duration: 1,
    width: '25vw', // Increase width to 25vw
    delay: 0.5, // Delay animation by 0.5 seconds
    ease: 'power4.inOut' // Use power4.inOut easing function
  })
  .from(
    '.hi',
    {
      duration: 1,
      y: '7vw', // Move element 7vw on the y-axis
      ease: 'power3.out', // Use power3.out easing function
      onComplete: () => masterTl.play() // Play master timeline on complete
    },
    '-=1' // Use relative position '-=1' to start 1 second earlier
  )
  .to('.box', {
    duration: 1,
    height: '7vw', // Increase height to 7vw
    ease: 'elastic.out' // Use elastic.out easing function
  })
  .to('.box', {
    duration: 2,
    autoAlpha: 0.5, // Set opacity to 0.5
    yoyo: true, // Use yoyo effect
    repeat: -1, // Repeat indefinitely
    ease: "rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})" // Use rough easing function
  });
```

- This code creates a GSAP timeline for animating a box element with the class `.box`.
- The first animation increases the width of the box to `25vw` (25% of the viewport width) over a duration of 1 second, with a delay of 0.5 seconds and using the `power4.inOut` easing function.
- The second animation moves an element with the class `.hi` by `7vw` on the y-axis over a duration of 1 second, using the `power3.out` easing function. This animation starts 1 second earlier than the first animation (`'-=1'`), and upon completion, it plays the `masterTl` timeline.
- The third animation increases the height of the box to `7vw` over a duration of 1 second, using the `elastic.out` easing function.
- The fourth animation sets the opacity of the box to 0.5, uses a `yoyo` effect (animates back and forth), repeats indefinitely, and applies a custom `rough` easing function with various parameters.

##### Text Animation

```javascript
gsap.to('.hi', {
  duration: 2,
  color: 'white', // Change text color to white
  backgroundColor: 'mediumspringgreen', // Change background color to mediumspringgreen
  yoyo: true, // Use yoyo effect
  repeat: -1, // Repeat indefinitely
  ease: 'power1.inOut' // Use power1.inOut easing function
});
```

- This code creates a GSAP animation that targets an element with the class `.hi`.
- The animation changes the text color to white and the background color to `mediumspringgreen` over a duration of 2 seconds.
- The `yoyo` property is set to `true`, which means the animation will reverse its direction after completion, creating a back-and-forth effect.
- The animation repeats indefinitely using `repeat: -1`.
- The `ease` property specifies the `power1.inOut` easing function for the animation.

This code snippet demonstrates the use of GSAP for creating animations with various effects, easing functions, and timing controls. It combines a blinking cursor animation, a box animation with width and height changes, opacity adjustments, and a custom `rough` easing function, as well as a text animation with color and background color changes.

#### Revealing and Unrevealing Text with Multiple Instances

This code is designed to reveal and unreveal text for multiple instances of text elements on a web page. It uses JavaScript and the GSAP (GreenSock Animation Platform) library for animation effects.

##### Code Structure

The code is structured as follows:

1. **Variable Declarations**

```javascript
let allWords = [];
let currentWordIndices = [];
let currentCharIndices = [];
let isRevealing = true;
```

- `allWords`: An array that stores an array of words for each text element.
- `currentWordIndices`: An array that keeps track of the current word index for each text element.
- `currentCharIndices`: An array that keeps track of the current character index for each text element.
- `isRevealing`: A flag that determines whether the text is being revealed or unrevealed.

2. **Update Words Function**

```javascript
function updateWords() {
  // Get all '.text' elements and iterate over them
  const textElements = document.querySelectorAll('.text');
  allWords = [];
  currentWordIndices = [];
  currentCharIndices = [];

  textElements.forEach((textElement, index) => {
    const textContent = textElement.textContent.trim();
    if (textContent) {
      const words = textContent.split('\n').map(word => word.trim());
      allWords.push(words);
      currentWordIndices.push(0);
      currentCharIndices.push(0);
    }
  });
}
```

This function updates the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays based on the text content of all the `.text` elements on the page. It splits the text content by newline characters (`\n`) and trims any leading or trailing whitespace.

3. **Event Listeners**

```javascript
updateWords();

const textElements = document.querySelectorAll('.text');
textElements.forEach(textElement => {
  textElement.addEventListener('input', updateWords);
});
```

The `updateWords` function is called initially and whenever the text content of any `.text` element changes (through user input or programmatically).

4. **Reveal Text Function**

```javascript
function revealText() {
  const textElements = document.querySelectorAll('.text');
  const cursorElements = document.querySelectorAll('.cursor');

  textElements.forEach((textElement, index) => {
    const currentWord = allWords[index][currentWordIndices[index]];
    const cursor = cursorElements[index];

    if (currentCharIndices[index] <= currentWord.length) {
      textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
      cursor.textContent = '_';
      currentCharIndices[index]++;
    } else {
      textElement.textContent = currentWord;
      cursor.textContent = '';
      isRevealing = false; // Switch to unrevealing mode
    }
  });
}
```

This function reveals the text character by character for each text element. It iterates over all `.text` and `.cursor` elements, and updates their content based on the corresponding indices in the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays. When a word is fully revealed, it switches to the unrevealing mode.

5. **Unreveal Text Function**

```javascript
function unrevealText() {
  const textElements = document.querySelectorAll('.text');
  const cursorElements = document.querySelectorAll('.cursor');

  textElements.forEach((textElement, index) => {
    const currentWord = allWords[index][currentWordIndices[index]];
    const cursor = cursorElements[index];

    if (currentCharIndices[index] >= 0) {
      textElement.textContent = currentWord.slice(0, currentCharIndices[index]);
      cursor.textContent = '_';
      currentCharIndices[index]--;
    } else {
      textElement.textContent = '';
      cursor.textContent = '';
      currentWordIndices[index] = (currentWordIndices[index] + 1) % allWords[index].length;
      currentCharIndices[index] = 0;
      isRevealing = true; // Switch back to revealing mode
    }
  });
}
```

This function unreveals the text character by character for each text element. It iterates over all `.text` and `.cursor` elements, and updates their content based on the corresponding indices in the `allWords`, `currentWordIndices`, and `currentCharIndices` arrays. When a word is fully unrevealed, it moves to the next word and switches back to the revealing mode.

6. **Intervals for Revealing and Unrevealing**

```javascript
setInterval(() => {
  if (isRevealing) {
    textElements.forEach(textElement => {
      TweenMax.to(textElement, 0.1, { opacity: 1, yoyo: true }); // Add yoyo effect to reveal
    });
    revealText();
  }
}, 100); // Update text every 1 second for revealing mode

setInterval(() => {
  if (!isRevealing) {
    textElements.forEach(textElement => {
      TweenMax.to(textElement, 0.2, { opacity: 1, yoyo: true }); // Add yoyo effect to unreveal
    });
    unrevealText();
  }
}, 200); // Update text every 2 seconds for unrevealing mode
```

These two `setInterval` functions control the revealing and unrevealing of text. The first `setInterval` function calls the `revealText` function every 100 milliseconds (10 times per second) when the `isRevealing` flag is true. The second `setInterval` function calls the `unrevealText` function every 200 milliseconds (5 times per second) when the `isRevealing` flag is false.

Each interval also applies a GSAP animation effect (`TweenMax.to`) to the text elements, creating a pulsing effect during the revealing and unrevealing processes.

##### Usage

To use this code, you need to have HTML elements with the `.text` and `.cursor` classes for each instance of text you want to reveal and unreveal. The text content can be separated by newline characters (`\n`) to create multiple words within each instance.

For example:

```html
<div>
  <span class="text"></span>
  <span class="cursor"></span>
</div>

<div>
  <span class="text">Line 1<br>Line 2<br>Line 3</span>
  <span class="cursor"></span>
</div>
```

This code will reveal and unreveal the text in each instance, one character at a time, with a pulsing animation effect.


You're right, my previous explanation didn't include information on how to use this code snippet. Here's an updated version with a "How to Use" section:

### Horizontal Scrolling Animation with GSAP and ScrollTrigger

This code snippet uses the GreenSock Animation Platform (GSAP) and its ScrollTrigger plugin to create a horizontal scrolling animation for elements on the page. The animation is triggered as the user scrolls through the page.

#### Setup

```javascript
gsap.registerPlugin(ScrollTrigger);
const elements = document.querySelectorAll('.horizontal-effect-gsp');
```

- The code starts by registering the ScrollTrigger plugin with GSAP.
- It then selects all elements with the class `.horizontal-effect-gsp` and stores them in the `elements` variable.

#### Animation Loop

```javascript
elements.forEach(element => {
  const content = element.querySelector('.horizontal-content');
  const isReverse = element.classList.contains('reverse');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 100%',
      end: 'bottom 0%',
      scrub: true,
    },
  });

  if (isReverse) {
    tl.fromTo(
      content,
      { x: '0%' },
      { x: '-100%', duration: 3 }
    );
  } else {
    tl.fromTo(
      content,
      { x: '-100%' },
      { x: '0%', duration: 3 }
    );
  }
});
```

- The code loops through each `.horizontal-effect-gsp` element using `forEach`.
- For each element, it selects the `.horizontal-content` child element and stores it in the `content` variable.
- It also checks if the `.horizontal-effect-gsp` element has the `reverse` class and stores the result in the `isReverse` variable.
- A new GSAP timeline (`tl`) is created, and a ScrollTrigger is attached to it.
- The ScrollTrigger is configured to trigger when the top of the `.horizontal-effect-gsp` element is 100% from the top of the viewport (`start: 'top 100%'`), and to end when the bottom of the element is at the bottom of the viewport (`end: 'bottom 0%'`).
- The `scrub` property is set to `true`, which means the animation will be updated continuously as the user scrolls, giving a smooth effect.

#### Animation Direction

```javascript
if (isReverse) {
  tl.fromTo(
    content,
    { x: '0%' },
    { x: '-100%', duration: 3 }
  );
} else {
  tl.fromTo(
    content,
    { x: '-100%' },
    { x: '0%', duration: 3 }
  );
}
```

- The code checks the value of the `isReverse` variable to determine the direction of the animation.
- If `isReverse` is `true`, the animation will move the `.horizontal-content` element from its original position (`x: '0%'`) to the left by 100% of its width (`x: '-100%'`) over a duration of 3 seconds.
- If `isReverse` is `false`, the animation will move the `.horizontal-content` element from the left by 100% of its width (`x: '-100%'`) to its original position (`x: '0%'`) over a duration of 3 seconds.

#### How to Use

To use this code snippet, you need to have the following HTML structure:

```html
<div class="horizontal-effect-gsp">
  <div class="horizontal-content">
    <!-- Your content here -->
  </div>
</div>
```

You can have multiple instances of the `.horizontal-effect-gsp` div, and each one will have its own horizontal scrolling animation.

To reverse the animation direction for a specific instance, add the `reverse` class to the `.horizontal-effect-gsp` div:

```html
<div class="horizontal-effect-gsp reverse">
  <div class="horizontal-content">
    <!-- Your content here -->
  </div>
</div>
```

Make sure to include the GSAP library and the ScrollTrigger plugin in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
```

And don't forget to include the JavaScript code from the code snippet in your project.

With this setup, the horizontal scrolling animation will be triggered as the user scrolls through the page, and the content inside the `.horizontal-content` div will move horizontally across the screen.



## CSS

I decided to create a w-screen class to force the div occupy the most width as possible of the screen (>98vw failed in my case):

1. `:root { --full-vw: 98vw; }` - Define a CSS variable `--full-vw` with a value of `98vw` (98% of the viewport width) at the root level.

2. `.w-screen { width: var(--full-vw); }` - Set the width of elements with the class `.w-screen` to the value of the `--full-vw` variable.

3. `.w-screen { position: relative; }` - Give `.w-screen` elements a `relative` position to enable positioning of child elements.

4. `.w-screen { left: 50%; }` - Shift the `.w-screen` elements horizontally by 50% of their own width.

5. `.w-screen { transform: translateX(-50%); }` - Move the `.w-screen` elements back by 50% of their own width, effectively centering them while maintaining their full width.

In summary, it defines a CSS variable for the full viewport width, applies it to elements with the `.w-screen` class, and uses positioning techniques to ensure they span the entire viewport width while remaining centered.

## Markdown in Django


To render Markdown with LaTeX support in your Django blog, including package installations and configurations:

1. **Install the required packages**:
   - Open your terminal or command prompt and navigate to your Django project's directory.
   - Install the `python-markdown-math` and `markdown` packages by running the following command:
     ```
     pip install python-markdown-math markdown
     ```
     The `python-markdown-math` package provides the `mdx_math` extension for rendering LaTeX equations in Markdown, and the `markdown` package is the core library for parsing and rendering Markdown.

2. **Configure the `render_markdown` filter**:
   - Open the Python file where you have defined your custom template filters (e.g., `filters.py` or `templatetags/my_filters.py`).
   - Import the necessary modules at the top of the file:
     ```python
     from django import template
     from django.template.defaultfilters import stringfilter
     from django.utils.safestring import mark_safe
     import markdown
     ```
   - Define the `render_markdown` filter function:
     ```python
     register = template.Library()

     @register.filter(name='markdown')
     @stringfilter
     def render_markdown(value):
         md = markdown.Markdown(extensions=["fenced_code", "tables", "mdx_math"])
         return mark_safe(md.convert(value))
     ```
     This function creates a `Markdown` instance with the `fenced_code`, `tables`, and `mdx_math` extensions enabled, converts the Markdown content to HTML, and marks the output as safe for rendering in the template.

3. **Load the MathJax library and configure it**:
   - In your Django template file where you want to render the Markdown content with LaTeX support, load the MathJax library and configure it.
   - Add the following code snippet in the `<head>` section of your template:
     ```html
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML-full"></script>
     <script type="text/x-mathjax-config">
         MathJax.Hub.Config({
             tex2jax: {
                 inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],
                 displayMath: [["$$", "$$"], ["\\\\[", "\\\\]"]],
                 processEscapes: true
             },
             config: ["MMLorHTML.js"],
             jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
             extensions: ["MathMenu.js", "MathZoom.js"]
         });
     </script>
     ```
     This code loads the MathJax library from a CDN and configures it to recognize various delimiters for inline and display-style LaTeX equations.
     
     **Explanation of the configuration code:**
     - `tex2jax.inlineMath`: Specifies the delimiters for inline math expressions. In this case, it recognizes `$...$` and `\(...\)` as inline math delimiters.
     - `tex2jax.displayMath`: Specifies the delimiters for display-style math expressions. In this case, it recognizes `$$...$$` and `\[...\]` as display-style math delimiters.
     - `tex2jax.processEscapes`: Ensures that MathJax processes escape sequences correctly.
     - `config: ["MMLorHTML.js"]`: Configures MathJax to use the `MMLorHTML.js` configuration file, which determines how math is rendered.
     - `jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"]`: Specifies the input and output processors for MathJax. `input/TeX` is used for parsing TeX input, `output/HTML-CSS` is for rendering math in HTML with CSS, and `output/NativeMML` is for rendering math in the browser's native MathML format.
     - `extensions: ["MathMenu.js", "MathZoom.js"]`: Enables the MathMenu and MathZoom extensions, which provide additional functionality like right-click context menus and zooming capabilities for math expressions.

4. **Use the `render_markdown` filter in your template**:
   - In the appropriate place in your Django template where you want to render the Markdown content, use the `render_markdown` filter:
     ```html
     {% load my_filters %}
     <!-- ... -->
     {{ markdown_content|render_markdown }}
     <!-- ... -->
     ```
     Make sure to replace `my_filters` with the actual name of the Python module where you defined the `render_markdown` filter.

5. **Restart the Django development server**:
   - After making the changes, restart your Django development server to ensure the new configurations take effect.

With these steps, you should be able to render Markdown content with LaTeX support in your Django blog. You can write your blog posts using Markdown syntax, including LaTeX equations delimited by `$...$` for inline math and `$$...$$` for display-style math.

Note: Make sure to replace the `markdown_content` variable in the template with the actual variable or context data containing your Markdown content.

## Accessing to the Django project from the cellphone

To access your Django project from your phone, you need to follow these steps:

1. **Find your computer's IP address on the local network**:
   - On Windows:
     - Open the command prompt by pressing the Windows key + R and typing `cmd`.
     - In the command prompt, type `ipconfig` and press Enter.
     - Look for the "IPv4 Address" under the network adapter that's connected to your local network (e.g., Wi-Fi or Ethernet).
   - On macOS or Linux:
     - Open the terminal.
     - Type `ifconfig` (for macOS) or `ip addr` (for Linux) and press Enter.
     - Look for the "inet" or "inet addr" value under the network interface that's connected to your local network (e.g., en0 for Wi-Fi, eth0 for Ethernet).

2. **Configure Django's `ALLOWED_HOSTS` setting**:
   - In your Django project's `settings.py` file, locate the `ALLOWED_HOSTS` setting.
   - Set `ALLOWED_HOSTS` to `['*']` to allow any host to access your development server:
     ```python
     ALLOWED_HOSTS = ['*']
     ```
   - Make sure to set `SECURE_SSL_REDIRECT` to `False` to prevent Django from redirecting HTTP requests to HTTPS:
     ```python
     SECURE_SSL_REDIRECT = False
     ```

3. **Run the Django development server**:
   - Open your terminal or command prompt and navigate to your Django project's directory.
   - Run the Django development server with the following command:
     ```
     python manage.py runserver 0.0.0.0:8000
     ```
     The `0.0.0.0` part tells Django to listen on all available IP addresses, allowing access from other devices on the local network.

4. **Access the Django project from your phone**:
   - On your phone, open a web browser.
   - In the browser's address bar, enter the following URL, replacing `<your_computer_ip>` with the IP address you found in step 1:
     ```
     http://<your_computer_ip>:8000
     ```
   - For example, if your computer's IP address is `192.168.1.100`, you would enter `http://192.168.1.100:8000` in your phone's web browser.

5. **Test the connection**:
   - After entering the URL in your phone's web browser, you should see your Django project's homepage or the default Django welcome page.
   - If you don't see the webpage, double-check the URL and make sure your computer and phone are connected to the same local network.

A few important notes:

- The `ALLOWED_HOSTS = ['*']` setting is only suitable for development environments. In production, you should specify the actual host/domain names allowed to access your Django application.
- The Django development server is not recommended for production use. When you're ready to deploy your project, you'll need to set up a production-ready web server (e.g., Nginx, Apache) and configure it to serve your Django application.
- If you encounter any issues with accessing your Django project from your phone, make sure that your computer's firewall is not blocking incoming connections on port 8000 (or the port you're using for the development server).

By following these steps, you should be able to access your Django project from your phone on the same local network as your computer. Let me know if you have any further questions or encounter any issues during the process.


## Migrating from sqlite to Postgresql



1. **Install psycopg2-binary**:
   - Use pip to install the psycopg2-binary package:

     ```bash
     pip install psycopg2-binary
     ```

2. **Configure PostgreSQL**:
   - Change the local user `peer` authentication to `md5` in the `postgresql.conf` file the local user to access `psql`. You can access from the terminal:

     ```bash
     sudo nano /etc/postgresql/16/main/postgresql.conf
     ```

    and modify it.

3. **Create PostgreSQL User and Database**:
   - Access `psql` as the `postgres` user:

     ```bash
     sudo -u postgres psql
     ```

   - Create a `blog` user with a password and the ability to create databases:

     ```sql
     CREATE USER blog WITH PASSWORD 'password';
     ```

   - Create a database named `blog_content` owned by the `blog` user with UTF-8 encoding:

     ```sql
     CREATE DATABASE blog_content WITH OWNER blog ENCODING 'UTF8';
     ```

4. **Update Django Settings and Migrate Django Models**:
   - Update the `DATABASES` setting in your `settings.py` file to connect to the PostgreSQL database:

     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'blog_content',
             'USER': 'blog',
             'PASSWORD': 'password',
         }
     }
     ```

   - Use Django's `migrate` command to create the necessary tables in the PostgreSQL database:

     ```bash
     python manage.py migrate
     ```

5. **Export and Import Data**:
   - Export your data from the SQLite database to a JSON file:

     ```bash
     python3 -Xutf8 manage.py dumpdata --indent=2 --output=mysite_data.json
     ```

   - Load the JSON data into the PostgreSQL database:

     ```bash
     python3 manage.py loaddata mysite_data.json
     ```

6. **Restart PostgreSQL**:
   - Restart the PostgreSQL service to apply the configuration changes:

     ```bash
     sudo systemctl restart postgresql
     ```

These steps should help you migrate your Django project from SQLite to PostgreSQL with the correct configurations and commands.

In case there is a `OperationalError`:

```Bash
django.db.utils.OperationalError: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: No such file or directory
```

Add the new user "blog" into the pg_hba.conf in with md5.

```Bash
local     all     blog      md5
```

**NOTE**: When you're connecting as blog/postgres@root, the postgres user likely has sufficient permissions to access the public schema and the blog_post table, even though the database belongs to the blog user.

However, when you're connecting as blog/blog@root, the blog user may not have the necessary permissions to access the public schema and the blog_post table.

If you want to grant additional permissions, such as INSERT, UPDATE, or DELETE, you can modify the GRANT statement accordingly:

```Bash
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO blog;
```


## Docker


### Activating Docker with Superuser Permissions

1. **Check if your user is already in the `docker` group**:

   ```
   groups $USER
   ```

   If the output includes the `docker` group, proceed to the next step. Otherwise, continue with the remaining steps.

2. **Add your user to the `docker` group**:

   ```
   sudo usermod -aG docker $USER
   ```

   You'll be prompted for your user password. Enter it and press Enter.

3. **Restart the Docker service**:

   ```
   sudo systemctl restart docker
   ```

   This will ensure that the Docker service recognizes the updated group membership.

4. **Change the permission of the Docker socket file**:

   ```
   sudo chmod 666 /var/run/docker.sock
   ```

   This will allow your user to access the Docker socket file.

5. **Verify that you can run Docker commands without sudo**:

   ```
   docker ps
   ```

   If you don't see any permission denied errors, congratulations! You've successfully activated Docker with superuser permissions for your user.

6. **Log out and log back in**:

   For the group membership change to take full effect, log out of your user session and log back in.

After following these steps, you should be able to run Docker commands as a non-root user without using `sudo`. Remember to log out and log back in after adding your user to the `docker` group for the changes to take effect.


### Setting Up Docker Desktop on Ubuntu

To instal and configuring Docker Desktop and ensuring a smooth and efficient workflow for all the containerized applications.

#### Step 1: Enable Virtualization
  We need to make sure that virtualization is enabled on our system. This is a crucial step, as Docker relies heavily on virtualization technology to create and manage containers. Open your system's BIOS or UEFI settings and enable the virtualization feature. The process may vary depending on your hardware, so consult your manufacturer's documentation if you're unsure.

#### Step 2: Verify GNOME Installation
  Docker Desktop requires a graphical user interface (GUI) to function properly. On Ubuntu, the GNOME desktop environment is typically installed by default. However, if you're using a minimal or server-based installation, you'll need to install the `gnome-terminal` package manually. 

  ```Bash
  sudo apt install gnome-terminal
  ```

#### Step 3: Update Your System
  Before proceeding with the Docker Desktop installation, it's always a good practice to ensure that your system is up-to-date with the latest package information. Run the following command to update the package index:

  ```Bash
  sudo apt-get update
  ```

#### Step 4: Download and Install Docker Desktop
  Once you've downloaded the desired package (e.g., `docker-desktop-<version>-<arch>.deb`) install Docker Desktop:

  ```Bash
  sudo apt-get install ./docker-desktop-<version>-<arch>.deb
  ```

#### Step 5: Start Docker Desktop
  After a successful installation, it's time to start and enable the Docker Desktop service. 

  ```Bash
  systemctl --user start docker-desktop
  systemctl --user enable docker-desktop
  ```


#### Step 7: Generate a GPG Key and Initialize Password Store 
  If you plan on using Docker's secure content trust features, such as signed images and repositories, you'll need to generate a GPG key and initialize the password store. 

  ```Bash
  gpg --generate-key
  pass init
  ```


### Deploying a Docker container: sqlite3 DB

#### Step 1: Export the data to a JSON file using `loaddata`
  Django provides a built-in management command called `loaddata` that allows you to export your database data into a JSON file. This command will create a `data.json` file containing all the data from your Django project's database.

  ```
  python manage.py dumpdata > data.json
  ```



### Step 2: Check the Python version and construct the Dockerfile
  Before you start building your Docker image, you need to decide which Python version you want to use. In this case, you mentioned using the Alpine Linux distribution, which is a lightweight and secure distribution well-suited for containerized applications.

  Create a `Dockerfile` with instructions to build your Django application image. Here's an example of what your `Dockerfile` might look like:

  ```dockerfile
  FROM alpine:3.18

  # prevent Python from writing .pyc files
  ENV PYTHONDONTWRITEBYTECODE=1

  # ensure Python output is sent directly to the terminal without buffering, allowing for immediate display of output
  ENV PYTHONBUFFERED=1

  # project working directory
  WORKDIR /app

  # --------------------------------------- #
  # REQUIREMENTS INSTALLATION AND ACTIVATION #

  RUN apk update && apk add --no-cache py3-pip
  RUN pip install --upgrade pip
  COPY pipRequirements.txt /app/requirements.txt
  RUN pip install -r requirements.txt

  # --------------------------------------- #


  # --------------------------------------- #
  # STORAGING ENTRYPOINT & PERMISSIONS #

  COPY entrypoint.sh /app/entrypoint.sh
  RUN sed -i 's/\r$//g' /app/entrypoint.sh
  RUN chmod +x /app/entrypoint.sh

  # --------------------------------------- #

  # --------------------------------------- #
  # STORAGING THE PROJECT #

  COPY . /app/

  # --------------------------------------- #


  ENTRYPOINT [ "/usr/src/website/entrypoint.sh" ]
  ```


### Step 3: Create the docker-compose file
Create a `docker-compose.yml` file to define our Django application service and any other services it depends on (e.g., a database service).


```yaml
services:
  web:
    container_name: djangoWebsite
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    env_file:
      - .env.dev

```


### Step 4: Create an entry point script
  As mentioned in the `Dockerfile`, we'll create an `entrypoint.sh` script that will run when the container starts. This script can be used to perform any necessary setup tasks, such as applying database migrations or collecting static files.

  ```bash
  #!/bin/sh

  # different python commands needed such as migrations
  python manage.py migrate

  exec "$@"
  ```

  **NOTE**: Don't forget to make the script executable with `chmod +x entrypoint.sh`.

### Step 5: Configure the `settings.py` file
  You need to configure your Django project's `settings.py` file to load environment variables from the `.env.dev` file we'll create in the next step. Here's how you can do it:

  1. Import the `os` package at the top of your `settings.py` file:

  ```python
  import os
  ```

  2. Load the `SECRET_KEY`, `DEBUG`, and `ALLOWED_HOSTS` values from environment variables:

  ```python
  SECRET_KEY = os.environ.get('SECRET_KEY')
  DEBUG = os.environ.get('DEBUG', 'False') == 'True'
  ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

  DATABASES = {
    'default': {
        'ENGINE': os.environ.get("SQL_ENGINE"),
        'NAME': os.environ.get("SQL_DATABASE"),
      }
  }
  ```

  We're using the `os.environ.get()` function to retrieve the values of `SECRET_KEY`, `DEBUG`, and `ALLOWED_HOSTS` from the environment. 

  Regarding the question about using a virtual environment inside a container, it's generally not necessary. As the container provides isolation, you can install packages system-wide without worrying about conflicts. However, if you're using a multi-stage build, you may want to consider using a virtual environment in one of the stages to avoid building wheel files.

### Step 6: Create the `.env.dev` file
  Create a `.env.dev` file to store the environment variables for our Django application in the development environment.

  ```
  SECRET_KEY=your_secret_key_here
  DEBUG=True
  ALLOWED_HOSTS=localhost,127.0.0.1
  SQL_ENGINE=django.db.backends.sqlite3
  SQL_DATABASE=/app/db.sqlite3
  ```

  Replace `your_secret_key_here` with a secure secret key for your Django application. Set `DEBUG` to `True` for the development environment, and update `ALLOWED_HOSTS` with the appropriate host values for your development setup.

### Step 7: Execute the container
  With all the necessary files in place, you can now execute your containerized Django application using Docker Compose. Open a terminal, navigate to the directory containing your `docker-compose.yml` file, and run the following command:

  ```Bash
  docker compose build
  docker compose up -d
```

You can check for errors in the logs as follows:

```Bash
docker compose logs -f
```

This command will build the Docker images (if they haven't been built already), start the containers, and display the logs in the terminal. You should see the Django development server start and be ready to accept incoming requests.



### Deploying a Docker container: postgresql DB


### Step 1: Install PostgreSQL properly
  Before we can use PostgreSQL in our Docker setup, we need to install it on our local machine. 

### Step 1.1: Eenable PostgreSQL-specific features
  Before you can use PostgreSQL with your Django project, you need to install the PostgreSQL database adapter and enable the PostgreSQL-specific features provided by Django. 

  1. Install the `psycopg2` package by adding it to your project's requirements file (e.g., `requirements.txt`):

  ```
  psycopg2==2.9.x
  ```

  2. In your Django project's `settings.py` file, add `django.contrib.postgres` to the `INSTALLED_APPS` list:

  ```python
  INSTALLED_APPS = [
      # ... other installed apps ...
      'django.contrib.postgres',
  ]
  ```

  The `django.contrib.postgres` package provides PostgreSQL-specific model fields, database functions, and other utilities that can enhance your Django project's integration with PostgreSQL.


### Step 2: Use the existing Dockerfile
  Since you mentioned that the Dockerfile is already set up from the previous deployment with SQLite3, we can reuse it as is. No changes are required in the Dockerfile.

### Step 3: Add the database to the `docker-compose.yml` and set environment variables
  In the `docker-compose.yml` file, we need to add a new service for the PostgreSQL database and configure environment variables for the Django application to connect to the database.

  ```yaml
  services:
    web:
      # ... (existing configuration)
      env_file:
        - .env.dev
      depends_on:
        - db

    db:
      image: postgres:13
      volumes:
        - postgres_data:/var/lib/postgresql/data/
      environment:
        - POSTGRES_DB=myproject
        - POSTGRES_USER=myprojectuser
        - POSTGRES_PASSWORD=myprojectsecret

  volumes:
    postgres_data:
  ```


### Step 4: Update the variables in the `.env.dev` file
  In the `.env.dev` file, we need to add the necessary environment variables for the Django application to connect to the PostgreSQL database. 

  ```
  DEBUG=True
  ALLOWED_HOSTS=localhost,127.0.0.1

  SQL_DATABASE=myproject
  SQL_USER=myprojectuser
  SQL_PASSWORD=myprojectsecret
  SQL_HOST=db
  SQL_PORT=5432
  DATABASE=postgres
  ```


### Step 5: Set up the `settings.py` file for connecting to PostgreSQL
  In the Django project's `settings.py` file, we need to configure the database connection settings to use PostgreSQL instead of SQLite3. Here's an example:

  ```python
  import os

  # ... (other settings)

  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': os.environ.get('SQL_DATABASE'),
          'USER': os.environ.get('SQL_USER'),
          'PASSWORD': os.environ.get('SQL_PASSWORD'),
          'HOST': os.environ.get('SQL_HOST'),
          'PORT': os.environ.get('SQL_PORT'),
      }
  }
  ```


### Step 6: Update the `entrypoint.sh` script
  We need to update the `entrypoint.sh` script to wait for the PostgreSQL database to become available before applying the migrations and running the Django development server. Here's an example:

  ```bash
  #!/bin/sh

  # Wait for PostgreSQL to become available
  if [ "$DATABASE" = "postgres" ]; then
    echo "Waiting for PostgreSQL..."
    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 1
    done
    echo "PostgreSQL started"
  fi

  # Apply database migrations
  python manage.py migrate

  # Load initial data
  python manage.py loaddata data.json

  # Collect static files
  python manage.py collectstatic --no-input

  # Start the Django development server
  python manage.py runserver 0.0.0.0:8000
  ```


### Step 7: Execute the container

  ```
  docker build
  docker-compose up
  ```








### Directly Connecting Django to PostgreSQL Container

#### Failed Attempt: 

One of the common mistakes when trying to connect a Django application to a PostgreSQL database running in a separate Docker container is to directly use the container name as the host in the Django `settings.py` file. For example:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_database_name',
        'USER': 'postgres',
        'PASSWORD': 'your_secure_password',
        'HOST': 'db',  
        'PORT': '5432',
    }
}
```

In this configuration, the `HOST` parameter is set to `'db'`, which is the name of the PostgreSQL service in the `docker-compose.yml` file.


```Bash
services:
  app:
    build: 
      context: .
    volumes:
      - .:/app
    ports:
      - '8000:8000'
    command: python manage.py runserver 0.0.0.0:8000
    depends_on:
      - db

  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment: 
      - POSTGRES_USER=blog
      - POSTGRES_DB=blog 
      - POSTGRES_PASSWORD=sky
    
volumes:
  postgres_data:
```

While this approach might seem intuitive, it fails because Docker containers, by default, run in isolated virtual networks. Each container has its own IP address within the Docker network, and container names are only resolved within the same network.

When the Django application tries to connect to the `'db'` host, it fails because the Django container cannot resolve the `'db'` hostname to the PostgreSQL container's IP address. This is because the Django and PostgreSQL containers are running in different, isolated networks.


#### Final Attempt: Solution

The solution to this problem is to leverage environment variables and configure the database settings in the Django `settings.py` file accordingly. This approach works because it separates the configuration from the codebase and allows the Django application to connect to the PostgreSQL database regardless of the network configuration.

Here's the updated `settings.py` file:

```python
import os

DATABASES = {
    "default": {
        "ENGINE": os.environ.get("SQL_ENGINE"),
        "NAME": os.environ.get("SQL_DATABASE"),
        "USER": os.environ.get("SQL_USER"),
        "PASSWORD": os.environ.get("SQL_PASSWORD"),
        "HOST": os.environ.get("SQL_HOST"),
        "PORT": os.environ.get("SQL_PORT"),
    }
}
```

In this updated configuration, instead of hardcoding the database settings, we're using environment variables to store these values. The `os.environ.get` function retrieves the corresponding value from the environment variables. This separation of configuration from the codebase makes it easier to manage and change the settings without modifying the Django `settings.py` file directly.

Here's the updated `docker-compose.yml` file:

```yaml
services:
  app:
    build:
      context: .
    volumes:
      - .:/app
    ports:
      - '8000:8000'
    command: python manage.py runserver 0.0.0.0:8000
    depends_on:
      - db
    env_file:
      - ./.env.dev
```

In the `docker-compose.yml` file, we're using an `env_file` directive to load the environment variables from a `.env.dev` file for the Django (`app`) service. This allows us to have different configurations for different environments (e.g., development, staging, production) by using separate environment files.

Here's the content of the `.env.dev` file:

```
DEBUG=1
SECRET_KEY=password
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=name
SQL_USER=user
SQL_PASSWORD=db_password
SQL_HOST=database
SQL_PORT=5432
```

In the `.env.dev` file, we're setting the necessary environment variables for Django (`DEBUG`, `SECRET_KEY`, `DJANGO_ALLOWED_HOSTS`) and the database connection settings (`SQL_ENGINE`, `SQL_DATABASE`, `SQL_USER`, `SQL_PASSWORD`, `SQL_HOST`, `SQL_PORT`). Storing sensitive information, such as database passwords, in environment variables is generally considered more secure than hardcoding them in the codebase or configuration files.

By using environment variables and loading them into the Django and PostgreSQL containers, we can establish a successful connection between the two containers, even when they are running in separate, isolated Docker networks. The `SQL_HOST` environment variable is set to `db`, which is the name of the PostgreSQL service in the `docker-compose.yml` file. Since both containers are running in the same Docker network, the Django container can resolve the `db` hostname to the PostgreSQL container's IP address.

This solution works because it separates the configuration from the codebase, allows for environment-specific configurations, and enables the Django application to connect to the PostgreSQL database regardless of the network configuration, as long as the `SQL_HOST` value is set correctly.


**Note**: In addition to configuring the database settings, we also need to configure other Django-specific settings like `ALLOWED_HOSTS`, `SECRET_KEY`, and `DEBUG` using environment variables. This is demonstrated in the updated settings.py file, where these settings are retrieved from the environment using the `os.getenv` and `os.environ.get` functions.

By separating the configuration from the codebase and leveraging environment variables, we can manage and maintain the settings for both the Django application and the database connection in a more flexible and secure manner.


Yes, it would be beneficial to include details about the Dockerfile in the blog post, as it is an essential component of the Docker setup for the Django application.

You could add a new section titled "Building the Docker Image" or something similar, where you explain the purpose of the Dockerfile and provide the contents of your Dockerfile along with explanations for each step.

Here's an example of how you could structure this section:

### Building the Docker Image

To run the Django application inside a Docker container, we need to build a Docker image based on a set of instructions provided in a Dockerfile. The Dockerfile specifies the base image, dependencies, and commands required to set up the application environment.

Here's an example of a Dockerfile for a Django application:

```Dockerfile
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy the project requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project code
COPY . .

# Expose the port for the Django development server
EXPOSE 8000

# Set the entry point command
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

Certainly! I'll provide a detailed explanation of each step, along with the necessary code and configurations, to populate the database with existing data using a JSON file.

### Populating the Database with Existing Data

In some cases, you may need to populate your Django database with existing data, especially when migrating from another environment or setting up a new instance of your application. This can be achieved by using Django's built-in `dumpdata` and `loaddata` commands in conjunction with a JSON file containing the data.

1. **Obtaining a JSON Dump of the Database**

    Before dockerizing your Django project, or if you already have an existing database, you can create a JSON dump of the data using the following command:

    ```
    python3 -Xutf8 manage.py dumpdata --indent=2 --output=data.json
    ```

    This command will export all the data from your Django models into a JSON file named `data.json`. The `--indent=2` option makes the JSON output more readable by adding indentation, and the `-Xutf8` option ensures that non-ASCII characters are handled correctly.

2. **Setting up an Entrypoint Script**

    To ensure that the database is properly initialized and populated with the existing data, we'll create an entrypoint script that will execute the necessary Django management commands. Create a new file named `entrypoint.sh` in your project directory with the following content:

    ```bash
    #!/bin/ash

    python manage.py flush --no-input && \
    python manage.py migrate && \
    python manage.py loaddata data.json

    exec "$@"
    ```

    where this shebang line `#!/bin/ash` specifies that the script should be executed using the `ash` shell, which is a lightweight Bourne shell commonly used in Alpine-based Docker images.


3. **Configuring the Dockerfile**

    To use the entrypoint script in your Docker setup, you'll need to update your Dockerfile. Here's an example Dockerfile that incorporates the entrypoint script:

    ```Dockerfile
    FROM python:3.9-slim

    # Set environment variables

    # Set the working directory
    WORKDIR /app

    # Copy the project requirements

    # Install Python dependencies
    RUN pip install --no-cache-dir -r requirements.txt

    # Copy the project code and entrypoint script
    COPY . .

    # Make the entrypoint script executable
    RUN chmod +x entrypoint.sh


    # Set the entry point command
    ENTRYPOINT ["/app/entrypoint.sh"]
    ```

    We set the entry point command to execute the `entrypoint.sh` script using `ENTRYPOINT ["/app/entrypoint.sh"]`.

With this configuration, when you start the Docker container, the `entrypoint.sh` script will be executed automatically. It will flush the database, apply migrations, load the data from the `data.json` file, and then execute any additional commands you provide (e.g., starting the Django development server).

Make sure to include the `data.json` file in your project directory, so it gets copied into the Docker container along with the rest of your code.


## CONDA

```bash
conda list -e > condaRequirements.txt
pip list --format=freeze > pipRequirements.txt
```


### UTC Error SQLITE3
When I tried to run the project, I got this weird error message: 

```bash
No time zone found with key UTC." It seemed like there was some kind of mix-up with how Django and SQLite were handling time zones, especially in the Docker environment.
```

After a bit of digging around, I found a simple fix. All I had to do was install the tzdata package, which provides the necessary time zone data to SQLite in the Docker environment. Here's the command to install it:

```bash
pip install tzdata
```


Here's a blog-style step-by-step guide on how to recover from a `git reset --hard` operation:

## How to Recover from a `git reset --hard` Operation

We've all been there – you accidentally run `git reset --hard` and suddenly realize that you've lost a significant amount of your commit history. Don't panic! Git provides a way to recover from this situation, and in this blog post, we'll walk through the steps to help you regain your lost commits.

### Step 1: Identify the Commit to Revert the Changes From

The first step is to identify the commit you want to revert to, which should be the last commit before you ran the `git reset --hard` command. You can use the `git reflog` command to view the reference log of your repository, which contains a record of all the commits and operations performed.

```
git reflog
```

This will display a list of all the commits and operations performed in your repository. Look for the commit hash that represents the state of your repository just before you ran `git reset --hard`.

For example, let's say the commit hash you want to revert to is `c3c557f`.

### Step 2: Create a New Branch from the Desired Commit

Once you've identified the commit hash you want to revert to, create a new branch from that commit:

```
git branch restored-branch c3c557f
```

This will create a new branch called `restored-branch` and set it to the state of your repository at the `c3c557f` commit.

### Step 3: Switch to the Restored Branch

Next, switch to the newly created `restored-branch`:

```
git checkout restored-branch
```

You're now working on the `restored-branch`, which contains all the commits up to the point before you ran `git reset --hard`.

### Step 4: (Optional) Push the Restored Branch to GitHub

If you want to check the `restored-branch` on GitHub or any other remote repository, you'll need to push it:

```
git push -u origin restored-branch
```

This command will push the `restored-branch` to your remote repository (in this case, `origin`) and set the upstream branch, so you can simply run `git push` for future updates.

### Step 5: Merge the Restored Commits into the Main Branch

Now that you have the `restored-branch` with all the desired commits, you can merge it into your main branch (or any other branch you want):

```
git checkout main
git merge restored-branch
```

This will merge all the commits from the `restored-branch` into your `main` branch, effectively restoring your lost commit history.

### Step 6: Push the Changes to GitHub

If you're working with a remote repository like GitHub, you'll need to push the updated `main` branch:

```
git push
```

### Step 7: Clean Up (Optional)

After successfully restoring your commits, you can optionally delete the `restored-branch` locally and remotely:

```
git branch -d restored-branch
git push origin --delete restored-branch
```

These commands will delete the `restored-branch` from your local repository and the remote repository (GitHub, in this case), respectively.

And that's it! By following these steps, you've successfully recovered from the `git reset --hard` operation and restored your lost commit history. Remember, it's always a good practice to be cautious when using destructive Git commands and to create backups or use a separate branch when performing potentially risky operations.


## Setting up Sitemaps in your Django Project

  Sitemaps are an essential tool for improving your website's visibility and discoverability on search engines like Google. They provide a structured way to communicate the URLs on your website to search engine crawlers, ensuring that all your content is properly indexed and accessible.



### Step 1: Include Required Apps in `settings.py`

  In the Django project's `settings.py` file and add the following apps to the `INSTALLED_APPS` list:

  ```python
  INSTALLED_APPS = [
      # ...
      'django.contrib.sites',
      'django.contrib.sitemaps',
      # ...
  ]
  ```

  The `django.contrib.sites` app is required for generating fully-qualified URLs, and the `django.contrib.sitemaps` app provides the necessary functionality for creating and serving sitemaps.

### Step 2: Define Sitemaps for Each App

  In your `blog` and `pages` apps, create a new file called `sitemaps.py` to define the sitemap classes for each app.

#### `blog/sitemaps.py`

  ```python
  from django.contrib.sitemaps import Sitemap
  from .models import Post


  class PostSitemap(Sitemap):
      changefreq = 'weekly'
      priority = 0.9
      def items(self):
          return Post.published.all()
      def lastmod(self,obj):
          return obj.updated
  ```

  This sitemap class, `PostSitemap`, generates URLs for all published blog posts in your `blog` app. The `changefreq` and `priority` attributes specify how frequently the URLs are updated and their relative importance, respectively.

#### `pages/sitemaps.py`

  ```python
  from django.contrib.sitemaps import Sitemap
  from django.urls import reverse

  class StaticViewSitemap(Sitemap):
      priority = 0.5
      changefreq = "daily"

      def items(self):
          pages_views = [
              'home_view', 'about',  # Add your pages app views here
          ]
          blog_views = [
              'post_list', 'post_list_by_tag', 'post_detail',  # Add your blog app views here
          ]

          return pages_views + blog_views

      def location(self, item):
          if item in ['post_list', 'post_list_by_tag', 'post_detail']:
              # Handle blog app views that require additional arguments
              if item == 'post_detail':
                  return reverse('blog:post_detail', args=[2023, 4, 12, 'sample-post'])
              elif item == 'post_list_by_tag':
                  return reverse('blog:post_list_by_tag', args=['sample-tag'])
              else:
                  return reverse('blog:post_list')
          else:
              # Handle pages app views and other static views
              return reverse('pages:' + item)
  ```

  The `StaticViewSitemap` class generates URLs for static views in your `pages` app, such as the home page, about page, and contact page. Replace the view names in the `items` method with the actual names of your static views.

### Step 3: Include Sitemaps in Project URLs

  In your Django project's `urls.py` file, import the sitemap classes from the respective apps and include them in the URL patterns:

  ```python
  from django.contrib import admin
  from django.urls import path, include
  from django.contrib.sitemaps import views as sitemap_views

  from blog.sitemaps import PostSitemap
  from pages.sitemaps import StaticViewSitemap

  sitemaps = {
      'post': PostSitemap,
      'static': StaticViewSitemap,
  }

  urlpatterns = [
      # ...
      path('sitemap.xml', sitemap_views.index, {'sitemaps': sitemaps}, name='sitemap'),
      path('sitemap-<section>.xml', sitemap_views.sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
  ]
  ```

  The `sitemap.xml` URL will serve an index of all available sitemaps, while `sitemap-<section>.xml` will serve the individual sitemap for a specific section (e.g., `sitemap-post.xml` or `sitemap-static.xml`).

### Step 4: Apply Migrations

  After making changes to your Django project's models or settings, it's essential to apply any pending database migrations:

  ```
  python manage.py migrate
  ```

  This step ensures that your database schema is up-to-date with the latest changes in your project.

### Step 5: Submit Sitemaps to Search Engines

  Once your sitemaps are set up and accessible, you can submit them to search engines like Google through their respective webmaster tools (e.g., Google Search Console). This will notify the search engines about the existence of your sitemaps and allow them to crawl and index the URLs listed in those sitemaps.

  To submit your sitemaps, follow the instructions provided by the search engine's webmaster tools. In most cases, you'll need to provide the URL of your sitemap index file (`https://your-domain.com/sitemap.xml`) to the search engine.

  By following these steps, you've successfully set up sitemaps for your Django project, including separate sitemaps for your `blog` and `pages` apps. This will improve your website's visibility and discoverability on search engines, helping more users find and access your content.

  Remember to keep your sitemaps up-to-date as you add or modify content on your website. You can automate this process by setting up periodic sitemap regeneration or implementing signals or hooks that update your sitemaps whenever new content is added or modified.




# Debugging DEV

In separate terminals:

```Bash
npm run dev
python manage.py livereload
python3 manage.py runserver
```


## Modifying the Django Settings for Flexible Deployment

  To allow for different starting settings rather than the `settings.py` file, we create a `deployment.py` file and configure it to enable the use of an environment for deploying the Django project. This configuration allows for greater flexibility and customization in the deployment process.

### settings.py Modifications:

  Add the following configuration to `deployment.py`:

  ```python
  import os
  from .settings import *

  SECRET_KEY = os.environ.get("SECRET_KEY")
  DEBUG = bool(os.environ.get("DEBUG", default=0))
  ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", "").split(" ")

  CSRF_TRUSTED_ORIGINS = 'https://' + ALLOWED_HOSTS

  MIDDLEWARE = [
      'django.middleware.security.SecurityMiddleware',
      'whitenoise.middleware.WhiteNoiseMiddleware',
      'django.contrib.sessions.middleware.SessionMiddleware',
      'django.middleware.common.CommonMiddleware',
      'django.middleware.csrf.CsrfViewMiddleware',
      'django.contrib.auth.middleware.AuthenticationMiddleware',
      'django.contrib.messages.middleware.MessageMiddleware',
      'django.middleware.clickjacking.XFrameOptionsMiddleware',
      'livereload.middleware.LiveReloadScript'
  ]

  STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

  DATABASES = {
      "default": {
          "ENGINE": os.environ.get("SQL_ENGINE"),
          "NAME": os.environ.get("SQL_DATABASE"),
        # in case postgresql is active add the following to the .env
          "USER": os.environ.get("SQL_USER"),
          "PASSWORD": os.environ.get("SQL_PASSWORD"),
          "HOST": os.environ.get("SQL_HOST"),
          "PORT": os.environ.get("SQL_PORT"),
      }
  }
  ```

### manage.py and wsgi.py Updates:

  Update `manage.py` and `wsgi.py` to double-check if the deployment is using `settings.py` or `deployment.py`:

  ```python
  settings_module = 'website.deployment' if 'ENV_ACTIVATE' in os.environ else 'website.settings'
  os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)
```

### Environment Configuration:

  For the deployment, use a mixture of two databases (`sqlite3` and `postgres`). Define the `ENV_ACTIVATE` variable in the environment to activate the `.env` deployment. Choose either the `sqlite3` or `postgres` database configuration by uncommenting the relevant lines in the `.env` file and commenting/deleting the lines for the other database.

  ```env
  # for activating .env deployment
  ENV_ACTIVATE
  DEBUG=1
  SECRET_KEY=foo
  DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]

  # SQLite DB
  SQL_ENGINE=django.db.backends.sqlite3
  SQL_DATABASE=/usr/src/website/db.sqlite3

  # Postgres DB
  # SQL_ENGINE=django.db.backends.postgresql
  # SQL_DATABASE=blog
  # SQL_USER=blog
  # SQL_PASSWORD=sky
  # SQL_HOST=db
  # SQL_PORT=5432
  ```

## Django to AWS EC2

### Prerequisites

1. **Linux Requirements**
   - Ensure that Nginx is active and running. If Nginx is not active, it might be because Apache is running and occupying the default HTTP port (80).
   - To stop Apache and start Nginx, follow these steps:

     ```bash
     sudo apachectl stop && sudo /etc/init.d/apache2 stop
     sudo systemctl enable nginx && sudo systemctl restart nginx
     ```

### Deploying to AWS EC2

1. **Create an AWS Account**
   - If you don't have an AWS account, visit the AWS website (https://aws.amazon.com/) and create a new account.


