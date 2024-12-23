import React,{useState,useEffect} from "react"

const useScrollprogress=()=>{
const [completion,setCopmpletion]=useState(0);
useEffect(()=>{
const updateScrollCompletion=()=>{
 const currentProgress=window.scrollY;

 const scrollHeight=document.body.scrollHeight-
 window.innerHeight; 
 console.log("currentProgress");
 console.log(currentProgress);
 console.log(document.body.scrollHeight);
 console.log( window.innerHeight);
 console.log(scrollHeight);
 if(scrollHeight){
 setCopmpletion(Number(currentProgress/scrollHeight).toFixed(2)*100);
 }  
};
window.addEventListener('scroll',updateScrollCompletion);
return ()=>window.removeEventListener('scroll',updateScrollCompletion);
},[])
return completion;
}
export default useScrollprogress;
/*

echo "# MahmoudHagag" >> README.md
git init
git add .
git commit -m "first 17"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/MahmoudHagag.git
git push -u origin main
*/