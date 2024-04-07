const rw=require('fs');
function handler(req, res){

    if (req.url === '/') {
        let data; 
        rw.readFile('Output.txt', 'utf-8',(err,result)=>{
            if(!err){
                data=result;
            }
            res.write("<html>")
            res.write("<body>")
            res.write(`<p>${data}</p>`)
            res.write("<form action='/msg' method='POST'>");
            res.write("<input type='text' name='message'></input>");
            res.write("<button type='submit'>Submit</button>");
            res.write("</form>");
            res.write("</body>");
            res.write("</html>")
            return res.end();
            
        });
        
    
       

    }



    if (req.url === '/msg' && req.method === 'POST') {
        const inputData = [];
        req.on('data', (chunks) => {
            inputData.push(chunks);
           
        })

        req.on('end',()=>{
            const parsed=Buffer.concat(inputData).toString();
            const msg= parsed.split('=')[1].replace('+'," ");
            rw.writeFileSync('Output.txt',msg);
           
        })
       
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }

}


module.exports=handler;

// exports.handler=handler;

// module.exports={
//     handler
// }
