import {
  Component,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  signal
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

/**
 * FeatureFlagDirective
 * A custom structural directive to conditionally render content, similar to *ngIf.
 * This is used to implement feature flags in an application.
 *
 * How to use:
 * <div *appFeatureFlag="true">This content will be shown.</div>
 * <div *appFeatureFlag="false">This content will be hidden.</div>
 */
@Directive({
  selector: '[appFeatureFlag]',
  standalone: true, // Make this a standalone directive for easy use
})
export class FeatureFlagDirective {
  private hasView = false;

  constructor(
    // The <ng-template> that this directive is applied to.
    private templateRef: TemplateRef<unknown>,
    // The container where the template will be rendered.
    private viewContainer: ViewContainerRef
  ) {}

  /**
   * This setter is the core of the directive. It runs whenever the value
   * passed to *appFeatureFlag is updated.
   *
   * @param condition The boolean value passed to the directive.
   */
  @Input() set appFeatureFlag(condition: boolean) {
    if (condition && !this.hasView) {
      // If the condition is true and the view hasn't been created yet,
      // create and embed the view into the container.
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      // If the condition is false and the view is currently being shown,
      // clear the container to remove the view.
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}