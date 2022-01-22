# Advanced HTML + CSS

## Git
- Repository
  - Local repository (files on disk)
    - contains .git folder
    - `git clone https://github.com/zarybnicky/SDAPython-7.git` => local clone of the repo
  - Remote repository (GitHub, GitLab)
    - Main Repo:
      - zarybnicky/SDAPython-7 = writable only by owner (zarybnicky)
    - Fork = copy of the main repo:
      - davidjopcik/SDAPython-7 = writable only by owner (davidjopcik)

- "Remote" (`git remote -v`) = reference to a remote repository by URL
  - "origin" - where was this repo cloned from
  - "upstream" - where was "origin" forked from

- `git commit` = creates a commit
- `git status` = prints out the state of the local repositorz
- `git log --oneline --graph --all` = prints out the commit graph

- `git push upstream` = upload local commits to a remote repo
- `git fetch --all` = download commits from a remote repo
- `git pull --rebase [origin]` = fetch + rebase
- `git pull --rebase upstream` = fetch + rebase

- "Pull Request" (PR)
    - = "git push" between remote repos
    - needs confirmation by owner or remote repo

- stash = temporary storage of uncommitted changes
    - `git stash` = save changes and hide them
    - `git stash pop` = apply saved changes
    - `git stash && git pull --rebase upstream && git stash pop`

## CSS selectors

### Search by attributes
```css
/* <input  name="password"  /> */
.card input[name='password'] { }

/* <button type="submit"> ... </button> */
button[type="submit"] { }
```

## CSS

### BEM
Block, Element, Modifier = CSS naming convention

- .loading-button = Block
- .loading-button__text = Block + Element
- .loading-button--loading = Block + Modifier
- .loading-button__text--hidden = Block + Element + Modifier
- .loading-button__left__text--hidden = Block + Element + Modifier

### Position
- static = default value, "natural placement"
- relative = "natural placement" + offset/padding
- absolute = "no natural placement" + top/left/... = coordinates relative to the parent element or to body

### Float
- "Obtékání textu kolem obrázku"
- float: none/left/right
- Possible to use for layout, but NOT recommended

- requires the use of a "clearfix"

### Sizing: vw, vh
vw = viewport width
vh = viewport height

### Media queries
```css
@media (prefers-color-scheme: dark) {
    /*dark mode*/
}
@media (max-width: 480px) {
  .left-container, .right-container {
    width: 100%;
  }
}
```

### box-shadow
```css
/* box-shadow: blur-radius | spread-radius */
box-shadow: 10px 5px;
/* box-shadow: offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 5px 10px 10px 5px red;
```

### border-radius
```css
/* small, fixed */
border-radius: 5px;

/* circle */
border-radius: 50%;
```

### linear-gradient, radial-gradient
```css
/* start-color, end-color */
background: linear-gradient(#e66465, #9198e5);
/* rotation, start-color, middle-color, end-color */
background: linear-gradient(45deg, blue, violet, red);

/* radial = circular */
background: radial-gradient(red 0, blue, green 100%)
```

### object-fit
```css
object-fit: cover; /* fill (default), contain */
```


### Flexbox for vertical + horizontal centering
```css
display: flex;
align-items: center;
justify-content: center;
```

### transition
Transition = přechod/animace/prolnutí mezi dvěmi stavy

```css
.transition {
    position: absolute;
    top: 0px;
    transition: 1s top;
}
.transition.done {
    top: -5px;
}
.transition:hover {
    top: 5px;
}

#example-element {
    transition: margin-right 2s;
    background-color: #e4f0f5;
    color: #000;
    margin-right: 0;
}
#example-element:hover {
    background-color: #909;
    color: #fff;
    margin-right: 40%;
}
```

### animation
Delší sekvence CSS hodnot

```css
#purple-button {
  animation: 3s purpleify;
}

@keyframes purpleify {
  from {
    background-color: #e4f0f5;
    color: #000;
  }
  to {
    background-color: #909;
    color: #fff;
  }
}

.bubble {
    position: absolute;
    top: 50px;
    right: 50px;
    animation: rotate 3s infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```



### transform

```css
transform: rotate(0.5turn);

transform: scaleX(-1) rotate(0deg);

transform-origin: center;
transform-origin: top left;
```

## JavaScript, DOM

### Arrow function vs Function function
```js
function addOne(i) {
    return i + 1;
}
const addOne = function (i) {
    return i + 1;
}
const addOne = (i) => {
    return i + 1;
};
const addOne = (i) => i + 1;
```

```js
function eventHandler(event) {
    console.log(this);
}
const eventHandler = (event) => {
    console.log(this);
};
```

### Finding a DOM element
```js
const element = document.getElementById("id-without-hash");
const element = document.querySelector(".box > button");
```

### Adding an event listener to an element
```js
element.addEventListener("event-name", function (event) {
    console.log(this);
    console.log(event)
});

// (obsolete)
element.onclick = function () {};
```

### Disabling a button, input, ...
```js
element.disabled = true;
element.disabled = false;

//<button disabled> ... </button>
```

### Working with CSS classes in JS
```js
element.className = "class-one class-two";

element.classList.add("class")
element.classList.remove("class")
element.classList.toggle("class")
```

### Change the text of a button
```js
const originalText = element.innerText;
element.innerText = "Loading...";
// ...
element.innerText = originalText
```