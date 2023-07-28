import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectList', {
    state: () => ({
     projectList: [
         {
            id: 1,
            img: "/img/f4.png",
            title: "Website Design",
            slug: "Web Design"
         },
         {
            id: 2,
            img: "/img/f5.png",
            title: "Branding Design",
            slug: "App Design"
         },
         {
            id: 3,
            img: "/img/f6.png",
            title: "Design Strategy",
            slug: "Web App"
         },
         {
            id: 4,
            img: "/img/f7.png",
            title: "Different Things",
            slug: "Web Design"
         },
         {
            id: 5,
            img: "/img/f8.png",
            title: "Build Website",
            slug: "App Design"
         },
     ],
    }),
 })
