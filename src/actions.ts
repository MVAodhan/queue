"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function sendDataToApi(name: string) {
	const prisma = new PrismaClient();
	await prisma.user.create({
		data: {
			name: name,
			isInQueue: true,
		},
	});

	prisma.$disconnect();
	revalidatePath("/");
}
