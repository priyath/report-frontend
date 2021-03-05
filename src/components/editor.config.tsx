import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Pagination from "@ckeditor/ckeditor5-pagination/src/pagination";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Font from "@ckeditor/ckeditor5-font/src/font";
import List from "@ckeditor/ckeditor5-list/src/list";

import Placeholder from '../plugins/placeholder/placeholderediting';

export const editorConfiguration = {
    plugins: [Essentials, Bold, Italic, Paragraph, Pagination, PageBreak, Table, TableToolbar, TableProperties,
        TableCellProperties, Heading, Font, List, Placeholder],
    toolbar: {
        items: [
            'heading', '|',
            'fontfamily', 'fontsize', '|',
            'alignment', '|',
            'fontColor', 'fontBackgroundColor', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
            'link', '|',
            'outdent', 'indent', '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'code', 'codeBlock', '|',
            'insertTable', '|',
            'uploadImage', 'blockQuote', '|',
            'undo', 'redo', '|',
            'pagebreak', 'previouspage', 'nextpage', 'pagenavigation', '|',
            'placeholder'
        ],
    },
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    },
    shouldNotGroupWhenFull: true,
    pagination: {
        // A4
        pageWidth: '21cm',
        pageHeight: '29.7cm',

        pageMargins: {
            top: '20mm',
            bottom: '20mm',
            right: '12mm',
            left: '12mm'
        }
    },
    licenseKey: 'MyGOUtibphfsw1T99kKWE5sPPamufQb6hSiHy1cn4hXfX1OQ48rw80iy'
};
