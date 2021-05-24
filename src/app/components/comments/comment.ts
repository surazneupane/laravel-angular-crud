export class Comment{
id:number;
text:string;
author:string;
constructor(text:string,author:string)
{
    this.text=text;
    this.author=author;
    this.id=0;
}
}