import type { ChatMessage } from '@/interfaces/chatmessages.interfaces';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
  };

  return { messages, onMessage };
};
