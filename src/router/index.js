import { createRouter, createWebHashHistory } from 'vue-router'

import TreasureView from "@/views/TreasureView";
import RecordView from "@/views/RecordView";
import ShortcutView from "@/views/ShortcutView";
import GalleryView from "@/views/treasure/GalleryView";
import ProfileCardView from "@/views/card/ProfileCardView";
import ArticleDetailsView from "@/views/gadget/ArticleDetailsView";
import ColorClipboardView from "@/views/treasure/ColorClipboardView";
import PracticalTableView from "@/views/useless/PracticalTableView";
import DigitalClockView from "@/views/treasure/DigitalClockView";
import userCardVIew from "@/views/card/UserCardVIew";
import CatButterflyView from "@/views/beautiful/CatButterflyView";
import DogRoseView from "@/views/beautiful/DogRoseView";
import TimeButtonView from "@/views/gadget/TimeButtonView";
import AnimationButtonView from "@/views/gadget/AnimationButtonView";
import NewsCardView from "@/views/card/NewsCardView";
import PersonInfoView from "@/views/gadget/PersonInfoView";
import GreenEyesCatView from "@/views/beautiful/GreenEyesCatView";
import HoverButtonView from "@/views/gadget/HoverButtonView";
import TictactoeView from "@/views/games/TictactoeView";


const routes = [
  {
    path: '/',
    name:'index',
    redirect:'/treasure',
  },

  //  百宝箱
  {
    path: '/treasure',
    name: 'treasure',
    component: TreasureView,
    children:[
      {
        path: 'gallery',
        name: 'gallery',
        component: GalleryView,
      },
      {
        path: 'digitalClock',
        name: 'digitalClock',
        component: DigitalClockView
      },
      {
        path: 'colorClipboard',
        name: 'colorClipboard',
        component: ColorClipboardView,
      },
    ]
  },

  //记录线
  {
    path:'/record',
    name:'record',
    component: RecordView
  },


  //  喜捷径
  {
    path:'/shortcut',
    name:'shortcut',
    component: ShortcutView
  },


  //  炫酷卡片
  {
    path:'/card',
    name: 'card',
    children: [
      {
        path: 'userCard',
        name: 'userCard',
        component: userCardVIew,
      },
      {
        path: 'profileCard',
        name: 'profileCard',
        component: ProfileCardView,
      },
      {
        path: 'newsCard',
        name: 'newsCard',
        component: NewsCardView
      }
    ]
  },


  //优美画面
  {
    path: '/beautiful',
    name: 'beautiful',
    children: [
      {
        path: 'catButterfly',
        name: 'catButterfly',
        component: CatButterflyView
      },
      {
        path: 'dogRose',
        name: 'dogRose',
        component: DogRoseView
      },
      {
        path: 'greenEyesCat',
        name: 'greenEyesCat',
        component: GreenEyesCatView
      }
    ]
  },

  //小玩意儿
  {
    path: '/gadget',
    name: 'gadget',
    children: [
      {
        path: 'timeButton',
        name: 'timeButton',
        component: TimeButtonView
      },
      {
        path: 'animationButton',
        name: 'animationButton',
        component: AnimationButtonView
      },
      {
        path: 'articleDetails',
        name: 'articleDetails',
        component: ArticleDetailsView,
      },
      {
        path:'personInfo',
        name:'personInfo',
        component: PersonInfoView
      },
      {
        path: 'hoverButton',
        name: 'hoverButton',
        component: HoverButtonView
      }
    ]
  },

  //  小游戏
  {
    path: '/games',
    name: 'games',
    children: [
      {
        path: 'tictactoe',
        name: 'tictactoe',
      component: TictactoeView
      }
    ]
  },



  {
    path: '/practicalTable',
    name: 'practicalTable',
    component: PracticalTableView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
