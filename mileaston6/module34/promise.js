const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json() )
    .then(data => console.log(data))
    .catch(Error => console.log(Error))
    
}
loadData()

const forPromise=()=>{
    return new Promise( (reslove, reject)=>{
        const status = true;
        if(status == true){
            reslove({name:'foyej khan'})
        }
        else{
            reject('server error')
        }
    })
}
forPromise()
.then(res => console.log(res))
.catch(err => console.log(err))

const secondPromise =()=>{
    return new Promise((reslove,reject)=>{
        const secondStatus = true;
        if(!!secondStatus){
            reslove(
                {name:'salman khan'},
            )
        }
        else{
            reject('server is not found')
        }
    })
}
secondPromise()
.then(res =>console.log(res))
.catch(err => console.log(err))