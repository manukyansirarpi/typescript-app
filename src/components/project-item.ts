import { Project } from "../store/state"

class ProjectItem  {

    project: Project
    projectItemTemplate: HTMLTemplateElement
    projectItemElement: HTMLLIElement

    constructor( p: Project) {
        this.project = p ;
        this.projectItemTemplate = document.getElementById("single-project") as HTMLTemplateElement;
        this.projectItemElement = document.importNode(this.projectItemTemplate.content, true).firstElementChild as HTMLLIElement;
        this.attachProject(p);
    }

    attachProject(p: Project) {
        this.projectItemElement.querySelector('h2')!.innerText = p.title;
        this.projectItemElement.querySelector('h3')!.innerText = p.description;
        this.projectItemElement.querySelector('p')!.innerText = `${p.people}`;
    }
}

export default ProjectItem;