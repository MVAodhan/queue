"use server";
import { PrismaClient } from "@prisma/client";

export async function sendDataToApi(name: string) {
	const prisma = new PrismaClient();
	await prisma.user.create({
		data: {
			name: name,
			isInQueue: true,
		},
	});

	console.log("added");
}
