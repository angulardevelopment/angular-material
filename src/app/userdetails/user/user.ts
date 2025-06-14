import { JsonPipe, NgComponentOutlet, NgOptimizedImage } from '@angular/common';
import { Component, ComponentRef, computed, inject, Injector, input, inputBinding, LOCALE_ID, model, output, outputBinding, resource, Signal, signal, TemplateRef, twoWayBinding, Type, viewChild, ViewContainerRef, createComponent, ResourceStreamItem } from '@angular/core';
import { Dummy } from '../../dummy/dummy';
import { Analytics } from '../../analytics';
import { Demo } from '../../demo';
import { FocusTrap } from '@angular/cdk/a11y';
import { FeatureFlagDirective } from '../feature-flag-directive';
import { HttpClient, httpResource } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, NgComponentOutlet, FeatureFlagDirective, JsonPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  readonly userId = input.required<string>();
  readonly name = input<string>('John');
  greet(strings: TemplateStringsArray, name: string) {
    return strings[0] + name + strings[1] + '!';
  }
  readonly attacks = [    { magicDamage: 10 },    { physicalDamage: 20 },    
    { magicDamage: 10, physicalDamage: 20 },  { magicDamage: 10, physicalDamage: 20, newDamage: 30 },  ];

  //old way of creating components
    private _cmpRef?: ComponentRef<Dummy>;
 private readonly _container = viewChild('container', { read: ViewContainerRef });
//  createComponent(title: string): void {
//    this.destroyComponent();
//    this._cmpRef = this._container()?.createComponent(MyComponent);
//    this._cmpRef?.setInput('title', title);
//  }
//  destroyComponent(): void { this._container()?.clear(); }

// New way of creating components using NgComponentOutlet
  private readonly _vcr = inject(ViewContainerRef);
 private readonly _injector = inject(Injector);
 protected myComponent: Type<Dummy> | null = null;
 protected readonly myComponentInput = signal({ title: 'Example Title' });
 private readonly _emptyStateTemplate = viewChild<TemplateRef<unknown>>('emptyState');

 readonly contentNodes = computed(() => {
   if (!this._emptyStateTemplate()) return [];
   return [this._vcr.createEmbeddedView(this._emptyStateTemplate()!).rootNodes];
 });
 readonly myInjector = Injector.create({
   providers: [{ provide: Analytics, deps: [] }],
   parent: this._injector,
 });

 createComponent(): void { this.myComponent = Dummy; }
 destroyComponent(): void { this.myComponent = null; }
// Assume DynamicComponent and MyService are defined elsewhere


//  readonly canClose = input.required<boolean>();
//  readonly isExpanded = model<boolean>();
 readonly close = output<boolean>();

readonly vcr = viewChild.required('container', { read: ViewContainerRef });
 readonly canClose = signal(true);
 readonly isExpanded = signal(true);
 createWarningComponent(): void {
   this.vcr().createComponent(Dummy, {
     bindings: [
       inputBinding('canClose', this.canClose),
       twoWayBinding('isExpanded', this.isExpanded),
       outputBinding<boolean>('close', (isConfirmed) => console.log(isConfirmed))
     ],
     directives: [
       FocusTrap, // Assume FocusTrap is a defined directive
       {
         type: Demo, // Assume ThemeDirective is defined
         bindings: [inputBinding('theme', () => 'warning')]
       }
     ]
   });
 }

 comp(){
 const injector = Injector.create({
 providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
});
// New API in Angular 20
injector.destroy();
 }

  hasPermission = input(true);
 task = input<Task|undefined>(undefined); // Assume Task type is defined
  todoId = signal(1);
 readonly property = input('123'); 
 todoResource = resource({
    loader: () => {
      // return Promise.resolve({ id: 1, title: "Hello World", completed: false });
        //  return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        // .then((res) => res.json() as Promise<Todo[]>);
             return fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId()}`
      ).then((res) => res.json() as Promise<Todo>);
    },
  });
  updateTodo() {
    this.todoResource.value.update((value) => {
      if (!value) return undefined;
      
      return { ...value, title: "updated" };
    });
  }
 res(){
//   const userId: Signal<string> = getUserId();
// const userResource = resource({
//   params: () => ({id: userId()}),
//   loader: ({request, abortSignal}): Promise<User> => {
//     // fetch cancels any outstanding HTTP requests when the given `AbortSignal`
//     // indicates that the request has been aborted.
//     return fetch(`users/${request.id}`, {signal: abortSignal});
//   },
// });
 }
  products = httpResource<any[]>(() => `https://jsonplaceholder.typicode.com/todos/${this.todoId()}`);

  dataStream = resource({
    stream: () => {
      return new Promise<Signal<ResourceStreamItem<string[]>>>((resolve) => {
        const resourceResult = signal<{ value: string[] }>({
          value: [],
        });

        // this.socket.onmessage = event => {
        //   resourceResult.update(current => ({
        //      value: [...current.value, event.data]
        //   });
        // };

        resolve(resourceResult);
      });
    },
  });

  

  // userId = signal(1);
  // userResource = httpResource<User>(() => 
  //   `https://example.com/v1/users/${this.userId()}`
  // });


// const canClose = signal(false);
// const title = signal('My dialog title');

// // Create MyDialog
// createComponent(MyDialog, {
//   bindings: [
//     // Bind a signal to the `canClose` input.
//     inputBinding('canClose', canClose),

//     // Listen for the `onClose` event specifically on the dialog.
//     outputBinding<Result>('onClose', result => console.log(result)),
   
//     // Creates two way binding with the title property
//     twoWayBinding('title', title),
//   ],
//   directives: [
//     // Apply the `FocusTrap` directive to `MyDialog` without any bindings.
//     FocusTrap,

//     // Apply the `HasColor` directive to `MyDialog` and bind the `red` value to its `color` input.
//     // The callback to `inputBinding` is invoked on each change detection.
//     {
//       type: HasColor,
//       bindings: [inputBinding('color', () => 'red')]
//     }
//   ]
// });

colWidth;

//  users = getUsers();

  trackFn() {
    // ... body
  }

    isNewFeatureEnabled = signal(true);

  toggleFeature() {
    // Update the signal's value, which will automatically trigger the
    // directive's setter to re-evaluate the condition.
    this.isNewFeatureEnabled.update(enabled => !enabled);
  }
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const task: Task = {
  id: 1,
  title: 'Learn Angular',
  completed: false
};


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}