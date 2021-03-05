export const getPageCount = (data: string): number => {
    const el = document.createElement( 'html' );
    el.innerHTML = data;
    const paginationEls = el.querySelectorAll('[' + 'data-pagination-page' + ']');

    return paginationEls ? paginationEls.length + 1 : 1;
};

// const toData = (viewFragment: any) => {
//     const json = [];
//     console.log(viewFragment)
//     for (const child of viewFragment) {
//         const childJson = viewToJson(child);
//
//         json.push(childJson);
//     }
//     return JSON.stringify(json);
// };

// const viewToJson = (viewElement: any) => {
//     const json = {
//         name: '',
//         text: '',
//         attributes: {},
//         children: []
//     };
//
//     if (viewElement.is( 'text')) {
//         json.text = viewElement.data;
//     } else {
//         json.name = viewElement.name;
//
//         for (const [ key, value ] of viewElement.getAttributes()) {
//             json.attributes[ key ] = value;
//         }
//
//         for (const child of viewElement.getChildren()) {
//             json.children.push( viewToJson(child));
//         }
//     }
//
//     return json;
// };
//
// function parseHTML(html: string) {
//     const template = document.createElement('template');
//     if ('content' in template) {
//         template.innerHTML = html;
//         return document.importNode(template.content, true);
//     }
//     const frag = document.createDocumentFragment();
//     const div = document.createElement('div');
//     div.innerHTML = html;
//     while (div.firstChild) {
//         frag.appendChild(div.firstChild);
//     }
//     return frag;
// }
