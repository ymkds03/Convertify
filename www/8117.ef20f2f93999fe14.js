"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8117],{8117:(P,p,r)=>{r.r(p),r.d(p,{ConversionesDivisasPageModule:()=>b});var m=r(6814),u=r(95),t=r(4532),g=r(9310),h=r(5861),e=r(6689),f=r(9862);function C(i,l){if(1&i&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&i){const c=e.oxw();e.xp6(1),e.hij(" ",c.mensajeError," ")}}const _=[{path:"",component:(()=>{var i;class l{constructor(o,n,s,a){this.navCtrl=o,this.http=n,this.activatedRoute=s,this.toastController=a,this.mensajeError="",this.monedaOrigen="USD",this.monedaDestino="MXN",this.cantidad=null,this.resultado=0,this.cotizaciones={},this.isMenuOpen=!1,this.convertir_de_espanol="Convertir:",this.convertir_de_ingles="Convert:",this.cantidad_espanol="Cantidad a convertir:",this.cantidad_ingles="Amount to convert:",this.a_espanol="a:   $",this.a_ingles="a:",this.resultado_espanol="Resultado:",this.resultado_ingles="Result:",this.boton_convertir_espanol="Convertir",this.boton_convertir_ingles="Convert",this.divisas_espanol="Divisas",this.divisas_ingles="Currencies",this.dolares_americanos_espa\u00f1ol="D\xf3lares americanos",this.dolares_americanos_ingles="American dollars",this.not_conection_espanol="No hay conexi\xf3n a internet. Usando \xfaltimos datos conocidos.",this.not_conection_ingles="there is no Internet conection. Using latest known data.",this.idiomaSeleccionado="",this.resultadoFormateado=""}ngOnInit(){this.obtenerCotizaciones(),this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.idiomaSeleccionado=localStorage.getItem("idiomaSeleccionado")||"es"}mostrarToast(o){var n=this;return(0,h.Z)(function*(){(yield n.toastController.create({message:o,duration:1e4,position:"middle"})).present()})()}goToMainMenu(){this.navCtrl.navigateRoot("/folder/Inbox")}goBack(){this.navCtrl.back()}obtenerCotizaciones(){var o=this;this.http.get("https://v6.exchangerate-api.com/v6/c64d997e74f7dd3476e09f4b/latest/USD").subscribe(a=>{const d=this.transformarCotizaciones(a.conversion_rates);this.cotizaciones=d,localStorage.setItem("cotizaciones",JSON.stringify(d))},function(){var a=(0,h.Z)(function*(d){const M="es"===o.idiomaSeleccionado?"No hay conexi\xf3n a internet. Usando \xfaltimos datos conocidos.":"No internet connection. Using last known data.";yield o.mostrarToast(M);const v=localStorage.getItem("cotizaciones");v?o.cotizaciones=JSON.parse(v):o.http.get("assets/data/cotizaciones.json").subscribe(D=>{o.cotizaciones=D})});return function(d){return a.apply(this,arguments)}}())}transformarCotizaciones(o){let n={USD:{},EUR:{},MXN:{},CAD:{}};for(let s in n)o[s]&&(n[s]=o);return n}convertir(){if(this.mensajeError="",this.monedaOrigen&&this.monedaDestino)if(null===this.cantidad||this.cantidad<=0)this.mensajeError="es"===this.idiomaSeleccionado?"La cantidad debe ser mayor a 0":"Amount must be greater than 0";else{const o=this.cotizaciones[this.monedaOrigen][this.monedaDestino];o?(this.resultado=this.cantidad*o,this.resultadoFormateado=this.resultado.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:2})):this.mensajeError="es"===this.idiomaSeleccionado?"Error en la conversi\xf3n.":"Conversion error."}}}return(i=l).\u0275fac=function(o){return new(o||i)(e.Y36(t.SH),e.Y36(f.eN),e.Y36(g.gz),e.Y36(t.yF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-conversiones-divisas"]],decls:41,vars:12,consts:[[3,"translucent"],[1,"titulo-menu"],["slot","end"],[3,"click"],["slot","icon-only","name","home",1,"toolbar-button"],[1,"ion-padding",3,"fullscreen"],[1,"form-container"],["lines","none"],[1,"horizontal-item"],["type","number","placeholder","Ingresa cantidad",2,"width","80px","margin-left","10px",3,"ngModel","ngModelChange","keydown.enter"],["interface","popover",2,"margin-left","10px",3,"ngModel","ngModelChange"],["value","USD"],["value","CAD"],["value","EUR"],["value","MXN"],["class","error-message",4,"ngIf"],["type","text","readonly","",2,"width","50px","margin-left","10px","color","red",3,"value","placeholder"],["interface","popover",3,"ngModel","ngModelChange"],["expand","block",3,"click"],[1,"error-message"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",2)(5,"ion-button",3),e.NdJ("click",function(){return n.goToMainMenu()}),e._UZ(6,"ion-icon",4),e.qZA()()()(),e.TgZ(7,"ion-content",5)(8,"div",6)(9,"ion-list",7)(10,"ion-item",8)(11,"ion-label"),e._uU(12),e.qZA(),e.TgZ(13,"ion-input",9),e.NdJ("ngModelChange",function(a){return n.cantidad=a})("keydown.enter",function(){return n.convertir()}),e._uU(14,"$ "),e.qZA(),e.TgZ(15,"ion-select",10),e.NdJ("ngModelChange",function(a){return n.monedaOrigen=a}),e.TgZ(16,"ion-select-option",11),e._uU(17,"D\xf3lares Estadounidenses (EUA)"),e.qZA(),e.TgZ(18,"ion-select-option",12),e._uU(19,"D\xf3lares Canadienses (CAD)"),e.qZA(),e.TgZ(20,"ion-select-option",13),e._uU(21,"Euros"),e.qZA(),e.TgZ(22,"ion-select-option",14),e._uU(23,"Pesos Mexicanos (MXN)"),e.qZA()()(),e.YNc(24,C,2,1,"div",15),e.TgZ(25,"ion-item")(26,"ion-label"),e._uU(27),e.qZA(),e.TgZ(28,"ion-input",16),e._uU(29,"$ "),e.qZA(),e.TgZ(30,"ion-select",17),e.NdJ("ngModelChange",function(a){return n.monedaDestino=a}),e.TgZ(31,"ion-select-option",11),e._uU(32,"D\xf3lares Estadounidenses (EUA)"),e.qZA(),e.TgZ(33,"ion-select-option",12),e._uU(34,"D\xf3lares Canadienses (CAD)"),e.qZA(),e.TgZ(35,"ion-select-option",13),e._uU(36,"Euros"),e.qZA(),e.TgZ(37,"ion-select-option",14),e._uU(38,"Pesos Mexicanos (MXN)"),e.qZA()()(),e.TgZ(39,"ion-button",18),e.NdJ("click",function(){return n.convertir()}),e._uU(40),e.qZA()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(3),e.Oqu("es"===n.idiomaSeleccionado?"Divisas":"Currencies"),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(5),e.Oqu("es"===n.idiomaSeleccionado?n.convertir_de_espanol:n.convertir_de_ingles),e.xp6(1),e.Q6J("ngModel",n.cantidad),e.xp6(2),e.Q6J("ngModel",n.monedaOrigen),e.xp6(9),e.Q6J("ngIf",n.mensajeError),e.xp6(3),e.Oqu("es"===n.idiomaSeleccionado?"A:":"To:"),e.xp6(1),e.s9C("placeholder","es"===n.idiomaSeleccionado?"Resultado":"Result"),e.Q6J("value",n.resultadoFormateado),e.xp6(2),e.Q6J("ngModel",n.monedaDestino),e.xp6(10),e.hij(" ","es"===n.idiomaSeleccionado?"Convertir":"Convert"," "))},dependencies:[m.O5,u.JJ,u.On,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.q_,t.t9,t.n0,t.wd,t.sr,t.as,t.QI,t.j9],styles:[".titulo-menu[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:justify;font-weight:700;font-family:Poppins,sans-serif}.toolbar-button[_ngcontent-%COMP%]{color:#06f}ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;padding:5px;margin:70px auto 0;background-color:#1e1e1e;border-radius:8px;box-shadow:0 4px 6px #0000001a}ion-item[_ngcontent-%COMP%]{--background: var(--input-background-color, #ffffff);--color: var(--text-color, #0b2e50);--placeholder-color: var(--placeholder-text-color, #6c757d);margin:12px;border:1px #57585a;border-radius:8px}ion-input[_ngcontent-%COMP%]{--background: #f8f9fa;--color: #212529;--placeholder-color: #adb5bd;--padding-start: 12px;--padding-end: 12px;border:none;border-radius:10px;font-size:20px;height:45px;box-shadow:inset 0 5px 15px #00000013;margin:5px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}ion-button[expand=block][_ngcontent-%COMP%]{--background: var(--button-background-color, #0066ff);--color: var(--button-text-color, #ffffff);text-align:center;border-radius:8px;font-size:18px;padding:12px;transition:background-color .3s ease;width:100%;max-width:455px;height:60px;margin:auto}ion-button[expand=block][_ngcontent-%COMP%]:hover{--background: #0052aa}@media (max-width: 600px){ion-button[expand=block][_ngcontent-%COMP%]{font-size:16px;padding:10px;height:50px}}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:8px;margin-bottom:8px;text-align:center}"]}),l})()}];let x=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(_),g.Bz]}),l})(),b=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,u.u5,t.Pc,x]}),l})()}}]);