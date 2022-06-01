document.addEventListener('alpine:init', () => {
  Alpine.data('clothing', () => ({
      init() {
          this.filterData(),
              this.garments(),
              this.filterRange(),
              this.garment()
      },
      garments: [],
      garment: [],
      genderFilter: '',
      seasonFilter: '',
      maxPrice: 0.00,
      addGarment: false,
      addDescription: '',
      addimg: '',
      addPrice: 0.00,
      addGender: '',
      addSeason: '',


      garments() {
          try {
              fetch(`/api/garments`)
                  .then(r => r.json())
                  .then(garmentsData => this.garments = garmentsData.data)
          } catch (error) {

          }
      },
      filterData() {
          try {
              // console.log(this.genderFilter, this.seasonFilter);
              fetch(`/api/garments?gender=${this.genderFilter}&season=${this.seasonFilter}`)
                  .then(r => r.json())
                  .then(garmentsData => this.garments = garmentsData.data)
          } catch (error) {

          }


      },
      filterRange() {
          try {
              // console.log(this.price);
              fetch(`/api/garments/price/${this.maxPrice}`)
                  .then(r => r.json())
                  .then(garmentsData => this.garments = garmentsData.data)
          } catch (error) {

          }
      },
      garment() {
          try {
              console.log(this.addDescription);
              fetch(`/api/garment/Description=${this.addDescription}&img=${this.addimg}&price=${this.addPrice}&gender=${this.addGender}&season=${this.addSeason}`)
                  .then(r => r.json())
                  .then(garmentsData => this.garments = garmentsData.data)


          } catch (error) {

          }
      },

  }))

})





