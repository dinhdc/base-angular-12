export enum Regex {
  Email = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'  ,
  Number = "/^\\d+$/"
}
export enum RegexError{
  Email = "Email is not valid",
  Number = "Digit only"
}
