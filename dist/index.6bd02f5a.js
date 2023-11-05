const heading1 = React.createElement("h1", {
    id: "title-1",
    className: "Heading-1"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title-2",
    className: "Heading-2"
}, "Heading 2");
const container = React.createElement("div", {
    className: "container"
}, [
    heading1,
    heading2
]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // normal javascript--->
 // var h1 = document.createElement("h1");
 // h1.innerHTML = "Tejas Pundpal";
 // document.getElementById("root").appendChild(h1);

//# sourceMappingURL=index.6bd02f5a.js.map
