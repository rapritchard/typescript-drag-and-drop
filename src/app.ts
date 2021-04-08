/**
 * Autobind
 * Decorator function that automatically handles binding of this
 * @function
 * @param {any} target - Either constructor function of the class for a static member, or prototype of the class for an instance member
 * @param {string} methodName - Name of the member
 * @param {PropertyDescriptor} descriptor - Property Descriptor for the member (Undefined if script target is < ES5)
 * @return {PropertyDescriptor} Adjusted descriptor (Return value is ignored if script target is < ES5)
 */
function Autobind(
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

/**
 * ProjectInput
 * Creates a new ProjectInput
 * @class
 */
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  /**
   * submitHandler
   * Handles submit event for form element
   * @param event
   */
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  /**
   * configure
   * configures event listener for form submission
   */
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  /**
   * attach
   * Inserts template HTML to hostElement
   */
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
