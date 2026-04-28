- [Skip to main content](https://developer.mozilla.org/en-US/docs/Glossary/MVC#content)
- [Skip to search](https://developer.mozilla.org/en-US/docs/Glossary/MVC#search)

Learn frontend, backend, and AI from our course partner
[Scrimba](https://scrimba.com/learn/frontend?via=mdn)

# MVC

**MVC** (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever).

The three parts of the MVC software-design pattern can be described as follows:

1. Model: Manages data and business logic.
2. View: Handles layout and display.
3. Controller: Routes commands to the model and view parts.

## [Model View Controller example](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#model_view_controller_example)

Imagine a simple shopping list app. All we want is a list of the name, quantity and price of each item we need to buy this week. Below we'll describe how we could implement some of this functionality using MVC.

![Diagram to show the different parts of the mvc architecture.](https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png)

### [The Model](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#the_model)

The model defines what data the app should contain. If the state of this data changes, then the model will usually notify the view (so the display can change as needed) and sometimes the controller (if different logic is needed to control the updated view).

Going back to our shopping list app, the model would specify what data the list items should contain — item, price, etc. — and what list items are already present.

### [The View](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#the_view)

The view defines how the app's data should be displayed.

In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model.

### [The Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#the_controller)

The controller contains logic that updates the model and/or view in response to input from the users of the app.

So for example, our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.

You might however also want to just update the view to display the data in a different format, e.g., change the item order to alphabetical, or lowest to highest price. In this case the controller could handle this directly without needing to update the model.

## [MVC on the web](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#mvc_on_the_web)

As a web developer, this pattern will probably be quite familiar even if you've never consciously used it before. Your data model is probably contained in some kind of database (be it a traditional server-side database like MySQL, or a client-side solution such as [IndexedDB \[en-US\]](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).) Your app's controlling code is probably written in HTML/JavaScript, and your user interface is probably written using HTML/CSS/whatever else you like. This sounds very much like MVC, but MVC makes these components follow a more rigid pattern.

In the early days of the Web, MVC architecture was mostly implemented on the server-side, with the client requesting updates via forms or links, and receiving updated views back to display in the browser. However, these days, more of the logic is pushed to the client with the advent of client-side data stores, and the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) enabling partial page updates as required.

Web frameworks such as [AngularJS](https://en.wikipedia.org/wiki/AngularJS) and [Ember.js](https://en.wikipedia.org/wiki/Ember.js) all implement an MVC architecture, albeit in slightly different ways.

## [See also](https://developer.mozilla.org/en-US/docs/Glossary/MVC\#see_also)

- [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) on Wikipedia

## Help improve MDN

Was this page helpful to you?

YesNo

[Learn how to contribute](https://developer.mozilla.org/en-US/docs/MDN/Community/Getting_started)

This page was last modified on Jul 11, 2025 by [MDN contributors](https://developer.mozilla.org/en-US/docs/Glossary/MVC/contributors.txt).


[View this page on GitHub](https://github.com/mdn/content/blob/main/files/en-us/glossary/mvc/index.md?plain=1 "Folder: en-us/glossary/mvc (Opens in a new tab)") • [Report a problem with this content](https://github.com/mdn/content/issues/new?template=page-report.yml&mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FMVC&metadata=%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EPage+report+details%3C%2Fsummary%3E%0A%0A*+Folder%3A+%60en-us%2Fglossary%2Fmvc%60%0A*+MDN+URL%3A+https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FGlossary%2FMVC%0A*+GitHub+URL%3A+https%3A%2F%2Fgithub.com%2Fmdn%2Fcontent%2Fblob%2Fmain%2Ffiles%2Fen-us%2Fglossary%2Fmvc%2Findex.md%0A*+Last+commit%3A+https%3A%2F%2Fgithub.com%2Fmdn%2Fcontent%2Fcommit%2F2547f622337d6cbf8c3794776b17ed377d6aad57%0A*+Document+last+modified%3A+2025-07-11T14%3A45%3A59.000Z%0A%0A%3C%2Fdetails%3E "This will take you to GitHub to file a new issue.")