import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './schema';

const app = express();

app.get('/',(req,res)=>{
    res.send("GraphQL is Amazing");
});

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(8081,()=>console.log('Running Server on port localhost:8081/graphql'));