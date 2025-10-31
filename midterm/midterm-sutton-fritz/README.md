# Midterm Project: Personal Portfolio

## Philosophy:

I used to think that computers solve problems, but they just focus our minds on a single task while they ask the question. This inspired me to create a sandbox portfolio where all text can be edited by the user.

## Inspiration:
Moodboard: https://www.cosmos.so/script.js/dynamic-web-midterm

## Wireframes:
https://www.figma.com/site/5tz8Rz8kyMnFmuJMzK0VeJ/v1?node-id=0-1&t=bV8DJHF9Mh9YKtSd-1

## Code Tutorial:

I figured out how to add invisible text fields using the built in `<textarea />` tag. I made this a reusable component and applied it to my name at the top of the page.

### The reusable component:

```jsx
const TypeBox = ({ prop }) => {
  return (
    <div>
      <textarea
        defaultValue={prop}
        className="bg-[#FAF8F1] border-none focus:outline-none focus:ring-0 h-[4rem] w-fit resize-none"
      />
    </div>
  )
}

export default TypeBox
```

### Applying the reusable component:

```jsx
import TypeBox from "./TypeBox"
// imports "TypeBox component"

const defaultName = "Sutton Fritz"
// declares "defaultName"

const Header = () => {
  return (
    <div className=" flex text-wrap justify-between items-center flex-row text-[black] w-[90%] ">
    {/* parent container */}
        <div id="name" className="flex justify-center text-[250%] text-[#BF092F]">
          {/* TypeBox container */}
            <TypeBox prop={defaultName} />
            {/* sets "prop" from TypeBox to "defaultName", which is "Sutton Fritz" */}
        </div>
        <div id="header-div" className="flex text-nowrap justify-center text-[1.5rem] px-[2%]">
            {'</>'}
        </div>
    </div>
  )
}

export default Header
```

## Next Steps:

- Loading animation
- Reload animation
- More pages using `React-Router-DOM`
- Interactivity when text is edited using `useState()` hook
- Adaptable to differnt viewports