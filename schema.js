import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Friend{
    id:ID
    firstName:String
    lastName:String
    age:Int
    gender:Gender
    language:String
    email:String
    }
    
    enum Gender{
        MALE
        FEMALE
        OTHER
    }
    
    type Query{
        getFriend(id:ID):Friend
    }
    
    input FriendInput{
    id:ID
    firstName:String!
    lastName:String
    age:Int
    gender:Gender
    language:String
    email:String
    }
    
    type Mutation {
        createFriend(input:FriendInput):Friend
    }
`);

export default schema;