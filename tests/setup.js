import mongoose from "mongoose";
import User from "../src/models/User.js";
import Task from "../src/models/Task.js";

beforeAll(async () => {
	if (mongoose.connection.readyState === 0) {
		await mongoose.connect(process.env.MONGO_URI);
	}

	if (mongoose.connection.readyState === 2) {
		await mongoose.connection.asPromise();
	}

	await Promise.all([User.deleteMany({}), Task.deleteMany({})]);
});

afterAll(async () => {
	if (mongoose.connection.readyState !== 0) {
		await mongoose.connection.close();
	}
});