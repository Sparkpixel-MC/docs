---
title: Frontend Development Tips
tags:
  - frontend
  - javascript
  - css
createTime: 2026/01/01 15:00:00
permalink: /en/blog/wy7phiqv/
---

# Frontend Development Tips

Here are some useful tips and best practices for frontend development.

## JavaScript Tips

### 1. Remove Duplicates from Array

```javascript
// Using Set
const unique = [...new Set(array)];

// Using filter
const unique = array.filter((item, index) => array.indexOf(item) === index);
```

### 2. Object Destructuring

```javascript
// Destructuring assignment
const { name, age } = user;

// Renaming
const { name: userName } = user;

// Default values
const { name = 'Anonymous' } = user;
```

### 3. Optional Chaining

```javascript
const city = user?.address?.city;
```

## CSS Tips

### 1. Center Elements

```css
/* Flexbox */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid */
.center {
  display: grid;
  place-items: center;
}
```

### 2. Text Truncation

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 3. Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
```

## Performance Optimization

### 1. Image Lazy Loading

```html
<img src="placeholder.jpg" data-src="image.jpg" loading="lazy" alt="Image">
```

### 2. Debounce and Throttle

```javascript
// Debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

### 3. Code Splitting

```javascript
// Dynamic import
const module = await import('./module.js');
```

## Recommended Tools

- **Code Editor**: VS Code
- **Version Control**: Git
- **Package Manager**: npm, pnpm, yarn
- **Build Tool**: Vite, Webpack
- **Testing Framework**: Jest, Vitest
- **CSS Framework**: Tailwind CSS, Bootstrap

## Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

## Conclusion

Continuous learning and practice are key to becoming an excellent frontend developer. Hope these tips help with your development work!