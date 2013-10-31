/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function addJavascript(jsname,pos) {
    var th = document.getElementsByTagName(pos)[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}

//addJavascript('newExternal.js','body');

// JS
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/jquery-1.6.4.min.js','head');
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/css3-mediaqueries.js','head');
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/custom.js','head');
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/tabs.js','head');

// Tweet
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/tweet/jquery.tweet.js','head');

// superfish
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/superfish-1.4.8/js/hoverIntent.js','head');
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/superfish-1.4.8/js/superfish.js','head');
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/superfish-1.4.8/js/supersubs.js','head');

// prettyPhoto
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/prettyPhoto/js/jquery.prettyPhoto.js','head');

// poshytip 
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/poshytip-1.1/src/jquery.poshytip.min.js','head');

// Flex Slider
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/jquery.flexslider-min.js','head');

// modernizr
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/modernizr.js','head');

// reply move form
addJavascript('http://200.78.237.214:8080/wcore/itsz/js/moveform.js','head');




