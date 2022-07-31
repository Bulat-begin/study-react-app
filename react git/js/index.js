const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Some test text"

const elements = (<div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
           onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Some test text"? "Yes": "No"}</p>

</div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)