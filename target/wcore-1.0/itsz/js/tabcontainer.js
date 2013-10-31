/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function tabs(x)
{
    var lis=document.getElementById("sidebarTabs").childNodes; //gets all the LI from the UL
                    
    for(i=0;i<lis.length;i++)
    {
        lis[i].className=""; //removes the classname from all the LI
    }
    x.className="selected"; //the clicked tab gets the classname selected
    var res=document.getElementById("tabContent");  //the resource for the main tabContent
    var tab=x.id;
    switch(tab) //this switch case replaces the tabContent
    {
        case "tab1":
            res.innerHTML=document.getElementById("tab1Content").innerHTML;
            break;
        case "tab2":
            res.innerHTML=document.getElementById("tab2Content").innerHTML;
            break;
        case "tab3":
            res.innerHTML=document.getElementById("tab3Content").innerHTML;
            break;
        case "tab4":
            res.innerHTML=document.getElementById("tab4Content").innerHTML;
            break;
        default:
            res.innerHTML=document.getElementById("tab1Content").innerHTML;
            break;
    }
}