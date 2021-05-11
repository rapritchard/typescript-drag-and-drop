/**
 * Decorator function that automatically handles binding of this
 * @function
 * @param {any} target - Either constructor function of the class for a static member, or prototype of the class for an instance member
 * @param {string} methodName - Name of the member
 * @param {PropertyDescriptor} descriptor - Property Descriptor for the member (Undefined if script target is < ES5)
 * @return {PropertyDescriptor} Adjusted descriptor (Return value is ignored if script target is < ES5)
 */
export function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
