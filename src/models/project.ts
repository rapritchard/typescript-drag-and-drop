namespace App {
  /**
   * Project type enum
   */
  export enum ProjectStatus {
    Active,
    Finished,
  }

  /**
   * Project property definition
   */
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
