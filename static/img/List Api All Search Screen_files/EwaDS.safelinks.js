(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[63],{1651:function(u,E,b){function a(H){var K=J.call(this)||this;K.$=H;K.Eb();return K}function c(H){switch(H){case 1:return"Edit";case 2:return"View";case 3:return"InstantView";default:return"Unknown"}}function d(H){switch(H){case 3:return"Word";case 2:return"PowerPoint";case 1:return"Excel";default:return"Unknown"}}function e(H,K,N,M,C,Q){var P=this;M=void 0===M?!1:M;C=void 0===C?null:C;Q=void 0===Q?null:Q;this.rDa=this.qDa=
0;this.$yb=this.HSb=!1;this.Gqa=null;this.XVa=!0;this.fWb=null;r.ULS.sendTraceTag(26019598,378,100,"Initializing SafeLinksManager.");this.ib=H;this.Og=K;this.vQb=N;e.ph=Q;this.lyg=M?this.ib.Wa("SafeLinksHandlerWebServiceBase"):this.ib.Wa("WebServiceBase");this.Uxg=this.ib.Wa("SafeLinksHashedUserId");this.jXj=this.ib.Wa("SafeLinksWorkloadIdHeaderValue");this.aUb=this.ib.kd("SafeLinksMaxGetPolicyBootRetries",2);this.bUb=this.ib.kd("SafeLinksMaxGetPolicyOnLinkClickRetries",1);this.kTb=this.isSafeLinksEnabledForUser();
this.jTb=this.Ali();r.ULS.sendTraceTag(26019599,378,50,"SafeLinksManager _isEnabledForUser={0}, _isEnabledForBrowser={1}",this.kTb,this.jTb);if(this.kTb&&this.jTb){K=(H=this.h3a())?H.IsSafeLinksEnabled.toLowerCase():"";N=this.God();r.ULS.sendTraceTag(36231312,378,50,"Cached values for IsSafeLinksEnabled: {0}, IsPolicyCookieExpired: {1}.",K,N);var ka=!H||"unknown"===K||H.WasServiceDown||N,R=z.a.Cr();R&&(R.set("shouldGetSafeLinksDataFromServer",ka.toString()),R.set("isSafeLinksEnabledCacheValue",K.toString()));
this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksLicenseCheck",!1)&&C?(this.XVa=!1,C.execute(function(fa){fa.isFeatureEnabled("MsoUrlreputation",!0).then(function(ca){P.XVa=ca;R.set("isUserLicensedForSafeLinks",P.XVa.toString());A.Health.instance.recordKpiUsage("SafeLinksGetPolicy1",0,"jpittsdirects",R);P.XVa&&ka&&P.Kbc(!0);return null})})):(A.Health.instance.recordKpiUsage("SafeLinksGetPolicy1",0,"jpittsdirects",R),ka&&this.Kbc(!0))}}function k(H,K,N,M){this.ib=H;this.Og=K;this.Sog=
N;k.ph=M}function l(H,K){this.Vyc=H;this.stopwatch=K}function n(H,K,N,M,C,Q){this.PolicyCookie=this.WebAffinitizedUrl=this.IsSafeLinksEnabled=null;this.PolicyCookieTTL=0;this.WasServiceDown=!1;this.AffinitizedUrl=null;this.IsSafeLinksEnabled=H;this.WebAffinitizedUrl=K;this.PolicyCookie=N;this.PolicyCookieTTL=M;this.WasServiceDown=C;this.AffinitizedUrl=Q}b.r(E);var f=b(10);u=b(0);var v=b(4);E=b(232);var r=b(14),y=b(84);Object(u.a)(n,"SafeLinksData",null,[]);Object(u.a)(l,"SafeLinksGetUrlReputationRequestData",
null,[]);var m=b(41),w=b(39);k.prototype.pBa=function(H,K,N){try{var M=null;k.ph&&(M=k.ph.sc("WebServiceCall","SafeLinksGetUrlReputation"));var C=new l(K,M);M={};M.AffinitizedUrl=H;M.TargetUrl=K;M.PolicyCookie=N;var Q=m.c(M);this.Og.Yl(this.Sog,2,Q,null,!1,2,Object(y.a)(this,this.ULi,"onGetUrlReputationSuccessCallback"),Object(y.a)(this,this.TLi,"onGetUrlReputationFailureCallback"),C,void 0,void 0,3E3,3E3,"36");return!0}catch(P){r.ULS.sendTraceTag(588788033,378,10,P.message)}return!1};k.prototype.ULi=
function(H){var K="OnGetUrlReputationSuccessCallback: ",N=10,M=H.data.state;try{var C=m.b(H.data.Td).reputationResults[0],Q=C.navigateUrl.length,P=M.Vyc.length,ka=C.navigateUrl===M.Vyc;C.navigateUrl&&0<C.navigateUrl.length&&(M.Vyc=C.navigateUrl);K+=String.format("HttpStatus {0}, verdict {1}, clickedUrlLength = {2} navigateUrlLength {3}, navigateUrlSameAsClickedUrl {4}",H.data.httpStatus,C.verdict,P.toString(),Q.toString(),ka.toString());N=50}catch(R){K+=String.format("Exception {0}",R.message)}this.u4e(M,
K,N)};k.prototype.TLi=function(H){var K="OnGetUrlReputationFailureCallback: ",N=H.data.state;try{K+=String.format("HttpStatus {0}",H.data.httpStatus)}catch(M){K+=String.format("Exception {0}",M.message)}this.u4e(N,K,10)};k.prototype.u4e=function(H,K,N){H.stopwatch&&(H.stopwatch.stop(),H.stopwatch=null);r.ULS.sendTraceTag(588788034,378,N,K);w.a.Ze(H.Vyc,void 0,"noopener,noreferrer","SafeLinksNav")};k.ph=null;Object(u.a)(k,"SafeLinksNavigationHelper",null,[]);var B;(function(H){H[H.enabledByPolicy=
0]="enabledByPolicy";H[H.disabledByPolicy=1]="disabledByPolicy";H[H.disabled_GetPolicyFailure=2]="disabled_GetPolicyFailure";H[H.disabled_PendingGetPolicyRequest=3]="disabled_PendingGetPolicyRequest"})(B||(B={}));Object(u.b)("SafeLinksNavigationState",B);var A=b(99),z=b(136),x=b(1027),D=b(260),I=b(246),F=b(897),G=b(27),T=b(178),O=b(190);e.prototype.pBa=function(H){if(!H)return r.ULS.sendTraceTag(593367827,378,10,"SafeLinksManager.TryNavigate: Null/Empty targetUrl"),!1;var K=this.Zhi(H);r.ULS.sendTraceTag(594830615,
378,50,"SafeLinksManager.TryNavigate: isSupportedHyperLinkType={0},_isEnabledForUser={1},_isEnabledForBrowser={2},_isUserLicensedForSafeLinks={3}",K,this.kTb,this.jTb,this.XVa);if(!(K&&this.kTb&&this.jTb&&this.XVa))return!1;var N=this.Oxj();K=N.state;N=N.returnValue;r.ULS.sendTraceTag(595079385,378,50,"ShouldTryUsingSafeLinksService returned NavigationState={0}",B[K]);var M=z.a.Cr();M&&M.set("SafeLinksNavigationState",B[K]);A.Health.instance.recordKpiUsage("SafeLinksNavigations",0,"jpittsdirects",
M);if(!N)return 2!==K&&3!==K||A.Health.instance.recordKpiFailure("SafeLinksNavigations",B[K],!1,!0,null),!1;r.ULS.sendTraceTag(26019601,378,50,"Using safelinks to navigate hyperlink");if(this.Wxj())return this.God()?!1:this.bCi.pBa(this.hHh(),H,this.V_e());if(!this.God())return this.D$f(H),!0;this.Gqa=H;r.ULS.sendTraceTag(24462627,378,50,"Refreshing the cache as policy cookie expired.");this.$yb=!1;this.Kbc();return!0};e.prototype.Zhi=function(H){H=H.toLowerCase();var K=this.ib.dw("SafeLinksUnsupportedProtocols");
if(K)for(var N=0;N<K.length;N++)if(H.startsWith(K[N]))return!1;return!0};e.prototype.Kbc=function(H){H=void 0===H?!1:H;var K=z.a.Cr();K&&K.set("isOnBootRequest",H.toString());A.Health.instance.recordKpiUsage("SafeLinksGetPolicySuccessfulRequest",1,"jpittsdirects",K);A.Health.instance.recordKpiUsage("SafeLinksGetPolicyFailedRequest",0,"jpittsdirects",K);K=this.p2c("SafeLinksGetPolicy");this.Og.Yl(this.wTh,1,null,null,!0,2,Object(y.a)(this,this.RVh,"getSafeLinksDataFromServer_OnSuccessCallback"),Object(y.a)(this,
this.QVh,"getSafeLinksDataFromServer_OnFailureCallback"),K,void 0,void 0,void 0,void 0,"23");this.$yb=H;this.HSb=!0;H?this.qDa++:this.rDa++};e.prototype.RVh=function(H){var K=I.a.dDi,N="";try{this.HSb=this.$yb=!1;var M=this.fyc(H.data.state).returnValue,C=Object.assign(new O.a,{durationMs:M});A.Health.instance.recordKpiSuccess("SafeLinksGetPolicySuccessfulRequest",C);r.ULS.sendTraceTag(594830614,378,50,"GetSafeLinksDataFromServer_OnSuccessCallback: HttpStatus {0}, data length {1}, Duration {2}",H.data.httpStatus,
H.data.Td.length,M);if(H.data.httpStatus!==I.a.JO)N="Unexpected httpStatus: "+H.data.httpStatus.toString();else{M=null;try{M=m.b(H.data.Td)}catch(X){N="Exception:"+X.toString()+" deserializing response";return}if(M){var Q=M.IsSafeLinksEnabled;if(void 0===Q||null===Q||0>=Q.length)N="Invalid isSafeLinksEnabledString";else{r.ULS.sendTraceTag(594830613,378,50,"Retrieved isSafeLinksEnabledString {0}",Q);var P=e.$Bd(Q);if(void 0===M.WebAffinitizedUrl||null===M.WebAffinitizedUrl||0>=M.WebAffinitizedUrl.length)N=
"Invalid WebAffinitizedUrl";else if(void 0===M.PolicyCookie||null===M.PolicyCookie||0>=M.PolicyCookie.length)N="Invalid PolicyCookie";else if(void 0===M.PolicyCookieTTL||null===M.PolicyCookieTTL)N="Invalid PolicyCookieTTL";else{var ka=M.WebAffinitizedUrl,R=M.PolicyCookie,fa=M.AffinitizedUrl,ca=new Date;ca.setMinutes(ca.getMinutes()+(5<M.PolicyCookieTTL?M.PolicyCookieTTL-5:0));var ea=ca.getTime(),wa=new n(Q,ka,R,ea,!1,fa);this.zXf(wa);K=H.data.httpStatus;this.Gqa&&(P?(this.D$f(this.Gqa),this.rDa=this.qDa=
0):(r.ULS.sendTraceTag(26019602,378,50,"SafeLinks is disabled by admin; Navigating without SafeLinks"),A.Health.instance.recordKpiFailure("SafeLinksNavigations","disabledByPolicy",!0,!0,null),w.a.PU(this.Gqa)),this.Gqa=null)}}}else N="Error when serializing response into SafeLinksData. SafeLinksData is null."}}catch(X){N="GetSafeLinksDataFromServer_OnSuccessCallback: Exception:  "+X.toString()}finally{K!==I.a.JO&&this.t4e(K,N)}};e.prototype.QVh=function(H){this.HSb=!1;var K=500,N="";try{var M=this.fyc(H.data.state).returnValue,
C=Object.assign(new O.a,{durationMs:M});K=H.data.httpStatus;A.Health.instance.recordKpiFailure("SafeLinksGetPolicyFailedRequest","HttpStatusCode_"+K.toString(),!1,!0,C);N="Request Failed, Status="+F.a[H.data.status]+" Duration: "+M}catch(Q){N="GetSafeLinksDataFromServer_OnFailureCallback Exception: "+Q.toString()}finally{this.t4e(K,N)}};e.prototype.t4e=function(H,K){K=void 0===K?"":K;try{if(r.ULS.sendTraceTag(594830612,378,10,"HandleGetPolicyRequestError: HttpStatus {0}, Error {1}",H,K),this.qDa<
this.aUb&&this.rDa<this.bUb)this.Kbc(this.$yb);else{this.$yb=!1;r.ULS.sendTraceTag(24462656,378,10,"Exhausted all retries for SafeLinks GetPolicy call. OnBootRetries: {0}, OnClickRetries: {1}, HttpStatus: {2}, Error: {3}",this.qDa,this.rDa,H,K);K=null;var N=z.a.Cr();N&&(N.set("HttpStatus",H.toString()),K=Object.assign(new O.a,{extendedProperties:N}));A.Health.instance.recordKpiFailure("SafeLinksGetPolicy1","GetPolicyRequestError",!1,!0,K);var M=new n("false","","",0,!0,"");this.zXf(M);this.Gqa&&(r.ULS.sendTraceTag(26019603,
378,50,"Error occurred during at-click GetPolicy call, NavigationState = {0}","disabled_GetPolicyFailure"),A.Health.instance.recordKpiFailure("SafeLinksNavigations","disabled_GetPolicyFailure",!1,!0,null),w.a.PU(this.Gqa),this.Gqa=null)}}catch(C){r.ULS.sendTraceTag(594830611,378,10,"HandleGetPolicyRequestError: Exception {0}",C.toString())}};e.prototype.D$f=function(H){var K=this.V_e(),N=this.g_h(),M={};M.Url=H;M.SafeLinksCookie=K;M.CorrelationId=T.a.create().toString();M.WorkloadId=this.jXj;M.UserAgentInfo=
G.a.pGa+"|"+this.appName;r.ULS.sendTraceTag(23900187,378,50,"Validating hyperlink with request correlation: {0}",M.CorrelationId);w.a.Epc(w.a.jX(4),N,M)};e.prototype.isSafeLinksEnabledForUser=function(){var H=this.ib.Wa("IsSafeLinksEnabledForUser");return H?e.$Bd(H):!1};e.prototype.Ali=function(){var H=this.ib.dw("SafeLinksDisabledBrowsers");if(G.a.HC){if(this.ib.Zn("SafeLinksForTeamsIsEnabled")&&this.ib.qa("SafeLinksForTeamsIsEnabled"))return!0;if(Array.contains(H,"Electron"))return!1}else if(Array.contains(H,
G.a.pGa))return!1;return"officecomhwa"===(this.ib.Wa(v.AFrameworkApplication.gea)||"").toLowerCase()?!1:!0};e.prototype.Wxj=function(){return-1!==window.location.href.indexOf("&wd_slnh=1")?!0:G.a.HC};e.prototype.Oxj=function(){var H=0;var K=this.h3a(),N=K?K.IsSafeLinksEnabled:"";if(""!==N)return K.WasServiceDown?(r.ULS.sendTraceTag(51663971,378,50,"Failed to retrieve policy data"),{returnValue:!1,state:2}):"false"===N.toLowerCase()?(r.ULS.sendTraceTag(51664E3,378,50,"SafeLinks disabled for the user"),
{returnValue:!1,state:1}):{returnValue:e.$Bd(N),state:H};if(this.HSb)return H=3,r.ULS.sendTraceTag(595079384,378,50,"Currently getting SafeLinks policy"),{returnValue:!1,state:H};if(this.qDa>=this.aUb||this.rDa>=this.bUb)return H=2,r.ULS.sendTraceTag(51664001,378,50,"Exhausted all retries- Failure in GetPolicy for SafeLinks ({0}/{1} boot, {2}/{3} onClick)",this.qDa,this.aUb,this.rDa,this.bUb),{returnValue:!1,state:H};r.ULS.sendTraceTag(23900182,378,10,"Inconsistent SafeLinks state: SafeLinks cache data is null with no on boot request pending, and {0} retries left over. Perhaps LocalStorage is inaccessable.",
this.aUb+this.bUb-(this.qDa+this.rDa));return{returnValue:!0,state:H}};e.prototype.V_e=function(){var H=this.h3a();return H?H.PolicyCookie:""};e.prototype.g_h=function(){var H=this.h3a();return H?H.WebAffinitizedUrl:""};e.prototype.hHh=function(){var H=this.h3a();return H?H.AffinitizedUrl:""};e.prototype.mNh=function(){var H=new Date;try{var K=this.h3a();H.setTime(K?K.PolicyCookieTTL:0)}catch(N){r.ULS.sendTraceTag(24462658,378,10,"Exception occured while fetching expiration time from cache: {0}",
N)}return H};e.prototype.God=function(){var H=this.mNh();return!!H&&H.getTime()<Date.now()};e.prototype.h3a=function(){if(!this.fWb){var H=x.a.instance.getItem(this.userId);if(!H||""===H)return null;this.fWb=JSON.parse(H)}return this.fWb};e.prototype.zXf=function(H){if(void 0===H||null===H)throw Error.argumentNull("safeLinksData");if(void 0===H.IsSafeLinksEnabled||null===H.IsSafeLinksEnabled||0>=H.IsSafeLinksEnabled.length)throw Error.argumentNull("safeLinksData.IsSafeLinksEnabled");this.fWb=H;H.WasServiceDown||
this.rXj(H)};e.prototype.rXj=function(H){H=JSON.stringify(H);x.a.instance.setItem(this.userId,H)};e.prototype.p2c=function(H){return void 0!==e.ph&&null!==e.ph?e.ph.sc("WebServiceCall",H):null};e.prototype.fyc=function(H){if(void 0!==H&&null!==H){var K=H.qc;H.stop();return{returnValue:K,stopwatch:null}}return{returnValue:null,stopwatch:H}};e.$Bd=function(H){return"false"!==H.toLowerCase()?!0:!1};Mf.Object.defineProperties(e.prototype,{appName:{configurable:!0,enumerable:!0,get:function(){return this.vQb}},
BCc:{configurable:!0,enumerable:!0,get:function(){return this.lyg}},userId:{configurable:!0,enumerable:!0,get:function(){return this.Uxg}},wTh:{configurable:!0,enumerable:!0,get:function(){var H=this.BCc?this.BCc+"/":"",K=new D.QueryStringBuilder("SafeLinksHandler.ashx");K.Ei("app",this.appName);this.ib.qa("SafeLinksUseDebugHeader")&&K.Ei("action","debug");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthAATPOP",!1)&&K.Ei("s2satpop","1");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthAAT",
!1)&&K.Ei("s2saat","1");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthUseE03App",!1)&&K.Ei("s2se03","1");return String.format("{0}{1}&{2}",H,K.toString(),v.AFrameworkApplication.Yi)}},uZh:{configurable:!0,enumerable:!0,get:function(){var H=this.BCc?this.BCc+"/":"",K=new D.QueryStringBuilder("SafeLinksHandler.ashx");K.Ei("app",this.appName);this.ib.qa("SafeLinksUseDebugHeader")&&K.Ei("action","debug");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthAATPOP",
!1)&&K.Ei("s2satpop","1");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthAAT",!1)&&K.Ei("s2saat","1");this.ib.getBooleanFeatureGate("Microsoft.Office.SharedOnline.SafeLinksS2SAuthUseE03App",!1)&&K.Ei("s2se03","1");K.Ei("slrt","GetUrlReputation");return String.format("{0}{1}&{2}",H,K.toString(),v.AFrameworkApplication.Yi)}},bCi:{configurable:!0,enumerable:!0,get:function(){e.BPc||(e.BPc=new k(this.ib,this.Og,this.uZh,e.ph));return e.BPc}}});e.ph=null;e.BPc=null;Object(u.a)(e,
"SafeLinksManager",null,[954]);var U=b(911),J=E.a;Rk(a,J);a.prototype.create=function(){var H=Object(U.a)(this.$.da,269,function(){return new e(v.AFrameworkApplication.fa,v.AFrameworkApplication.qd,String.format("{0}-{1}",d(v.AFrameworkApplication.ta.Qa.Cj),c(v.AFrameworkApplication.ta.Qa.lca)))});this.pb(H)};a.ka=function(H){H.da.Ga(270,new a(H))};Object(u.a)(a,"SafeLinksManagerFactory",E.a,[]);Type.registerNamespace("_Ewa");Type.registerNamespace("Common.App.SafeLinks");(function(){f.a.Fa(function(H){a.ka(H)})})()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDS.safelinks.js.map/f5b71acf369912b3763206eb73e8b45f/EwaDS.safelinks.js.map