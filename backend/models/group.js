import mongoose from "mongoose";
import User from "./user";
import Expense from "./expense";

const groupSchema = mongoose.Schema({
  name: { type: String, required: true },
  members: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  expenses: { type: mongoose.Schema.Types.ObjectId, ref: "Expense" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Group = mongoose.model('Group',groupSchema);

export default Group;