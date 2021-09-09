<template>
<div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center">
          <img alt="University"  src="../assets/ecole.svg" width="700" height="730"  >
        </div>
        
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            

    <form id="coorParents" v-on:submit.prevent="submit">
        <header class="form-header">
            <v-progress-linear
        buffer-value="30"
        stream
        color="#1F9737"
        style="margin-bottom:20px"
      ></v-progress-linear>
            
            <h2 class="form-header--title">Coordonnées des parents</h2>
            <p class="form-header--desc">Renseignez ce formulaire afin que notre département des
            admissions prenne contact avec vous dans les plus brefs délais.</p>
            <v-card style="display:none" id="card">
                <v-card-title style="color:#1F9737">
                    <v-icon id="closeicon" style="position:absolute;left:90%;top:5%" @click="hidecard">mdi-close</v-icon>
                    {{prenom}} {{nom}}
                    </v-card-title>
                    <v-card-subtitle style="margin-right:51.5%;color:black">
                       E-mail: {{email}}
                    </v-card-subtitle>
                    <v-card-subtitle style="color:black;margin-right:63%">
                      Profession: {{profession}}
                    </v-card-subtitle>
                    <v-card-subtitle style="margin-right:62%;color:black">
                        Tel: {{tel}}
                    </v-card-subtitle>
            
            </v-card>
            </header>   
        
        <div class="d-flex justify-content-center">
            <div class="p-2">
            <label class="c-blue" style="font-family: Poppins; color: rgb(0, 43, 76); font-size: 14px;">Civilité:</label></div>
            <div class="p-sm-2 p-1">
                <div class="c-radio">
                    <input name="kind" input="[object Object]" meta="[object Object]" id="mr" type="radio" required="" value="mr">
                    <label for="mr" style="font-family: Poppins; font-size: 14px;">Mr</label>
                    </div>
                    </div>
                    <div class="p-sm-2 p-1">
                        <div class="c-radio">
                            <input name="kind" input="[object Object]" meta="[object Object]" id="mlle" type="radio" required="" value="mlle">
                            <label for="mlle">Mlle</label>
                            </div>
                            </div>
                            <div class="p-sm-2 p-1">
                                <div class="c-radio">
                                    <input name="kind" input="[object Object]" meta="[object Object]" id="mme" type="radio" required="" value="mme">
                                    <label for="mme">Mme</label>
                                    </div>
                                    </div>
                                    </div>
        
        <div class="row">
        <div class="col-sm-6 form-group">
            <input name="Nom" input="[object Object]" meta="[object Object]" placeholder="Nom" value="" class="form-control" v-model="nom" :class="{'is-invalid': validationStatus($v.nom)}">
            <div v-if="!$v.nom.required" class="invalid-feedback1">Veuillez renseigner votre nom</div>
            </div>
        <div class="col-sm-6 form-group">
            <input name="Prenom" input="[object Object]" meta="[object Object]" placeholder="Prénom" value="" class="form-control" v-model="prenom" :class="{'is-invalid': validationStatus($v.prenom)}">
            <div v-if="!$v.nom.required" class="invalid-feedback">Veuillez renseigner votre prénom</div>
        </div>
        </div>
        <div class="row">
            
        
        <div class="col-sm-6 form-group">
            
            <input type="text" class="form-control form-control-lg" placeholder="Téléphone" v-model="tel" :class="{'is-invalid': validationStatus($v.tel)}">
            <div v-if="!$v.tel.required" class="invalid-feedback">Veuillez renseigner votre numéro de téléphone</div>
        </div>    
         <div class="col-sm-6 form-group" style="margin-left:300px;position:relative;bottom:88px">
            
            <input type="text" class="form-control form-control-lg" placeholder="Profession" v-model="profession" :class="{'is-invalid': validationStatus($v.profession)}">
            <div v-if="!$v.profession.required" class="invalid-feedback">Veuillez renseigner votre profession</div>
        </div>    
       </div>
       <div class="row" >
        <div class="col-12 form-group">
            
            <input type="text" class="form-control form-control-lg" placeholder="E-mail" v-model="email" :class="{'is-invalid': validationStatus($v.email)}" style="position:relative;bottom:145%">
            <div v-if="!$v.email.required" class="invalid-feedback">Veuillez renseigner votre e-mail</div>
        </div>
        </div>
        
       <div>
           <div class="col d-flex justify-content-center">
              <div>
        <div class="p-sm-2 p-1" style="position:relative;bottom:75%">
            
            <v-btn
        class="mx-2"
        fab
        dark
        small
        color="#7ECE06"
        @click="firecard"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
        
      </v-btn>
      <label class="parent" style="font-family:Poppins;margin-right:290px;color:#76C110">Ajouter un parent/tuteur</label>
      </div>
      
           <div class="col-12 form-group text-center">
             <router-link to="/">
            <v-btn
                color="#76C110"
                dark
                large
                style="margin-right:20px"
              >
                <span class="v-btn__content" style="color:#fff;width:80%" > Précédent </span>
              </v-btn>
            </router-link>
            
            <v-btn
                color="#002B4C"
                dark
                large
                @click="submit1()"
              >
                <span class="v-btn__content" style="color:#76C110">  Suivant  </span>
              </v-btn>
            
             
            
        </div>
           </div>
         
           </div>
           </div>
        
        
       
        
          
    </form>
    </div>
          
         
        </div>
      </div>
    </div>


</template>

<script>

import {required,email} from 'vuelidate/lib/validators'
import axios from 'axios'



export default{
    name:'coorPar'
 ,
  watch:{
   nom(newNom){
      localStorage.nom=newNom;
    },
    prenom(newPrenom){
        localStorage.prenom=newPrenom;
    },
    profession(newprofession){
        localStorage.profession=newprofession;
    },
    email(newemail){
        localStorage.email=newemail;
    },
  },
 mounted () {
         this.$store.dispatch('loadId')
     if(localStorage.nom){
         this.nom=localStorage.nom;
     }
     if (localStorage.prenom){
         this.prenom=localStorage.prenom;
     }
     if (localStorage.email){
         this.email=localStorage.email;
     }
     if (localStorage.profession){
         this.profession=localStorage.profession;
     }
     if (localStorage.tel){
         this.tel=localStorage.tel;
     } 
  },
 data(){
     return{
     
     nom:'',
     prenom:'',
     email:'',
     profession:'',
     tel:''
     }
 },
 validations:{
     nom:{required},
     prenom:{required},
     email:{required,email},
     profession:{required},
     tel:{required}   

 },
 

 methods:{
     
     submit1(){
         const currentId=this.$store.getters.id;
         axios.put(`http://127.0.0.1:8000/api/clients/updaterow1/${currentId}`,
        {/*prenom: "Samiri",
        email: "s.hakimi@gmail.com",
        civilite: "Mr",
        pays: "Maroc",
        ville: "Rabat",
        date_naiss: "2001-04-21",
        telephone: "0667957412",*/
        nom_parent1:this.nom,
        prenom_parent1: this.prenom,
        tel_parent1: this.tel,
        email_parent1: this.email,
        profession_parent1:this.profession,
        
        })
        .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
         
         this.$v.$touch();
         if(this.$v.$pending || this.$v.$error) return;
         this.$router.push({ path: "/parcours" })
     },
     firecard(){
         document.getElementById("card").style.display="block"
     },
     hidecard(){
       document.getElementById("card").style.display="none";   
     },
     validationStatus:function(validation){
         return typeof validation!="undefined" ? validation.$error:false;
     },
     resetData(){
         this.nom='',
     this.prenom='',
     this.email='',
     this.tel='',
    this.profession=''
     }
 }
}

</script>

<style>
.btn-vue{
    background:#1F9737;
    color: #fff;
    font-weight: medium;
}

.form-header--title {
    color:#1F9737;
    font-family: Poppins;
    font-size: 25px;
    font-weight: bold;
    line-height: 25px;
}
.form-header {
    text-align: center;
    max-width: 405px;
    margin: 0 auto;
}
.form-header--desc {
    font-size: 15px;
    line-height: 17px;
    font-family: Poppins;
    text-align: center;
}
.invalid-feedback {
    display: none;
    width: 100%;
    
    font-size: .875em;
    color: #dc3545;
    margin-top: -10px;
    margin-bottom:5px;
}
.btn-vue1{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    width:100%;
}
.btn-vue2{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    margin-left:15px;
    width:100%;
}

input,select { margin-bottom: 15px; }

label:hover,label:active{   
    color:"purple;"
}




</style>