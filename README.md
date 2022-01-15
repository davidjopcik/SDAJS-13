# Advanced HTML + CSS

## CSS properties


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
