import React from "react";

export default function About(props) {
  /*
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    */

    //const [btnText, setBtnText] = useState("Enable Dark Mode");

    let myStyle = {
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }
    /* 
    const toggleStyle =()=> {
        if(myStyle.color==="black"){
            setMyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'White'
            })
            setBtnText("Enable Dark Mode");
        }
        */   
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> {/*With this all key of this object applied on this container  */}
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze Your Textutils</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or converting text into UpperCase and LowerCase. This textutils website perform many task with the text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and charcters. Thus it is suitable for writing text with word/ character limit. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Edge, Firefox, Internet Explorer, Safari and Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document and essay etc. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
