if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const l=e=>d(e,a),b={module:{uri:a},exports:n,require:l};i[a]=Promise.all(r.map((e=>b[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2019/JAVA可视化闹钟源码/index.html",revision:"00bf4dd76366d0e4dc38646e3205e122"},{url:"2019/Java环境变量配置超详细教程/index.html",revision:"21a3d674cf8fe70b93251b7899936f2e"},{url:"2019/MySQL安装及配置最详细教程/index.html",revision:"f0bf9807c8d9c8cc984e2958fb983b67"},{url:"2019/OPERATING-SYSTEMS-THREE-EASY-PIECES/index.html",revision:"85f4d8875af2e8c493d89562e27b29c9"},{url:"2019/OPPO-R11刷机初体验/index.html",revision:"73d2e8dd44a71a7f7c181665edc6fc58"},{url:"2019/verilog设计乘法器/index.html",revision:"d6fd4ee2f7dc9ffbd3796bc2d44b85df"},{url:"2019/verilog设设计加法器/index.html",revision:"e264f776c66168322a620743d674ac22"},{url:"2019/vivado三人表决仿真/index.html",revision:"6336b7c138dd62b288c05ce262c10506"},{url:"2019/计算机二级Python/index.html",revision:"b2f8cc231e43500836a9740a0aa32cb9"},{url:"2019/超前进位加法器/index.html",revision:"656bb81aa1362fc560fd33b69bf98e17"},{url:"2020/BIOS、UEFI、Boot-Loader都是些什么/index.html",revision:"0a8e8bd1b941bd5eb13b7e41754ddc9f"},{url:"2020/Verilog入门/index.html",revision:"b244e694cb28686159163b59a53ba572"},{url:"2020/web结课论文/index.html",revision:"836c97a93a263e567014f6f6a4307def"},{url:"2020/二进制/index.html",revision:"758ed46311c0097c0bdd00daedd8f9b2"},{url:"2020/使用树莓派搭建wordpress博客网站/index.html",revision:"2c26e51bb7f61a266d2fbddc6157c43f"},{url:"2020/八位右移位乘法器（无符号）/index.html",revision:"a82db20053c686c56cd2605fe6ba0e52"},{url:"2020/八位超前进位加法器/index.html",revision:"6b0a00e9dd02613f969e403ad8e40de6"},{url:"2020/操作系统开发/index.html",revision:"7f7d04f5216d1e6c4f49545164390530"},{url:"2020/硬件入门的一点点心得/index.html",revision:"a2d46364aecd83a574b1d794dc616a99"},{url:"2021/aboutme/index.html",revision:"fc5539dcb530075e8c5f9878c652f0b6"},{url:"2021/github-speedup/index.html",revision:"69b422f4df4abb1d6d4d6976cc47e308"},{url:"2021/Ubuntu19.10使用Qemu安装树莓派/index.html",revision:"878c6a9afe1ebc5368044f5c03a0c3a0"},{url:"2021/内网穿透工具大全/index.html",revision:"770a172a1d945020277979707a2f8ffd"},{url:"2021/内网穿透软件推荐/index.html",revision:"4a25217a01064eb6d37ba6a314762244"},{url:"2021/最后，点个关注不迷路/index.html",revision:"6d1405b6f7f70e663d78d81cdc141b25"},{url:"2021/手机备份到底备份什么/index.html",revision:"676faaf6244fc83b3d96c8c94d258bc7"},{url:"2021/摊牌了，我抄袭的/index.html",revision:"03042259878c7d0ce2c5681f6eb553b7"},{url:"2021/无开发板如何开发linux系统内核/index.html",revision:"47d9c143542617a009f23a6069dd703b"},{url:"2021/树莓派-01/index.html",revision:"124a4f3a47e7c5748a2cf3a9bfe20bd6"},{url:"2021/树莓派-02内网穿透服务器/index.html",revision:"9ebcc0aef9d906a3fc63d9ee1169b066"},{url:"2021/炫猿导航——所谓精致，就是如此/index.html",revision:"9fdcbda21637c9c6b18a377e9001473f"},{url:"2021/自动获取参考链接的标题/index.html",revision:"6cad1acb243a032460f48473af5ed248"},{url:"2021/自己动手写操作系统一/index.html",revision:"99bdb8ac8e8332d98a02214052ca8835"},{url:"2021/自己动手写操作系统二/index.html",revision:"e6825ca692c0b1b3817c1e07e394a80c"},{url:"2021/自己封装一个专属的Windows10系统/index.html",revision:"22ebe0e0db80898a53041b99a07e0426"},{url:"2021/远程控制/index.html",revision:"8a1f7c51da7a62bd02a39d1eaef441aa"},{url:"about/index.html",revision:"8d615e136402805bb056aa0bab0981ac"},{url:"archives/2019/01/index.html",revision:"33eaf4b781becf4f4adc45a67a859514"},{url:"archives/2019/07/index.html",revision:"6bd13210bc57accc14811c3b125e0029"},{url:"archives/2019/08/index.html",revision:"80b2d6d4ada24aa236ec809d1c502e1c"},{url:"archives/2019/10/index.html",revision:"b25196fd3c983017018fbdc85f7c9963"},{url:"archives/2019/index.html",revision:"469c1459f9a984b56376aee051f9d4b5"},{url:"archives/2020/09/index.html",revision:"d38cfb2ebfce7e55704c4e5c7888cdeb"},{url:"archives/2020/10/index.html",revision:"28b1154b3bdffc929c87f8dab4af4bbb"},{url:"archives/2020/11/index.html",revision:"2808b550dd4e9f5d02e8d60545219218"},{url:"archives/2020/12/index.html",revision:"4482d3e737d6472e6b04643e427cf778"},{url:"archives/2020/index.html",revision:"842299161e9f1940c29d79aad5b3ec98"},{url:"archives/2021/12/index.html",revision:"83380a2fdec644c28aaec95b3124cfe6"},{url:"archives/2021/12/page/2/index.html",revision:"6e57f8e867ff73b75a1aa5cd94be6a69"},{url:"archives/2021/index.html",revision:"492c857069f3bfe1989a911005de60a2"},{url:"archives/2021/page/2/index.html",revision:"2f1f61765f51834568372f23784725f9"},{url:"archives/index.html",revision:"6d53cb7fe1e2853f0cf3e24f49936367"},{url:"archives/page/2/index.html",revision:"c353a7febd16eea944d70614c7fd4093"},{url:"archives/page/3/index.html",revision:"0d76071e8ed7d6713fe1503df58b4241"},{url:"archives/page/4/index.html",revision:"6257411d438f881450616b5450e8f20d"},{url:"categories/index.html",revision:"9846319fae87110bfc26bada84850b80"},{url:"categories/硬件/index.html",revision:"d63076672257c60258f45ec236981999"},{url:"css/index.css",revision:"2e23e054e7f96965f0705b1cbd21f139"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"d864ce75029cdc492986705d7f917c7d"},{url:"img/background.jpg",revision:"59fcda4277480620534446406793c441"},{url:"img/background1.jpg",revision:"486d78e205f38d3957085b3e8e49021d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/mxdon.png",revision:"07088d988cd29828f465680c47832b6c"},{url:"img/wechatpay.jpg",revision:"6c2307e058385f9f2c1dbd33e89db038"},{url:"index.html",revision:"6109067768b73276ef3c88c01c201b84"},{url:"js/fish.js",revision:"526a92b6a5ada3f3024cf2f169fee09b"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"page/2/index.html",revision:"dc60f9f2a8b84a75d5ff23664e461ce8"},{url:"page/3/index.html",revision:"8739171cb5a1faef745358e474d4ab67"},{url:"page/4/index.html",revision:"f5d59f994fee51f50bdb73191b9bd1a2"},{url:"tags/about/index.html",revision:"1f3745b3fc34b59c8de7ca1d5b8acfd4"},{url:"tags/index.html",revision:"6d7b199016e89fde397ab0f33670f035"},{url:"tags/Java/index.html",revision:"d0f94ebd66631fabe884bda2d2becc84"},{url:"tags/Operating-Systems/index.html",revision:"4a80627ef8de4b8b4861938104fe9d80"},{url:"tags/Python/index.html",revision:"2695c5ababae691c896df1ec5b6d35f7"},{url:"tags/verilog/index.html",revision:"beb700a5e1552f22935113b4eaebb8ea"},{url:"tags/vivado/index.html",revision:"cb3fd1547b30c4c5405750d83ba102b6"},{url:"tags/刷机/index.html",revision:"8a4f1519d67443b4572c7f92d5ecf689"},{url:"tags/学习笔记/index.html",revision:"1ce4705bd808ec6a02228ad102d06aeb"},{url:"tags/尾巴/index.html",revision:"c187c553ffa3b1f639576c94c0f5f774"},{url:"tags/应用/index.html",revision:"e08e2bb3a16b669eff4e4042ba0f798a"},{url:"tags/应用软件/index.html",revision:"9f89a472b9bd9d0b31d47e4cdb74c26c"},{url:"tags/心得/index.html",revision:"1e41d1ab3676a59234a736b42add6628"},{url:"tags/技巧/index.html",revision:"ad05f128b99346dd39362b4b8e44cfdc"},{url:"tags/折腾/index.html",revision:"b639f619c3e5d2bcfecb6c7720b7feb9"},{url:"tags/推荐/index.html",revision:"84bdca043d30041424395366df93be4c"},{url:"tags/搞机/index.html",revision:"75437c7f1f8264cec8fd88985e49e1d4"},{url:"tags/操作系统/index.html",revision:"2480510c6ba5d75332697266790dd403"},{url:"tags/教程/index.html",revision:"73c2f224a6eb0131992cb296628c079f"},{url:"tags/爬虫/index.html",revision:"dbab59055be7ba23435528c01125a8c2"},{url:"tags/电脑/index.html",revision:"6e5ad6f6dc7c41b6e120f399cd7328b0"},{url:"tags/硬件/index.html",revision:"30f967360478e9365e6df3a10643232b"},{url:"tags/经验/index.html",revision:"c872686362f8e3c6b1c001a3511a190e"},{url:"tags/脚本/index.html",revision:"262cb424f1c0741b3f43676629fccef2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
