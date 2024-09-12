# JS DOM Manipulation 

**Window Obj ---> global Obj** &nbsp;  &nbsp;    (sab kuch window object ke ander ata hain sab isi ke child hain)

**HTML code ---> Convert JavaScript Object  ---> Document**

**HTML Tag  ---> Convert token ---> Convert node ---> Bunch of node is DOM**

## DOM Tree Structure

```mermaid
graph TB;
    Window --> DOM;
    Window --> BOM;
    Window --> Core_JavaScript;
    
    Document --> html;
    html --> head;
    html --> body;
    head --> title;
    body --> h1;
    body --> p;
```

## DOM MANIPULATION  

**---> Manipulating HTML through JavaScript code**

```mermaid
graph TB;

    Change_HTML --> Document;
    Document --> Access;
    Access --> getElementByID;
    Access --> getElementByClassName;
    Access --> getElementByTagName;
    Access --> $0;
    Document --> Update_Existing_Element;
    Update_Existing_Element --> innerHTML;
    Update_Existing_Element --> outerHTML;
    Update_Existing_Element --> textContent;
    Update_Existing_Element --> innerText;
    Document --> Add_element;
    Add_element --> Creation_Element;
    Add_element --> .appendChild;
    .appendChild --> insertAdjacentElement;
    insertAdjacentElement --> position;
    insertAdjacentElement --> HTMLcontent
    position --> beforeBegin;
    position --> afterBegin;
    position --> beforeEnd;
    position --> afterEnd;
    Document --> Remove_Element;
    Remove_Element --> removeChild;


```
