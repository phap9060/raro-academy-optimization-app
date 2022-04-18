import { ParticipanteChat } from "./Participantes";

export type Mensagem = {
  id: string;
  keyId:string;
  texto: string;
  autor: ParticipanteChat;
  data: Date;
  lida: boolean;
}