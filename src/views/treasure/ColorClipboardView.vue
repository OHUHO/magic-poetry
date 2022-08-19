<template>
	
	<div class="color-clipboard">
		<h3>颜色剪切板</h3>
		<input placeholder="输入颜色，季节，年份，或十六进制代码" v-model="colorSearch" />
		
		<div v-if="colors.length > 0">
			<span class="colors">
				<div class="color" v-for="(color, index) in filteredColors"
					:key="index"
					:data-clipboard-text="color.hex"
					:style="{ backgroundColor: color.hex }"
					@click="addedToClipboard(color.color, color.hex)">
					<span>{{ color.color }}</span>
					<span>{{ color.season }} {{ color.year }}</span>
				</div>
			</span>
			
			<!--底部提示框-->
			<span class="messages">
				<div class="message"
					v-for="(message, index) in messages"
					:key="index"
					:style="{ backgroundColor: message.hex }"
					@click="removeMessage(index)">
					{{ message.message }}
				</div>
			</span>
		</div>
		
	</div>
	
</template>

<script>
export default {
	name: "ColorClipboardView",
	data(){
		return{
			colorSearch: '',
			colors: [
				{'color': 'Spun Sugar', 'hex': '#B4DCEA', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Gossamer Pink', 'hex': '#FAC8C3', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Innuendo', 'hex': '#C43362', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Skydiver', 'hex': '#00589B', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Daffodil', 'hex': '#FDC04E', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Glacier Lake', 'hex': '#81A0BA', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Harbor Blue', 'hex': '#00656E', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Coca Mocha', 'hex': '#856A57', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Dahlia', 'hex': '#843E83', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Poinciana', 'hex': '#CA3422', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Snow White', 'hex': '#F2F0EB', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Perfectly Pale', 'hex': '#D3C9BE', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Basil', 'hex': '#879F84', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Northern Droplet', 'hex': '#BABEBF', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Poppy Seed', 'hex': '#626367', 'year': '2022', 'season': 'spring/summer'},
				{'color': 'Molten Lava', 'hex': '#B5332E', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Dragon Fire', 'hex': '#FC642D', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Meadow Violet', 'hex': '#764F82', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Abundant Green', 'hex': '#006339', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Spicy Mustard', 'hex': '#D8AE47', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Lichen Blue', 'hex': '#5D89B3', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Strawberry Cream', 'hex': '#F4C3C4', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Waterspout', 'hex': '#96D8DE', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Chicory Coffee', 'hex': '#4A342E', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Cardamom Seed', 'hex': '#757331', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Tapioca', 'hex': '#DCCDBC', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Iced Coffee', 'hex': '#B18F6A', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Peach Caramel', 'hex': '#C5733D', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Blueberry', 'hex': '#2C333E', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Quiet Shade', 'hex': '#66676D', 'year': '2022/2023', 'season': 'fall/winter'},
				{'color': 'Mykonos Blue', 'hex': '#045E88', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Illuminating', 'hex': '#F3E04E', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Leprechaun', 'hex': '#438A68', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Fuchsia Fedora', 'hex': '#CC4C8B', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Pale Rosette', 'hex': '#FFBBB9', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Adobe', 'hex': '#A66948', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Fire Whirl', 'hex': '#AC423D', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Rhodonite', 'hex': '#3E3B59', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Spring Lake', 'hex': '#698295', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Root Beer', 'hex': '#76554E', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Coconut Cream', 'hex': '#EFE3DF', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Ultimate Gray', 'hex': '#96999C', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Soybean', 'hex': '#D7C49E', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Olive Branch', 'hex': '#74714E', 'year': '2021/2022', 'season': 'fall/winter'},
				{'color': 'Amberglow', 'hex': '#E17F47', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Samba', 'hex': '#A9363E', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Sandstone', 'hex': '#C88E6F', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Classic Blue', 'hex': '#34558B', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Green Sheen', 'hex': '#DDD257', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Rose Tan', 'hex': '#CE9694', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Ultramarine Green', 'hex': '#007762', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Fired Brick', 'hex': '#753D3C', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Peach Nougat', 'hex': '#E7AF8F', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Magenta Purple', 'hex': '#753D5A', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Almond Oil', 'hex': '#F1E5BE', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Blue Depths', 'hex': '#3D4161', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Sleet', 'hex': '#9D9EA4', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Military Olive', 'hex': '#69614C', 'year': '2020/2021', 'season': 'fall/winter'},
				{'color': 'Marigold', 'hex': '#FEAE51', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Cerulean', 'hex': '#98B2D1', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Rust', 'hex': '#B35F43', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Illuminating', 'hex': '#F3E04E', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'French Blue', 'hex': '#3078B4', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Green Ash', 'hex': '#9FDBAD', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Burnt Coral', 'hex': '#EC8A83', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Mint', 'hex': '#00A779', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Amethyst Orchid', 'hex': '#9369A8', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Raspberry Sorbet', 'hex': '#CD4A76', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Inkwell', 'hex': '#434752', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Ultimate Gray', 'hex': '#96999C', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Buttercream', 'hex': '#F0E3CE', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Desert Mist', 'hex': '#E0B588', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Willow', 'hex': '#9D905A', 'year': '2021', 'season': 'spring/summer'},
				{'color': 'Very Peri', 'hex': '#696AAD', 'year': '2022', 'season': 'spring'},
				{'color': 'Tawny Orange', 'hex': '#D98575', 'year': '2022', 'season': 'spring'},
				{'color': 'Iced Coffee', 'hex': '#B69573', 'year': '2022', 'season': 'spring'},
				{'color': 'Pink Flambé', 'hex': '#CE567E', 'year': '2022', 'season': 'spring'},
				{'color': 'Fuchsia Pink', 'hex': '#E08CB9', 'year': '2022', 'season': 'spring'},
				{'color': 'Paradise Pink', 'hex': '#E64D67', 'year': '2022', 'season': 'spring'},
				{'color': 'Cornsilk', 'hex': '#ECC478', 'year': '2022', 'season': 'spring'},
				{'color': 'Tourmaline', 'hex': '#86A3AC', 'year': '2022', 'season': 'spring'},
				
				
				//Spring 2017
				{color: "Primrose Yellow", hex: "#f6d258", year: "2017", season: "Spring"},
				{color: "Pale Dogwood", hex: "#efcec5", year: "2017", season: "Spring"},
				{color: "Hazelwood", hex: "#d1af94", year: "2017", season: "Spring"},
				{color: "Island Paradise", hex: "#97d5e0", year: "2017", season: "Spring"},
				{color: "Greenery", hex: "#88b14b", year: "2017", season: "Spring"},
				{color: "Flame", hex: "#ef562d", year: "2017", season: "Spring"},
				{color: "Pink Yarrow", hex: "#d13076", year: "2017", season: "Spring"},
				{color: "Niagra", hex: "#5587a2", year: "2017", season: "Spring"},
				{color: "Kale", hex: "#5c7148", year: "2017", season: "Spring"},
				{color: "Lapis Blue", hex: "#0c4c8a", year: "2017", season: "Spring"},
				//Fall 2016
				{color: "Riverside", hex: "#4c6a92", year: "2016", season: "Fall"},
				{color: "Airy Blue", hex: "#92b6d5", year: "2016", season: "Fall"},
				{color: "Shark Skin", hex: "#838487", year: "2016", season: "Fall"},
				{color: "Aurora Red", hex: "#b93a32", year: "2016", season: "Fall"},
				{color: "Warm Taupe", hex: "#af9483", year: "2016", season: "Fall"},
				{color: "Dusty Cedar", hex: "#ad5d5d", year: "2016", season: "Fall"},
				{color: "Lush Meadow", hex: "#006e51", year: "2016", season: "Fall"},
				{color: "Spicy Mustard", hex: "#d8ae47", year: "2016", season: "Fall"},
				{color: "Potters Clay", hex: "#9e4624", year: "2016", season: "Fall"},
				{color: "Bodacious", hex: "#b76ba3", year: "2016", season: "Fall"},
				//Spring 2016
				{color: "Rose Quartz", hex: "#f7cac9", year: "2016", season: "Spring"},
				{color: "Peach Echo", hex: "#f7786b", year: "2016", season: "Spring"},
				{color: "Serenity", hex: "#91a8d0", year: "2016", season: "Spring"},
				{color: "Snorkel Blue", hex: "#034f84", year: "2016", season: "Spring"},
				{color: "Buttercup", hex: "#fae03c", year: "2016", season: "Spring"},
				{color: "Limpet Shell", hex: "#98ddde", year: "2016", season: "Spring"},
				{color: "Lilac Gray", hex: "#9896a4", year: "2016", season: "Spring"},
				{color: "Fiesta", hex: "#dd4132", year: "2016", season: "Spring"},
				{color: "Iced Coffee", hex: "#b18f6a", year: "2016", season: "Spring"},
				{color: "Green Flash", hex: "#79c753", year: "2016", season: "Spring"},
				//Fall 2015
				{color: "Dried Herb", hex: "#847A59", year: "2015", season: "Fall"},
				{color: "Desert Sage", hex: "#A7AE9E", year: "2015", season: "Fall"},
				{color: "Stormy Weather", hex: "#58646D ", year: "2015", season: "Fall"},
				{color: "Oak Buff", hex: "#CF9C63", year: "2015", season: "Fall"},
				{color: "Marsala", hex: "#964F4C", year: "2015", season: "Fall"},
				{color: "Biscay Bay", hex: "#097988", year: "2015", season: "Fall"},
				{color: "Reflecting Pond", hex: "#203E4A", year: "2015", season: "Fall"},
				{color: "Cadmium Orange", hex: "#F99471", year: "2015", season: "Fall"},
				{color: "Cashmere Rose", hex: "#CE879F", year: "2015", season: "Fall"},
				{color: "Amethyst Orchid", hex: "#926AA6", year: "2015", season: "Fall"},
				//Spring 2015
				{color: "Aquamarine", hex: "#9DC3D4", year: "2015", season: "Spring"},
				{color: "Scuba Blue", hex: "#00ABC0", year: "2015", season: "Spring"},
				{color: "Beveled Glass", hex: "#7ACCB8", year: "2015", season: "Spring"},
				{color: "Classic Blue", hex: "#0F4C81", year: "2015", season: "Spring"},
				{color: "Toasted Almond", hex: "#D2B49C", year: "2015", season: "Spring"},
				{color: "Strawberry Ice", hex: "#E78B90", year: "2015", season: "Spring"},
				{color: "Tangerine", hex: "#F88F58", year: "2015", season: "Spring"},
				{color: "Custard", hex: "#E5D68E", year: "2015", season: "Spring"},
				{color: "Marsala", hex: "#964F4C", year: "2015", season: "Spring"},
				{color: "Glacier Gray", hex: "#C5C6C7", year: "2015", season: "Spring"},
				//Fall 2014
				{color: "Radiant Orchid", hex: "#8b4584", year: "2014", season: "Fall"},
				{color: "Royal Blue", hex: "#1e3176", year: "2014", season: "Fall"},
				{color: "Aluminum", hex: "#75796a", year: "2014", season: "Fall"},
				{color: "Aurora Red", hex: "#a90118", year: "2014", season: "Fall"},
				{color: "Misted Yellow", hex: "#d9b74b", year: "2014", season: "Fall"},
				{color: "Sangria", hex: "#760030", year: "2014", season: "Fall"},
				{color: "Mauve Mist", hex: "#af8ea9", year: "2014", season: "Fall"},
				{color: "Cognac", hex: "#60413c", year: "2014", season: "Fall"},
				{color: "Bright Cobalt", hex: "#014983", year: "2014", season: "Fall"},
				{color: "Cypress", hex: "#363b25", year: "2014", season: "Fall"},
				//Spring 2014
				{color: "Dazzling Blue", hex: "#1464ab", year: "2014", season: "Spring"},
				{color: "Violet Tulip", hex: "#9096c8", year: "2014", season: "Spring"},
				{color: "Freesia", hex: "#fcd800", year: "2014", season: "Spring"},
				{color: "Paloma", hex: "#a7b0ad", year: "2014", season: "Spring"},
				{color: "Placid Blue", hex: "#82b8dc", year: "2014", season: "Spring"},
				{color: "Celosa Orange", hex: "#f38047", year: "2014", season: "Spring"},
				{color: "Hemlock", hex: "#9cccb2", year: "2014", season: "Spring"},
				{color: "Radiant Orchid", hex: "#ac70ae", year: "2014", season: "Spring"},
				{color: "Cayenne", hex: "#e0655d", year: "2014", season: "Spring"},
				{color: "Sand", hex: "#cfb38c", year: "2014", season: "Spring"},
				
			
			
			],
			messages: []
		}
	},

	computed: {
		filteredColors() {
			let self = this;
			
			return this.colors.filter(function(color) {
				let parts = self.colorSearch.trim().split(" ");
				
				for(let part of parts) {
					let searchRegex = new RegExp(part, 'i');
					
					if(!(
						searchRegex.test(color.hex) ||
						searchRegex.test(color.color) ||
						searchRegex.test(color.year) ||
						searchRegex.test(color.season)
					)) {
						return false;
					}
				}
				
				return true;
			})
		}
	},

	methods: {
		addedToClipboard(color, hex) {
			let self = this,
				newMessage = {
					message: color + " (" +  hex + ") 已复制到剪贴板",
					hex: hex,
					timeout: ""
				};
			
			newMessage.timeout = setTimeout(function() {
				self.messages.shift();
			}, 3000)
			
			this.messages.push(newMessage);
			
			//复制到剪切板
			const cInput = document.createElement("input");
			cInput.value = hex
			document.body.appendChild(cInput);
			cInput.select();
			document.execCommand("copy");
			document.body.removeChild(cInput);
			
		},
		
		removeMessage(index) {
			clearTimeout(this.messages[index].timeout);
			this.messages.splice(index, 1);
		},
		
	}
}

</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400);


.color-clipboard {
	font: 1.15em "Source Sans Pro", sans-serif;
	//letter-spacing: 0.5px;
	color: black;
	width: 100%;
	text-align: center;
	padding: 20px 40px;
	overflow: auto;
	//background-color: red;
	
	h3 {
		font-size: 1.5em;
		color: white;
		margin-block: 0;
	}
	input {
		display: block;
		appearance: none;
		margin: 1em auto;
		padding: 0.5em 0.5em 0.5em 1em;
		vertical-align: middle;
		border: 1px solid transparent;
		border-top: 2px solid yellow;
		border-bottom: 2px solid springgreen;
		border-radius: 10px;
		color: whitesmoke;
		background: transparent;
		font-size: 1em;
		width: calc(100% - 1em);
		max-width: 20.25em;
		outline: 0;
	}
	input:focus{
		border-top: 3px solid peachpuff;
		border-bottom: 3px solid deepskyblue;
		
	}
	
	::-webkit-input-placeholder{/*Webkit browsers*/
		color: #dcdce0;
		font-size:16px;
	}
	:-moz-placeholder{/*Mozilla Firefox 4 to 8*/
		color: #dcdce0;
		font-size:16px;
	}
	:-ms-input-placeholder{/*Internet Explorer 10+*/
		color: #dcdce0;
		font-size:16px;
	}
	
	.colors {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		//max-width: 2600px;
		//margin: 0 auto;
		
		.color {
			height: 150px;
			margin: 0.5em;
			padding: 0.5em;
			color: white;
			border-radius: 10px;
			display: flex;
			align-items: flex-end;
			flex-grow: 1;
			transition: all 0.1s;
			cursor: pointer;
			
			&:hover {
				// padding: 0.55em;
				text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
				box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
			}
			
			span {
				&:first-of-type {
					align-self: flex-end;
					text-align: left;
					font-size: 2em;
					width: 100%;
				}
				
				&:nth-of-type(2) {
					text-align: right;
					align-self: flex-start;
					font-size: 0.75em;
					width: 100%;
				}
			}
		}
	}
	
	.messages {
		position: fixed;
		//bottom: 0;
		top: 0;
		left: 0;
		width: 100%;
		
		.message {
			padding: 1em;
			background: rgba(0,0,0,0.25);
			color: white;
		}
	}
}

</style>