import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type userDocument = HydratedDocument<User>;


@Schema()
export class User {


    @Prop()
    firstName: string;
  
    @Prop()
    lastName: string;
  
    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
