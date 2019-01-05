import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req,res)=>{
    res.send("GraphQL is Amazing");
});

class Friend {
    constructor(id,{firstName,lastName,age,gender,language,email}){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
        this.language=language;
        this.email=email;
    }
}

const friendDatabase={};


const root = {
    friend:()=>{
        return{
            "id":123456,
            "firstName":"Anil",
            "lastName":"Gurindapalli",
            "age":26,
            "gender":"Male",
            "language":"English",
            "emails":"anil.xampr@gmail.com"
        }
    },
    createFriend:({input})=>{
        let id= require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id]=input;
        return new Friend(id,input);
    }
};

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(8081,()=>console.log('Running Server on port localhost:8081/graphql'));