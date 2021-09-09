<template>
<div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center">
          <img alt="University"  src="../assets/ecole.svg" width="700" height="730"  >
        </div>
        
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">

    <form id="parcours" v-on:submit.prevent="submit">
        
       
        <header class="form-header">
            <v-progress-linear
        buffer-value="50"
        stream
        color="#1F9737"
        style="margin-bottom:20px"
      ></v-progress-linear>
            
            <h2 class="form-header--title">Parcours scolaire & orientation</h2>
            <p class="form-header--desc">Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais.</p>
            </header>   
        
        <div class="row">
            
                    <div class="col-sm-6 form-group">
                        <select name="niveau" placeholder="Niveau" class="form-control subheading grey--text" v-model="niveau" >
                            
                            <option selected>Niveau</option>
                            <option value="Bac+1" style="color:Black">Bac+1</option>
                            <option value="Bac+2" style="color:Black">Bac+2</option>
                            <option value="Bac+3" style="color:Black">Bac+3</option>
                            <option value="Bac+4" style="color:Black">Bac+4</option>
                            <option value="Bac+5" style="color:Black">Bac+5</option>
                            </select>
                            </div>
                    <div class="col-sm-6 form-group">
                <select name="specialite" class="form-control subheading grey--text"  v-model="specialite" >
                    
                    <option value=""></option>
                    <option value="Génie Logiciel" style="color:Black">Spécialité</option>
                    <option value="Réseaux&Télécoms" style="color:Black">Réseaux&Télécoms</option>
                    <option value="Informatique Web et Mobile" style="color:Black" >Informatique Web et Mobile</option>
                    <option value="Finance" style="color:Black" >Finance</option>
                    <option value="Business Intelligence" style="color:Black" >Business Intelligence</option>
                    </select>
                    </div>
                            </div>
       <div class="row">
           <div class="col-sm-6 form-group">
               <input  name="diplome" input="[object Object]" meta="[object Object]" class="form-control" placeholder="Diplome obtenu" value="" v-model="diplome" :class="{'is-invalid': validationStatus($v.diplome)}">

           </div>
           <div class="col-sm-6 form-group">
               <input  name="etablissement" type="date" class="form-control" placeholder="Date d'obtention" v-model="etablissement" value="" :class="{'is-invalid': validationStatus($v.etablissement)}">

           </div>
           
           </div>
           <div class="row">
           <div class="col-sm-6 form-group">
               <input  name="Etablissement fréquenté" input="[object Object]" meta="[object Object]" class="form-control" placeholder="Etablissement fréquenté" value="" v-model="etablissement_frequente" :class="{'is-invalid': validationStatus($v.etablissement_frequente)}">

           
           </div>
           <div class="col-sm-6 form-group">
               <input  name="Formation" input="[object Object]" meta="[object Object]" class="form-control" placeholder="Formation souhaitée" value="" v-model="formation" :class="{'is-invalid': validationStatus($v.formation)}">

           
           </div>
           </div>
           <div>
           <div class="col-12 form-group text-center">
             <router-link to="/">
            <v-btn
                color="#76C110"
                dark
                large
                style="margin-right:20px"
              >
                <span class="v-btn__content" style="color:#fff;width:80%"> Précédent </span>
              </v-btn>
            </router-link>
            
            <v-btn
                color="#002B4C"
                dark
                large
                @click="submit2"
              >
                <span class="v-btn__content" style="color:#76C110">  Suivant  </span>
              </v-btn>
            
             
            
        </div>
           </div>
           
            
           
        
          
    </form>
    </div>
    </div>
          
         
        </div>
      </div>
    


</template>

<script>

import {required} from 'vuelidate/lib/validators'
import axios from 'axios'


export default{
    name:'parcours'
 ,
 mounted () {
    this.$store.dispatch('loadId')
     if(localStorage.niveau){
         this.niveau=localStorage.niveau;
     }
     if (localStorage.specialite){
         this.specialite=localStorage.specialite;
     }
     if (localStorage.diplome){
         this.diplome=localStorage.diplome;
     }
     if (localStorage.etablissement){
         this.etablissement=localStorage.etablissement;
     }
     if (localStorage.etablissement_frequente){
         this.etablissement_frequente=localStorage.etablissement_frequente;
     }
     if (localStorage.formation){
         this.formation=localStorage.formation;
     }
  },
  watch:{
    niveau(newniveau){
      localStorage.niveau=newniveau;
    },
    specialite(newspecialite){
        localStorage.specialite=newspecialite;
    },
    diplome(newdiplome){
        localStorage.diplome=newdiplome;
    },
    etablissement(newetablissement){
        localStorage.etablissement=newetablissement;
    },
    etablissement_frequente(newetablissement_frequente){
        localStorage.etablissement_frequente=newetablissement_frequente;
    },
    formation(newformation){
        localStorage.formation=newformation;
    },
  },
 data(){
     return{
    
     niveau:'',
     specialite:['finance','génie logiciel','business intelligence','réseaux&télécoms'],
     diplome:'',
     etablissement:'',
     etablissement_frequente:'',
     formation:''

     }
 },
 validations:{
     niveau:{required},
     specialite:{required},
     diplome:{required},
     etablissement:{required},
     etablissement_frequente:{required},
    formation:{required}

 },

 methods:{
     submit2(){

          const currentId1=this.$store.getters.id;
         axios.put(`http://127.0.0.1:8000/api/clients/updaterow2/${currentId1}`, {
    //nom: "Hakimi",
        /*prenom: "Samir",
        email: "s.hakimi@gmail.com",
        civilite: "Mr",
        etablissement: "Maroc",
        ville: "Rabat",
        date_naiss: "2001-04-21",
        telephone: "0667957412",
        nom_parent1: null,
        prenom_parent1: null,
        tel_parent1: null,
        email_parent1: null,
        profession_parent1: null,*/
        niveau:this.niveau,
        specialite:this.specialite,
        diplome_obtenu: this.diplome,
        etablissement: this.etablissement,
        etablissement_frequente: this.etablissement_frequente,
        formation:this.formation,
        }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
         this.$v.$touch();
         if(this.$v.$pending || this.$v.$error) return;
         this.$router.push({ path: "/dossierCandidature" })
         


     },
     validationStatus:function(validation){
         return typeof validation!="undefined" ? validation.$error:false;

     },
     resetData(){
         this.niveau='',
     this.specialite='',
   this.diplome='',
     this.etablissement='',
     this.etablissement_frequente=''
     }
 }
}

</script>

<style>
input[name="etablissement"]{
  margin-left:50px; 
}

input[name="Formation"]{
    margin-left:50px;
}
select[name="specialite"]{
    margin-left:50px;
}

.btn-vue{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    width:100px;
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

input,select { margin-bottom: 15px; }
.progress{
    background-color: #1F9737;
    height:40px;
    width:100%;
    border-radius:5px;
    position:relative;
    top:180px;
    margin-bottom:50px;
    box-shadow:5px -10px 12px 3px rgba(0,0,0,0.3);
    padding:8px;
    
}
.fill{
    background:linear-gradient(45deg,rgba(255,255,255,0.5) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.5) 75%,transparent 75%,transparent);
    background-size:40px;
    border-radius:5px;
    animation: move 0.5s linear infinite;
}
@keyframes move{
    100%{
        background-position: 40px 0px;

    }
}
.a{
    background-color:red;
    width:100%;
    height:100%;

}
.phone-fields {
    display: flex;
    margin-bottom: 15px;
    position: relative;
    box-shadow: 0 15px 25px rgb(0 0 0 / 10%);
    border-color: rgba(194, 194, 194, 0.5);
    font-size: 14px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.btn3{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    margin-top:30px;
    width:100%
}
.btn4{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    margin-left:15px;
    margin-top:30px;
    width:100%;
}
</style>