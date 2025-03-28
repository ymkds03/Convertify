"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5771],{5771:(C,g,c)=>{c.r(g),c.d(g,{CorrienteDelMotorPageModule:()=>m});var u=c(6814),s=c(95),i=c(5548),p=c(4670),e=c(6689);function d(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",9)(1,"ion-label",10),e._uU(2),e.qZA(),e.TgZ(3,"ion-input",16),e.NdJ("ngModelChange",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.factor_potencia=r)}),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.Oqu("es"===n.idiomaSeleccionado?n.factor_potencia_espanol:n.factor_potencia_ingles),e.xp6(1),e.Q6J("ngModel",n.factor_potencia)}}function _(t,l){if(1&t&&(e.TgZ(0,"ion-item",9)(1,"ion-label",10),e._uU(2),e.qZA(),e._UZ(3,"ion-input",19),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu("es"===n.idiomaSeleccionado?n.corriente_espanol:n.corriente_ingles),e.xp6(1),e.Q6J("value",n.corriente)}}const f=[{path:"",component:(()=>{class t{constructor(n,o){this.navCtrl=n,this.activatedRoute=o,this.selectedCorriente="continua",this.potencia=0,this.tension=0,this.eficiencia=0,this.factor_potencia=0,this.corriente=0,this.calculos_electricos_espanol="Corriente del motor",this.calculos_electricos_ingles="Motor current",this.potencia_motor_espanol="Potencia(W) :",this.potencia_motor_ingles="Power(W) :",this.tension_motor_espanol="Tension(V): ",this.tension_motor_ingles="Strain(V): ",this.eficiencia_motor_espanol="Eficiencia(%) :",this.eficiencia_motor_ingles="Efficiency(%) :",this.factor_potencia_espanol="Factor potencia :",this.factor_potencia_ingles="Power factor :",this.tension_l_l_espanol="Tensi\xf3n (L-L)(V):",this.tension_l_l_ingles=" Voltage (L-L)(V):",this.corriente_espanol="Corriente (A):",this.corriente_ingles="Current (A):",this.tipo_corriente_espanol="Tipo de corriente:",this.tipo_corriente_ingles="Current type:",this.boton_convertir_espanol="Calcular",this.boton_convertir_ingles="Calculate",this.idiomaSeleccionado=""}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.idiomaSeleccionado=localStorage.getItem("idiomaSeleccionado")||"es"}goToMainMenu(){this.navCtrl.navigateRoot("/folder/Inbox")}goBack(){this.navCtrl.back()}calculateCorriente(){"continua"===this.selectedCorriente?this.potencia&&this.tension&&this.eficiencia&&(this.corriente=+(this.potencia/(this.tension*(.01*this.eficiencia))).toFixed(3)):"bifasica"===this.selectedCorriente||"monofasica"===this.selectedCorriente?this.potencia&&this.tension&&this.eficiencia&&this.factor_potencia&&(this.corriente=+(this.potencia/(this.tension*(.01*this.eficiencia)*this.factor_potencia)).toFixed(3)):"trifasica"===this.selectedCorriente&&this.potencia&&this.tension&&this.eficiencia&&this.factor_potencia&&(this.corriente=+(this.potencia/(1.732*this.tension*(.01*this.eficiencia)*this.factor_potencia)).toFixed(3))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.SH),e.Y36(p.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-corriente-del-motor"]],decls:40,vars:14,consts:[[3,"translucent"],["slot","end"],[3,"click"],["slot","icon-only","name","home",1,"toolbar-button"],["slot","icon-only","name","arrow-back",1,"toolbar-button"],[1,"titulo-menu"],[1,"ion-padding",3,"fullscreen"],[1,"form-container"],["lines","none"],[1,"form-item"],[1,"ion_label"],[1,"ion_select",3,"ngModel","ngModelChange","ionChange"],["value","continua"],["value","monofasica"],["value","bifasica"],["value","trifasica"],["type","number",1,"ion_input",3,"ngModel","ngModelChange"],["class","form-item",4,"ngIf"],["expand","block",1,"boton-convertir",3,"click"],["type","text","readonly","",1,"ion_input",2,"width","50px","margin-left","10px","color","red",3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.NdJ("click",function(){return o.goToMainMenu()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-button",2),e.NdJ("click",function(){return o.goBack()}),e._UZ(6,"ion-icon",4),e.qZA()(),e.TgZ(7,"ion-title",5),e._uU(8),e.qZA()()(),e.TgZ(9,"ion-content",6)(10,"div",7)(11,"ion-list",8)(12,"ion-item",9)(13,"ion-label",10),e._uU(14),e.qZA(),e.TgZ(15,"ion-select",11),e.NdJ("ngModelChange",function(a){return o.selectedCorriente=a})("ionChange",function(){return o.calculateCorriente()}),e.TgZ(16,"ion-select-option",12),e._uU(17,"Continua"),e.qZA(),e.TgZ(18,"ion-select-option",13),e._uU(19,"Alterna Monof\xe1sica"),e.qZA(),e.TgZ(20,"ion-select-option",14),e._uU(21,"Alterna Bif\xe1sica"),e.qZA(),e.TgZ(22,"ion-select-option",15),e._uU(23,"Alterna Trif\xe1sica"),e.qZA()()(),e.TgZ(24,"ion-item",9)(25,"ion-label",10),e._uU(26),e.qZA(),e.TgZ(27,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.tension=a}),e.qZA()(),e.TgZ(28,"ion-item",9)(29,"ion-label",10),e._uU(30),e.qZA(),e.TgZ(31,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.potencia=a}),e.qZA()(),e.YNc(32,d,4,2,"ion-item",17),e.TgZ(33,"ion-item",9)(34,"ion-label",10),e._uU(35),e.qZA(),e.TgZ(36,"ion-input",16),e.NdJ("ngModelChange",function(a){return o.eficiencia=a}),e.qZA()(),e.TgZ(37,"ion-button",18),e.NdJ("click",function(){return o.calculateCorriente()}),e._uU(38),e.qZA(),e.YNc(39,_,4,2,"ion-item",17),e.qZA()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(8),e.Oqu("es"===o.idiomaSeleccionado?o.calculos_electricos_espanol:o.calculos_electricos_ingles),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(5),e.Oqu("es"===o.idiomaSeleccionado?o.tipo_corriente_espanol:o.tipo_corriente_ingles),e.xp6(1),e.Q6J("ngModel",o.selectedCorriente),e.xp6(11),e.Oqu("es"===o.idiomaSeleccionado?o.tension_motor_espanol:o.tension_motor_ingles),e.xp6(1),e.Q6J("ngModel",o.tension),e.xp6(3),e.Oqu("es"===o.idiomaSeleccionado?o.potencia_motor_espanol:o.potencia_motor_ingles),e.xp6(1),e.Q6J("ngModel",o.potencia),e.xp6(1),e.Q6J("ngIf","bifasica"===o.selectedCorriente||"trifasica"===o.selectedCorriente||"monofasica"===o.selectedCorriente),e.xp6(3),e.Oqu("es"===o.idiomaSeleccionado?o.eficiencia_motor_espanol:o.eficiencia_motor_ingles),e.xp6(1),e.Q6J("ngModel",o.eficiencia),e.xp6(2),e.Oqu("es"===o.idiomaSeleccionado?o.boton_convertir_espanol:o.boton_convertir_ingles),e.xp6(1),e.Q6J("ngIf",o.corriente))},dependencies:[u.O5,s.JJ,s.On,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.q_,i.t9,i.n0,i.wd,i.sr,i.as,i.QI,i.j9],styles:[".titulo-menu[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:justify;font-weight:700;font-family:Poppins,sans-serif}.toolbar-button[_ngcontent-%COMP%]{color:#06f}ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;padding:5px;margin:70px auto 0;background-color:#1e1e1e;border-radius:8px;box-shadow:0 4px 6px #0000001a}ion-item[_ngcontent-%COMP%]{--background: var(--input-background-color, #ffffff);--color: var(--text-color, #0b2e50);--placeholder-color: var(--placeholder-text-color, #6c757d);margin:12px;border:1px #57585a;border-radius:8px}ion-input[_ngcontent-%COMP%]{--background: #f8f9fa;--color: #212529;--placeholder-color: #adb5bd;--padding-start: 12px;--padding-end: 12px;border:none;border-radius:10px;font-size:20px;height:45px;box-shadow:inset 0 5px 15px #00000013;margin:5px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}ion-button[expand=block][_ngcontent-%COMP%]{--background: var(--button-background-color, #0066ff);--color: var(--button-text-color, #ffffff);text-align:center;border-radius:8px;font-size:18px;padding:12px;transition:background-color .3s ease;width:100%;max-width:455px;height:60px;margin:auto}ion-button[expand=block][_ngcontent-%COMP%]:hover{--background: #0052aa}@media (max-width: 600px){ion-button[expand=block][_ngcontent-%COMP%]{font-size:16px;padding:10px;height:50px}}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:8px;margin-bottom:8px;text-align:center}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(f),p.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,s.u5,i.Pc,h]}),t})()}}]);