interface Component {
    id: string;
    title: string;
    category: string;
    img: string;
    technologies: string[];
}

const Components: Component[] = [
  {
    id: "1",
    title: "Simple navbar",
    category: "navbar",
    img: "/assets/navbar1.png",
    technologies: ["/assets/html.svg", "/assets/css.svg", "/assets/js.svg"],
  },
  {
    id: "2",
    title: "Simple Button",
    category: "button",
    img: "/assets/button1.png",
    technologies: ["/assets/html.svg", "/assets/css.svg", "/assets/js.svg"],
  },
  {
    id: "3",
    title: "simple navbar",
    category: "navbar",
    img: "https://stacksorted.com/images/buttons-41.webp",
    technologies: ["/assets/html.svg", "/assets/css.svg", "/assets/js.svg"],
  },
  {
    id: "4",
    title: "simple navbar",
    category: "Hero",
    img: "https://stacksorted.com/images/buttons-41.webp",
    technologies: ["/assets/html.svg", "/assets/css.svg", "/assets/js.svg"],
  },
  {
    id: "5",
    title: "simple navbar",
    category: "Hero",
    img: "https://stacksorted.com/images/buttons-41.webp",
    technologies: ["/assets/html.svg", "/assets/css.svg", "/assets/js.svg"],
  },
];

export default Components;
