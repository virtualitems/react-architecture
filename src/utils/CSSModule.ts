// Libraries

// Shared Module

// Other Modules

// Same Layer

// Lower Layers

// Types

// Constants


/**
 * @description 
 */
export default class CSSModule
{

  [key: string | symbol]: unknown;

  // public ATTRIBUTES

  public readonly classNames: Record<string, string>;

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  constructor(classNames: Record<string, string>)
  {
    this.classNames = classNames;
  }

  // public METHODS

  public get(...args: string[]): string
  {

    const selected = [];

    for (const className of args) {
      const alias = this.classNames[className];
      if (alias !== undefined) {
        selected.push(alias);
      }
    }

    return selected.join(' ');

  } //:: get

  public join(...args: string[]): string
  {

    const selected = [];

    for (const className of args) {
      const alias = this.classNames[className] ?? className;
      selected.push(alias);
    }

    return selected.join(' ');

  } //:: join

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
