class Productdata{
    constructor(){
    this.product = null;
    }

    updatedata(array){
    database.ref('/').set({
      productdata : array  
    })
    }

    getdata(){
    database.ref("productdata").on("value",data => {
        this.product = data.val()
    })
    }
}