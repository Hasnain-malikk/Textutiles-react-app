import React from 'react'

export default function AboutUs(props) {
  return (
    <div className='container'  style={props.myStyle}>
        <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.myStyle}>
      <strong>Analyze the text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.myStyle}>
        Certainly! I'd be happy to help analyze the text, but it seems like you forgot to provide the text you'd like me to analyze. Please provide the text or specific information you'd like me to focus on, and I'll do my best to provide insights or summaries.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.myStyle}>
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.myStyle}>
      "Free to use denotes the availability of a product or service without any associated cost or monetary charge. In the context of software, applications, or online platforms, 'free to use' typically implies that users can access and utilize the offering without paying a fee. This model is often supported by alternative revenue streams, such as advertisements, premium features, or voluntary contributions. While 'free to use' enhances accessibility for a wide user base, providers may employ various strategies to sustain their offerings and cover operational costs, creating a balance between user benefit and sustainable business practices."
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.myStyle}>
      <strong>Browser compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.myStyle}>
      "Browser compatibility refers to the ability of a website or web application to function seamlessly across different web browsers and their various versions. Ensuring compatibility is crucial for a consistent user experience, as browsers may interpret code differently. Web developers employ coding practices, such as using standardized HTML, CSS, and JavaScript, and perform cross-browser testing to identify and address potential issues. Maintaining browser compatibility enhances accessibility, usability, and overall performance, enabling a broader audience to access and interact with digital content."
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}
