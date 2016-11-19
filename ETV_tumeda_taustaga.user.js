// ==UserScript==
// @name          	ETV otse
// @namespace     ETV_live_dark
// @description	live.etv.ee tumeda taustaga
// @updateURL https://github.com/juneyourtech/ETV_live/raw/master/ETV_tumeda_taustaga.user.js
// @version 0.8.8.1
// @include       http://live.err.ee/*
// @include       http://ee30481.err.ee/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
// Removed http://etv.err.ee/* and http://otse.err.ee/* from the includes list.

//document.styleSheets[0].insertRule('BODY {background-color:black !important;}', 0);
//This userscript fixes many Orkut layout issues in Gecko-based browsers. Fixes notably apply to the classic Orkut layout.

document.styleSheets[0].insertRule('HTML, BODY {background-color:#000000 !important;}', 0);

document.styleSheets[0].insertRule('DIV._errDomainMenu_inner {width:auto; max-width:1000px; min-width:649px;}', 0); //

document.styleSheets[0].insertRule('DIV[id=header] {padding-top:0px !important; padding-bottom:0px !important; width:auto !important;}', 0); //

document.styleSheets[0].insertRule('DIV#header DIV.a {width:auto; max-width:960px; min-width:799px;}', 0); //min-width seems to apply //min-width:787px; max-width:960px

document.styleSheets[0].insertRule('DIV.wrap {width:auto; max-width:913px; min-width:230px; padding-top:1px !important;}', 0); //works; 960px is default

document.styleSheets[0].insertRule('DIV.wrap3, DIV#wrap3 {width:auto; max-width:913px; min-width:230px; padding-top:1px !important;}', 0); //works; 960px is default

document.styleSheets[0].insertRule('DIV[class=box] {background-color:#343434 !important; color:#DDDDDD !important;}', 0);

document.styleSheets[0].insertRule('DIV#wrap3 DIV.box-header {min-width:627px; background-image: none; background-color:black; border-bottom:none;}', 0); //background-image: url("bg_box_header.png"); //DIV[class~=box-header] //used !important, but then used a superseding selector.

document.styleSheets[0].insertRule('DIV#wrap3 DIV.box DIV.box-content {position:relative; padding-left:0px !important; padding-right:0px !important; width:auto; max-width:913px;}', 0);

document.styleSheets[0].insertRule('DIV#parem {position:absolute; left:608px; width:100%; max-width:304px; min-width:174px;}', 0); //608px is the default video width

document.styleSheets[0].insertRule('DIV[class=video] {margin-top:1px !important;}', 0);

document.styleSheets[0].insertRule('DIV[id=parem] {margin-left:1px}', 0);

document.styleSheets[0].insertRule('DIV#vasak > DIV#player_info {padding-right:0px;}', 0); //struck important
document.styleSheets[0].insertRule('DIV[class=gray] > DIV {color:#DDDDDD; max-height:137px; overflow-y:auto;}', 0); //struck important
document.styleSheets[0].insertRule('SPAN[id=onairdesc] {color:#DDDDDD !important;}', 0);
document.styleSheets[0].insertRule('SPAN[class=time] {color:#C0C0C0 !important; font-weight:normal}', 0);

//CHAT AREA (DEPRECATED, w. schedule turned off in Summer 2016)
document.styleSheets[0].insertRule('DIV.sideChat ul li.chat p.img a img[src~=\"user_small.png\"] {opacity:0.5;}', 0);

document.styleSheets[0].insertRule('DIV.sideChat ul li.chat {border-bottom-color:#525252;}', 0);

document.styleSheets[0].insertRule('DIV.chatSection {border-top-color:#0077ee;}', 0);

document.styleSheets[0].insertRule('DIV#header H1 {color:black;}', 0);

document.styleSheets[0].insertRule('DIV.content-container {background-color:black; border:solid 1px #555555; width:unset;}', 0);

document.styleSheets[0].insertRule('DIV.content-container FIELDSET {border:solid 1px #707070;}', 0);

document.styleSheets[0].insertRule('DIV.content-container H2 {color:DarkRed;}', 0);

document.styleSheets[0].insertRule('DIV.content-container H3 {color:gray;}', 0);

//alumine osa (facebook)
document.styleSheets[0].insertRule('DIV.share-facebook > IFRAME > HTML > BODY, DIV#sidebar {background-color:black; color:Silver}', 0);

//
/*GM_addStyle("@media only screen and (max-width:608px) {DIV#mediaplayer {width:608px}}")*/ //

//Mod history:
//• E., 15.12.2014
//This file created: P., 20.04.2014., 01:48:06 (recorded R., 12.08.2016.)
//• L., 23.07.2016., 22:47:50
