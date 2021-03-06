/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '@ckeditor/ckeditor5-react';
declare module '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
declare module '@ckeditor/ckeditor5-basic-styles/src/bold';
declare module '@ckeditor/ckeditor5-basic-styles/src/italic';
declare module '@ckeditor/ckeditor5-paragraph/src/paragraph';
declare module '@ckeditor/ckeditor5-page-break/src/pagebreak';
declare module '@ckeditor/ckeditor5-pagination/src/pagination';
declare module '@ckeditor/ckeditor5-essentials/src/essentials';
declare module '@ckeditor/ckeditor5-table/src/table';
declare module '@ckeditor/ckeditor5-table/src/tabletoolbar';
declare module '@ckeditor/ckeditor5-table/src/tableproperties';
declare module '@ckeditor/ckeditor5-table/src/tablecellproperties';
declare module '@ckeditor/ckeditor5-heading/src/heading';
declare module '@ckeditor/ckeditor5-font/src/font';
declare module '@ckeditor/ckeditor5-list/src/list';
declare module '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
declare module '@ckeditor/ckeditor5-basic-styles/src/underline';
declare module '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
declare module '@ckeditor/ckeditor5-image/src/image';
declare module '@ckeditor/ckeditor5-image/src/imageinsert';
