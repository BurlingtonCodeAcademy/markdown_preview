# Markdown Preview

Input some markdown source on the left and see it rendered on the right.

## Wireframes

```
 Markdown Preview!

 Source                        Preview
 _____________                 _____________
| # Hello     |  [>Render>]   | Hello       |
|             |               |             |
|_____________|               |_____________|
```

## Tech

* Browser Native DOM for user events
* HTML forms and CSS layout & styling
* Use a Markdown rendering library
  * We recommend [Marked](https://github.com/chjj/marked)
* Cypress Tests
  * Visit [cypress.io](https://cypress.io) for docs
  * Visit [our lesson on Cypress](/lessons/javascript/cypress) for a tutorial overview

## Setup

* Follow the github classroom link and clone the repo

* Install dependencies: (do this once)

```
cd markdown_preview-yourgithubusername
npm install
```

* Launch the app locally:

```
npm start
```

* Visit <http://localhost:8080/> to see your app running on your own computer
* `npm start` launches a **web server** so everything under the project `/public` directory are a live website running on your own machine

* Launch the Cypress Runner window:
    * open a *different terminal window* and `cd` to your project dir
    * run `npx cypress open` <br><br>

* Run the Cypress tests
    * in the Cypress Runner window, click the "Run All Tests" button, or click on a single test to run it alone

We have provided Cypress tests that run through the first few features. Please make sure to keep running the tests, to ensure later changes don't break earlier features.

---

# Project Stories

## Page Elements

**Given** a running app

**When** the user visits the http://localhost:8080

**Then** the following elements should exist on the page:

* *headline*: an `H1` element containing the text "Markdown Preview"
* *source*: a `textarea` element with the id `source`
* *preview*: a `div` element with the id `preview`
* *render*: a `button` element  with the id `render`

## Render Text

**Given** the user has entered text in the *source* text field

**When** the user clicks the *render* button

**Then** the text is copied into the *preview* area

## Render Markdown

**Given** the user has entered *markdown format* text in the *source* text field

**When** the user clicks the *render* button

**Then** the text is rendered as styled HTML into the *preview* area

> Hint: You can use the `marked` library to convert markdown source into styled HTML. A script within `index.html` loads the package from a remote CDN -- check the [Usage section of Marked's GitHub repo](https://github.com/markedjs/marked) for instructions.

## Automatically Render Markdown

**Given** the user types into the *source* text field

**And** at least one second has elapsed since the user's last keypress

**Then** the *render* function should activate automatically

**And** the text is rendered as styled HTML into the *preview* area

> Hint: You will need to keep track of [how much time has passed](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) using either `window.setTimeout()` or `window.setInterval()`

## Style the Page

Make the app look better by changing the styles in the `style.css` file.

Remember not to change any of the CSS `id`s used by the Cypress tests.

# Bonus

## Bold Button

**Given** the user has selected some text in the *source* panel

**When** the user clicks the "Bold" button

**Then** the selected text is surrounded with double asterisks

**And** the preview text is displayed in boldface

---

## Undo Bold

**Given** the user has selected some text in the *source* panel that begins with double asterisks

**When** the user clicks the "Bold" button

**Then** the selected text is replaced without double asterisks

**And** the preview text is displayed as normal text

> **Hint**: the [TextArea Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) has [many properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement#Properties) -- including `value` (to return the user's text) and `selectionStart` and `selectionEnd` (to show which text the user has selected). It also has a method [`setRangeText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText) which replaces the current selection's text with a string you specify.

---

## Italic Button

**Given** the user has selected some text in the *source* panel

**When** the user clicks the "Italic" button

**Then** the selected text is surrounded with double asterisks

**And** the preview text is displayed in italics

---

## Undo Italic

**Given** the user has selected some text in the *source* panel that begins with double asterisks

**When** the user clicks the "Italic" button

**Then** the selected text is replaced without double asterisks

**And** the preview text is displayed as normal text

---

## Additional Information

* Here's a functioning version of this app (written by [@tanabe](https://twitter.com/tanabe)):
  * <http://markdownlivepreview.com>
* info on the Cypress test suite
  * <http://docs.cypress.io/guides>
  * <http://docs.cypress.io/api>
* how to write event listeners and attach them to DOM elements
  * <https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick>
  * <https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers>
  * <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
  * <https://developer.mozilla.org/en-US/docs/Web/Events/click>
* a Markdown language "cheatsheet":
  * <https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf>
* the Marked JavaScript library
  * <https://marked.js.org/>

---

# Teachers

If you update the `master` branch, please also update the `solution` branch:

    git checkout solution
    git rebase master
    git push --force origin solution
    git checkout master
