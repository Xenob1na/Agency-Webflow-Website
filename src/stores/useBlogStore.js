import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogList', {
    state: () => ({
     blogList: [
        {   
            id: 1,
            date: "December 31, 2021",
            title: "How To Keep The Motivation Up When There Is No Client Work",
            img: "/img/f23.png",
            slug: "Business"
        },
        {   
            id: 2,
            date: "December 31, 2021",
            title: "JavaScript Algorithms And Data Structures Management",
            img: "/img/f24.png",
            slug: "Business"
        },
        {   
            id: 3,
            date: "December 31, 2021",
            title: "Winning Desing Tips And Strategies For App UI/UX Developers",
            img: "/img/f25.png",
            slug: "Business"
        },
        {   
            id: 4,
            date: "December 31, 2021",
            title: "We speak to Aimer & Tatin Creative Fund Board Members",
            img: "/img/f26.png",
            slug: "Business"
        },
        {   
            id: 5,
            date: "December 31, 2021",
            title: "Social media is changing – how can you stay on the right side.",
            img: "/img/f27.png",
            slug: "Business"
        },
        {   
            id: 6,
            date: "December 31, 2021",
            title: "The UX : Improving communication to enlarge the digital output",
            img: "/img/f28.png"
        }
     ],
    }),
 })
