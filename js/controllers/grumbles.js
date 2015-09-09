var app = angular.module("grumblr")
app.controller("grumblesController", function(){
  this.grumbles = [
      {title: "Plaid meggings cornhole", authorName: "Arcade Fire", content: "Tousled hashtag master cleanse taxidermy Bushwick. +1 before they sold out plaid flannel. Literally Echo Park vegan gastropub Wes Anderson, synth master cleanse put a bird on it bespoke chillwave. Flexitarian Pinterest umami, migas hashtag normcore scenester tofu tousled Portland cold-pressed Helvetica post-ironic McSweeney's. Direct trade try-hard chillwave, synth fap DIY stumptown fanny pack. Austin cred put a bird on it Odd Future meditation art party Echo Park. Tofu plaid sriracha bitters.", photoUrl: "http://cdn1.medicalnewstoday.com/content/images/articles/297/297449/a-cup-of-coffee.jpg"},
      {title: "Typewriter Godard literally", authorName: "The National", content: "Bitters Thundercats iPhone church-key +1 brunch. Small batch Truffaut deep v, direct trade YOLO Wes Anderson wolf art party put a bird on it messenger bag brunch kale chips skateboard. Forage Blue Bottle chillwave, hella cronut irony meditation occupy Truffaut pickled Banksy whatever. Seitan gluten-free disrupt PBR literally. Paleo put a bird on it church-key, art party Vice seitan actually lo-fi dreamcatcher before they sold out Marfa salvia. Hoodie wolf art party sriracha. Freegan mustache four loko, chia street art artisan Pinterest fap.", photoUrl: "http://7-themes.com/data_images/out/68/7005662-record-store-photo.jpg"},
      {title: "Echo Park Vinyl", authorName: "FKA Twigs", content: "Put a bird on it photo booth bicycle rights flexitarian, tote bag umami try-hard tattooed cold-pressed Pinterest sartorial. Letterpress PBR Portland roof party, lumbersexual meh brunch pour-over. Jean shorts disrupt crucifix food truck next level, Williamsburg Marfa PBR YOLO. Heirloom occupy Kickstarter, freegan migas skateboard church-key Austin Shoreditch master cleanse. Stumptown sartorial fixie ugh. Tumblr banh mi tattooed semiotics Portland keffiyeh skateboard. Fap craft beer hella trust fund, mixtape retro raw denim.", photoUrl: "http://cdn.shopify.com/s/files/1/0247/9431/products/IMG_6824s.jpg?v=1373376737"},
      {title: "Four dollar toast", authorName: "Tame Impala", content: "Small batch single-origin coffee cold-pressed fingerstache, cornhole shabby chic Truffaut Tumblr letterpress health goth flexitarian lomo. Bitters ethical quinoa fixie viral, meditation banh mi Marfa shabby chic post-ironic fingerstache chambray cray semiotics. Try-hard Helvetica keffiyeh quinoa banh mi VHS. Selvage listicle tousled, Vice single-origin coffee Kickstarter flexitarian Blue Bottle 8-bit narwhal squid irony slow-carb. PBR&B meggings Carles, post-ironic Banksy bicycle rights Godard banh mi whatever YOLO Odd Future heirloom Etsy. Tilde Portland normcore banjo Pitchfork. Locavore farm-to-table cliche Thundercats.", photoUrl: "#"},
      {title: "Tote bag Truffaut try-hard", authorName: "Erik", content: "Sriracha hella cred four dollar toast beard wayfarers. Kale chips shabby chic tattooed VHS, hoodie DIY Truffaut stumptown leggings. Stumptown gentrify pickled Echo Park hoodie keffiyeh, pug normcore ethical chia swag narwhal. Normcore irony tilde trust fund. Kickstarter Tumblr Shoreditch sartorial, 90's pug narwhal Etsy four loko occupy asymmetrical brunch swag mustache. Organic direct trade hashtag synth. Williamsburg messenger bag listicle Helvetica.", photoUrl: "http://i.ytimg.com/vi/GNHfrVyrl3A/maxresdefault.jpg"}
  ],
  this.formIsVisible = false,
  this.toggleForm = function(){
      if(this.formIsVisible){
          this.formIsVisible = false
      }
      else {
          this.formIsVisible = true
      }
  }
  this.create = function(){
    this.grumbles.unshift({
      title: this.title,
      authorName: this.authorName,
      content: this.content,
      photoUrl: this.photoUrl
    })
  }
  this.edit = function(index){
    var grumble = this.grumbles[index]
    this.title = grumble.title
    this.authorName = grumble.authorName
    this.photoUrl = grumble.photoUrl
    this.content = grumble.content
  }
  this.update = function(index){
    var grumble = this.grumbles[index]
    grumble.title = this.title
    grumble.authorName = this.authorName
    grumble.photoUrl = this.photoUrl
    grumble.content = this.content
  }
})
