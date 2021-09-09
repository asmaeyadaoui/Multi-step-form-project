<template>
<div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center " >
          <img id="study" alt="University" src="../assets/ecole.svg" width="700" height="730"   >
        </div>
        
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            
         

    <form id="infos-persos" v-on:submit.prevent="submit" method="POST" autocomplete="on" >
       
        <header class="form-header">
            
            <v-progress-linear
        buffer-value="0"
        stream
        color="#1F9737"
        style="margin-bottom:20px"
      ></v-progress-linear>
      
      
            
            <h2 class="form-header--title">Données personnelles</h2>
            <p class="form-header--desc">Renseignez ce formulaire afin que notre département des admissions prenne contact avec vous dans les plus brefs délais.</p>
            </header>   
        
        <div class="d-flex justify-content-center">
            <div class="p-2">
            <label class="c-blue" style="font-family: Poppins; color: rgb(0, 43, 76); font-size: 14px;">Civilité:</label></div>
            <div class="p-sm-2 p-1">
                <div class="c-radio">
                    <input name="kind" id="mr" type="radio" required="" value="mr" v-model="civilite" >
                    <label for="mr" style="font-family: Poppins; font-size: 14px;">Mr</label>
                    </div>
                    </div>
                    <div class="p-sm-2 p-1">
                        <div class="c-radio">
                            <input name="kind" input="[object Object]" meta="[object Object]" id="mlle" type="radio" required="" value="mlle" v-model="civilite"  >
                            <label for="mlle">Mlle</label>
                            </div>
                            </div>
                            <div class="p-sm-2 p-1">
                                <div class="c-radio">
                                    <input name="kind" input="[object Object]" meta="[object Object]" id="mme" type="radio" required="" value="mme" v-model="civilite" >
                                    <label for="mme">Mme</label>
                                    </div>
                                    </div>
                                    </div>
        <div class="row">
        <div class="col-sm-6 form-group">
            <input name="Nom"  placeholder="Nom" value="" class="form-control" v-model="nom" :class="{'is-invalid': validationStatus($v.nom)}" autocomplete="on">
            <div v-if="!$v.nom.required" class="invalid-feedback1">Veuillez renseigner ce champ</div>
            </div>
        <div class="col-sm-6 form-group">
            <input name="Prenom" placeholder="Prénom" value="" class="form-control" v-model="prenom" :class="{'is-invalid': validationStatus($v.prenom)}">
            <div v-if="!$v.prenom.required" class="invalid-feedback">Veuillez renseigner ce champ</div>
        </div>

        </div>
        <div class="row">
        <div class="col-12 form-group">
            
            <input type="text" class="form-control form-control-lg" placeholder="E-mail" v-model="email" :class="{'is-invalid': validationStatus($v.email)}">
            <div v-if="!$v.email.required" class="invalid-feedback">Veuillez renseigner ce champ</div>
        </div>
        </div>
          <div class="row">
        <div class="col-sm-6 form-group">

            
            <input class="form-control" list="datalistOptions" id="exampleDataList1" placeholder="Tapez votre pays" v-model="pays" :class="{'is-invalid': validationStatus($v.pays)}">
<datalist id="datalistOptions" >
                
                <option :value="c.iso" :key="c.iso" v-for="c in countries">{{c.country}}</option>
                </datalist>
            
          
            <div v-if="!$v.pays.required" class="invalid-feedback1">Veuillez renseigner ce champ</div>
        </div>
        
        <div class="col-sm-6 form-group">
             
            <input class="form-control" list="datalistOptions1" id="exampleDataList" placeholder="Tapez votre ville" v-model="ville" :class="{'is-invalid': validationStatus($v.ville)}">
<datalist id="datalistOptions1">
     <option :value="vi.name" :key="vi.name" v-for="vi in villes">{{vi.name}}</option>
</datalist>
               
            
            <div v-if="!$v.ville.required" class="invalid-feedback">Veuillez renseigner ce champ</div>

        </div>
        </div>
        
           
            
        <div class="row">
            
       
        <div class="col-12 form-group">
            
            <input type="date" class="form-control form-control-lg " min="1990-01-01" max="2002-12-31"  v-model="date" :class="{'is-invalid': validationStatus($v.date)}" >
            <div v-if="!$v.date.required" class="invalid-feedback">Veuillez renseigner ce champ</div>
        </div>
        <div class="col-12 form-group">
               
                  <input name="phone"  class="form-control form-control-lg" placeholder="Téléphone" type="tel" minlength="8" maxlength="12" v-model="tel" :class="{'is-invalid': validationStatus($v.tel)}" >
                  <div v-if="!$v.tel.required" class="invalid-feedback">Veuillez renseigner ce champ</div>
                
            
            </div>
     </div>
     <div class="form-check form-check-inline" style="margin-top:20px;margin-bottom:20px">
  <input class="form-check-input" type="radio" id="cndp" value="option1">
  <label class="form-check-label" style="font-family:Poppins;font-size:13px">Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce traitement a été autorisé par la Commission Nationale de protection de données Personnelles (CNDP).</label>
</div>
         
            
       
        <div class="col-12 form-group text-center">
            <v-btn
                color="#002B4C"
                dark
                large
                @click="submit0()"
              >
                <span class="v-btn__content" style="color:#76C110"> Suivant </span>
              </v-btn>
      
         
           
            
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
    name:'infosPersos'
 ,
  watch:{
    nom(newNom){
      localStorage.nom=newNom;
    },
    prenom(newPrenom){
        localStorage.prenom=newPrenom;
    },
    civilite(newCivilite){
        localStorage.civilite=newCivilite;
    },
    email(newemail){
        localStorage.email=newemail;
    },
    pays(newpays){
        localStorage.pays=newpays;
    },
    ville(newville){
        localStorage.ville=newville;
    },
    tel(newtel){
        localStorage.tel=newtel;
    },
    date(newdate){
        localStorage.date=newdate;
    },
  },
 data(){
     return{
     civilite:'',
     nom:'',
     prenom:'',
     email:'',
     pays:'',
     ville:'',
     tel:'',
     date:'',
     countries:[],
     villes:[],
     indicatifs:[],
     allData:'',
    
     }
 },
 validations:{
     nom:{required},
     prenom:{required},
     email:{required,email},
     pays:{required},
     ville:{required},
     tel:{required},
     date:{required}

 },

 mounted(){
     
     if(localStorage.nom){
         this.nom=localStorage.nom;
     }
     if (localStorage.prenom){
         this.prenom=localStorage.prenom;
     }
     if (localStorage.email){
         this.email=localStorage.email;
     }
     if (localStorage.pays){
         this.pays=localStorage.pays;
     }
     if (localStorage.ville){
         this.ville=localStorage.ville;
     }
     if (localStorage.tel){
         this.tel=localStorage.tel;
     }
     if (localStorage.date){
         this.date=localStorage.date;
     }
     var v=this;
     v.$http.get(`http://localhost:3000/villes`)
     .then(function(res){
         v.villes=res.data;
     })
     .catch(function(e){
         console.log(e)
     })
    
},
async created() {
    try {
      const res = await axios.get(`http://localhost:3000/countries`)

      this.countries = res.data;
    } catch(e) {
      console.error(e)
    }
    

  },

 methods:{
     submit0(){

         axios.post(`http://127.0.0.1:8000/api/clients`, {
           nom: this.nom,
        prenom:this.prenom ,
        email:this.email ,
        civilite:this.civilite ,
        pays: this.pays,
        ville: this.ville,
        date_naiss:this.date,
        telephone: this.tel,  
        /*nom: "Hakimi",
        prenom: "Samir",
        email: "s.hakimi@gmail.com",
        civilite: "Mr",
        pays: "Maroc",
        ville: "Rabat",
        date_naiss: "2001-04-21",
        telephone: "0667957412",
        /*nom_parent1: null,
        prenom_parent1: null,
        tel_parent1: null,
        email_parent1: null,
        profession_parent1: null,
        niveau: null,
        specialite: null,
        diplome_obtenu: null,
        etablissement: null,
        etablissement_frequente: null,
        formation: null,*/
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
         this.$store.dispatch('loadId');
         
        /*axios.get('http://127.0.0.1:8000/api/clients')
      .then(response => (this.allData = response));*/
         this.$v.$touch();
         if(this.$v.$pending || this.$v.$error) return;
       this.$router.push({ path: "/coordonneesparents" });
      
  
      
     },
     validationStatus:function(validation){
         return typeof validation!="undefined" ? validation.$error:false;

     },
     resetData(){
         this.nom='',
     this.prenom='',
     this.email='',
     this.tel='',
     this.pays='',
     this.ville='',
     this.tel='',
    this.date_naiss=''
     },

    
     
     
}
}


</script>

<style>
#study{
    position: relative;
    bottom:10px;
}
.btn-vue{
    background:#1F9737;
    color: #fff;
    font-weight: bold;
    
}

.form-header--title {
    color:#1F9737;
    font-family: Poppins;
    font-size: 25px;
    font-weight: bold;
    line-height: 25px;
    margin-top:15px;
    margin-bottom:15px;
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

input[name="phone"]{
  margin-left:100px;
  width:80%;
  
}
.invalid-feedback {
    display: none;
    width: 100%;
    font-size: .875em;
    color: #dc3545;
    margin-bottom: 15px;
    margin-left:10%; 
    
}
.invalid-feedback1 {
  
    display: none;
    width: 100%;
    font-size: .875em;
    color: #dc3545;
 
    margin-bottom: 15px;
    margin-left:30%; 
}
    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #1F9737;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }


</style>