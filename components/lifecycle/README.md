# Angular Lifecycle Hooks

## Lifecycle
The Angular Lifecycle hooks are the methods that angular invokes on directive and components as it creates, changes, and destroys them.

When a new component is created in Angular and when it finds one of the selectors, it will instantiate the new version of that component and added it to the DOM. 

e.g.
```HTML
<app-example></app-example>
<app-example></app-example>
```

Our example above uses the selector of `app-example` component. Since we use it twice, Angular will instantiate it twice. Once one component is instantiated Angular goes through a process of creation. Additionally, it gives us a chance to customize the creation and hook into these phases to execute some code. 

When the Angular application starts...
1. First creates and renders the root component. Then it creates and renders its children's and their childern components. Visualize as a tree of components.
2. It start the process of rendering the view. It checks the `@Input()` properties, evaluates the data binding and expressions, render the projected content... Angular also removes the component from the DOM when it is no longer needed. 
3. Angular allows us to tap into these key events as they are happening e.g.
..* `ngOnInit` when Angular initializes the component for the first time
..* When a component's `@Input()` property change, Angular invokes `ngOnChanges`
..* If the component is destroyed, Angular invokes `ngOnDestroy`

### Change Detection Cycle
> <a href="https://angular.io/guide/change-detection" target="_blank">Change detection</a> is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated. At a highlevel, it walks your components from top to bottom, looking for changes. 

e.g.
```HTML
<div>Greetings {{name}}</div>
```
Our example above, we are using the property `name` of the component class. Angular will update the DOM everytime the value of this `name` property changes. This is when Angular runs a Change Detection Cycle on every event that may result in a change in DOM i.e. Input change, DOM events, Timer events, HTTP request etc...

During this process Angular raises the lifecycle hooks during the important stages of change detection. 

---

### Constructor
First method that gets invoked is the class Constructor when Angular creates the component. 

Constructors is neither a lifecycle hook nor it is a specific to Angular. It is a JavaScript feature and it is a method to which gets invoked when a class is created. Angular makes use of contructors to inject dependencies. 

When a constructor is called, none of the components input properties are updated and available to use. Neither its child components are constructed. Projected contents are also not available. 

Once the class is instantiated, it kick starts the first change detection cycle of the component.

---

## Lifecycle event sequence

ngOnChanges
------
- First lifecycle hook to be excuted from the start
- It is called when a new component is created and when one of the `@Input()` properties change

e.g.
Child Component
```TypeScript
@Input() message: string;
```

Parent Component
```HTML
<app-child [message]="Hello"></app-child>
```

Our example above, we have a child component with an `@Input()` property `message`. This property is binded with the message property of the parent component. Whenever the value of this message property will change this `ngOnChanges` lifecycle hook will be executed. 

This is why `ngOnChanges` is the first lifecycle hook because initializing the `@Input()` properties is the first task that Angular carries during the change detection cycle. 

This hook will not be executed if no changes are detected.

ngOnInit
-----
- Angular raises `ngOnInit` after it creates the component and updates its input properties
- This is a perfect place where you want to add any initialzation logic for your component
- Have access to every `@Input()` property of the component
- Don't have access to child components or projected content, i.e. `@ViewChild`, `@ViewChildren`, `@ContentChild`, `@ContentChildren` are not available
- Called **once**

ngDoCheck
-----
- Angular invokes `ngDoCheck` after every change detection cycle
- This hook is invoked even if there is no change in any of the properties
- For example, `ngDoCheck` will run if you click a button on the page, which may not change anything but it's an event
- Use case, implement a custom change detection when Angular fails to detect the changes made to `@Input()` properties

ngAfterContentInit
-----
- This hook is executed after the component's projected content has been fully initialized
- Angular updates the properties decorated with `@ContentChild` and `@ContentChildren` before raising this hook
- This hook is executed even if there are no content to project
- [Projected Content](#terms-to-understand) refers to external content injected from the parent component
- Called **once**

ngAfterContentChecked
-----
- This lifecycle hook is called during every change detection cycle after Angular finishes checking component's projected content
- This hook is called even if there are no projected content in the component
- Similar to `ngAfterContentInit`, but with the difference that it is called after every change detection cycle

ngAfterViewInit
-----
- This hook is called after the component's view and all its child views are fully initialized
- Angular updates the properties decorated with `@ViewChild` and `@ViewChildren` before raising this hook
- The view refers to the view template of the current component and all its child components and directives
- This hook is called during the first change detection cycle, where angular initializes the view for the first time
- At this point, all child components and directives are processed and component is ready
- Called **once**

ngAfterViewChecked
-----
- This hook is called after it checks and updates the component's views and child views
- Similar to `ngAfterViewInit`, but with the difference that it is called after every change detection cycle

ngOnDestroy
------
- This hook is called when the component is removed from the DOM
- This is a great place to cleanup resources, becuase it is called right before the objects will be destroyed, and unsubscribe observables and detach event handlers to avoid memory leaks
- Last lifecycle hook
----

<h2 id="terms-to-understand">Terms to Understand</h2>
1. **Projected content**: Is the HTML content which replaces the `<ng-content>` directive in child component

For example:
Child Component
```HTML
<h2>Child Component</h2>
<ng-content></ng-content>
```

Parent Component
```HTML
<h1>Parent Component</h1>
<app-child>
  <p>This is injected from parent in place of ng-content</p>
</app-child>
```
2. **Input bound properties**: Properties of components class which is decorated with `@Input()` decorator

For example:
```Typescript
@Input() message: string;
```








