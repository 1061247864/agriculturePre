var urlprofix="http://localhost:4433/";



var titleObj ="<div class=\"site-nav-bg\"  id=\"apps\">\n" +
    "    <div class=\"site-nav w1200\">\n" +
    "        <p class=\"sn-back-home\">\n" +
    "            <i class=\"layui-icon layui-icon-home\"></i>\n" +
    "            <a href=\"javascript:void(0)\"  >首页</a>\n" +
    "        </p>\n" +
    "        <div class=\"sn-quick-menu\">\n" +
    "            <div class=\"login\"  v-if='!userobj'><a href=\"login.html\">登录</a></div>\n" +
    "             <div class=\"login\" v-show=\"true\" v-if='userobj' ><a href='javascript:void(0)'>{{userobj.userName}}</a></div>\n       " +
    "            <div class=\"sp-cart\"><a href=\"shopcart.html\">购物车</a><span>2</span></div>\n" +
    "            <div style='padding-left: 20px' class=\"logout\" v-show=\"true\" v-if='userobj' ><a href='javascript:void(0)'  @click='logout'>退出登录</a></div>\n             " +
    "        </div>\n" +
    "    </div>\n" +
    "</div>";


