"use strict";(self.webpackChunkfishbait_html=self.webpackChunkfishbait_html||[]).push([[660],{4660:(Ze,_,i)=>{i.r(_),i.d(_,{AuthSignUpModule:()=>fe});var u=i(4521),d=i(7423),v=i(7446),m=i(7322),A=i(5245),f=i(7531),h=i(773),w=i(5804),F=i(7775),q=i(4466),s=i(3075),x=i(8288),T=i(2865),e=i(5e3),S=i(8951),J=i(8606),c=i(9808),b=i(2494);const N=["signUpNgForm"];function Q(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",31),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),e.xp6(1),e.hij(" ",n.alert.message," ")}}function Y(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Email address is required "),e.qZA())}function D(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Please enter a valid email address "),e.qZA())}function k(t,r){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" \u2022 We noticed you\u2019re using a ",n.signUpForm.get("email").errors.publicDomain," address. Please use your work email instead ")}}function E(t,r){1&t&&(e.TgZ(0,"span",32),e._uU(1," Continue with Email "),e.qZA())}function L(t,r){1&t&&e._UZ(0,"mat-progress-spinner",33),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["/sign-in"]};let O=(()=>{class t{constructor(n,o,a,p){this._authService=n,this._formBuilder=o,this._router=a,this._ssoService=p,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){localStorage.clear(),this.signUpForm=this._formBuilder.group({email:["",[s.kI.required,s.kI.email,T.d.isPublicDomain,s.kI.maxLength(254),s.kI.pattern("[a-zA-Z0-9._]+@[a-zA-Z]+\\.[a-zA-Z]{2,3}")]]}),this._ssoService.userObservable.subscribe(n=>{if("success"===n.type){const o=n.data.user;if(!this.validateEmail(o.email))return;localStorage.setItem("signup_email",o.email),localStorage.setItem("signup_firstname",o.first_name),localStorage.setItem("signup_lastname",o.last_name),localStorage.setItem("signup_signupMethod",o.provider),this._router.navigateByUrl("sign-up/details")}})}continueWithEmail(){localStorage.setItem("signup_email",this.signUpForm.value.email),localStorage.setItem("signup_signupMethod","manual"),this._router.navigateByUrl("sign-up/details")}google(){this._ssoService.googleSignUp()}linkedin(){this._ssoService.linkedSignUp()}microsoft(){this._ssoService.microsoftSignUp()}validateEmail(n){return this.signUpForm.patchValue({email:n}),this.signUpForm.get("email").hasError("publicDomain")?(this.alert={type:"error",message:"We noticed you\u2019re using a "+this.signUpForm.get("email").errors.publicDomain+" address. Please use your work email instead."},this.showAlert=!0,this.signUpForm.patchValue({email:""}),!1):(this.signUpForm.patchValue({email:""}),!0)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S.e),e.Y36(s.qu),e.Y36(u.F0),e.Y36(J.d_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(n,o){if(1&n&&e.Gf(N,5),2&n){let a;e.iGM(a=e.CRH())&&(o.signUpNgForm=a.first)}},decls:46,vars:14,consts:[[1,"w-40","absolute","top-10","left-10"],["src","assets/images/logo/fishbait-logo-full.png"],[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow-lg","sm:bg-card"],[1,"w-full","max-w-screen-lg","sm:w-screen-lg","mx-auto","sm:mx-0"],[1,"my-8","text-3xl","tracking-tight","leading-tight","text-center"],["class","mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"flex","flex-nowrap"],[1,"text-center"],["type","button","mat-stroked-button","","id","googleSignUp",1,"fuse-mat-button-large","w-3/5",3,"disabled","click"],["src","assets/icons/google-16x16.png"],[1,"ml-2"],["type","button","mat-stroked-button","","id","linkedInSignUp",1,"fuse-mat-button-large","w-3/5","mt-4",3,"disabled","click"],["src","assets/icons/linkedin-16x16.png"],["type","button","mat-stroked-button","","id","microsoftSignUp",1,"fuse-mat-button-large","w-3/5","mt-4",3,"disabled","click"],["src","assets/icons/microsoft-16x16.png"],[1,"text-left","mr-5"],[1,"flex","items-center","flex-wrap","flex-col"],[1,"flex","mt-px","border-r","h-20"],[1,"flex","mx-2","text-secondary","text-md"],[1,"text-center","mx-5"],[3,"formGroup"],["form","ngForm"],[1,"w-4/5","max-w-60"],["id","email","matInput","","maxlength","254","placeholder","example@company.com",3,"formControlName"],[4,"ngIf"],["mat-flat-button","","id","workEmailSignUp",1,"fuse-mat-button-large","w-4/5","max-w-60","mt-3","bg-blue-800",3,"disabled","click"],["class","text-white",4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"w-full","max-w-full","items-center","mt-5","font-medium","text-center"],[1,"ml-1","text-blue-800","hover:underline",3,"routerLink"],[1,"mb-4",3,"appearance","showIcon","type"],[1,"text-white"],[3,"diameter","mode"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._uU(6,"Sign up for an account "),e.qZA(),e.YNc(7,Q,2,5,"fuse-alert",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"button",9),e.NdJ("click",function(){return o.google()}),e._UZ(11,"img",10),e.TgZ(12,"span",11),e._uU(13," Google "),e.qZA(),e.qZA(),e.TgZ(14,"button",12),e.NdJ("click",function(){return o.linkedin()}),e._UZ(15,"img",13),e.TgZ(16,"span",11),e._uU(17," LinkedIn "),e.qZA(),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return o.microsoft()}),e._UZ(19,"img",15),e.TgZ(20,"span",11),e._uU(21," Microsoft 365 "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",16),e.TgZ(23,"div",17),e._UZ(24,"div",18),e.TgZ(25,"div",19),e._uU(26,"OR"),e.qZA(),e._UZ(27,"div",18),e.qZA(),e.qZA(),e.TgZ(28,"div",20),e.TgZ(29,"form",21,22),e.TgZ(31,"mat-form-field",23),e.TgZ(32,"mat-label"),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",24),e.YNc(35,Y,2,0,"mat-error",25),e.YNc(36,D,2,0,"mat-error",25),e.YNc(37,k,2,1,"mat-error",25),e.qZA(),e.TgZ(38,"button",26),e.NdJ("click",function(){return o.continueWithEmail()}),e.YNc(39,E,2,0,"span",27),e.YNc(40,L,1,2,"mat-progress-spinner",28),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",29),e.TgZ(42,"span",8),e._uU(43," Already a member? "),e.TgZ(44,"a",30),e._uU(45,"Sign in "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const a=e.MAs(30);e.xp6(7),e.Q6J("ngIf",o.showAlert),e.xp6(3),e.Q6J("disabled",o.signUpForm.disabled),e.xp6(4),e.Q6J("disabled",o.signUpForm.disabled),e.xp6(4),e.Q6J("disabled",o.signUpForm.disabled),e.xp6(11),e.Q6J("formGroup",o.signUpForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("email")||o.signUpForm.get("email").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("email").hasError("publicDomain")),e.xp6(1),e.Q6J("disabled",o.signUpForm.disabled||a.form.invalid),e.xp6(1),e.Q6J("ngIf",!o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",o.signUpForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(13,M))}},directives:[c.O5,d.lW,s._Y,s.JL,s.sg,m.KE,m.hX,f.Nt,s.Fj,s.nD,s.JJ,s.u,u.yS,b.W,m.TO,h.Ou],encapsulation:2,data:{animation:x.L}}),t})();var y=i(9001),j=i(8675),C=i(4004),z=i(9014),B=i(1683),G=i(646);let P=(()=>{class t{constructor(){}generateShortCode(n=""){let o;return""!==n?(o=n.split("@")[1].split(".")[0],o):""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var V=i(8577),I=i(7238),Z=i(1079),W=i(508);const R=["signUpNgForm"];function X(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",35),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),e.xp6(1),e.hij(" ",n.alert.message," ")}}function $(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 First name is required "),e.qZA())}function H(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Last name is required "),e.qZA())}function K(t,r){1&t&&e._UZ(0,"mat-icon",40),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function ee(t,r){1&t&&e._UZ(0,"mat-icon",40),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function te(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Password is required "),e.qZA())}function oe(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Password should be at least 8 characters, with a symbol or letter "),e.qZA())}function ne(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"mat-form-field",18),e.TgZ(1,"mat-label"),e._uU(2,"Password"),e.qZA(),e._UZ(3,"input",36,37),e.TgZ(5,"button",38),e.NdJ("click",function(){e.CHM(n);const a=e.MAs(4);return a.type="password"===a.type?"text":"password"}),e.YNc(6,K,1,1,"mat-icon",39),e.YNc(7,ee,1,1,"mat-icon",39),e.qZA(),e.YNc(8,te,2,0,"mat-error",15),e.YNc(9,oe,2,0,"mat-error",15),e.qZA()}if(2&t){const n=e.MAs(4),o=e.oxw();e.xp6(3),e.Q6J("required",!o.isSsoSignUp)("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===n.type),e.xp6(1),e.Q6J("ngIf","text"===n.type),e.xp6(1),e.Q6J("ngIf",null==o.signUpForm.controls.password.errors?null:o.signUpForm.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.signUpForm.controls.password.errors?null:o.signUpForm.controls.password.errors.pattern)}}function ie(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Company name is required "),e.qZA())}function re(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Short Code is required "),e.qZA())}function se(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," \u2022 Short Code has an invalid characters or a whitespace "),e.qZA())}function ae(t,r){if(1&t&&(e.TgZ(0,"mat-option",41),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.Q6J("value",null==n?null:n.name),e.xp6(1),e.hij(" ",null==n?null:n.name," ")}}function me(t,r){1&t&&(e.TgZ(0,"span",42),e._uU(1," Sign up "),e.qZA())}function le(t,r){1&t&&e._UZ(0,"mat-progress-spinner",43),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const pe=function(){return["/sign-up"]},ue=function(){return["/sign-in"]},ge=[{path:"",component:O},{path:"details",component:(()=>{class t{constructor(n,o,a,p,U,g,l,he){this._authService=n,this._formBuilder=o,this._router=a,this._countryService=p,this._fuseConfirmationService=U,this._fuseLoadingService=g,this._commonService=l,this._store=he,this.alert={type:"success",message:""},this.showAlert=!1,this.countries=[],this.isSsoSignUp=!1}ngOnInit(){const n=localStorage.getItem("signup_email"),o=localStorage.getItem("signup_firstname"),a=localStorage.getItem("signup_lastname"),p=localStorage.getItem("signup_signupMethod");n||this._router.navigate(["/sign-up"]),this.isSsoSignUp="manual"!==p;const U=this._commonService.generateShortCode(n);this.signUpForm=this._formBuilder.group({short_code:[U,[s.kI.required,s.kI.pattern("^[a-zA-Z-0-9]+$")]],first_name:[o,s.kI.required],last_name:[a,s.kI.required],email:[n,[s.kI.required,s.kI.email,T.d.isPublicDomain]],password:["",[s.kI.pattern("^(?=.*[a-z])(?=.*[!@#$%^&*_=+-]).{8,}$")]],company_name:["",s.kI.required],country:["",s.kI.required],email_subscription:[!0],agreement:[""],signup_method:[p],role:["client"]}),this._countryService.get().subscribe(g=>{this.countries=g,this.filteredCountries=this.signUpForm.controls.country.valueChanges.pipe((0,j.O)(""),(0,C.U)(l=>"string"==typeof l?l:l.country),(0,C.U)(l=>l?this._filter(l):this.countries.slice()))}),this._countryService.getMyLocation().subscribe(g=>{this.signUpForm.patchValue({country:g.country_name})})}signUp(){if(this.signUpForm.invalid)return;if(!this.signUpForm.value.agreement)return void this._fuseConfirmationService.open({title:"Terms and Conditions",message:"Please accept the Terms and Conditions before continuing",icon:{show:!1,name:"heroicons_outline:exclamation",color:"warning"},actions:{confirm:{show:!0,label:"Ok",color:"warn"},cancel:{show:!1,label:"Cancel"}},dismissible:!0});this.signUpForm.disable(),this.showAlert=!1,this._fuseLoadingService.show();const n=Object.assign({},this.signUpForm.value);this._store.dispatch(new y.jg(n)).subscribe(o=>{const a=Object.assign({},{email:this.signUpForm.value.email,password:this.signUpForm.value.password,remember:null,login_method:this.signUpForm.value.signup_method});this._store.dispatch(new y.$0(a)).subscribe(()=>{this._router.navigateByUrl("/job-match")},p=>{})},o=>{this.signUpForm.enable(),this.alert={type:"error",message:o.error.message},this.showAlert=!0,this._fuseLoadingService.hide()})}_filter(n){const o=n.toLowerCase();return this.countries.filter(a=>a.name.toLowerCase().includes(o))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S.e),e.Y36(s.qu),e.Y36(u.F0),e.Y36(z.T),e.Y36(B.R),e.Y36(G.c),e.Y36(P),e.Y36(V.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sign-up-details"]],viewQuery:function(n,o){if(1&n&&e.Gf(R,5),2&n){let a;e.iGM(a=e.CRH())&&(o.signUpNgForm=a.first)}},decls:66,vars:31,consts:[[1,"w-40","absolute","top-10","left-10","lg:visible","md:visible","sm:invisible","xs:invisible"],["src","assets/images/logo/fishbait-logo-full.png"],[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow-lg","sm:bg-card"],[1,"w-full","max-w-screen-lg","sm:w-screen-lg","mx-auto","sm:mx-0"],[1,"mt-8","text-4xl","tracking-tight","leading-tight","text-center"],[1,"items-baseline","mt-0.5","font-medium","text-center"],[1,"ml-1","text-blue-800","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],["autocomplete","off",1,"mt-8",3,"formGroup"],["signUpNgForm","ngForm"],[1,"flex","flex-col"],[1,"flex","flex-row","gap-4"],[1,"w-4/5","max-w-60"],["id","firstname","matInput","",3,"formControlName"],[4,"ngIf"],["id","lastname","matInput","",3,"formControlName"],["class","w-full",4,"ngIf"],[1,"w-full"],["id","company","matInput","","maxlength","240",3,"formControlName"],["svgIcon","feather:info",1,"icon-size-4","pointer-events-auto",3,"matTooltip"],["id","shortcode","matInput","","maxlength","63",1,"uppercase",3,"formControlName"],["type","text","placeholder","Select your country","matInput","",3,"formControlName","matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"inline-flex","items-end","w-full","mt-1.5"],["id","newsletter",3,"formControlName","color"],["id","agreement",3,"color","formControlName"],["href","https://www.cloudstaff.com/privacy-policy","target","_blank",1,"ml-1","text-blue-800","hover:underline","font-bold"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","bg-blue-800",3,"disabled","click"],["class","text-white",4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"w-full","max-w-full","items-center","mt-5","font-medium","text-center"],[1,"text-center"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],["id","password","matInput","","type","password",3,"required","formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"value"],[1,"text-white"],[3,"diameter","mode"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div"),e._uU(9),e.TgZ(10,"a",7),e._uU(11,"Change Email"),e.qZA(),e.qZA(),e.qZA(),e.YNc(12,X,2,5,"fuse-alert",8),e.TgZ(13,"form",9,10),e.TgZ(15,"div",11),e.TgZ(16,"div",12),e.TgZ(17,"mat-form-field",13),e.TgZ(18,"mat-label"),e._uU(19,"First name"),e.qZA(),e._UZ(20,"input",14),e.YNc(21,$,2,0,"mat-error",15),e.qZA(),e.TgZ(22,"mat-form-field",13),e.TgZ(23,"mat-label"),e._uU(24,"Last name"),e.qZA(),e._UZ(25,"input",16),e.YNc(26,H,2,0,"mat-error",15),e.qZA(),e.qZA(),e.YNc(27,ne,10,6,"mat-form-field",17),e.TgZ(28,"mat-form-field",18),e.TgZ(29,"mat-label"),e._uU(30,"Company Name"),e.qZA(),e._UZ(31,"input",19),e.YNc(32,ie,2,0,"mat-error",15),e.qZA(),e.TgZ(33,"mat-form-field",18),e.TgZ(34,"mat-label"),e._uU(35,"Short Code "),e._UZ(36,"mat-icon",20),e.qZA(),e._UZ(37,"input",21),e.YNc(38,re,2,0,"mat-error",15),e.YNc(39,se,2,0,"mat-error",15),e.qZA(),e.TgZ(40,"mat-form-field",18),e.TgZ(41,"mat-label"),e._uU(42,"Country"),e.qZA(),e._UZ(43,"input",22),e.TgZ(44,"mat-autocomplete",23,24),e.YNc(46,ae,2,2,"mat-option",25),e.ALo(47,"async"),e.qZA(),e.qZA(),e.TgZ(48,"div",26),e.TgZ(49,"mat-checkbox",27),e.TgZ(50,"span"),e._uU(51,"Keep me up to date on products, services, and useful information"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"div",26),e.TgZ(53,"mat-checkbox",28),e.TgZ(54,"span"),e._uU(55,"I understand and agree to the"),e.qZA(),e.TgZ(56,"a",29),e._uU(57,"Terms and Conditions "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"button",30),e.NdJ("click",function(){return o.signUp()}),e.YNc(59,me,2,0,"span",31),e.YNc(60,le,1,2,"mat-progress-spinner",32),e.qZA(),e.TgZ(61,"div",33),e.TgZ(62,"span",34),e._uU(63," Already a member? "),e.TgZ(64,"a",7),e._uU(65,"Sign in "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const a=e.MAs(45);e.xp6(6),e.Oqu("manual"===o.signUpForm.value.signup_method?"Sign up with email address":"You are almost done"),e.xp6(3),e.hij("",null==o.signUpForm||null==o.signUpForm.value?null:o.signUpForm.value.email," "),e.xp6(1),e.Q6J("routerLink",e.DdM(29,pe)),e.xp6(2),e.Q6J("ngIf",o.showAlert),e.xp6(1),e.Q6J("formGroup",o.signUpForm),e.xp6(7),e.Q6J("formControlName","first_name"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("first_name").hasError("required")),e.xp6(4),e.Q6J("formControlName","last_name"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("last_name").hasError("required")),e.xp6(1),e.Q6J("ngIf",!o.isSsoSignUp),e.xp6(4),e.Q6J("formControlName","company_name"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("company_name").hasError("required")),e.xp6(4),e.Q6J("matTooltip","We use shortcode to easily identify client's name. Shortcode is unique and can no longer be modified once you have agreed to create your account"),e.xp6(1),e.Q6J("formControlName","short_code"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("short_code").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.signUpForm.get("short_code").hasError("pattern")),e.xp6(4),e.Q6J("formControlName","country")("matAutocomplete",a),e.xp6(3),e.Q6J("ngForOf",e.lcZ(47,27,o.filteredCountries)),e.xp6(3),e.Q6J("formControlName","email_subscription")("color","primary"),e.xp6(4),e.Q6J("color","primary")("formControlName","agreement"),e.xp6(5),e.Q6J("disabled",o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!o.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",o.signUpForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(30,ue))}},directives:[u.yS,c.O5,s._Y,s.JL,s.sg,m.KE,m.hX,f.Nt,s.Fj,s.JJ,s.u,s.nD,A.Hw,I.gM,Z.ZL,Z.XC,c.sg,v.oG,d.lW,b.W,m.TO,s.Q7,m.R9,W.ey,h.Ou],pipes:[c.Ov],encapsulation:2,data:{animation:x.L}}),t})()}];var ce=i(4107),de=i(9832);let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(ge),d.ot,v.p9,m.lN,A.Ps,f.c,h.Cq,w.J,F.fC,q.m,ce.LD,de.vV,Z.Bb,I.AV]]}),t})()}}]);