"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3611],{3611:(O,d,r)=>{r.r(d),r.d(d,{PresionPageModule:()=>H});var s=r(6814),g=r(95),o=r(5548),l=r(4670),n=r(6689);function u(a,t){if(1&a&&(n.TgZ(0,"ion-select-option",19),n._uU(1),n.qZA()),2&a){const i=t.$implicit;n.Q6J("value",i.value),n.xp6(1),n.Oqu(i.name)}}function p(a,t){if(1&a&&(n.TgZ(0,"div",20),n._uU(1),n.qZA()),2&a){const i=n.oxw();n.xp6(1),n.hij(" ",i.mensajeError," ")}}function h(a,t){if(1&a&&(n.TgZ(0,"ion-select-option",19),n._uU(1),n.qZA()),2&a){const i=t.$implicit;n.Q6J("value",i.value),n.xp6(1),n.Oqu(i.name)}}const f=[{path:"",component:(()=>{class a{constructor(i,e){this.navCtrl=i,this.activatedRoute=e,this.mensajeError="",this.presion_espanol="Presi\xf3n",this.presion_ingles="Pressure",this.convertir_de_espanol="Convertir:",this.convertir_de_ingles=" Convert:",this.cantidad_espanol="Cantidad a convertir:",this.cantidad_ingles="Amount :",this.a_espanol="A  :",this.a_ingles="To:",this.resultado_espanol="Resultado:",this.resultado_ingles="Result:",this.boton_convertir_espanol="Convertir",this.boton_convertir_ingles="Convert",this.idiomaSeleccionado="",this.resultadoFormateado="",this.unidadSeleccionadaOrigen="Pa",this.unidadSeleccionadaDestino="kPa",this.unidades=[{name:"atm",value:"atm"},{name:"Pa",value:"Pa"},{name:"hPa (mbar)",value:"hPa"},{name:"kPa (kN/m2)",value:"kPa"},{name:"MPa",value:"MPa"},{name:"bar",value:"bar"},{name:"psi (lbf/in2)",value:"psi"},{name:"psf (lbf/ft2)",value:"psf"},{name:"kgf/cm2",value:"kgf/cm2"},{name:"kgf/m2",value:"kgf/m2"},{name:"mmHg (Torr)",value:"mmHg"},{name:"cmHg",value:"cmHg"},{name:"inchHg",value:"inchHg"},{name:"mmH2O",value:"mmH2O"},{name:"cmH2O",value:"cmH2O"},{name:"inchH2O",value:"inchH2O"}],this.cantidad=0,this.resultado=0}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.idiomaSeleccionado=localStorage.getItem("idiomaSeleccionado")||"es"}goToMainMenu(){this.navCtrl.navigateRoot("/folder/Inbox")}goBack(){this.navCtrl.back()}convertir(){if(this.mensajeError="",this.unidadSeleccionadaOrigen===this.unidadSeleccionadaDestino)return void(this.mensajeError="es"===this.idiomaSeleccionado?"La unidad de origen y la unidad de destino deben ser diferentes.":"The source unit and the destination unit must be different.");if(this.cantidad<=0)return void(this.mensajeError="es"===this.idiomaSeleccionado?"La cantidad debe ser mayor a 0":"Amount must be greater than 0");const i=this.obtenerFactorConversion(this.unidadSeleccionadaOrigen,this.unidadSeleccionadaDestino);this.resultado=this.cantidad*i,this.resultadoFormateado=this.resultado.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:6})}obtenerFactorConversion(i,e){return{atm:{atm:1,Pa:101325,hPa:1013.25,kPa:101.325,MPa:.101325,bar:1.01325,psi:14.6959,psf:2048.16,"kgf/cm2":1.03323,"kgf/m2":10332.3,mmHg:760,cmHg:76,inchHg:29.9213,mmH2O:10332.3,cmH2O:1033.23,inchH2O:406.793},Pa:{atm:986923e-11,Pa:1,hPa:.01,kPa:.001,MPa:1e-6,bar:1e-5,psi:145038e-9,psf:.0208854,"kgf/cm2":101972e-10,"kgf/m2":1,mmHg:.00750062,cmHg:.750062,inchHg:.2953,mmH2O:.101972,cmH2O:10.1972,inchH2O:.401463},hPa:{atm:986923e-9,Pa:100,hPa:1,kPa:.1,MPa:1e-4,bar:.001,psi:.0145038,psf:2.08854,"kgf/cm2":.00101972,"kgf/m2":100,mmHg:.750062,cmHg:75.0062,inchHg:29.53,mmH2O:10.1972,cmH2O:1019.72,inchH2O:4.01463},kPa:{atm:.00986923,Pa:1e3,hPa:10,kPa:1,MPa:.001,bar:.01,psi:.145038,psf:20.8854,"kgf/cm2":.0101972,"kgf/m2":1e3,mmHg:7.50062,cmHg:750.062,inchHg:295.3,mmH2O:101.972,cmH2O:10197.2,inchH2O:40.1463},MPa:{atm:9.86923,Pa:1e6,hPa:1e4,kPa:1e3,MPa:1,bar:10,psi:145.038,psf:2088.54,"kgf/cm2":10.1972,"kgf/m2":1e6,mmHg:7500.62,cmHg:750062,inchHg:295300,mmH2O:101972,cmH2O:10197200,inchH2O:4014.63},bar:{atm:.986923,Pa:1e5,hPa:1e3,kPa:100,MPa:.1,bar:1,psi:14.5038,psf:2088.54,"kgf/cm2":1.01972,"kgf/m2":1e5,mmHg:750.062,cmHg:75006.2,inchHg:2953,mmH2O:10197.2,cmH2O:101972,inchH2O:4014.63},psi:{atm:.0680459,Pa:6894.76,hPa:68.9476,kPa:6.89476,MPa:.00689476,bar:.0689476,psi:1,psf:144,"kgf/cm2":.070307,"kgf/m2":6894.76,mmHg:51.7149,cmHg:5171.49,inchHg:2036.76,mmH2O:703.068,cmH2O:70306.8,inchH2O:27679.9},psf:{atm:490066e-9,Pa:47.8803,hPa:.478803,kPa:.0478803,MPa:478803e-10,bar:478803e-9,psi:.00694444,psf:1,"kgf/cm2":511822e-9,"kgf/m2":47.8803,mmHg:.359131,cmHg:35.9131,inchHg:14.072,mmH2O:48.8307,cmH2O:4883.07,inchH2O:1920},"kgf/cm2":{atm:.967841,Pa:98066.5,hPa:980.665,kPa:98.0665,MPa:.0980665,bar:.980665,psi:14.2233,psf:2048.16,"kgf/cm2":1,"kgf/m2":98066.5,mmHg:735.559,cmHg:73555.9,inchHg:2895.11,mmH2O:1e4,cmH2O:1e6,inchH2O:39370.1},"kgf/m2":{atm:986923e-11,Pa:1,hPa:.01,kPa:.001,MPa:1e-6,bar:1e-5,psi:145038e-9,psf:.0208854,"kgf/cm2":101972e-10,"kgf/m2":1,mmHg:.00750062,cmHg:.750062,inchHg:.2953,mmH2O:.101972,cmH2O:10.1972,inchH2O:.401463},mmHg:{atm:.00131579,Pa:133.322,hPa:1.33322,kPa:.133322,MPa:133322e-9,bar:.00133322,psi:.0193368,psf:2.78449,"kgf/cm2":.00135951,"kgf/m2":133.322,mmHg:1,cmHg:100,inchHg:39.3701,mmH2O:13.5951,cmH2O:1359.51,inchH2O:53.3789},cmHg:{atm:.0131579,Pa:1333.22,hPa:13.3322,kPa:1.33322,MPa:.00133322,bar:.0133322,psi:.193368,psf:27.8449,"kgf/cm2":.0135951,"kgf/m2":1333.22,mmHg:10,cmHg:1,inchHg:393.701,mmH2O:135.951,cmH2O:13595.1,inchH2O:533.789},inchHg:{atm:.0334211,Pa:3386.39,hPa:33.8639,kPa:3.38639,MPa:.00338639,bar:.0338639,psi:.491154,psf:70.726,"kgf/cm2":.0345316,"kgf/m2":3386.39,mmHg:25.4,cmHg:2.54,inchHg:1,mmH2O:345.316,cmH2O:34531.6,inchH2O:13595.1},mmH2O:{atm:.00980665,Pa:980.665,hPa:9.80665,kPa:.980665,MPa:980665e-9,bar:.00980665,psi:.142238,psf:20.3862,"kgf/cm2":.0101972,"kgf/m2":980.665,mmHg:7.50062,cmHg:750.062,inchHg:295.3,mmH2O:1,cmH2O:100,inchH2O:39.3701},cmH2O:{atm:980665e-10,Pa:9.80665,hPa:.0980665,kPa:.00980665,MPa:980665e-11,bar:980665e-10,psi:.00142234,psf:.204816,"kgf/cm2":101972e-9,"kgf/m2":9.80665,mmHg:.750062,cmHg:75.0062,inchHg:29.53,mmH2O:.01,cmH2O:1,inchH2O:.393701},inchH2O:{atm:.002491,Pa:248.84,hPa:2.4884,kPa:.24884,MPa:24884e-8,bar:.0024884,psi:.0361273,psf:5.20249,"kgf/cm2":.0026457,"kgf/m2":248.84,mmHg:1.86832,cmHg:186.832,inchHg:73.5559,mmH2O:2.5401,cmH2O:254.01,inchH2O:1}}[i][e]}}return a.\u0275fac=function(i){return new(i||a)(n.Y36(o.SH),n.Y36(l.gz))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-presion"]],decls:27,vars:13,consts:[[3,"translucent"],[1,"titulo-menu"],["slot","end"],[3,"click"],["slot","icon-only","name","home",1,"toolbar-button"],["slot","icon-only","name","arrow-back",1,"toolbar-button"],[1,"ion-padding",3,"fullscreen"],[1,"form-container"],["lines","none"],[1,"horizontal-item"],[1,"convertir-label"],["type","number",1,"input-ingresar",2,"width","80px","margin-left","10px",3,"ngModel","ngModelChange","keydown.enter"],[1,"unidad-seleccionada",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","error-message",4,"ngIf"],[1,"convertir-item"],[1,"a"],["type","text","placeholder","Resultado","readonly","",1,"input-resultado",2,"width","50px","margin-left","10px","color","red",3,"value"],["expand","block",1,"boton-convertir",3,"click"],[3,"value"],[1,"error-message"]],template:function(i,e){1&i&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),n._uU(3),n.qZA(),n.TgZ(4,"ion-buttons",2)(5,"ion-button",3),n.NdJ("click",function(){return e.goToMainMenu()}),n._UZ(6,"ion-icon",4),n.qZA(),n.TgZ(7,"ion-button",3),n.NdJ("click",function(){return e.goBack()}),n._UZ(8,"ion-icon",5),n.qZA()()()(),n.TgZ(9,"ion-content",6)(10,"div",7)(11,"ion-list",8)(12,"ion-item",9)(13,"ion-label",10),n._uU(14),n.qZA(),n.TgZ(15,"ion-input",11),n.NdJ("ngModelChange",function(m){return e.cantidad=m})("keydown.enter",function(){return e.convertir()}),n.qZA(),n.TgZ(16,"ion-select",12),n.NdJ("ngModelChange",function(m){return e.unidadSeleccionadaOrigen=m}),n.YNc(17,u,2,2,"ion-select-option",13),n.qZA()(),n.YNc(18,p,2,1,"div",14),n.TgZ(19,"ion-item",15)(20,"ion-label",16),n._uU(21),n.qZA(),n._UZ(22,"ion-input",17),n.TgZ(23,"ion-select",12),n.NdJ("ngModelChange",function(m){return e.unidadSeleccionadaDestino=m}),n.YNc(24,h,2,2,"ion-select-option",13),n.qZA()(),n.TgZ(25,"ion-button",18),n.NdJ("click",function(){return e.convertir()}),n._uU(26),n.qZA()()()()),2&i&&(n.Q6J("translucent",!0),n.xp6(3),n.Oqu("es"===e.idiomaSeleccionado?e.presion_espanol:e.presion_ingles),n.xp6(6),n.Q6J("fullscreen",!0),n.xp6(5),n.Oqu("es"===e.idiomaSeleccionado?e.convertir_de_espanol:e.convertir_de_ingles),n.xp6(1),n.Q6J("ngModel",e.cantidad),n.xp6(1),n.Q6J("ngModel",e.unidadSeleccionadaOrigen),n.xp6(1),n.Q6J("ngForOf",e.unidades),n.xp6(1),n.Q6J("ngIf",e.mensajeError),n.xp6(3),n.Oqu("es"===e.idiomaSeleccionado?e.a_espanol:e.a_ingles),n.xp6(1),n.Q6J("value",e.resultadoFormateado),n.xp6(1),n.Q6J("ngModel",e.unidadSeleccionadaDestino),n.xp6(1),n.Q6J("ngForOf",e.unidades),n.xp6(2),n.Oqu("es"===e.idiomaSeleccionado?e.boton_convertir_espanol:e.boton_convertir_ingles))},dependencies:[s.sg,s.O5,g.JJ,g.On,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.t9,o.n0,o.wd,o.sr,o.as,o.QI,o.j9],styles:[".titulo-menu[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:justify;font-weight:700;font-family:Poppins,sans-serif}.toolbar-button[_ngcontent-%COMP%]{color:#06f}ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;padding:5px;margin:70px auto 0;background-color:#1e1e1e;border-radius:8px;box-shadow:0 4px 6px #0000001a}ion-item[_ngcontent-%COMP%]{--background: var(--input-background-color, #ffffff);--color: var(--text-color, #0b2e50);--placeholder-color: var(--placeholder-text-color, #6c757d);margin:12px;border:1px #57585a;border-radius:8px}ion-input[_ngcontent-%COMP%]{--background: #f8f9fa;--color: #212529;--placeholder-color: #adb5bd;--padding-start: 12px;--padding-end: 12px;border:none;border-radius:10px;font-size:20px;height:45px;box-shadow:inset 0 5px 15px #00000013;margin:5px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}ion-button[expand=block][_ngcontent-%COMP%]{--background: var(--button-background-color, #0066ff);--color: var(--button-text-color, #ffffff);text-align:center;border-radius:8px;font-size:18px;padding:12px;transition:background-color .3s ease;width:100%;max-width:455px;height:60px;margin:auto}ion-button[expand=block][_ngcontent-%COMP%]:hover{--background: #0052aa}@media (max-width: 600px){ion-button[expand=block][_ngcontent-%COMP%]{font-size:16px;padding:10px;height:50px}}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:8px;margin-bottom:8px;text-align:center}"]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[l.Bz.forChild(f),l.Bz]}),a})(),H=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[s.ez,g.u5,o.Pc,P]}),a})()}}]);