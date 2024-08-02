import { ComponentPropsWithoutRef, ElementType } from "react";

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
  E extends ElementType,
  // @ts-ignore
  K extends EventHandlerKeys<ComponentPropsWithoutRef<E>> = "onUnknown"
> = ComponentPropsWithoutRef<E>[K];
