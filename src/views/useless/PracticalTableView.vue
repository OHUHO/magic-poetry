<template>
	
	<div class="practical-table">
		<div class="container card">
			<h2>{{ title }}</h2>
			<div class="form-group">
				<input type="text" class="form-control mt-3 mb-3" placeholder="Domains" v-model="search">
			</div>
			<table class="table  table-hover table-md">
				<thead class="thead-dark">
					<tr>
						<th></th>
						<th v-for="(item, key) in items[0]" :key="item.id">
							<span @click="sortRow(key)" style="cursor: pointer;">{{ key }}</span>
						</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in filterItems" :key="item.id">
						<td><input type="checkbox" ></td>
						<td>{{ item.id}}</td>
						<td>{{ item.domain }}</td>
						<td><a href="#">{{ item.site }}</a></td>
						<td>{{ item.owner }}</td>
						<td class="text-right">
							<div class="btn btn-secondary btn-sm">编辑</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
</template>

<script>
export default {
	name: "PracticalTableView",
	data(){
		return{
			search: '',
			title : "My Domain table",
			sortOrder: 1,
			items: [
				{id: 1, domain: "rellgast.com", site: "www.rellgast.com", owner: "Clayton Adkins"},
				{id: 2, domain: "wounimia.com", site: "www.wounimia.com", owner: "Alicia Santiago"},
				{id: 3, domain: "attantik.com", site: "www.attantik.com", owner: "Ed Wilson"},
				{id: 4, domain: "jurgrate.nl", site: "www.jurgrate.com", owner: "Dixie Pratt"},
				{id: 5, domain: "drindimp.eu", site: "www.drindimp.com", owner: "Dorothy Becker"},
				{id: 6, domain: "heatatna.biz", site: "www.heatatna.com", owner: "Jessie Klein"},
				{id: 7, domain: "arabresl.com", site: "www.arabresl.com", owner: "Rochelle Sullivan"},
				{id: 8, domain: "hicerris.com", site: "www.hicerris.com", owner: "Rodney Beck"},
				{id: 9, domain: "bronseut.com", site: "www.bronseut.com", owner: "Wanda Wilkerson"},
				{id: 10, domain: "yurizart.com", site: "www.yurizart.com", owner: "Margarita Moran"},
				{id: 11, domain: "teatitys.com", site: "www.teatitys.com", owner: "Al Christensen"},
				{id: 12, domain: "ererslar.com", site: "www.ererslar.com", owner: "Bobby Jacobs"},
				{id: 13, domain: "flowigie.com", site: "www.flowigie.com", owner: "Daisy Andrews"},
				{id: 14, domain: "goortido.com", site: "www.goortido.com", owner: "Angel Parks"},
				{id: 15, domain: "idorcury.com", site: "www.idorcury.com", owner: "Evelyn Yates"},
				{id: 16, domain: "eropporf.com", site: "www.eropporf.com", owner: "Chelsea Gutierrez"},
				{id: 17, domain: "crouessu.com", site: "www.crouessu.com", owner: "Nichole Long"},
				{id: 18, domain: "mesupity.com", site: "www.mesupity.com", owner: "Guy Carroll"},
				{id: 19, domain: "lothiacy.com", site: "www.lothiacy.com", owner: "Shelia Kim"},
				{id: 20, domain: "aroolork.com", site: "www.aroolork.com", owner: "Renee Foster"},
				{id: 21, domain: "hetroots.com", site: "www.hetroots.com", owner: "Eula Collier"},
				{id: 22, domain: "ailintre.com", site: "www.ailintre.com", owner: "David Evans"},
				{id: 23, domain: "owlamert.com", site: "www.owlamert.com", owner: "Cathy Weber"},
				{id: 24, domain: "thangaic.com", site: "www.thangaic.com", owner: "Harold Wolfe"},
				{id: 25, domain: "catidsie.com", site: "www.catidsie.com", owner: "Gregory Larson"},
				{id: 25, domain: "miniflaw.com", site: "www.miniflaw.com", owner: "Nelson Hayes"},
				{id: 27, domain: "ejareasy.com", site: "www.ejareasy.com", owner: "Lana Huff"},
				{id: 28, domain: "karemles.com", site: "www.karemles.com", owner: "Megan Fowler"},
				{id: 29, domain: "plottirk.com", site: "www.plottirk.com", owner: "Darryl Osborne"},
				{id: 30, domain: "scrittee.com", site: "www.scrittee.com", owner: "Lora Gilbert"}
			]
		}
	},
	methods: {
		
		// Sort columns
		sortRow(columnName){
			
			// sort column
			this.items.sort(this.dynamicSort(columnName, this.sortOrder))
			
			//reverse order on next click
			if( this.sortOrder == 1 ){
				
				this.sortOrder = -1;
				
			} else if( this.sortOrder == -1 ){
				
				this.sortOrder = 1;
				
			}
		},
		dynamicSort(property,sortOrder){
				//eslint-disable-next-line no-self-assign
				sortOrder = sortOrder;
				if(property[0] === "-") {
					sortOrder = -5;
					property = property.substr(1);
					
				}
				return function (a,b){
					const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
					return result * sortOrder;
				}
		}
	},
	computed: {
		filterItems: function(){
			return this.items.filter((item) => {
				return item.domain.match(this.search);
			});
		}
	}
	
	
}
</script>

<style scoped>

.practical-table{
	width: 100%;
	padding: 20px 40px;
	overflow: auto;
	
}
.card{
	background-color: transparent;
	border: 1px solid transparent;
}

.form-control{
	background-color: #ded9d9;
	margin: 0;
}
.thead-dark{
	background-color: #585d6b;
	color: white;
}

</style>