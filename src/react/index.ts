import * as React from "react";

type EventHandlerKeys<T> = {
  [K in keyof T]: K extends `on${string}` ? K : never;
}[keyof T];

/**
 * Generic React event handler type.
 * @example
 * ```tsx
 * const handleClick: ReactEventHandler<'button', 'onClick'> = (event) => {
 *  console.log('Button clicked!', event);
 * };
 */
export type ReactEventHandler<
  E extends React.ElementType,
  // @ts-ignore
  K extends EventHandlerKeys<React.ComponentPropsWithoutRef<E>> = "onUnknown"
> = React.ComponentPropsWithoutRef<E>[K];

/* eslint-disable @typescript-eslint/no-shadow */

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;
/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
export type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : {};
/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
export type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any>
  ? I
  : E;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<
    E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
    OwnProps & {
      component?: E;
    }
  >
>;

export interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = {}
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ""
      ? {
          component: keyof JSX.IntrinsicElements;
        }
      : As extends React.ComponentType<infer P>
      ? Merge<
          P,
          OwnProps & {
            component: As | keyof JSX.IntrinsicElements;
          }
        >
      : As extends keyof JSX.IntrinsicElements
      ? Merge<
          JSX.IntrinsicElements[As],
          OwnProps & {
            component: As | keyof JSX.IntrinsicElements;
          }
        >
      : never
  ): React.ReactElement | null;
}

// Infer keyof jsx.intrinsicElement exist component: Polymorphic.IntrinsicElement<typeof YourComponent>
