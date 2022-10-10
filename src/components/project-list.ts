 class ProjectList {

    projectListRootTemplate: HTMLTemplateElement
    rootElement: HTMLDivElement
    sectionElement: HTMLElement

    constructor() {
        this.projectListRootTemplate = document.getElementById('project-list')! as HTMLTemplateElement;
        this.rootElement = document.getElementById('app')! as HTMLDivElement;
        this.sectionElement = document.importNode(this.projectListRootTemplate.content, true).firstElementChild   as HTMLFormElement;

        this.attachList() 
    }

    attachList() {
        this.rootElement.insertAdjacentElement('afterbegin', this.sectionElement);
        this.sectionElement.querySelector('h2')!.textContent = "Active Projects"
    }
}


export default ProjectList;