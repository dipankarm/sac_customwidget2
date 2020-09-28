(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style type="text/css">
select.style { width: 100%;
   float: left;
  width: 75%;
  margin-top: 6px;
}
    item.red {background-color: #cc0000; float: left;
  width: 75%;
  margin-top: 6px;}
    item.pink {background-color: #ffcccc;float: left;
  width: 75%;
  margin-top: 6px;}
item.green {background-color: #28a745;float: left;
  width: 75%;
  margin-top: 6px;}
item.skyb {background-color: #20dada;float: left;
  width: 75%;
  margin-top: 6px;}
item.blue {background-color: #0366d6;float: left;
  width: 75%;
  margin-top: 6px;}
item.purple {background-color: #6f42c1;float: left;
  width: 75%;
  margin-top: 6px;}
item.orange {background-color: #ef4816;float: left;
  width: 75%;
  margin-top: 6px;}

    </style>

    <select name=status class="style">
    <item class="green" value= "product">Product</item>
    <item class="orange" value= "indelivery">In Delivery</item>
<item class="skyb" value= "inlegal">In Legal</item>
<item class="blue" value= "insales">In Sales</item>
<item class="purple" value= "operations">Operations</item>
<item class="pink" value= "ongoingsupport">Ongoing Support</item>
<item class="red" value= "noi">NOT IN USE</item>
    </select>
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
