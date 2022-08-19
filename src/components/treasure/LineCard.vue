<template>
<div class="content-section">
    <div class="content-section-title">推荐</div>
    <ul>
		<li class="adobe-product" v-for="item in recommend" :key="item.id">
            <div class="products">
				<img :src="item.image">
                {{item.name}}
            </div>

            <span class="status">
                <span class="status-circle green"></span>
                {{item.content}}
            </span>

            <div class="button-wrapper">
                <!-- 两种样式 -->
				<!-- <button class="content-button status-button open">操作</button> -->
                <button class="content-button status-button" @click="open(item.name)">打开</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>

import router from "@/router";

export default {
	components: {},
	props:{
		recommend:{
			type: Array,
		}
	},
	methods: {
		open(componentName){
			if (componentName === '颜色剪切板'){
				router.push('/treasure/colorClipboard')
			}
		}
	}

}
</script>

<style lang="scss" scoped>

.content-section {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    color: #ebecec;
    &-title {
        color: #1e1e1f;
        margin-bottom: 14px;
    }

    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        background-color: rgba(186, 191, 217, 0.13);
        padding-left: 0;
        margin: 0;
        border-radius: 14px;
		border: 1px solid rgba(16 18 27 / 10%);
        cursor: pointer;
		li {
			list-style: none;
			padding: 10px 18px;
			display: flex;
			align-items: center;
			font-size: 16px;
			width: 100%;
			height: 100%;
			white-space: nowrap;
			transition: 0.3s;
			&:hover {
				background-color: rgba(16 18 27 / 20%);
				&:first-child {
					border-radius: 13px 13px 0 0;
				}
				&:last-child {
					border-radius: 0 0 13px 13px;
				}
			
			}
			& + li {
				border-top: 1px solid rgba(113 119 144 / 25%);
			}
		}
		
        
        img {
            width: 28px;
            border-radius: 6px;
            margin-right: 16px;
            flex-shrink: 0;
        }
    }

    .products {
        display: flex;
        align-items: center;
        width: 150px;
        @media screen and (max-width: 480px) {
            width: 120px;
        }
    }

    .status {
        margin-left: auto;
        width: 140px;
        font-size: 15px;
        position: relative;
		
        @media screen and (max-width: 700px) {
            display: none;
        }
        &-circle {
            width: 6px;
            height: 6px;
            background-color: #396df0;
            position: absolute;
            border-radius: 50%;
            top: 7px;
            left: -20px;
            &.green {
                background-color: #3bf083;
            }
        }
        &-button {
            font-size: 15px;
            margin-top: 0;
            padding: 6px 24px;
            @media screen and (max-width: 390px) {
                padding: 6px 14px;
            }
            &.open {
                background: none;
                color: rgb(249 250 251 / 55%);
                border: 1px solid rgb(249 250 251 / 55%);
            }
            &:not(.open):hover {
                color: #fff;
                border-color: #fff;
            }
        }
    }

    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 187px;
        margin-left: auto;
        @media screen and (max-width: 480px) {
            width: auto;
        }

    }


}
.content-section .close {
    margin-right: 0;
    width: 24px;
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

.content-button.status-button.open.close {
    width: auto;
}

</style>