import * as Validation from '../utils/validation';

class FormLoadeer {

    projectFormTemplate: HTMLTemplateElement
    rootElement: HTMLDivElement;
    formElement: HTMLFormElement;

    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    peopleElement: HTMLInputElement;

    constructor() {
        this.projectFormTemplate = document.getElementById('project-input') as HTMLTemplateElement;
        this.rootElement = document.getElementById('app')! as HTMLDivElement;
        this.formElement = document.importNode(this.projectFormTemplate.content, true).firstElementChild   as HTMLFormElement;

        this.titleElement = this.formElement.querySelector("#title") as HTMLInputElement;
        this.descriptionElement =  this.formElement.querySelector("#description") as HTMLInputElement;
        this.peopleElement = this.formElement.querySelector("#people") as HTMLInputElement;

        this.attachForm();
        this.attachListeners();
    }

    attachForm() {
        this.formElement.id ="user-input";
        this.rootElement.insertAdjacentElement('afterbegin', this.formElement);
    }

    getProjectData(): [string, string, number] | void {
        const title = this.titleElement.value;
        const description = this.descriptionElement.value;
        const people = this.peopleElement.value;

        const titleValidatable: Validation.Validatable = {
            value: title,
            required: true
          };
          const descriptionValidatable: Validation.Validatable = {
            value: description,
            required: true,
            minLength: 5
          };
          const peopleValidatable: Validation.Validatable = {
            value: +people,
            required: true,
            min: 1,
            max: 5
          };
      
          if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)
          ) {
            alert('incorect values, please feel in');
        } else 
        return [title, description, +people];
    }

    clearInputs() {
        this.titleElement.value = '';
        this.descriptionElement.value = '';
        this.peopleElement.value = '';
    }

    attachListeners() {
        this.formElement.addEventListener('submit', (e)=>{
            e.preventDefault();
            const projectData = this.getProjectData();

            if(Array.isArray(projectData)) {
                const [title, description, people] = projectData;
                this.clearInputs();
            }
        })
    }
}




export default FormLoadeer;