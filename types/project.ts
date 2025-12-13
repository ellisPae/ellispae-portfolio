export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    caseStudy?: string;
    demo?: string;
    github?: string;
    live?: string;
  };
}
