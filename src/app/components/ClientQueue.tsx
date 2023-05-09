"use client";

import { useRef } from "react";
import QueueItem from "./QueueItem";
import { sendDataToApi } from "@/actions";

const ClientQueue = ({ users }: { users: any }) => {
	const nameRef = useRef<HTMLInputElement | null>(null);
	return (
		<div className="w-full h-screen flex flex-col items-center">
			<form
				className="flex h-[100px] justify-center w-6/12 bg-slate-100 mt-20"
				onSubmit={(e) => {
					e.preventDefault();
					if (nameRef.current) {
						sendDataToApi(nameRef.current.value);
					}
				}}
			>
				<div>
					<label htmlFor="usernameInput" className="flex justify-center">
						Username
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input w-full max-w-xs"
						ref={nameRef}
					/>
				</div>
			</form>
			<div>
				{users &&
					users.map((user: any) => (
						<QueueItem key={user.id} name={user.name} />
					))}
			</div>
		</div>
	);
};

export default ClientQueue;
