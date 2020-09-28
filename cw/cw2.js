(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
       <style type="text/css">
select.styling {
float: left;
  width: 100%;
  margin-top: 6px;
  box-sizing: border-box;
 
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
    option.red {background-color: #cc0000; }
    option.pink {background-color: #FFC0CB;}
option.green {background-color: #008000;}
option.skyb {background-color: #20dada;}
option.blue {background-color: #0366d6;}
option.purple {background-color: #6f42c1;}
option.orange {background-color: #FFA500;}

    </style>
     <select name="status" class="styling">
    <option class="green" value= "product">Product</option>
    <option class="orange" value= "indelivery">In Delivery</option>
<option class="skyb" value= "inlegal">In Legal</option>
<option class="blue" value= "insales">In Sales</option>
<option class="purple" value= "operations">Operations</option>
<option class="pink" value= "ongoingsupport">Ongoing Support</option>
<option class="red" value= "noi">NOT IN USE</option>
    `; // hardcoded template. instead of style tag h1 tag used 

    //com-sap-.. name of HTML TAG thats implemented . On Running the app on Devtool - this tag will be shown 
    //"com-sap-sample-helloworld1"
    
    
    class cw2 extends HTMLElement {

        // constructor is called once adnd standard webcompnent call back  , attach the templete to the shadow DOM  
		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        //standard webcompnent ; Fired when the widget is added to the html DOM of the page
        connectedCallback(){
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
           
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        }
        */
        /*this method is not a custom widget framework callback. included a stub to this method in the template,  
        There are many callbacks that could trigger re-rendering; 
        so to centralise the redraw in a single method and call that method 
        whenever need to update the widget in the canvas. 
        */
        redraw(){}
    };
	customElements.define("com-demo-cw2", cw2); 
})();
