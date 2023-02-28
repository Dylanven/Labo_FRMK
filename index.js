let app = new Vue({
    el: '#app',
    data: { 
      type : 'Casquette Off White',
    // tableaux de données des images
     product: [
        { id: 1, name: 'Casquette Off White', img: 'img/OffWhite.jpg',description: 'Casquette premium', price : 250, quantity : 4},
        { id:2 ,name: 'Casquette Supreme', img: 'img/Supreme.jpg', description:'Casquette Hype',  price : 100, quantity : 5},
        { id: 3, name: 'Casquette NY', img: 'img/Ny.jpg', description:'Casquette de baseball', price : 50, quantity : 6},
        { id: 4, name: 'Casquette', img: 'img/casquette.jpg', description:'Casquette lamda',  price : 20, quantity : 5},
        
        ],
      panier: [

        ],


    },
  
    methods: {
        // fonction pour changer le type de produit
        changeType(type) {
            console.log("change type");
            this.type = type;
        },

        // fonction pour ajouter un produit au panier diminue la quantité du product et augmente la quantité du panier si le panier a déjà le produit l'augmenter et additionner le prix
        addProduct(product) {
            console.log(product.quantity);
            if(product.quantity > 0){
                product.quantity--;
                console.log("add product");
                if(this.panier.find(p => p.id === product.id)){
                    // augmenter la quantité du panier et additionner le prix en fonction du produit
                    this.panier.find(p => p.id === product.id).quantity++;
                    
                }else{
                    this.panier.push({id: product.id, name: product.name, price: product.price, quantity: 1});
                                       
                }
            }
        },
        // fonction pour vider le panier
        emptyCart() {
            console.log("empty cart");
            this.panier = [];
            this.product = [
                { id: 1, name: 'Casquette Off White', img: 'img/OffWhite.jpg',description: 'Personnage de grande taille', color : 'red', price : 10, quantity : 4},
                { id:2 ,name: 'Casquette Supreme', img: 'img/Supreme.jpg', description:'Object hyper puissant', color : 'blue', price : 20, quantity : 5},
                { id: 3, name: 'Casquette NY', img: 'img/Ny.jpg', description:'Personnage sans sentiment, sans émotion', color : 'yellow' , price : 30, quantity : 6},
                { id: 4, name: 'Casquette', img: 'img/jedi.jpg', description:'Personnage de grande taille', color : 'blue', price : 40, quantity : 5},
                
                ];
        },
        //fonction pour afficher le prix total du panier
        totalPrice() {
            let total = 0;
            this.panier.forEach(p => {
                total += p.price * p.quantity;
            });
            return total;
        },
        totalArticles() {
            let total = 0;
            this.panier.forEach(p => {
                total += p.quantity;
            });
            return total;
        },
       
    },
  
});

  