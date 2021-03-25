export class Profile{
    public _id:string;
    public image:string
    public username:string;
    public email:string;
    public gender:string;

    constructor(_id,image,username,email,gender){
        this._id=_id;
        this.image=image;
        this.username=username;
        this.email=email;
        this.gender=gender;
    }
}

