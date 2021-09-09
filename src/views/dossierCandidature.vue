<template>
<div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center " >
          <img id="study" alt="University" src="../assets/ecole.svg" width="700" height="700"  >
        </div>
        
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            
         

    <form id="infos-persos" v-on:submit.prevent="submit">
       
        <header class="form-header">
            
            <v-progress-linear
        buffer-value="70"
        stream
        color="#1F9737"
        style="margin-bottom:20px"
      ></v-progress-linear>
      
      
            
            <h2 class="form-header--title">Dossier de candidature</h2>
            <p class="form-header--desc">Glissez ou uploader vos documents à partir de votre Ordinateur, Google Drive ou Dropbox *.pdf, *.Doc, *.Docx, *.odt and *.txt - jusq'a 15 MB.</p>
            </header>   

        
     
          <v-container>
        <v-row dense>
          <v-col cols="12">
              
            <v-card
              color="#fff"
              dark
              style="border:dashed grey">
              <v-card-title class="text-h5" style="color:#002B4C;font-family:Poppins;font-size:12px">
                Demande d'admission
              </v-card-title>
              
  
              <v-card-subtitle style="color:#002B4C;font-family:Poppins;color:grey">Aucun fichier sélectionné.</v-card-subtitle>
       
  
               <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#1F9737"
              v-bind="attrs"
              v-on="on"
              class="bouton"
              
            >Uploader</v-btn>
          </template>
          <template >
            <v-card>
              <v-toolbar
                color="#1F9737"
                dark
              >
              <v-file-input
      accept="image/*"
      label="File input"
      style="position:relative;top:23%"
      multiple
      v-on:change="handleFilesUpload()"
    ></v-file-input>
              </v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  v-on:click="submitFiles()"
                >OK</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      </v-row>
            </v-card>
              
          </v-col>
        
          <v-col cols="12">
              
            <v-card
              color="#fff"
              dark
              style="border:dashed grey"
            >
            
              <v-card-title class="text-h5" style="color:#002B4C;font-family:Poppins">
                Extrait d'acte de naissance
              </v-card-title>
  
              <v-card-subtitle style="color:#002B4C;font-family:Poppins;color:grey">Aucun fichier sélectionné.</v-card-subtitle>
  
                <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#1F9737"
              v-bind="attrs"
              v-on="on"
              class="bouton"
              
            >Uploader</v-btn>
          </template>
          <template >
            <v-card>
              <v-toolbar
                color="#1F9737"
                dark
              >
              <v-file-input
      accept="image/*"
      label="File input"
      style="position:relative;top:23%"
      multiple
    ></v-file-input>
              </v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="submitFiles()"
                >OK</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      </v-row>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#fff"
              dark
              style="border:dashed grey"
            >
              <v-card-title class="text-h5" style="color:#002B4C;font-family:Poppins">
               Passeport
              </v-card-title>
  
              <v-card-subtitle style="color:#002B4C;font-family:Poppins;color:grey">Aucun fichier sélectionné.</v-card-subtitle>
  
               <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#1F9737"
              v-bind="attrs"
              v-on="on"
              class="bouton"
              
            >Uploader</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="#1F9737"
                dark
              > <v-file-input
      accept="image/*"
      label="File input"
      style="position:relative;top:23%"
      multiple
    ></v-file-input></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
                >OK</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      </v-row>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#fff"
              dark
              style="border:dashed grey"
            >
              <v-card-title class="text-h5" style="color:#002B4C;font-family:Poppins">
               Relevé de notes des trois dernières années d'études
              </v-card-title>
  
              <v-card-subtitle style="color:#002B4C;font-family:Poppins;color:grey">Aucun fichier sélectionné.</v-card-subtitle>
  
               <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#1F9737"
              v-bind="attrs"
              v-on="on"
              class="bouton"
             
            >Uploader</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="#1F9737"
                dark
              > <v-file-input
      accept="image/*"
      label="File input"
      style="position:relative;top:23%"
      multiple
    ></v-file-input></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >OK</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      </v-row>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#fff"
              dark
              style="border:dashed grey"
            >
              <v-card-title class="text-h5" style="color:#002B4C;font-family:Poppins">
               Baccalauréat
              </v-card-title>
  
              <v-card-subtitle style="color:#002B4C;font-family:Poppins;color:grey">Aucun fichier sélectionné.</v-card-subtitle>
  
               <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#1F9737"
              v-bind="attrs"
              v-on="on"
              class="bouton"
              
            >Uploader</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="#1F9737"
                dark
              > <v-file-input
      accept="image/png,image/jpg,image/jpeg,application/pdf"
      label="File input"
      style="position:relative;top:23%"
      v-on:change="handleFilesUpload()"
      multiple
    ></v-file-input></v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Drag and drop your file here</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >OK</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
            
       
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
                @click="submit"
              >
                <span class="v-btn__content" style="color:#76C110">  Suivant  </span>
              </v-btn>
            
             
            
        </div>
        
    </form>
     </div>
          
         
        </div>
      </div>
   

</div>
</template>

<script>


import axios from 'axios'

export default{
    name:'infosPersos'
 ,
 data()
 {
   return{
     files:'',
   }
 },

 methods:{
   //grabs all of the files in the FilesList from our files upload and stores it locally
  handleFilesUpload(){
  this.files = this.$refs.files.files;
  },
  submitFiles(){
    let formData = new FormData();

    for(let i=0; i<this.files.length; i++ ){
       let file = this.files[i];
       formData.append('files[' + i + ']', file); //key/value
       axios.post( 'http://127.0.0.1:8000/api/multiple-image-upload',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
      }
  },
   
 }
 
}

</script>

<style>
#study{
  position:relative;
  top:10px;
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


.v-application .text-h5 {
    font-size: 1.25rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Poppins", sans-serif !important;
   
}
.bouton{
  position:relative;
  left:250%;
  bottom:110%
}
</style>