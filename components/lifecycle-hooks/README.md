# Angular Lifecycle Hooks

## Lifecycle
The Angular Lifecycle hooks are the methods that angular invokes on directive and components as it creates, changes, and destroys them.

When a new component is created in Angular and when it finds one of the selectors, it will instantiate the new version of that component and added it to the DOM. 

e.g.
```html
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
> [Change detection](https://angular.io/guide/change-detection) is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated. At a highlevel, it walks your components from top to bottom, looking for changes. 

e.g.
```html
<div>Greetings {{name}}</div>
```
Our example above, we are using the property `name` of the component class. Angular will update the DOM everytime the value of this `name` property changes. This is when Angular runs a Change Detection Cycle on every event that may result in a change in DOM i.e. Input change, DOM events, Timer events, HTTP request etc...

During this process Angular raises the lifecycle hooks during the important stages of change detection. 

### Constructor
First method that gets invoked is the class Constructor when Angular creates the component. 

Constructors is neither a lifecycle hook nor it is a specific to Angular. It is a JavaScript feature and it is a method to which gets invoked when a class is created. Angular makes use of contructors to inject dependencies. 

When a constructor is called, none of the components input properties are updated and available to use. Neither its child components are constructed. Projected contents are also not available. 

Once the class is instantiated, it kick starts the first change detection cycle of the component.

### Lifecycle event sequence

#### ngOnChanges
#### 


## Terms to Understand
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








