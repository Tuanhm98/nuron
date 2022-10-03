(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[31],{1394:function(u,E,b){function a(){Type.registerNamespace("Common.App.SaveStatus");z.a.instance.Qi(new c)}function c(){this.FPc=this.EOc=this.alb=this.fb=null}function d(x,D,I,F){this.Qfa=this.Kfa=this.Ufa=this.Tfa=null;this.SDa=0;this.JD=this.EPc=this.iCa=this.oEc=this.QEa=null;this.Ld=x;this.L8=D;this.q1=I;this.Vi=F;this.b8d=!0;this.zL=!1;this.Wz=3;this.Vqa=!0}function e(x,D){this.Mr=null;this.Tfa=CommonUIStrings.l_SavedStatus;
this.Ufa=CommonUIStrings.l_SavingStatus;this.Kfa=CommonUIStrings.l_ReadOnlyStatus;this.Qfa=CommonUIStrings.l_ReviewModeStatus;this.QSb=D;this.q1=x;this.Wz=3;this.Vqa=!0}function k(x){this.Qfa=this.Kfa=this.Ufa=this.Tfa=null;this.m6d=this.D9d=this.Sw=this.zL=!1;this.QOc=this.S9d=null;this.K9d=0;this.ib=this.Q9d=null;this.q1=x;this.Wz=3;this.Mib=!0}u=b(0);var l=b(84),n=b(14),f=b(167),v=b(39);k.prototype.initialize=function(x,D,I){var F=this;this.Tfa=this.nfd(x,D);this.Ufa=CommonUIStrings.l_SavingStatus;
this.Kfa=CommonUIStrings.l_ReadOnlyStatus;this.Qfa=CommonUIStrings.l_ReviewModeStatus;this.q1&&this.q1.execute(function(G){G.xUc(Object(l.a)(F,F.nOb,"updateToSavingStatus"))});this.Sw=!0;this.ib=I;return!0};k.prototype.mea=function(x,D){this.zL=x;this.Wz=D;this.lS(this.Mib)};k.prototype.lS=function(x){!this.Mib&&x&&(this.Q9d=new Date);this.Mib=x;x=null;3===this.Wz&&(x=this.Mib?this.Tfa:this.Ufa);this.wfh(x)};k.prototype.nfd=function(x,D){return x?String.format(CommonUIStrings.l_SavedToStatus,CommonUIStrings.l_OneDriveName):
D&&D.length?String.format(CommonUIStrings.l_SavedToStatus,D):CommonUIStrings.l_SavedStatus};k.prototype.nOb=function(){this.lS(!1)};k.prototype.qRh=function(){switch(this.Wz){case 1:return this.Kfa;case 2:return this.Qfa;default:return null}};k.prototype.bgi=function(x){return this.D9d===this.zL&&this.K9d===this.Wz&&this.S9d===x};k.prototype.J5c=function(x){var D=this;appChrome.getHeaderApi().then(function(I){I.updateDocumentTitleStatus(D.zL,x,D.qRh(),D.Q9d,D.Mib);D.m6d=!0;return null});this.QOc=
null};k.prototype.wfh=function(x){var D=this;this.Sw&&f.c()&&!this.bgi(x)&&(!this.m6d&&this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.ExpediteFirstSaveStatusAction",!1)?this.J5c(x):v.a.FRf()?(this.QOc&&n.ULS.sendTraceTag(595146389,340,50,"Previous UpdateDocumentTitleStatus idle callback can be cancelled."),this.QOc=window.requestIdleCallback(function(){D.J5c(x)})):window.requestAnimationFrame(function(){D.J5c(x)}),this.D9d=this.zL,this.S9d=x,this.K9d=this.Wz)};Object(u.a)(k,"ReactSaveStatusUIHandler",
null,[560]);var r=b(170);e.prototype.av=function(){var x=this;this.q1&&this.q1.execute(function(D){D.xUc(Object(l.a)(x,x.nOb,"updateToSavingStatus"))});this.QSb.execute(function(D){x.Mr=D})};e.prototype.mea=function(x,D){this.Wz=D;3===D?this.lS(this.Vqa):2===D?this.CWd(this.Qfa):this.CWd(this.Kfa)};e.prototype.nOb=function(){this.lS(!1)};e.prototype.lS=function(x){this.Vqa=x;this.CWd(this.Vqa?this.Tfa:this.Ufa)};e.prototype.CWd=function(x){this.Mr&&this.Mr.uj(r.a.uNj,this.f1g(x))};e.prototype.f1g=
function(x){var D={};D.StatusText=x;return D};Object(u.a)(e,"SaveStatusPostMessageHandler",null,[560]);var y=b(93),m=b(123),w=b(55);d.prototype.initialize=function(x,D){if(!this.Ld)return!1;this.Tfa=this.nfd(x,D);this.Ufa=CommonUIStrings.l_SavingStatus;this.Kfa=CommonUIStrings.l_ReadOnlyStatus;this.Qfa=CommonUIStrings.l_ReviewModeStatus;this.av();return!0};d.prototype.nfd=function(x,D){return x?String.format(CommonUIStrings.l_SavedToStatus,CommonUIStrings.l_OneDriveName):D&&D.length?String.format(CommonUIStrings.l_SavedToStatus,
D):CommonUIStrings.l_SavedStatus};d.prototype.av=function(){var x=this;this.L8&&this.L8.execute(function(D){D.OFg(Object(l.a)(x,x.SDe,"createStatusAndModeElements"));D.FFg(Object(l.a)(x,x.qzj,"showHideSaveStatusElement"));D.kKj&&x.SDe(null,null)});this.q1&&this.q1.execute(function(D){D.xUc(Object(l.a)(x,x.nOb,"updateToSavingStatus"))})};d.prototype.qv=function(){this.JD&&this.Ld&&this.Ld.bG(this.JD)};d.prototype.qzj=function(x,D){this.mea("true"===D,this.Wz)};d.prototype.mea=function(x,D){this.zL=
x;this.Wz=D;this.oEc&&(this.oEc.style.display=this.zL||3===this.Wz||!this.QEa?"none":"");this.iCa&&(this.iCa.style.display=this.zL||3===this.Wz?"none":"",this.iCa.innerText=1===this.Wz?this.Kfa:this.Qfa,this.iCa.title=1===this.Wz?CommonUIStrings.l_ReadOnlyStatusTooltip:CommonUIStrings.l_ReviewModeStatusTooltip);this.EPc&&(this.EPc.style.display=this.zL||1===this.Wz||!this.QEa&&!this.iCa?"none":"");this.JD&&(this.JD.style.display=this.zL||1===this.Wz?"none":"",this.lS(this.Vqa),this.JD.title=CommonUIStrings.l_SaveStatusTooltip)};
d.prototype.SDe=function(x,D){x=document.getElementById(y.CuiHelper.r6e);D&&D.HWj||!x||""===this.Tfa||""===this.Ufa||""===this.Kfa||""===this.Qfa||(this.QEa=document.getElementById(y.CuiHelper.F0b),this.oEc=y.CuiHelper.Vsa(x,"BreadcrumbAppModeDash","-",null,!1),this.iCa=y.CuiHelper.Vsa(x,"BreadcrumbAppModeStatus",1===this.Wz?this.Kfa:this.Qfa,null,!1),this.Sbg(this.iCa),this.EPc=y.CuiHelper.Vsa(x,"BreadcrumbSaveStatusDash","-",null,!1),this.JD=y.CuiHelper.Vsa(x,"BreadcrumbSaveStatus",this.Tfa,null,
!1),this.Sbg(this.JD),this.mea(this.zL,this.Wz))};d.prototype.nOb=function(){this.lS(!1)};d.prototype.lS=function(x){this.Vqa=x;this.wSj(this.Vqa?this.Tfa:this.Ufa)};d.prototype.wSj=function(x){!this.JD||3!==this.Wz&&2!==this.Wz||(this.b8d&&!this.Vqa?(this.SDa=this.JD.offsetWidth<this.SDa?this.SDa:this.JD.offsetWidth,this.uPj(this.Ufa),this.b8d=!1):this.JD.innerText=x)};d.prototype.Sbg=function(x){x.style.direction=this.Vi?"rtl":"ltr";x.style.width="auto";x.style.textAlign=this.Vi?"right":"left";
x.style.display=this.zL?"none":"";x.setAttribute("Unselectable","on")};d.prototype.uPj=function(x){this.JD&&(this.JD.style.width="",this.JD.innerText=x,this.SDa=this.JD.offsetWidth<this.SDa?this.SDa:this.JD.offsetWidth,x=m.a.YA(this.JD),this.JD.style.width=this.SDa-w.a.XC(x.paddingLeft)-w.a.XC(x.paddingRight)+1+"px")};Object(u.a)(d,"SaveStatusUIHandler",null,[560]);var B=b(4),A=b(92);c.prototype.Ph=function(x){var D=this;this.fb=x;B.AFrameworkApplication.fa.qa("PostMessageEmbedded")&&B.AFrameworkApplication.hideHeaderEmbedded?
this.fb.register(e,"Common.App.SaveStatus.SaveStatusPostMessageHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").tc().Cc(function(){return new e(D.fb.Tb("Common.App.HostNotification.EditNotificationEventSource"),D.fb.Tb("Postmessage.IHostPostmessenger"))}):B.AFrameworkApplication.ta.Qa.ngf||(B.AFrameworkApplication.ta.Qa.isReactSharedHeaderUxEnabled?this.fb.register(k,"Common.App.SaveStatus.ReactSaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").tc().Cc(function(){return new k(D.fb.Tb("Common.App.HostNotification.EditNotificationEventSource"))}):
this.fb.register(d,"Common.App.SaveStatus.SaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").tc().Cc(function(){return new d(A.EventHandlerManager.instance,D.fb.Tb("Common.App.Header.HeaderEventSource"),D.fb.Tb("Common.App.HostNotification.EditNotificationEventSource"),B.AFrameworkApplication.isRtl)}))};c.prototype.init=function(){B.AFrameworkApplication.fa.Su(Object(l.a)(this,this.oB,"onFullAppSettingsReady"))};c.prototype.oB=function(){var x=B.AFrameworkApplication.fa,D=!!B.AFrameworkApplication.ta.Qa&&
4===B.AFrameworkApplication.ta.Qa.Cj;if(x.qa("WordEditorAutoSaveImprovementIsEnabled")||x.qa("PptEditorSaveStatusInHeaderEnabled")||D&&x.qa("SimplifiedReactRibbonUxIsEnabled")||x.qa("ExcelSaveStatusInHeaderEnabled")||x.qa("VisioSaveStatusInHeaderEnabled"))B.AFrameworkApplication.fa.qa("PostMessageEmbedded")&&B.AFrameworkApplication.hideHeaderEmbedded?(this.FPc=this.fb.resolve("Common.App.SaveStatus.SaveStatusPostMessageHandler"))&&this.FPc.av():B.AFrameworkApplication.ta.Qa.ngf||(B.AFrameworkApplication.ta.Qa.isReactSharedHeaderUxEnabled?
(this.EOc=this.fb.resolve("Common.App.SaveStatus.ReactSaveStatusUIHandler"))&&this.EOc.initialize(x.qa("IsSkyDrive"),x.Wa("HostNameToIncludeInSavedStatus"),B.AFrameworkApplication.fa):(this.alb=this.fb.resolve("Common.App.SaveStatus.SaveStatusUIHandler"))&&this.alb.initialize(x.qa("IsSkyDrive"),x.Wa("HostNameToIncludeInSavedStatus")))};c.prototype.dispose=function(){this.alb&&this.alb.qv()};Mf.Object.defineProperties(c.prototype,{name:{configurable:!0,enumerable:!0,get:function(){return"Common.App.SaveStatus"}}});
Object(u.a)(c,"PackageManager",null,[10,11]);var z=b(254);b.d(E,"a",function(){return a})},1455:function(u,E,b){function a(){e.a.Fa(c.ka)}function c(m){var w=y.call(this)||this;w.Dc=m;w.Eb();return w}function d(m,w){var B=this;this.Cee=this.SJc=!1;this.zya=function(A,z){(null===z||void 0===z?0:z.QG)&&f.a.JKg([z.QG])&&(B.cuc=!0)};this.qo=function(){B.cuc=!1};this.Uc=function(A,z){n.b(z)&&B.mea(!0);B.cuc=!1};this.Yc=function(){B.IQ=B.$.IQ;B.mea()};this.PAf=function(){B.lS()};this.Rzf=function(){B.IQ=
B.$.IQ};this.zyd=function(){v.g(B.$).Ea.dv(B.zyd);B.IQ=B.$.IQ};this.IUf=w;this.$=m;this.$.userOperationManager.zr(this.Rzf);this.$.Tk(this.Yc);this.$.ea.nGg(this.PAf);this.$.ea.Vj(this.Uc);this.$.rZb(this.zya);this.$.ea.QL(this.qo);this.mea()}var e=b(10);u=b(0);var k=b(83),l=b(232),n=b(235),f=b(31),v=b(21);d.prototype.dispose=function(){this.$&&(this.$.rl(this.Yc),this.$.psc(this.zya),this.$.userOperationManager&&this.$.userOperationManager.so(this.Rzf),this.$.ea&&(this.$.ea.Zbj(this.PAf),this.$.ea.wk(this.Uc),
this.$.ea.yR(this.qo)),v.g(this.$)&&v.g(this.$).Ea&&v.g(this.$).Ea.dv(this.zyd))};d.prototype.mea=function(m){m=!this.$.isEditMode||(void 0===m?!1:m);this.IUf.mea(m,this.$.isEditMode?3:1);this.lS()};d.prototype.lS=function(){this.$.isEditMode&&this.IUf.lS(!this.IQ&&!this.$pi&&!this.cuc)};Mf.Object.defineProperties(d.prototype,{$pi:{configurable:!0,enumerable:!0,get:function(){return this.$.ea?this.$.ea.Hif:!1}},IQ:{configurable:!0,enumerable:!0,get:function(){return this.SJc},set:function(m){m?this.SJc=
!0:v.g(this.$)&&v.g(this.$).Ea&&(v.g(this.$).Ea.OZ()?this.SJc=!1:v.g(this.$).Ea.hx(this.zyd));this.lS()}},cuc:{configurable:!0,enumerable:!0,get:function(){return this.Cee},set:function(m){this.Cee=m;this.lS()}}});Object(u.a)(d,"SaveStatusManager",null,[3]);var r=b(911),y=l.a;Rk(c,y);c.prototype.create=function(){var m=this,w=k.a.instance;w.Tb("Common.App.SaveStatus.ISaveStatusUIHandler").execute(function(B){var A=new d(m.Dc,B);w.register(d,"Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager").tc().Cc(function(){return A});
B=Object(r.b)(m.Dc.da,300,function(){return w.resolve("Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager")});m.pb(B)})};c.ka=function(m){m.da.Ga(299,new c(m))};Object(u.a)(c,"SaveStatusFactory",l.a,[]);b.d(E,"a",function(){return a})},1602:function(u,E,b){b.r(E);u=b(1394);b=b(1455);Type.registerNamespace("_Ewa");Object(u.a)();Object(b.a)()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDS.savestatus.js.map/3418d73807cae9012c7b0efadadd0c27/EwaDS.savestatus.js.map