import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
    email: string;
    message: string
}

class CreateMessageService {
    async execute({email, message}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!email){
            throw new Error("Informe seu email, por gentileza!")
        }

        if(!message){
            throw new Error("Escreva sua opinião, crítca cou sugestão")
        }

        const newMessage = messageRepository.create({ email, message })

        await messageRepository.save(newMessage);

        return newMessage;
    }
}

export  { CreateMessageService }