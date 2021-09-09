<template>
  <v-app>
      <v-spacer></v-spacer>
    <v-main>
      <router-view/>
    </v-main>
    </v-app>
  
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
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

 submit(){
         axios.post('http://127.0.0.1:8000/api/clients', {
    nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        civilite: this.civilite,
        pays: this.pays,
        ville: this.ville,
        date_naiss: this.date_naiss,
        telephone: this.telephone,
        nom_parent1: this.nom_parent1,
        prenom_parent1: this.prenom_parent1,
        tel_parent1: this.tel_parent4,
        email_parent1: this.email_parent1,
        profession_parent1: this.profession_parent1,
        niveau: this.niveau,
        specialite: this.specialite,
        diplome_obtenu: this.diplome_obtenu,
        etablissement: this.etablissement,
        etablissement_frequente: this.etablissement_frequente,
        formation: this.formation,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

},
}
</script>
<style>


input[type=text],input[type=tel],#exampleDataLists{
  width: 80%;
  float: left;
  height: 25px;
  margin-top: 5px;
  text-align: left;
  text-indent: 5px;
  font-size: 12.6pt;
  border-radius: 5px;
  border: medium 1.5px #D3D3D3;
  -webkit-transition: 1s; /* Safari */
  transition: 1s;
  box-shadow: 4px 4px 8px #888888;
  height:70%;
  margin-left:100px;
}
input[type=text],#exampleDataList,.phone-fields:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
input[type=text],#exampleDataList,.phone-fields:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}

input[type=date] {
  width: 80%;
  float: left;
  height: 25px;
  margin-top: 5px;
  text-align: left;
  text-indent: 5px;
  font-size: 12.6pt;
  border-radius: 5px;
  border: medium 1.5px #D3D3D3;
  -webkit-transition: 1s; /* Safari */
  transition: 1s;
  box-shadow: 4px 4px 8px #888888;
  height:70%;
  margin-left:100px;
}
input[type=date]:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
input[type=date]:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}


#pays,#ville{
  width: 80%;
  float: left;
  height: 25px;
  margin-top: 5px;
  text-align: left;
  text-indent: 5px;
  font-size: 12.6pt;
  border-radius: 5px;
  border: medium 1.5px #D3D3D3;
  -webkit-transition: 1s; /* Safari */
  transition: 1s;
  box-shadow: 4px 4px 8px #888888;
  height:50%;
  margin-left:99.8px;

}
#pays,#ville:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
#pays,#ville:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}
.form-control{
 width:80%;
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  margin-left:100px;

}
input[name="Prenom"],#exampleDataList {
  position: relative;
  right:70px;
  
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

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
</style>