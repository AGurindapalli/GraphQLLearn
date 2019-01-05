import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req,res)=>{
    res.send("GraphQL is Amazing");
});

const root = {friend:()=>{
    return{
        "id":123456,
        "firstName":"Anil",
        "lastName":"Gurindapalli",
        "age":26,
        "gender":"Male",
        "language":"English",
        "email":"anil.xampr@gmail.com"
    }
    }};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(8081,()=>console.log('Running Server on port localhost:8081/graphql'));