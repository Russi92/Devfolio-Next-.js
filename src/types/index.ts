
export interface Project {
    id :number,
    title : string;
    description : string;
    technologies : string[];
    githubLink : string;
    demoLink : string;
    image : string;
}

export interface Blog {
    id :number,
    title : string;
    excerpt : string;
    date : string;
    readTime : string;
    slug : string;
}