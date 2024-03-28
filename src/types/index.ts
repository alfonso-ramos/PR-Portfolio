export interface IProject {
    title: string;
    isFeatured: boolean;
    thumbnail: string;
    githubUrl: string;
    liveUrl: string;
}
export interface IProjects {
    projects: IProject[];
}

export interface IProjectDetails {
    projectDetail: IProject;
}