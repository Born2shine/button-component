const html = (code) => `${code}`

const Button = ({className, htmlCode, children}) =>   {
    return (
     <div className="single-btn">
         <label> { html(htmlCode) }</label>
        <button  className={`btn ${className}`}> {children} {!children && 'Default'} </button>
    </div>  
    )
   
}

export default Button;