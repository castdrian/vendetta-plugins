(function(o,s,a,n,g,m,p){"use strict";function v(e,t){const i=Math.max(...Object.values(e).map(function(r){return r.order}));return{format:t.format,src:t.url,width:t.width,height:t.height,order:i+1}}function w(e){for(let t of e.embeds){if(t.type==="gifv")return{url:t.url,width:t.thumbnail.width,height:t.thumbnail.height,format:2};if(t.type==="image"&&t.url.endsWith(".gif"))return{url:t.url,width:t.image.width,height:t.image.height,format:1}}for(let t of e.attachments)if(t.url.endsWith(".gif"))return{url:t.url,width:t.width,height:t.height,format:1};return null}const{FormRow:y,FormIcon:F}=g.Forms,c=a.findByProps("openLazy","hideActionSheet"),f=a.findByStoreName("UserSettingsProtoStore").frecencyWithoutFetchingLatest,b=s.before("openLazy",c,function(e){const[t,i,r]=e;i==="MessageLongPressActionSheet"&&t.then(function(G){const S=s.after("default",G,function(P,L){n.React.useEffect(function(){return function(){S()}},[]);let[B,u]=L.props?.children?.props?.children?.props?.children;const h=B?.props?.message??r?.message;if(!u||!h)return;const d=w(h);d&&u.unshift(n.React.createElement(y,{label:"Add GIF to Favorites",leading:n.React.createElement(F,{style:{opacity:1},source:m.getAssetIDByName("ic_star_filled")}),onPress:function(){c.hideActionSheet();const l=v(f.favoriteGifs.gifs,d);f.updateAsync("favoriteGifs",function(I){I.gifs[l.src]={...l}},0),p.showToast("Added GIF to Favorites")}}))})})}),A=function(){return b()};return o.onUnload=A,o})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.ui.toasts);
