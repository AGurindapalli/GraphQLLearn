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
    contacts:[Contact]
    }
    
    enum Gender{
        MALE
        FEMALE
        OTHER
    }
    
    type Contact {
        name:String
        gender:Gender
    }
    
    type Query{
        getFriend(id:ID):Friend
    }
    
    input ContactInput{
        name:String
        gender:Gender
    }
    
    input FriendInput{
    id:ID
    firstName:String!
    lastName:String
    age:Int
    gender:Gender
    language:String
    email:String
    contacts:[ContactInput]
    }
    
    type Mutation {
        createFriend(input:FriendInput):Friend
    }
`);

export default schema;