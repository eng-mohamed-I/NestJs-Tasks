import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
    tags:any[] = [
        {
            "id": 1,
            "name": "JavaScript",
            "type": "Programming Language",
            "description": "A versatile scripting language primarily used for web development."
          },
          {
            "id": 2,
            "name": "React",
            "type": "Library",
            "description": "A JavaScript library for building user interfaces, maintained by Facebook."
          },
          {
            "id": 3,
            "name": "Angular",
            "type": "Framework",
            "description": "A TypeScript-based web application framework developed by Google."
          },
          {
            "id": 4,
            "name": "Node.js",
            "type": "Runtime Environment",
            "description": "A JavaScript runtime built on Chrome's V8 engine, allowing for server-side scripting."
          },
          {
            "id": 5,
            "name": "MongoDB",
            "type": "Database",
            "description": "A NoSQL document-oriented database known for its scalability and flexibility."
          },
          {
            "id": 6,
            "name": "Next.js",
            "type": "Framework",
            "description": "A React framework for building server-side rendered and statically generated web applications."
          },
          {
            "id": 7,
            "name": "TailwindCSS",
            "type": "CSS Framework",
            "description": "A utility-first CSS framework for rapidly building custom designs."
          },
          {
            "id": 8,
            "name": "Bootstrap",
            "type": "CSS Framework",
            "description": "A popular front-end framework for developing responsive, mobile-first websites."
          },
          {
            "id": 9,
            "name": "Agile",
            "type": "Methodology",
            "description": "An iterative approach to software development that values collaboration, customer feedback, and small, rapid releases."
          },
          {
            "id": 10,
            "name": "FullStack",
            "type": "Development Role",
            "description": "A developer who is proficient in both front-end and back-end development."
          }
    ]

    getAllTags() { 
        return this.tags
    }

    getOneTag(id:any) { 
        return this.tags.find(tag => tag.id == id)
    }

    addNewTag(tag: any){ 
      return this.tags.unshift(tag)
    }

    updateTage(id:any, tag: any) { 
      let foundTagIndex = this.tags.findIndex(tag => tag.id == id)
      this.tags[foundTagIndex] = tag
    }

    deleteTag(id : any){ 
        let tagIndex = this.tags.findIndex(tag => tag.id == id)
        return this.tags.splice(tagIndex, 1)
        
    }

}
