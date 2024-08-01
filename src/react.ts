import { ComponentPropsWithoutRef, ElementType } from "react";

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
  K extends keyof ComponentPropsWithoutRef<E>
> = ComponentPropsWithoutRef<E>[K];


