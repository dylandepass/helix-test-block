
import { HelixApp, buildBlock } from './helix-web-library.esm.js';

export function Template(args) {
  const { inner, path, selector, host, primary, index } = args;
  const main = document.createElement('main');
  const url = `${host}${path}`;
  fetch(url).then(res => {
    res.text().then(html => {
      const section = document.createElement('div');
      const regex = new RegExp('./media', 'g');
      html = html.replace(regex, `${host}/media`);
      const parser = new DOMParser();
      const mydoc = parser.parseFromString(html, 'text/html');
      const node = mydoc.querySelectorAll(selector).item(index);

      main.appendChild(section);
      section.innerHTML = node.outerHTML; 

      const { sectionClasses, blockClasses } = args;
      if (sectionClasses) {
        section.classList.add(args.sectionClasses);
      }
      if (blockClasses) {
        section.firstElementChild.classList.add(args.blockClasses);
      }

      this.decorate(section.firstElementChild);

      HelixApp.init({
        rumEnabled: true,
        rumGeneration: 'project-1',
        lcpBlocks: ['hero'],
        enableBlockLoader: false,
        loadHeader: false,
        loadFooter: false,
        iconsPath: 'http://localhost:6006/'
      })
        .decorate();

 

      return main;
    });
  });
  return main;
};

// export function Template(args) {
//   const { inner, path, selector, host, primary, index } = args;
//   const wrapper = document.createElement('div');
//   const container = document.createElement('div');
//   container.append(wrapper);
//   console.log(args);
//   if (inner) {
//     wrapper.innerHTML = inner.replace(/\.(\/media_[0-9a-f]{41})/g, 'https://main--helix-basic-theme--dylandepass.hlx.page');

//     this.decorate(wrapper.firstElementChild);

//     const [name] = wrapper.firstElementChild.classList;
//     container.classList.add(`${name}-container`);
//     wrapper.classList.add(`${name}-wrapper`);
//   } else if (path) {
//     const url = `${host}${path}`;
//     fetch(url).then(res => {
//       res.text().then(html => {
//         const regex = new RegExp('./media', 'g');
//         html = html.replace(regex, `${host}/media`);
//         const parser = new DOMParser();
//         const mydoc = parser.parseFromString(html, 'text/html');
//         const node = mydoc.querySelectorAll(selector).item(index);
//         wrapper.classList.add(args.classes);
//         wrapper.innerHTML = node.outerHTML;
//         this.decorate(wrapper.firstElementChild);

//         const [name] = wrapper.firstElementChild.classList;
//         container.classList.add(`${name}-container`);
//         wrapper.classList.add(`${name}-wrapper`);
//         return container;
//       });
//     });
//   }
//   return container;
// };