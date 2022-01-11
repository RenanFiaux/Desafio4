'usar estrito' ;
const  {
  Modelo
}  =  require ( 'sequelizar' ) ;
módulo . export  =  ( sequelize ,  DataTypes )  =>  {
  classe  Servico  estende o  modelo  {
    /**
     * Método auxiliar para definir associações.
     * Este método não faz parte do ciclo de vida do Sequelize.
     * O arquivo `models/index` chamará este método automaticamente.
     * /
     associado estático ( modelos )  {
      // define associação aqui
      Serviço . hasMany ( modelos . Pedido ) ;
    }
  } ;
  Serviço . init ( {
    nome : Tipos de dados . STRING ,
    descricao : DataTypes . CORDA    
  } ,  {
    sequelar ,
    modelName : 'Servico' ,
  } ) ;
  voltar  Servico ;
} ;
