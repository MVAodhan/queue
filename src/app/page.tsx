import ClientQueue from "./components/ClientQueue";
import { PrismaClient } from "@prisma/client";

async function getUsers() {
	const prisma = new PrismaClient();

	const users = await prisma.user.findMany();
	return users;
}

const Queue = async () => {
	const users = await getUsers();
	return (
		<>
			<ClientQueue users={users} />
		</>
	);
};

export default Queue;
