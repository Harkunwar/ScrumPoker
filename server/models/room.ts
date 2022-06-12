import { ObjectId } from "mongodb";

export default class Room {
  constructor(
    public name: string,
    public users: string[],
    public id?: ObjectId,
  ) {}
}
