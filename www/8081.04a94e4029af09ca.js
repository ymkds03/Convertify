"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8081],{8081:(m,_,t)=>{t.r(_),t.d(_,{ConfiguracionPageModule:()=>d});var i=t(6689),r=t(6814),h=t(95),n=t(5548),c=t(4670),g=t(5861);const p=[{path:"",component:(()=>{class o{constructor(e,s){this.navCtrl=e,this.toastController=s,this.lenguaje_espanol="Idioma",this.lenguaje_ingles="Language",this.brillo_espanol="Brillo",this.brillo_ingles="Brightness",this.apariencia_ingles="Appearance",this.apariencia_espanol="Apariencia",this.inicio_espanol="",this.inicio_ingles="",this.conver_uni_basi_espanol="",this.conver_uni_basi_ingles="",this.conver_divisas_espanol="",this.conver_divisas_ingles="",this.conver_unidades_hogar_espanol="",this.conver_unidades_hogar_ingles="",this.conver_unidades_ciencia_espanol="",this.conver_unidades_ciencia_ingles="",this.conver_unidades_varias_espanol="",this.conver_unidades_varias_ingles="",this.calculos_electricos_espanol="",this.calculos_electricos_ingles="",this.calculos_motor_espanol="",this.calculos_motor_ingles="",this.calculos_fotovoltaicos_espanol="",this.calculos_fotovoltaicos_ingles="",this.configuracion_espanol="Configuraci\xf3n",this.configuracion_ingles="Settings",this.acerca_espanol="",this.acerca_ingles="",this.conversiones_espanol=" ",this.conversiones_ingles=" ",this.longitud_espanol="",this.longitud_ingles="",this.area_espanol="",this.area_ingles="",this.peso_espanol="",this.peso_ingles="",this.volumen_espanol="",this.volumen_ingles="",this.convertir_de_espanol="",this.convertir_de_ingles=" ",this.cantidad_espanol="",this.cantidad_ingles="",this.a_espanol="",this.a_ingles="",this.resultado_espanol="",this.resultado_ingles="",this.boton_convertir_espanol="",this.boton_convertir_ingles="",this.boton_calcular_espanol="",this.boton_calcular_ingles="",this.milimetros_espanol="",this.milimetros_ingles="",this.centimetros_espanol="",this.centrimetros_ingles="",this.decimetros_espanol="",this.decimetros_ingles="",this.metros_espanol="",this.metros_ingles="",this.pulgadas_espanol="",this.pulgadas_ingles="",this.pies_espanol="",this.pies_ingles="",this.yardas_espanol="",this.yardas_ingles="",this.millas_espanol="",this.millas_ingles="",this.kilometros_espanol="",this.kilometros_ingles="",this.divisas_espanol="",this.divisas_ingles="",this.dolares_americanos_espa\u00f1ol="",this.dolares_americanos_ingles="",this.temperatura_espanol="",this.temperatura_ingles="",this.tiempo_espanol="",this.tiempo_ingles="",this.velocidad_espanol="",this.velocidad_ingles="",this.fuerza_espanol="",this.fuerza_ingles="",this.potencia_espanol="",this.potencia_ingles="",this.presion_espanol="",this.presion_ingles="",this.energia_espanol="",this.energia_ingles="",this.angulos_espanol="",this.angulos_ingles="",this.datos_espanol="",this.datos_ingles="",this.caida_tension_espanol="",this.caida_tension_ingles="",this.calculo_corriente_espanol="",this.calculo_corriente_ingles="",this.calculo_corriente_max_espanol="",this.calculo_corriente_max_ingles="",this.calibre_cable_espanol="",this.calibre_cable_ingles="",this.medida_peso_cable_espanol="",this.medida_peso_cable_ingles="",this.calculos_espanol="",this.calculos_ingles="",this.calibre_conductor_espanol="",this.calibre_conductor_ingles="",this.amperaje_espa\u00f1ol="",this.amperaje_ingles="",this.distancia_metros_espa\u00f1ol="",this.distancia_metros_ingles="",this.factor_potencia_espanol="",this.factor_potencia_ingles="",this.fases_espanol="",this.fases_ingles="",this.vln_espanol="",this.vln_ingles="",this.resistencia_espanol=" ",this.resistencia_ingles="",this.impedancia_espanol="",this.impedancia_ingles="",this.porcentaje_caida_tension_espanol="",this.porcentaje_caida_tension_ingles="",this.corriente_espanol="",this.corriente_ingles="",this.corriente_max_espanol="",this.corriente_max_ingles="",this.longitud_linea_espanol="",this.longitud_linea_ingles="",this.caida_tension_permitida_espanol="",this.caida_tension_permitida_ingles="",this.tipo_aislamiento_espanol="",this.tipo_aislamiento_ingles="",this.continua_espanol="",this.continua_ingles="",this.monofasica_espanol="",this.monofasica_ingles="",this.bifasica_espanol="",this.bifasica_ingles="",this.trifasica_espanol="",this.trifasica_ingles="",this.temperatura_ambiente_espanol="",this.temperatura_ambiente_ingles="",this.tipo_corriente_espanol="",this.tipo_corriente_ingles="",this.tension_espanol="",this.tension_ingles="",this.carga_espanol="",this.carga_ingles="",this.voltaje_motor_espanol="",this.voltaje_motor_ingles="",this.conversion_cable_espanol="",this.conversion_cable_ingles="",this.calibre_del_cable_espanol="",this.calibre_del_cable_ingles="",this.corriente_motor_espanol="",this.corriente_motor_ingles="",this.potencia_motor_espanol="",this.potencia_motor_ingles="",this.tension_motor_espanol="",this.tension_motor_ingles="",this.eficiencia_motor_espanol="",this.eficiencia_motor_ingles="",this.tension_l_l_espanol="",this.tension_l_l_ingles="",this.tipo_facturacion_espanol="",this.tipo_facturacion_ingles="",this.consumo_total_espanol="",this.consumo_total_ingles="",this.energia_requerida_espanol="",this.energia_requerida_ingles="",this.horas_sol_espanol="",this.horas_sol_ingles="",this.factor_perdida_espanol="",this.factor_perdida_ingles="",this.potencia_pico_espanol="",this.potencia_pico_ingles="",this.modulos_necesarios_espanol="",this.modulos_necesarios_ingles="",this.acerca_de_espanol="",this.acerca_de_ingles="",this.acerca_de_la_espanol="",this.acerca_de_la_ingles="",this.descripcion_espanol="",this.descripcion_ingles="",this.descripcion_texto_espanol="",this.descripcion_texto_ingles="",this.funciones_espanol="",this.funciones_ingles="",this.conver_texto_uni_basi_espanol="",this.conver_texto_uni_basi_ingles="",this.conver_divisas_texto_espanol="",this.conver_divisas_texto_ingles="",this.conver_unidades_hogar_texto_espanol="",this.conver_unidades_hogar_texto_ingles="",this.conver_unidades_ciencia_texto_espanol="",this.conver_unidades_ciencia_texto_ingles="",this.conver_unidades_varias_texto_espanol="",this.conver_unidades_varias_texto_ingles="",this.caida_tension_texto_espanol="",this.caida_tension_texto_ingles="",this.calculo_corriente_texto_espanol="",this.calculo_corriente_texto_ingles="",this.calculo_corriente_max_texto_espanol="",this.calculo_corriente_max_texto_ingles="",this.medida_peso_cable_texto_espanol="",this.medida_peso_cable_texto_ingles="",this.corriente_motor_texto_espanol="",this.corriente_motor_texto_ingles="",this.tension_motor_texto_espanol="",this.tension_motor_texto_ingles="",this.calculos_fotovoltaicos_texto_espanol="",this.calculos_fotovoltaicos_texto_ingles="",this.acerca_de_app_espanol="",this.acerca_de_app_ingles="",this.acerca_de_app_texto_espanol="",this.acerca_de_app_texto_ingles="",this.nota_espanol="",this.nota_ingles="",this.nota_texto_espanol="",this.nota_texto_ingles="",this.idiomaSeleccionado="",this.themeToggle=!1,this.idiomaSeleccionado=localStorage.getItem("idiomaSeleccionado")||"es"}ngOnInit(){const e=window.matchMedia("(prefers-color-scheme: dark)");this.initializeDarkTheme(e.matches),e.addEventListener("change",s=>this.initializeDarkTheme(s.matches))}initializeDarkTheme(e){this.themeToggle=e,this.toggleDarkTheme(e)}toggleChange(e){this.toggleDarkTheme(e.detail.checked)}toggleDarkTheme(e){document.body.classList.toggle("dark",e)}goToMainMenu(){this.navCtrl.navigateRoot("/folder/Inbox")}goBack(){this.navCtrl.back()}cambiarIdioma(e){var s=this;return(0,g.Z)(function*(){s.idiomaSeleccionado=e;let l="";"en"==e&&(l="Selected Language: English"),"es"==e&&(l="Lenguaje Seleccionado: Espa\xf1ol"),yield(yield s.toastController.create({message:l,duration:4500,position:"middle",icon:"earth-outline"})).present(),localStorage.setItem("idiomaSeleccionado",s.idiomaSeleccionado)})()}}return o.\u0275fac=function(e){return new(e||o)(i.Y36(n.SH),i.Y36(n.yF))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-configuracion"]],decls:24,vars:5,consts:[[3,"translucent"],["slot","end"],[3,"click"],["slot","icon-only","name","home",1,"toolbar-button"],["fill","clear","expand","full",3,"click"],[3,"inset"],["value","40"],["name","sunny-outline","slot","start"],["name","sunny","slot","end"],["justify","space-between","checked",""]],template:function(e,s){1&e&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),i._uU(3),i.qZA(),i.TgZ(4,"ion-buttons",1)(5,"ion-button",2),i.NdJ("click",function(){return s.goToMainMenu()}),i._UZ(6,"ion-icon",3),i.qZA()()()(),i.TgZ(7,"ion-content")(8,"ion-list-header"),i._uU(9),i.qZA(),i.TgZ(10,"ion-button",4),i.NdJ("click",function(){return s.cambiarIdioma("es")}),i._uU(11,"ESPA\xd1OL"),i.qZA(),i.TgZ(12,"ion-button",4),i.NdJ("click",function(){return s.cambiarIdioma("en")}),i._uU(13,"INGLES"),i.qZA(),i.TgZ(14,"ion-list-header"),i._uU(15),i.qZA(),i.TgZ(16,"ion-list",5)(17,"ion-item")(18,"ion-range",6),i._UZ(19,"ion-icon",7)(20,"ion-icon",8),i.qZA()(),i.TgZ(21,"ion-item")(22,"ion-toggle",9),i._uU(23,"True Tone"),i.qZA()()()()),2&e&&(i.Q6J("translucent",!0),i.xp6(3),i.Oqu("es"===s.idiomaSeleccionado?s.configuracion_espanol:s.configuracion_ingles),i.xp6(6),i.Oqu("es"===s.idiomaSeleccionado?s.lenguaje_espanol:s.lenguaje_ingles),i.xp6(6),i.Oqu("es"===s.idiomaSeleccionado?s.brillo_espanol:s.brillo_ingles),i.xp6(1),i.Q6J("inset",!0))},dependencies:[n.YG,n.Sm,n.W2,n.Gu,n.gu,n.Ie,n.q_,n.yh,n.I_,n.wd,n.ho,n.sr,n.w,n.QI],styles:['.titulo-menu[_ngcontent-%COMP%]{color:#000;font-size:20px;text-align:center;font-weight:700;font-family:Poppins,sans-serif}.toolbar-button[_ngcontent-%COMP%]{color:#06f}.lenguaje-icon[_ngcontent-%COMP%]{position:relative;width:30px;height:30px;color:#000}.home-icon[_ngcontent-%COMP%]{font-size:24px;color:#000;position:relative;left:230px}.home-icon[_ngcontent-%COMP%]:hover:after{content:"";position:absolute;top:-6px;left:-6px;width:35px;height:35px;border-radius:20%;background-color:#00f;z-index:-1}.arrow-back-icon[_ngcontent-%COMP%]{color:#000;position:absolute;left:245px;width:27px;height:27px}.titulo-menu[_ngcontent-%COMP%]{position:relative;font-size:15.1px;color:#000;right:20px;top:5px}']}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[c.Bz.forChild(p),c.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[{provide:i.soG,useValue:"es"}],imports:[r.ez,h.u5,n.Pc,u]}),o})()}}]);