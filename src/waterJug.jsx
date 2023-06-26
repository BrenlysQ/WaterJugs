
export const mcd = (a, b) => {
   let aux; 

   while (b !== 0) {
        aux = b;
        b = a % b;
        a = aux;
    }
    return a;
};

export const evaluateValues = (a, b, z)=>{ 
   
     let valueToSelect1=0
        let valueToSelect2=0      
        let flag
        let obj
       
    if(a===b){
         flag='sum'
         return obj={a,flag}
    }
    if(a===z){
        flag='sum'
        return obj={a,flag}
    }
    if(b===z){
        flag='sum'
        return obj={b,flag}
    }
     
    if(mcd(a,b)%z===0 || (z%mcd(a,b)===0 && mcd(a,b)!=1) || ((a == 1 || b==1)) ||(a <= z || b <= z )){
       
        if(a>z && b>z){
            alert('No solution for this value')
            return false
        }

        else{
            valueToSelect1= a-z
            valueToSelect2= b-z
            let valueToSelect1Abs=  Math.abs(valueToSelect1)
            let valueToSelect2Abs= Math.abs(valueToSelect2)
           
            if(valueToSelect1Abs>valueToSelect2Abs){
              
               if(valueToSelect1<0 ){
                flag='sub'
                return obj={b,flag}}
               
                else{
                flag='sum'
                return obj={b,flag}}  
           }
           else{
            if(valueToSelect2<0){
                flag='sub'
                return obj={a,flag}
            }
            else{
                flag='sum'
                return obj={a,flag}}
                
             }           
        }  
    } else{
         alert('No solution for this value')
        return false
    } 
}

export const fillProcess=(a,b,z)=> {
    let beginJug= evaluateValues(a,b,z)
 
      let aux=1
        let dataShowA=[]
        let dataShowB=[]
        let dataShow={}
        let iterator=0
    if(a <= z || b <= z ){
        if(a===z){
            dataShowA.push(Number(a))
            dataShowB.push(Number(0))
            dataShow.dataA= dataShowA
            dataShow.dataB= dataShowB
            return dataShow
        }
        if(b===z){
            dataShowA.push(Number(0))
            dataShowB.push(Number(b))
            dataShow.dataA= dataShowA
            dataShow.dataB= dataShowB
            return dataShow
        }
        
        if(beginJug.a===a){
            if(beginJug.flag==='sum'){
                while(dataShowB[iterator-1]!==Number(z)){
                    if(iterator===0){
                    
                        dataShowA.push(Number(a))
                        dataShowB.push(0)
                    }
                    else if(iterator%2!==0){
                        dataShowA.push(0)
                        dataShowB.push(aux*Number(a))
                    }
                    else {
                        dataShowA.push(Number(a))
                        dataShowB.push(aux * Number(a))
                        aux+=1
                    
                    }
                    if(dataShowB[iterator]> Number(z)){
                         alert('No solution for this value')
                        return false
                    }
                    iterator+=1
                
                }
                dataShow.dataA= dataShowA
                dataShow.dataB= dataShowB
                return dataShow
            }
            else{
                
                 while(dataShowA[iterator-1]!==Number(z)){
                if(iterator===0){
                
                    dataShowA.push(Number(b))
                    dataShowB.push(0)
                }
                else if(iterator%2!==0){
                    dataShowA.push(Number(a)-aux*Number(b))
                    dataShowB.push(Number(b))
                }
                else {
                    dataShowA.push(Number(b)-aux*Number(a))
                    dataShowB.push(0)
                    aux+=1
                }
                   if(dataShowA[iterator]<0){
                         alert('No solution for this value')
                        return false
                    }
                iterator+=1
               
            }
            dataShow.dataA= dataShowA
            dataShow.dataB= dataShowB
            return dataShow
            }
        }
        if(beginJug.b===b){
          
            if(beginJug.flag==='sum')
            {
                while(dataShowA[iterator-1]!==Number(z)){
                    if(iterator===0){
                        dataShowA.push(Number(0))
                        dataShowB.push(Number(b))
                    }
                    else if(iterator%2!==0){
                        dataShowA.push(aux*Number(b))
                        dataShowB.push(0)
                    }
                    else {
                        dataShowA.push(aux * Number(b))
                        dataShowB.push( Number(b))
                        aux+=1
                    
                    }
                     if(dataShowA[iterator]> Number(z)){
                         alert('No solution for this value')
                        return false
                    }
                    iterator+=1
                    
                }
                dataShow.dataA= dataShowA
                dataShow.dataB= dataShowB
                return dataShow
            }
            else{
               
                 while(dataShowB[iterator-1]!==Number(z)){
                if(iterator===0){
                
                    dataShowA.push(0)
                    dataShowB.push(Number(b))
                }
                else if(iterator%2!==0){
                    dataShowA.push(Number(a))
                    dataShowB.push(Number(b)-aux*Number(a))
                }
                else {
                    dataShowA.push(0)
                    dataShowB.push(Number(b)-aux*Number(a))
                    aux+=1
                
                }   
                if(dataShowB[iterator]<0){
                     alert('No solution for this value')
                    return false
                }
                iterator+=1
                 
            }
            dataShow.dataA= dataShowA
            dataShow.dataB= dataShowB
            return dataShow
            }
        }
    }
    else{
         alert('No solution for this value')
         return false 
    }
}



