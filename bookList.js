const dateCol_width = 11;
const titleCol_width = 29;
const authorCol_width = 21;

const inputString = "Publication Date,Title,Authors\n" +
    "29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien\n" +
    "01/08/1996,A Game of Thrones,George Raymond Martin\n" +
    "21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling";

const rows = inputString.split('\n');

const headings = rows[0].split(',');
headings[0]="Pub Date".padEnd(dateCol_width);
headings[1] = headings[1].padStart(titleCol_width);
headings[2] = headings[2].padEnd(authorCol_width);
const headingsOut = `| ${headings[0]} | ${headings[1]} | ${headings[2]} |`;
const headingsDivider = "|" + "=".repeat((2*4+dateCol_width+titleCol_width+authorCol_width)) + "|";

outputStringArray = [headingsOut, headingsDivider];

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
let dateComponents, date, dateOut, title, titleOut, author, authorOut, row, rowOut
for (let i = 1; i< rows.length; i++){
    row = rows[i].split(',')

    dateComponents = row[0].split('/');
    date = new Date(dateComponents[2], dateComponents[1]-1, dateComponents[0]);
    dateOut = date.toLocaleDateString('en-GB', dateOptions).padStart(dateCol_width,'0');

    title = row[1];
    if (title.length > titleCol_width) {
        titleOut = title.slice(0,titleCol_width-3) + '...';
    }
    else {
        titleOut = title.padStart(titleCol_width);
    }

    author = row[2];
    if (author.length > authorCol_width) {
        authorOut = author.slice(0, authorCol_width-3) + '...';
    }
    else {
        authorOut = author.padStart(authorCol_width)
    }

    rowOut = `| ${dateOut} | ${titleOut} | ${authorOut} |`;

    outputStringArray.push(rowOut)
}


outputString = outputStringArray.join('\n');
console.log(outputString);

const expectedOutput = '| Pub Date    |                         Title | Authors               |\n' +
    '|=====================================================================|\n' +
    '| 29 Jul 1954 |             Lord of the Rings | John Ronald Reuel ... |\n' +
    '| 01 Aug 1996 |             A Game of Thrones | George Raymond Martin |\n' +
    '| 21 Jun 2003 | Harry Potter and the Order... |        Joanne Rowling |';

if (outputString == expectedOutput){
    console.log('Success!')
}
else {
    console.log('Oh dear...');
    console.log(expectedOutput);
}