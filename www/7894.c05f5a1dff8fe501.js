"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7894],{7894:(M,u,c)=>{c.r(u),c.d(u,{TensionDelMotorPageModule:()=>m});var d=c(6814),l=c(95),t=c(5548),p=c(4670),e=c(6689);function g(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"ion-item",9)(1,"ion-label",10),e._uU(2),e.qZA(),e.TgZ(3,"ion-input",16),e.NdJ("ngModelChange",function(s){e.CHM(i);const a=e.oxw();return e.KtG(a.factorPotencia=s)}),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(2),e.Oqu("es"===i.idiomaSeleccionado?i.factor_potencia_espanol:i.factor_potencia_ingles),e.xp6(1),e.Q6J("ngModel",i.factorPotencia)}}function _(n,r){if(1&n&&(e.TgZ(0,"ion-item",9)(1,"ion-label",10),e._uU(2),e.qZA(),e._UZ(3,"ion-input",19),e.qZA()),2&n){const i=e.oxw();e.xp6(2),e.Oqu("es"===i.idiomaSeleccionado?i.tension_motor_espanol:i.tension_motor_ingles),e.xp6(1),e.Q6J("value",i.tension)}}const f=[{path:"",component:(()=>{class n{constructor(i,o){this.navCtrl=i,this.activatedRoute=o,this.selectedCorriente="continua",this.corriente=0,this.potencia=0,this.factorPotencia=0,this.tension=0,this.eficiencia=0,this.calculos_electricos_espanol="Tensi\xf3n del motor",this.calculos_electricos_ingles="Motor voltage",this.tipo_corriente_espanol="Tipo de corriente:",this.tipo_corriente_ingles="Current type:",this.corriente_espanol="Corriente(A):",this.corriente_ingles="Current(A):",this.potencia_motor_espanol="Potencia(W) :",this.potencia_motor_ingles="Power(W) :",this.eficiencia_motor_espanol="Eficiencia(%) :",this.eficiencia_motor_ingles="Efficiency(%) :",this.factor_potencia_espanol="Factor potencia :",this.factor_potencia_ingles="Power factor :",this.tension_motor_espanol="Tension(V):",this.tension_motor_ingles="Strain(V):",this.boton_convertir_espanol="Calcular",this.boton_convertir_ingles="Calculate",this.idiomaSeleccionado=""}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.idiomaSeleccionado=localStorage.getItem("idiomaSeleccionado")||"es"}goToMainMenu(){this.navCtrl.navigateRoot("/folder/Inbox")}goBack(){this.navCtrl.back()}calculateTension(){"continua"===this.selectedCorriente?this.potencia&&this.corriente&&this.eficiencia&&(this.tension=this.potencia/(this.corriente*this.eficiencia/100),this.tension=+this.tension.toFixed(3)):"monofasica"===this.selectedCorriente||"bifasica"===this.selectedCorriente?this.potencia&&this.corriente&&this.factorPotencia&&this.eficiencia&&(this.tension=this.potencia/(this.corriente*this.factorPotencia*this.eficiencia/100),this.tension=+this.tension.toFixed(3)):"trifasica"===this.selectedCorriente&&this.potencia&&this.corriente&&this.factorPotencia&&this.eficiencia&&(this.tension=this.potencia/(Math.sqrt(3)*this.corriente*this.factorPotencia*this.eficiencia/100),this.tension=+this.tension.toFixed(3))}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(t.SH),e.Y36(p.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tension-del-motor"]],decls:40,vars:14,consts:[[3,"translucent"],["slot","end"],[3,"click"],["slot","icon-only","name","home",1,"toolbar-button"],["slot","icon-only","name","arrow-back",1,"toolbar-button"],[1,"titulo-menu"],[1,"ion-padding",3,"fullscreen"],[1,"form-container"],["lines","none"],[1,"form-item"],[1,"dise\xf1o_label"],[1,"dise\xf1o_seleccion",3,"ngModel","ngModelChange"],["value","continua"],["value","monofasica"],["value","bifasica"],["value","trifasica"],["type","number",1,"input",3,"ngModel","ngModelChange"],["class","form-item",4,"ngIf"],["expand","block",1,"boton_convertir",3,"click"],["type","text","readonly","",1,"input",2,"width","50px","margin-left","10px","color","red",3,"value"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.NdJ("click",function(){return o.goToMainMenu()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-button",2),e.NdJ("click",function(){return o.goBack()}),e._UZ(6,"ion-icon",4),e.qZA()(),e.TgZ(7,"ion-title",5),e._uU(8),e.qZA()()(),e.TgZ(9,"ion-content",6)(10,"div",7)(11,"ion-list",8)(12,"ion-item",9)(13,"ion-label",10),e._uU(14),e.qZA(),e.TgZ(15,"ion-select",11),e.NdJ("ngModelChange",function(a){return o.selectedCorriente=a}),e.TgZ(16,"ion-select-option",12),e._uU(17,"Continua"),e.qZA(),e.TgZ(18,"ion-select-option",13),e._uU(19,"Alterna Monof\xe1sica"),e.qZA(),e.TgZ(20,"ion-select-option",14),e._uU(21,"Alterna Bif\xe1sica"),e.qZA(),e.TgZ(22,"ion-select-option",15),e._uU(23,"Alterna Trif\xe1sica"),e.qZA()()(),e.TgZ(24,"ion-item",9)(25,"ion-label",10),e._uU(26),e.qZA(),e.TgZ(27,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.corriente=a}),e.qZA()(),e.TgZ(28,"ion-item",9)(29,"ion-label",10),e._uU(30),e.qZA(),e.TgZ(31,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.potencia=a}),e.qZA()(),e.YNc(32,g,4,2,"ion-item",17),e.TgZ(33,"ion-item",9)(34,"ion-label",10),e._uU(35),e.qZA(),e.TgZ(36,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.eficiencia=a}),e.qZA()(),e.TgZ(37,"ion-button",18),e.NdJ("click",function(){return o.calculateTension()}),e._uU(38),e.qZA(),e.YNc(39,_,4,2,"ion-item",17),e.qZA()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(8),e.Oqu("es"===o.idiomaSeleccionado?o.calculos_electricos_espanol:o.calculos_electricos_ingles),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(5),e.Oqu("es"===o.idiomaSeleccionado?o.tipo_corriente_espanol:o.tipo_corriente_ingles),e.xp6(1),e.Q6J("ngModel",o.selectedCorriente),e.xp6(11),e.Oqu("es"===o.idiomaSeleccionado?o.corriente_espanol:o.corriente_ingles),e.xp6(1),e.Q6J("ngModel",o.corriente),e.xp6(3),e.Oqu("es"===o.idiomaSeleccionado?o.potencia_motor_espanol:o.potencia_motor_ingles),e.xp6(1),e.Q6J("ngModel",o.potencia),e.xp6(1),e.Q6J("ngIf","monofasica"===o.selectedCorriente||"bifasica"===o.selectedCorriente||"trifasica"===o.selectedCorriente),e.xp6(3),e.Oqu("es"===o.idiomaSeleccionado?o.eficiencia_motor_espanol:o.eficiencia_motor_ingles),e.xp6(1),e.Q6J("ngModel",o.eficiencia),e.xp6(2),e.Oqu("es"===o.idiomaSeleccionado?o.boton_convertir_espanol:o.boton_convertir_ingles),e.xp6(1),e.Q6J("ngIf",o.tension))},dependencies:[d.O5,l.JJ,l.On,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.q_,t.t9,t.n0,t.wd,t.sr,t.as,t.QI,t.j9],styles:[".titulo-menu[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:justify;font-weight:700;font-family:Poppins,sans-serif}.toolbar-button[_ngcontent-%COMP%]{color:#06f}ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;padding:5px;margin:70px auto 0;background-color:#1e1e1e;border-radius:8px;box-shadow:0 4px 6px #0000001a}ion-item[_ngcontent-%COMP%]{--background: var(--input-background-color, #ffffff);--color: var(--text-color, #0b2e50);--placeholder-color: var(--placeholder-text-color, #6c757d);margin:12px;border:1px #57585a;border-radius:8px}ion-input[_ngcontent-%COMP%]{--background: #f8f9fa;--color: #212529;--placeholder-color: #adb5bd;--padding-start: 12px;--padding-end: 12px;border:none;border-radius:10px;font-size:20px;height:45px;box-shadow:inset 0 5px 15px #00000013;margin:5px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}ion-button[expand=block][_ngcontent-%COMP%]{--background: var(--button-background-color, #0066ff);--color: var(--button-text-color, #ffffff);text-align:center;border-radius:8px;font-size:18px;padding:12px;transition:background-color .3s ease;width:100%;max-width:455px;height:60px;margin:auto}ion-button[expand=block][_ngcontent-%COMP%]:hover{--background: #0052aa}@media (max-width: 600px){ion-button[expand=block][_ngcontent-%COMP%]{font-size:16px;padding:10px;height:50px}}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:8px;margin-bottom:8px;text-align:center}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(f),p.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,l.u5,t.Pc,h]}),n})()}}]);