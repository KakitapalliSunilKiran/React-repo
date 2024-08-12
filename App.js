const element1= React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am Sunil KK"),React.createElement("h1",{},"I am Sunil KK")]),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am Sunil KK"),React.createElement("h1",{},"I am Sunil KK")])]
);
console.log(element1)
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(element1);