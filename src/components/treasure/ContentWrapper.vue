<template>
<div class="treasure-header">
    <div class="treasure-context">
        <h3 class="img-content">
			<!--<svg t="1659511980877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="767"><path d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z" fill="#41B883" p-id="768"></path><path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495E" p-id="769"></path></svg>-->
			<img :src="wrapper[0].image">
            {{wrapper[0].name}}
        </h3>
        <div class="content-text">{{wrapper[0].content}}</div>
        <button class="content-button">立即查看</button>
    </div>
    <!--<img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="">-->
    <img class="content-wrapper-img" src="../../assets/images/vue_row.png">
	
</div>
</template>

<script>
export default {
	props:{
		wrapper:Array,
	},
	data(){
		return {
		
		}
	}
}
</script>

<style lang="scss" scoped>


.treasure-header{
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
	/*linear-gradient(
			to right top,
			#cf4af3,
			#e73bd7,
			#f631bc,
			#fd31a2,
			#ff3a8b,
			#ff4b78,
			#ff5e68,
			#ff705c,
			#ff8c51,
			#ffaa49,
			#ffc848,
			#ffe652
	);*/
	linear-gradient(45deg,#4bc0c8,#c779d0,#feac5e);
	//linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%);

	border-radius: 14px;
	padding: 20px 40px;
	@media screen and (max-width: 415px) {
		padding: 20px;
	}
	
    .treasure-context {
        max-width: 350px;

        .img-content {
            font-weight: 500;
            font-size: 17px;
            display: flex;
            align-items: center;
            margin: 0;
            img {
                width: 28px;
                margin-right: 14px;
            }
        }

        .content-text {
            font-weight: 400;
            font-size: 14px;
            margin-top: 16px;
            line-height: 1.7em;
            color: #ebecec;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
    .content-wrapper-img {
        width: 160px;
        object-fit: cover;
        object-position: center;
        @media screen and (max-width: 570px) {
            width: 110px;
        }
    }
}
//下面是一些公用的样式

.content-button {
    background-color: #3a6df0;
    border: none;
    padding: 8px 26px;
    color: #fff;
    border-radius: 20px;
    margin-top: 16px;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
}

// start free trail
.content-button:not(.open):hover {
    background: #1e59f1;
}

.content-button-wrapper .content-button.status-button.open.close {
    width: auto;
}

</style>