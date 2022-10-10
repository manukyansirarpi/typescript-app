
export type Project = {
    title: string,
    description: string,
    people: number
}

export  class ProjectState {
    
        static instance: ProjectState;
        private _projects: Project[]
    
        private constructor(projects: Project[]) { 
           this._projects = projects;
        }
    
        static getInstance() {
            if(!this.instance) {
                this.instance = new ProjectState([]);
            } 
            return this.instance;
        }
    
        get projects() {
            return this._projects;
        }
    
        addProject(p: Project) {
            this._projects.push(p);
        }
    
        removeProject(p: Project) {
            this._projects.slice(this._projects.indexOf(p), 1);
        }
    
    }