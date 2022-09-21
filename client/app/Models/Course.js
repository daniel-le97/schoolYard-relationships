export class Course {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.code = data.code || ''
    this.description = data.description || ''
  }

  get CourseCardTemplate() {
    return /*html*/`
      <div class="col-md-4">
        <div class="card">
         <div class="card-body">
          <h4>${this.name} - ${this.code}</h4>
          <p class="lead">
            ${this.description}
          </p>
         </div>
        </div>
      </div>
    `
  }

}
