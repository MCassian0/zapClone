import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native"
import MaterialIcons from  "react-native-vector-icons/MaterialIcons"

export default class HomePg extends Component{

  chat = [
    {
      imagem:"https://fotografiadicas.com.br/wp-content/uploads/2017/10/15-Como-fotografar-pessoas-Fotografia-Dicas.jpg",
      nomeUsuario:"Camille",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg",
      nomeUsuario:"Kevin",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://ef564920920608e03abb-7d34ef097b6ab6c586dfc84157128505.ssl.cf1.rackcdn.com/PostImagem/36734/foto-de-perfil-profissional_o1eh30s23km6j1lmm1k5r8cvinuj.JPG",
      nomeUsuario:"Douglas",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg",
      nomeUsuario:"Noah",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://cdn.folhape.com.br/upload/dn_arquivo/2019/08/rafael-coelho-4.jpg",
      nomeUsuario:"Pedro",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT09HhT1hE4_5SVrGrShW7qDTpe0FiOJ8Eg&usqp=CAU",
      nomeUsuario:"Kevin",
      descricao: "oi bom dia"
    },

    {
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_CpuVYUe1WucwKzg5QPgBizN1dnHT3PgtQ&usqp=CAU",
      nomeUsuario:"Patrick",
      descricao: 
      "oi bom dia"
    },

    
  ]
  render(){
    return(
      <View style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
        <View style={{flexDirection:"row",backgroundColor:"#202D34", width:"100%", height:"10%",padding:8}}>
          <Text style={{color:"#B2BCC3", fontSize: 20, padding: 5, marginRight:"auto",fontWeight:"bold"  }}>WhatsApp</Text>

         <TouchableOpacity style={{marginLeft:"auto",color:"white", padding:8}}>
         <MaterialIcons color="#B2BCC3" name="search" size={30}/>
         </TouchableOpacity>
          
        
         <TouchableOpacity style={{ padding:8}}>
         <MaterialIcons color="#B2BCC3" name="more-vert" size={30}/>
         </TouchableOpacity>
       
        </View>

        <View style={{flexDirection:"row",backgroundColor:"#202D34", width:"100%", height:"auto"}}>
          
        <TouchableOpacity style={{marginRight:"auto", padding:8}}>
         
         <MaterialIcons color="#B2BCC3" name="photo-camera" size={25}/>
         </TouchableOpacity>
         <TouchableOpacity style={{marginRight:"auto", padding:8}}>
         <Text style={{fontSize:20, color:"#B2BCC3"}}>conversas</Text>
         </TouchableOpacity>
          
         <TouchableOpacity style={{ padding:8}}>
         <Text style={{fontSize:20,color:"#B2BCC3",}}>status</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={{marginLeft:"auto" ,padding:8}}>
         <Text style={{fontSize:20, color:"#B2BCC3"}}>chamadas</Text>
         </TouchableOpacity>
        </View>

          <FlatList data={this.chat} 
          renderItem={({item}) => {
            return(
                
              <TouchableOpacity style={{  padding:20,backgroundColor:"#131D24", flexDirection:"row", alignItems:"center",borderBottomWidth:0.3, borderColor:"#B2BCC3",}}> 
                <View  style={{width:50, height:50,backgroundColor:"gray", borderRadius:500}}>
                <Image source={{uri:item.imagem}} style={{ width:50,height:50, borderRadius:500}}  /> 
                </View>
                <Text style={{color:"#B2BCC3",fontWeight:"bold", marginLeft:10 }} >{item.nomeUsuario}</Text>
                <Text style={{width:"100%",color:"#B2BCC3",fontWeight:"bold"}}></Text>
              </TouchableOpacity>
              
                
            );
          }} />
        
      </View>
    );
  }
}