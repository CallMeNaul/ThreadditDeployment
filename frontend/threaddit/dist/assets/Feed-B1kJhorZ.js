import{A as a,u as o,a as r,r as i,j as n}from"./index-BYUIMpDd.js";import{I as u}from"./InfinitePosts-7GOSrJQu.js";import"./Post-dMvrYO60.js";function p(){const{isAuthenticated:e}=a(),s=o(),{feedName:t}=r();return t=="home"&&!e?s("/login"):(i.useEffect(()=>{document.title=`Threaddit | ${t}`},[t]),n.jsx(u,{linkUrl:`posts/${t||"all"}`,apiQueryKey:t}))}export{p as Feed,p as default};
